import { useState, useEffect } from 'react';
import Button from 'components/Button';
// import Link from 'next/link';
import Cart from 'utils/cart';
import styles from './macbookshow.module.scss';

const MacBookShow = ({ macbook }) => {
  const {
    model,
    size,
    year,
    processor,
    ram,
    aspect,
    price,
    image_url: image,
    id,
  } = macbook;

  const [buttonValue, setButtonValue] = useState('add');

  useEffect(() => {
    if (Cart.hasProduct(macbook)) {
      setButtonValue('retrieve');
    }
  }, []);

  const handleAdd = () => {
    Cart.addItem(macbook);
    setButtonValue('retrieve');
  };

  const handleRetrieve = () => {
    Cart.removeItem(id);
    setButtonValue('add');
  };

  return (
    <>
      <div className={styles.MacBookShow}>
        <h3 className={styles.MacBookShow__title}>
          {model}
          {' '}
          {size}
          &apos;
        </h3>

        <div className={styles.MacBookShow__content}>
          <img className={styles.MacBookShow__content__image} src={image} alt="MacBook" />
          <div className={styles.MacBookShow__lists}>
            <ul className={styles.MacBookShow__lists__criteria}>
              <li>
                Modèle
              </li>
              <li>
                Taille de l&apos;écran
              </li>
              <li>
                Année de sortie
              </li>
              <li>
                Processor
              </li>
              <li>
                RAM
              </li>
              <li>
                État
              </li>
              <li>
                Prix
              </li>
            </ul>
            <ul className={styles.MacBookShow__lists__data}>
              <li>
                {model}
              </li>
              <li>
                {size}
                &apos;
              </li>
              <li>
                {year}
              </li>
              <li>
                {processor}
              </li>
              <li>
                {ram}
              </li>
              <li>
                {aspect}
              </li>
              <li>
                {price}
                {' '}
                €
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.MacBookShow__buttonSpace}>
          <Button
            href="/purchase"
            title="Retour"
            type="light"
          />
          {buttonValue === 'add' && (
            <button type="button" className={styles.MacBookShow__button} onClick={handleAdd}> Ajoutez moi au panier</button>
          )}
          {buttonValue === 'retrieve' && (
            <button type="button" className={styles.MacBookShow__button} onClick={handleRetrieve}> Retirez moi du panier</button>
          )}
        </div>
      </div>
    </>
  );
};

export default MacBookShow;
