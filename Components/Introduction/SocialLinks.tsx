import GithubIcon from '@/icons/github.svg';
import LinkedinIcon from '@/icons/linkedin.svg';
import style from '@/styles/introduction.module.css';

const SocialLinks = () => (
  <div className={style.social_links_group}>
    <GithubIcon className={style.social_links} />
    <LinkedinIcon className={style.social_links} />
    <button className={`${style.download_resume}`}>DOWNLOAD RESUME</button>
  </div>
);

export default SocialLinks;
