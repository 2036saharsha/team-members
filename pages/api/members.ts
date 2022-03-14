import { TeamMember } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getMembers } from './db';

type Data = TeamMember[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  const members = await getMembers();
  res.status(200);
  res.send(members);
  res.end();
}
