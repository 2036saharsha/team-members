import styleSheet from '@/styles/common_components.module.css';
import type { CSSProperties } from 'react';
import type {} from 'csstype';

type CardProps = {
  children: JSX.Element[] | JSX.Element;
  // typeScript kept compaining without specific values as type
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';

  className?: string;
  display?: string;
  border?: string;
};

const Card = (props: CardProps) => {
  const {
    children,
    className,
    display = 'flex',
    flexDirection = 'column',
    border = '1px black solid',
  } = props;

  const style: CSSProperties = {
    display: display,
    flexDirection: flexDirection,
    border: border,
  };

  return (
    <div
      style={style}
      className={`${styleSheet.card} ${className ? className : ''}`}
    >
      {children}
    </div>
  );
};

export default Card;
