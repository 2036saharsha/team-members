import Card from '@/Components/Common/Card';
import style from '@/styles/profile_body.module.css';

const Languages = () => (
  <Card className={`${style.sidebar_languages} ${style.profile_body_cards}`}>
    <h1 className={style.section_title}>Languages</h1>
  </Card>
);

export default Languages;
