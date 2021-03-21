import styles from './cardmacbook.module.scss';

const CardMacBook = () => (
  <div className={styles.CardMacBook}>
    <img src="https://i.pinimg.com/originals/20/12/b4/2012b42a4ea9a504786efaff5dab7f15.jpg" alt="MacBook" className={styles.CardMacBook__picture} />
    <p className={styles.CardMacBook__title}>MacBook Pro 15&apos;</p>
    <p className={styles.CardMacBook__body}>Mid 2015 - 8Go - 256Go</p>
    <p className={styles.CardMacBook__price}>500 $</p>
  </div>
);

export default CardMacBook;
