import Card from '@/Components/Common/Card';
import style from '@/styles/profile_body.module.css';

const Projects = () => (
  <Card className={`${style.sidebar_projects} ${style.profile_body_cards}`}>
    <h1 className={style.section_title}>Projects</h1>
  </Card>
);

export default Projects;
