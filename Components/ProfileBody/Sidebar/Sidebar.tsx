import Card from '@/Components/Common/Card';
import Framework from './Framework';
import Languages from './Languages';
import Projects from './Projects';
import style from '@/styles/profile_body.module.css';

const Sidebar = () => (
  <Card border="none" className={style.sidebar}>
    <Framework />
    <Languages />
    <Projects />
  </Card>
);

export default Sidebar;
