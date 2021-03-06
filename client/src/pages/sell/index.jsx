/* eslint-disable max-len */
import CardMacBookSell from 'components/CardMacBookSell';
import Layout from 'components/Layout';
import React from 'react';
import styles from './sell.module.scss';

const macbook = {
  model: 'Macbook Air',
  size: 13,
  year: 'Mid 2020',
  processor: 'i3',
  ram: '16',
};

const Sell = () => (
  <Layout title="Vendre un MacBook" subtitle="Donnez une seconde vie à votre ordinateur">
    <div className={styles.Sell}>
      <CardMacBookSell macbook={macbook} />
      <p>
        Vous souhaitez vendre un MacBook qui n&apos;apparaît pas dans la liste?
        <a href="/contact" className={styles.Sell__contact}> Contactez-nous !</a>
      </p>
    </div>
  </Layout>
);

export default Sell;
