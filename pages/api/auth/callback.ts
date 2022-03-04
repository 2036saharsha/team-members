import { NextApiResponse, NextApiRequest } from "next";
import { withIronSessionApiRoute } from 'iron-session/next'
import { getUserInfo } from ".";
import { getConfig } from "../config";
import { getRoutes, sessionOptions } from "../constants";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
): Promise<void> {
	// TODO(dylhack): handle err response 
	// https://developers.google.com/identity/protocols/oauth2/web-server#handlingresponse
	const codeOpt = req.query.code;
	if (codeOpt === undefined) {
		res.status(400);
		res.end();
		return;
	}
	try {
		const code = typeof codeOpt === 'string' ? codeOpt : codeOpt[0] || '';
		const info = await getUserInfo(code);
		const username = info.email.split('@')[0];
		const routes = getRoutes();

		req.session.login = {
			email: info.email,
			username,
			loggedIn: true,
		};
		await req.session.save();

		res.redirect(routes.me);
	} catch (err) {
		res.status(500);
		console.error(err);
	}
	res.end();
}

export default withIronSessionApiRoute(handler, sessionOptions);
