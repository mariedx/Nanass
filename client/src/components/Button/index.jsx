/* eslint-disable jsx-a11y/anchor-is-valid */
import cn from 'classnames';
import Link from 'next/link';
import styles from './button.module.scss';

const Button = ({
  title, type, href,
}) => (
  <Link href={href}>
    <a
      className={cn({
        [styles.light]: type === 'light',
        [styles.primary]: type === 'primary',
      })}
    >
      {title}
    </a>
  </Link>
);

export default Button;
