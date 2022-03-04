import { GetServerSideProps } from "next"
import { FullTeamMember, getFullMember } from "../api/db/index";
import '../../styles/Member.module.css';

export const getServerSideProps: GetServerSideProps<FullTeamMember> = async (
  { params },
) => {
  const id = typeof params.id === 'string'
    ? params.id
    : params.id[0] || '';
  const member = await getFullMember(id);

  return {
    props: member,
  }
}

const Member = (props: FullTeamMember) => {
  let i = 0;
  return <div className="member">
    <h1>{props.first} {props.last}</h1>
    {props.tags.map((tag) => {
      i += 1;
      return <p key={i}>{tag.tag}</p>
    })}
  </div>
}

export default Member;
