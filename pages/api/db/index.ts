import { PrismaClient } from '@prisma/client';
import type { Social, Tag, TeamMember } from '@prisma/client';

type QueryCb = (client: PrismaClient) => Promise<void>;

const MAX_TAGS = 15,
  MAX_SOCIALS = 10;

export interface FullTeamMember extends TeamMember {
  socials: Social[];
  tags: Tag[];
}

async function query(cb: QueryCb): Promise<void> {
  const client = new PrismaClient();
  await client.$connect();
  try {
    await cb(client);
  } finally {
    await client.$disconnect();
  }
}

export async function getFullMember(username: string): Promise<FullTeamMember> {
  const member = await getMember(username);
  const socials = await getSocials(member);
  const tags = await getTags(member);

  return {
    ...member,
    socials,
    tags,
  };
}

export async function getFullMembers(): Promise<FullTeamMember[]> {
  const members = await getMembers();
  const tagsPromises = [];
  const socsPromises = [];

  members.forEach((member) => {
    const tagTask = getTags(member);
    const socTask = getSocials(member);
    tagsPromises.push(tagTask);
    socsPromises.push(socTask);
  });

  const allTags = await Promise.all(tagsPromises);
  const allSocials = await Promise.all(socsPromises);

  return members.map((member) => {
    const socials = allSocials.filter(
      (social) => social.username === member.username,
    );
    const tags = allTags.filter((tag) => tag.username === member.username);

    return {
      ...member,
      tags,
      socials,
    };
  });
}

export function getMember(username: string): Promise<TeamMember> {
  return new Promise((res, rej) => {
    if (process.env.DEPLOY === 'develop') {
      res({
        bio: 'A programmer',
        first: 'Dylan',
        last: 'Hackworth',
        title: 'Junior Instructor',
        type: 'programmer',
        username: 'dylhack',
      });
      return;
    }

    query(async (client: PrismaClient) => {
      try {
        const member = await client.teamMember.findFirst({
          where: {
            username,
          },
        });
        res(member);
      } catch (err) {
        rej(err);
      }
    });
  });
}

export function getMembers(): Promise<TeamMember[]> {
  return new Promise((res, rej) => {
    if (process.env.DEPLOY === 'develop') {
      res([
        {
          bio: 'A programmer',
          first: 'Dylan',
          last: 'Hackworth',
          title: 'Junior Instructor',
          type: 'programmer',
          username: 'dylhack',
        },
        {
          bio: 'A programmer',
          first: 'Lok',
          last: 'Shankar',
          title: 'Really Good Programmer',
          type: 'programmer',
          username: 'lok',
        },
        {
          bio: 'A programmer',
          first: 'Carlo',
          last: 'Santos',
          title: 'Instructor',
          type: 'programmer',
          username: 'carlo',
        },
        {
          bio: 'A programmer',
          first: 'Saharsha',
          last: 'Tiwari',
          title: 'Epic Web Dev',
          type: 'programmer',
          username: '2036saharsha',
        },
      ]);
      return;
    }

    query(async (client: PrismaClient) => {
      try {
        const members = await client.teamMember.findMany();
        res(members);
      } catch (err) {
        rej(err);
      }
    });
  });
}

export function getSocials(member: TeamMember): Promise<Social[]> {
  return new Promise((res, rej) => {
    if (process.env.DEPLOY === 'develop') {
      res([
        {
          id: 1,
          name: 'dylhack',
          service: 'GitHub',
          url: 'https://github.com/dylhack',
          username: 'dylhack',
        },
        {
          id: 2,
          name: 'dylhack',
          service: 'Twitter',
          url: 'https://twitter.com/dylhack',
          username: 'dylhack',
        },
      ]);
      return;
    }

    query(async (client: PrismaClient) => {
      try {
        const socials = await client.social.findMany({
          where: {
            member,
          },
        });
        res(socials);
      } catch (err) {
        rej(err);
      }
    });
  });
}

export function getTags(member: TeamMember): Promise<Tag[]> {
  return new Promise((res, rej) => {
    if (process.env.DEPLOY === 'develop') {
      res([
        {
          id: 1,
          tag: 'web dev',
          username: 'dylhack',
        },
        {
          id: 2,
          tag: 'dog lover',
          username: 'dylhack',
        },
        {
          id: 3,
          tag: 'biker',
          username: 'dylhack',
        },
      ]);
      return;
    }

    query(async (client: PrismaClient) => {
      try {
        const tags = await client.tag.findMany({
          where: {
            member,
          },
        });
        res(tags);
      } catch (err) {
        rej(err);
      }
    });
  });
}

export function addSocial(
  member: TeamMember,
  url: string,
  name: string,
  service: string,
): Promise<void> {
  return new Promise((res, rej) => {
    query(async (client: PrismaClient) => {
      try {
        const socials = await getSocials(member);
        const includes = socials.some((x: Social) => {
          return x.name === name && x.url === url && x.service === service;
        });
        if (includes) {
          const err = new Error(
            `This social is already added to ${member.username}`,
          );
          rej(err);
          return;
        } else if (socials.length === MAX_TAGS) {
          const err = new Error(
            `${member.username} has met the max socials of ${MAX_SOCIALS}`,
          );
          rej(err);
          return;
        }

        await client.social.create({
          data: {
            name,
            service,
            url,
            username: member.username,
          },
        });
        res();
      } catch (err) {
        rej(err);
      }
    });
  });
}

export function remSocial(socialId: number): Promise<void> {
  return new Promise((res, rej) => {
    query(async (client: PrismaClient) => {
      try {
        await client.social.delete({
          where: {
            id: socialId,
          },
        });
        res();
      } catch (err) {
        rej(err);
      }
    });
  });
}

export function addTag(member: TeamMember, tag: string): Promise<void> {
  return new Promise((res, rej) => {
    query(async (client: PrismaClient) => {
      try {
        const tags = await getTags(member);
        const includes = tags.some((x: Tag) => x.tag === tag);
        if (includes) {
          const err = new Error(
            `The tag "${tag}" already exists for "${member.username}"`,
          );
          rej(err);
          return;
        } else if (tags.length === MAX_TAGS) {
          const err = new Error(
            `${member.username} has met the max tags of ${MAX_TAGS}`,
          );
          rej(err);
          return;
        }

        await client.tag.create({
          data: {
            tag,
            username: member.username,
          },
        });
        res();
      } catch (err) {
        rej(err);
      }
    });
  });
}

export function remTag(tagId: number): Promise<void> {
  return new Promise((res, rej) => {
    query(async (client: PrismaClient) => {
      try {
        await client.tag.delete({
          where: {
            id: tagId,
          },
        });
        res();
      } catch (err) {
        rej(err);
      }
    });
  });
}
