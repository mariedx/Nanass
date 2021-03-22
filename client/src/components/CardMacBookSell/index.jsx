/* eslint-disable max-len */
import Button from 'components/Button';
import styles from './cardmacbooksell.module.scss';

const CardMacBookSell = ({
  model, size, year, processor, ram,
}) => (
  <div className={styles.CardMacBookSell}>
    <div className={styles.CardMacBookSell__picture}>
      <img src="https://i.pinimg.com/originals/20/12/b4/2012b42a4ea9a504786efaff5dab7f15.jpg" alt="MacBook" />
    </div>
    <p className={styles.CardMacBookSell_title}>
      {model}
      {' '}
      {size}
    </p>
    <p className={styles.CardMacBookSell_body}>
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
    <Button
      href="#"
      title="Postuler"
      type="primary"
    />
  </div>
);

export default CardMacBookSell;
