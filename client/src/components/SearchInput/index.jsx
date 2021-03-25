import classnames from 'classnames';
import styles from './searchinput.module.scss';

const SearchInput = (props) => {
  const {
    handleChange,
    placeholder,
    value,
  } = props;

  return (
    <div className={styles.SearchInput}>
      <input
        className={classnames({
          [styles.search]: type === 'search'
        })}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
