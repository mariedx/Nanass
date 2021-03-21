import React from 'react';
import Button from 'components/Button';
import SocialNetworks from 'components/SocialNetworks';
import styles from './jumbotron.module.scss';

const Jumbotron = () => (
  <div className={styles.Jumbotron}>
    <h1>Régénérer des Macbooks à l&apos;infini</h1>
    <p>Vendez et achetez votre ordinateur sur Nanass</p>
    <div className={styles.Buttons}>
      <Button
        title="Acheter un Macbook"
        type="primary"
      />
      {' '}
      <Button
        title="Vendre un Macbook"
        type="light"
      />
    </div>
    <footer className={styles.Footer}>
      <SocialNetworks />
    </footer>
  </div>
);

export default Jumbotron;
