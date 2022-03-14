import Card from '@/Components/Common/Card';
import ProfessionalBio from './ProfessionalBio';
import WorkExperience from './WorkExperience';
import Education from './Education';
import style from '@/styles/profile_body.module.css';

const ProfileBodyMain = () => (
  <Card border="none" className={style.profile_body_main}>
    <ProfessionalBio />
    <WorkExperience />
    <Education />
  </Card>
);

export default ProfileBodyMain;
