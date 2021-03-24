import React from 'react';
import Button from 'components/Button';
import Link from 'next/link';
import styles from './macbookshow.module.scss';

const MacBookShow = (
  {
    model, size, year, processor, ram, aspect, price,
  },
) => (
  <>
    <div className={styles.MacBookShow}>
      <img className={styles.MacBookShow__image} src="https://i.pinimg.com/originals/20/12/b4/2012b42a4ea9a504786efaff5dab7f15.jpg" alt="MacBook" />
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
    <div className={styles.MacBookShow__button}>
      <Link href="/purchase" passHref>
        <Button
          href="/purchase"
          title="Ajouter au panier"
          type="primary"
        />
      </Link>
    </div>
  </>
);

export default MacBookShow;
