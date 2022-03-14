import SocialLinks from './SocialLinks';
import style from '@/styles/introduction.module.css';

type PropsType = {
  first: string;
  last: string;
  title: string;
};

const Description = (props: PropsType) => (
  <div className={style.description}>
    <h1 className={style.name}>{`${props.first} ${props.last}`}</h1>
    <h2 className={style.title}>{props.title}</h2>
    <p className={style.bio}>
      Most of my practices have been in backend web-development, but my studies
      lie with cybersecurity and currently developing an operating system in
      Rust!
    </p>
    <SocialLinks />
  </div>
);

export default Description;
