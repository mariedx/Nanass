import styles from './cardmacbook.module.scss';

const CardMacBook = ({
  model, size, year, processor, ram, price,
}) => (
  <div className={styles.CardMacBook}>
    <div className={styles.CardMacBook__picture}>
      <img src="https://i.pinimg.com/originals/20/12/b4/2012b42a4ea9a504786efaff5dab7f15.jpg" alt="MacBook" />
    </div>
    <p className={styles.CardMacBook__title}>
      {model}
      {' '}
      {size}
    </p>
    <p className={styles.CardMacBook__body}>
      {year}
      {' '}
      -
      {' '}
      {processor}
      {' '}
      -
      {' '}
      {ram}
    </p>
    <p className={styles.CardMacBook__price}>
      {price}
      {' '}
      $
    </p>
  </div>
);

export default CardMacBook;
