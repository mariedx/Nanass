import cn from 'classnames';
import styles from './input.module.scss';

const Input = ({children, type}) => {
  return (
    <div>
      <input className={cn({
      [styles.search]: type === 'search',
      [styles.registration]: type === 'registration'
    })}
     />
      {children}
    </div>
  );
};

export default Input;
