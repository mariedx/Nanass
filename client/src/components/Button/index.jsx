import cn from 'classnames';
import styles from './button.module.scss';

export default function Button({ title, type }) {
  return (
    <button
      href="#"
      type="button"
      className={cn({
        [styles.light]: type === 'light',
        [styles.primary]: type === 'primary',
      })}
    >
      {title}
    </button>
  );
}
