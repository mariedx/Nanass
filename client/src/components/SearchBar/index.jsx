import Image from 'next/image';
import styles from './searchbar.module.scss';

const SearchBar = ({ handleChange, keyword }) => (
  <div className={styles.SearchBar}>
    <Image
      priority
      src="/images/search.svg"
      alt="Nanass search icon"
      height={30}
      width={30}
      className={styles.SearchBar__icon}
    />
    <input
      className={styles.SearchBar__input}
      key="random1"
      value={keyword}
      placeholder="Recherchez l'ordinateur de vos rêves"
      onChange={(e) => handleChange(e.target.value)}
    />
  </div>
);

export default SearchBar;
