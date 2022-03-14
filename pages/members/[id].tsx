import { GetServerSideProps } from 'next';
import { FullTeamMember, getFullMember } from '../api/db/index';
import TagsDisplay from '@/Components/Tags/TagsDisplay';
import ProfileBody from '@/Components/ProfileBody/ProfileBody';
import profilePic from '@/img/male.png';
import Introduction from '@/Components/Introduction/Introduction';

export const getServerSideProps: GetServerSideProps<FullTeamMember> = async ({
  params,
}) => {
  const id = typeof params.id === 'string' ? params.id : params.id[0] || '';
  const member = await getFullMember(id);

  return {
    props: member,
  };
};

const Member = (props: FullTeamMember) => {
  return (
    <>
      <Introduction
        first={props.first}
        last={props.last}
        title={props.title}
        profilePic={profilePic}
      />
      <TagsDisplay tags={props.tags} />
      <ProfileBody />
    </>
  );
};

export default Member;
