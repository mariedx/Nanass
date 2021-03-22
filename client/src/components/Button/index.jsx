import React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

const Button = React.forwardRef(({ title, type, href }) => (
  <a href={href}>
    <button
      type="button"
      className={cn({
        [styles.light]: type === 'light',
        [styles.primary]: type === 'primary',
      })}
    >
      {title}
    </button>
  </a>
));

export default Button;
