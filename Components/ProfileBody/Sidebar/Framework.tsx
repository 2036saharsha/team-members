import Card from '@/Components/Common/Card';
import style from '@/styles/profile_body.module.css';

const Framework = () => (
  <Card className={`${style.sidebar_framwork} ${style.profile_body_cards}`}>
    <h1 className={style.section_title}>Framework</h1>
  </Card>
);

export default Framework;
