import { NextApiRequest, NextApiResponse } from "next";
import { getRedirect } from "./index";

export default async function handler(
	_: NextApiRequest,
	res: NextApiResponse,
): Promise<void> {
	const url = getRedirect();
	const destination = url.toString();
	res.redirect(destination);
}
