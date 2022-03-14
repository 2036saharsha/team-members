import Description from './Description';
import ProfileImage from './ProfileImage';
import style from '@/styles/introduction.module.css';

type PropsType = {
  first: string;
  last: string;
  title: string;
  profilePic: StaticImageData;
};

const Introduction = (props: PropsType) => (
  <div className={style.introduction}>
    <Description first={props.first} last={props.last} title={props.title} />
    <ProfileImage profilePic={props.profilePic} />
  </div>
);
export default Introduction;
