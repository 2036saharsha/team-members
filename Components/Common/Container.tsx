import style from '@/styles/common_components.module.css';

type ContainerTypes = {
  children: JSX.Element[] | JSX.Element;
};
const Container = ({ children }) => (
  <div className={style.container}>{children}</div>
);

export default Container;
