import React from 'react';
import Layout from 'components/Layout';
import SideBar from 'components/SideBar';
import styles from '../../styles/application.module.scss'
import ProgressBar from 'components/ProgressBar';


const Application = () => {
  return (
    <Layout title="Mon espaces" >
        <div className={styles.Application}>
          <div className={styles.Application__sidebar}>
            <SideBar/>
          </div>
          <div className={styles.Application__body}>
            <div className={styles.Application__title}>
              <h3>Où en sont mes candidatures?</h3>
            </div>
            <div className={styles.Application__image}>
              <img src="https://cdn.pixabay.com/photo/2015/05/15/02/07/computer-767781_1280.jpg" alt="macbook" height={300} width={300}/>
            </div>
            <div className={styles.Application__description}>
                <h5>Macbook pro 15'</h5>
                <p>Mid 2015 - 8Go - 256Go</p>
            </div>
            
            <div className={styles.Application__progressbar}>
              <p>Demande</p>
              <ProgressBar />
              <p>Confirmation</p>
            </div> 
          </div>
        </div>
    </Layout>
  );
};

export default Application;
