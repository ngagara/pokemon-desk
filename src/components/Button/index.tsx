import React from 'react';
import cn from 'classnames';

import style from './Button.module.scss';

interface buttonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  yellow?: boolean;
  small?: boolean;
  wide?: boolean;
}

const Button: React.FC<buttonProps> = ({ children, onClick, yellow, small, wide }) => {
  return (
    <button type="button" className={cn(style.button, { [style.small]: small, [style.wide]: wide })} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
