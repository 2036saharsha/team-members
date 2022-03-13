import type { IronSessionOptions } from 'iron-session'
import { getConfig } from './config';

type Routes = {
  members: string,
  member: string,
  login: string,
  logout: string,
  whoAmI: string,
  me: string,
}

export const sessionOptions: IronSessionOptions = {
  password: process.env.SVR_SECRET as string,
  cookieName: 'snapit-team-members',
  cookieOptions: {
    secure: process.env.DEPLOY === 'production',
  },
}
let routes: Routes | null = null;

export function getRoutes(): Routes {
  if (routes !== null) {
    return routes;
  }

  const { baseUrl } = getConfig();
  routes = {
    me: `${baseUrl}/api/members/me`,
    members: `${baseUrl}/`,
    member: `${baseUrl}/members/%id`,
    login: `${baseUrl}/api/auth/login`,
    logout: `${baseUrl}/api/auth/logout`,
    whoAmI: `${baseUrl}/api/auth/whoami`,
  }
  return routes;
}
