import styles from './cardmacbook.module.scss';

const CardMacBook = ({
  model, size, year, processor, ram, price, image,
}) => (
  <div className={styles.CardMacBook}>
    <div className={styles.CardMacBook__picture}>
      <img src={image} alt="MacBook" />
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
