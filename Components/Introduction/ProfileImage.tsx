import Image from 'next/image';
import style from '@/styles/introduction.module.css';

const ProfileImage = ({ profilePic }) => (
  <div className={style.profile_container}>
    <div className={style.profile_image_container}>
      <Image
        src={profilePic}
        alt="profile image"
        className={style.profile_image}
      />
    </div>
    <div className={style.profile_image_shadow}></div>
  </div>
);

export default ProfileImage;
