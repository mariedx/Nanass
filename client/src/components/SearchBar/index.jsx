import styles from './searchbar.module.scss';

const SearchBar = ({ handleChange, keyword }) => (
  <div className={styles.SearchBar}>
    <form>
      <label htmlFor="text" className={styles.SearchBar__text}>
        <input
          className={styles.SearchBar__input}
          key="random1"
          value={keyword}
          placeholder="Recherchez l'ordinateur de vos rêves"
          onChange={(e) => handleChange(e.target.value)}
        />
      </label>
      <input type="submit" value="Rechercher" className={styles.SearchBar__button} />
    </form>
  </div>
);

export default SearchBar;
