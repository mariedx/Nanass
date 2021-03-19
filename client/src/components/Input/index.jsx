import classnames from 'classnames';
import styles from './input.module.scss';

const Input = (props) => {
  const {
    type,
    title,
    handleChange,
    placeholder,
    value,
  } = props;

  return (
    <div className="Input">
      <p className="Input__title">{title} :</p>
      <input
        className={classnames({
          [styles.search]: type === 'search',
          [styles.registration]: type === 'registration',
        })}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
