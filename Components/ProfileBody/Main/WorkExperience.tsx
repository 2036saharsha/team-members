import Card from '@/Components/Common/Card';
import style from '@/styles/profile_body.module.css';
const WorkExperience = () => (
  <Card
    className={`${style.work_experience} ${style.profile_body_main_cards} ${style.profile_body_cards}`}
  >
    <h1 className={style.section_title}>Work Experience Here</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est possimus
      quod accusantium unde ducimus culpa cumque dicta, ex in quae repellendus
      maxime autem itaque. Eius non iusto ipsam vel mollitia.
    </p>
  </Card>
);

export default WorkExperience;
