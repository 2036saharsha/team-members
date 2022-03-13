import { NextApiResponse, NextApiRequest } from "next";
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from "../constants";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
): Promise<void> {
	if (req.session.login === undefined) {
		req.session.login = {
			loggedIn: false,
			email: '',
			username: '',
		};
		req.session.save();
	}

	res.json(req.session.login);
	res.end();
}

export default withIronSessionApiRoute(handler, sessionOptions)
