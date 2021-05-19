import React from 'react';
import cn from 'classnames';

import style from './Button.module.scss';

interface buttonProps {
  size?: 'small' | 'normal';
  color?: 'yellow' | 'green';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<buttonProps> = ({ children, onClick, size = 'normal', color = 'green' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(style.button, color === 'yellow' ? style.yellow : null, size === 'small' ? style.small : null)}>
      {children}
    </button>
  );
};

export default Button;
