import React from 'react';
import Link from 'next/link';
import styles from './sidebar.module.scss';


const SideBar = () => {
  return (
    <div className={styles.SideBar}>
          <div className={styles.SideBar__orders}>
            <Link href="./order">
              <a>Mes commandes</a>
            </Link>
          </div>
          <div className={styles.SideBar__candidate}>
            <Link href="./application">
              <a>Mes candidatures</a>
            </Link>
          </div>
          <div className={styles.SideBar__profil}>
            <Link href="./profile">
              <a>Mon Profil</a>
            </Link>
          </div>
    </div>
  );
};

export default SideBar;
