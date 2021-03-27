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
  <Layout title="VENDRE UN MACBOOK" subtitle="Donnez une seconde vie à votre ordinateur">
    <div className={styles.sell}>
      <CardMacBookSell macbook={macbook} />
      <p>Vous souhaitez vendre un MacBook qui n&apos;apparaît pas dans la liste? Contactez-nous !</p>
    </div>
  </Layout>
);

export default Sell;
