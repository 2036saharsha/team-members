import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../config";
import { getRoutes, sessionOptions } from "../constants";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.session.login === undefined) {
    req.session.login = {
      email: '',
      loggedIn: false,
      username: '',
    };
    req.session.save();
  }
  const routes = getRoutes();

  if (req.session.login.loggedIn) {
    res.redirect(routes.member.replace('%id', req.session.login.username));
  } else {
    res.redirect(routes.members);
  }
}

export default withIronSessionApiRoute(handler, sessionOptions);
