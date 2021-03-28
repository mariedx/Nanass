import { useState } from 'react';
import Button from 'components/Button';
// import Link from 'next/link';
import cart from 'utils/cart';
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

  const handleButtonValue = () => {
    if (buttonValue === 'add') { setButtonValue('retrieve'); } else {
      setButtonValue('add');
    }
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

        <button type="button" onClick={handleButtonValue}>
          {buttonValue === 'add' && (
          <button type="button" onClick={() => cart.addItem(macbook)}> Ajoute moi au panier pliiiiiiz</button>
          )}
          {buttonValue === 'retrieve' && (
          <button type="button" onClick={() => cart.removeItem(id)}> Retire moi du panier pliiiiiiz</button>
          )}
        </button>
        <Button
          href="/purchase"
          title="Retour"
          type="primary"
        />
      </div>
    </>
  );
};

export default MacBookShow;
