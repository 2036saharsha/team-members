import { TeamMember } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getMember } from '../db';

type Data = TeamMember;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  const memberIdOpt = req.query.id;
  const memberId =
    typeof memberIdOpt === 'string' ? memberIdOpt : memberIdOpt[0] || '';
  const member = await getMember(memberId);
  res.status(200);
  res.send(member);
  res.end();
}
