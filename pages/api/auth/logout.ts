import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../constants";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  req.session.login = {
    email: '',
    loggedIn: false,
    username: '',
  };
  req.session.save();
  res.status(200);
  res.end();
}

export default withIronSessionApiRoute(handler, sessionOptions);
