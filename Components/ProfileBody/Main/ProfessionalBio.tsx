import Card from '@/Components/Common/Card';
import style from '@/styles/profile_body.module.css';

type PropsType = {};

const ProfessionalBio = () => (
  <Card
    className={`${style.profile_bio} ${style.profile_body_main_cards} ${style.profile_body_cards}`}
  >
    <h1 className={style.section_title}>Container Professional Bio</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, facilis
      delectus voluptas officia dolorum quisquam minima vero cupiditate
      laboriosam iusto eaque amet sapiente architecto? Quidem fugit pariatur
      beatae ipsam qui.
    </p>
  </Card>
);

export default ProfessionalBio;
