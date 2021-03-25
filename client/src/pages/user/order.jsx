import React from 'react';
import Layout from 'components/Layout';
import SideBar from 'components/SideBar';
import CardMacBook from 'components/CardMacBook';
import styles from './order.module.scss';

const Order = () => (
  <Layout title="Mon espace">
    <div className={styles.Order}>
      <div className={styles.Order__sidebar}>
        <SideBar href="./order" title="Mes commandes" />
        <SideBar href="./application" title="Mes candidatures" />
        <SideBar href="./profile" title="Mon profil" />
      </div>

      <div className={styles.Order__body}>
        <h3 className={styles.Order__title}>Mes commandes</h3>

        <div className={styles.Order__card}>
          <CardMacBook
            model="Macbook Air"
            size="15"
            year="mid-2015"
            processor="1.7"
            ram="256"
            price="490"
            image="https://images.pexels.com/photos/5588490/pexels-photo-5588490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default Order;
