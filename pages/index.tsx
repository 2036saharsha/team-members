import { GetServerSideProps } from 'next';
import { getFullMembers } from './api/db/index';
import type { FullTeamMember } from './api/db/index';

type MemberProps = {
  members: FullTeamMember[];
};

export const getServerSideProps: GetServerSideProps<MemberProps> = async () => {
  const members = await getFullMembers();

  return {
    props: { members },
  };
};

const TeamPage = ({ members }: MemberProps) => {
  let i = 0;
  return (
    <div>
      {members.map((member) => {
        i += 1;
        return (
          <div key={i}>
            <h1>
              {member.first} {member.last}
            </h1>
            <p>{member.title}</p>
            <p>Email: {member.username}@snapit.solutions</p>
          </div>
        );
      })}
    </div>
  );
};

export default TeamPage;
