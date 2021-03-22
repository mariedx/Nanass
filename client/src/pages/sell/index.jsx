/* eslint-disable max-len */
import CardMacBookSell from 'components/CardMacBookSell';
import Layout from 'components/Layout';
import React from 'react';
import styles from './sell.module.scss';

const Sell = () => (
  <Layout title="VENDRE UN MACBOOK" subtitle="Donnez une seconde vie à votre ordinateur">
    <div className={styles.sell}>
      <CardMacBookSell />
      <p>Vous souhaitez vendre un MacBook qui n&apos;apparaît pas dans la liste? Contactez-nous !</p>
    </div>
  </Layout>
);

export default Sell;
