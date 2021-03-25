import React from 'react';
import styles from '../../styles/order.module.scss';
import Layout from 'components/Layout';
import SideBar from 'components/SideBar';
import Image from 'next/image';

const Order = () => {
  return (
    <Layout title="Mon espace" >
        <div className={styles.Order} >
          <div className={styles.Order__sidebar}>
            <SideBar/>
          </div>
          <div className={styles.Order__body}>
            <h3>Mes commandes</h3>
            <div className={styles.Order__categories}>
              <img src="https://cdn.pixabay.com/photo/2015/05/15/02/07/computer-767781_1280.jpg" alt="macbook" height={300} width={300}/>
              <div className={styles.Order__description}>
                <p><span className={styles.Order__span}>Produit : </span>macbookpro 15'</p>
                <p><span className={styles.Order__span}>Date : </span>15-05-2021</p>
                <p><span className={styles.Order__span}>Prix :</span> 470€</p>
                <p><span className={styles.Order__span}>Quantité :</span> 1</p>
                <p><span className={styles.Order__span}>Prix total :</span> 470€</p>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default Order;
