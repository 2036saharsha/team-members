import got from 'got';
import url from 'node:url';
import { getConfig } from '../config';

type TokenResponse = {
  access_token: string
  expires_in: number
  token_type: string
  scope: string
  refresh_token: string
}

type UserInfoResponse = {
  picture: string
  verified_email: boolean
  id: string
  email: string
}

const EMAIL_SCOPE = 'https://www.googleapis.com/auth/userinfo.email';
const USER_INFO = 'https://www.googleapis.com/oauth2/v2/userinfo';
const SCOPES = [EMAIL_SCOPE];
const LOGIN = 'https://accounts.google.com/o/oauth2/v2/auth';
const TOKEN = 'https://oauth2.googleapis.com/token';
let loginUrl: url.URL | null = null;

function getTokenUrl(code: string): url.URL {
	const result = new url.URL(TOKEN);
	const config = getConfig();
	const scopes = encodeURI(SCOPES.join(' '));

	result.searchParams.append('code', code);
	result.searchParams.append('client_id', config.oauth.clientId);
	result.searchParams.append('client_secret', config.oauth.clientSecret);
	result.searchParams.append('redirect_uri', config.oauth.redirectUrl);
	result.searchParams.append('grant_type', 'authorization_code');
	result.searchParams.append('scopes', scopes);

	return result;
}

async function getToken(code: string): Promise<TokenResponse> {
	const target = getTokenUrl(code);
	const resp = await got(target, {
		method: "POST",
		headers: {
			"Content-Type": 'application/x-www-form-urlencoded',
		},
	}).json<TokenResponse>();
	return resp;
}

export async function getUserInfo(code: string): Promise<UserInfoResponse> {
	const info = await getToken(code);
	const resp = await got(USER_INFO, {
		headers: {
			Authorization: `Bearer ${info.access_token}`,
		},
	}).json<UserInfoResponse>();

	return resp;
}

export function getRedirect(): url.URL {
	if (loginUrl !== null) {
		return loginUrl;
	}
	const result = new url.URL(LOGIN);
	const config = getConfig();
	const scopes = encodeURI(SCOPES.join(' '));

	result.searchParams.append('client_id', config.oauth.clientId);
	result.searchParams.append('redirect_uri', config.oauth.redirectUrl);
	result.searchParams.append('scope', scopes);
	result.searchParams.append('response_type', 'code');

	loginUrl = result;

	return loginUrl;
}
