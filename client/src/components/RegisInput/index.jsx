import styles from './regisinput.module.scss';

const RegisInput = (props) => {
  const {
    type,
    handleChange,
    title,
    placeholder,
    value,
  } = props;

  return (
    <div>
      <div className={styles.RegisInput__title}>
        {title}
      </div>
      <input
        className={styles.RegisInput}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        type={type}
      />
    </div>
  );
};

export default RegisInput;
