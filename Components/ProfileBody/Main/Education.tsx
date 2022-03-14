import Card from '@/Components/Common/Card';
import style from '@/styles/profile_body.module.css';

const Education = () => (
  <Card
    className={`${style.education} ${style.profile_body_main_cards} ${style.profile_body_cards}`}
  >
    <h1 className={style.section_title}>Education</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae in,
      impedit earum asperiores natus, facere dignissimos pariatur eos ut, cum
      quae commodi! Eligendi facilis esse amet sapiente molestias, fugiat
      debitis?
    </p>
  </Card>
);

export default Education;
