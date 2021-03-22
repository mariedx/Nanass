import React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

const Button = React.forwardRef((props) => {
  const {
    title,
    type,
    href,
    handleClick,
  } = props;

  return (
    <a href={href}>
      <button
        type="button"
        className={cn({
          [styles.light]: type === 'light',
          [styles.primary]: type === 'primary',
        })}
        onClick={handleClick}
      >
        {title}
      </button>
    </a>
  );
});

export default Button;
