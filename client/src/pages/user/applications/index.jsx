import React from 'react';
import Layout from 'components/Layout';
import SideBar from 'components/SideBar';
import ProgressBar from 'components/ProgressBar';
import CardMacBook from 'components/CardMacBook';
import cookie from 'cookie';
import config from 'config';
import isJwtExpired from 'utils/jwt';
import styles from './applications.module.scss';

const getServerSideProps = ({ req }) => {
  const cookieData = cookie.parse(req.headers.cookie || 'null');
  const tokenKey = config.COOKIE_STORAGE_KEY_USER_TOKEN;
  const token = cookieData[tokenKey];

  if (!token || isJwtExpired(token)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return { props: {} };
};

const exampleMacbook = {
  model: 'Macbook Air',
  size: '15',
  year: 'mid-2015',
  processor: '1.7',
  ram: '256',
  price: '490',
  image_url: 'https://images.pexels.com/photos/5588490/pexels-photo-5588490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
};

const Applications = () => (
  <Layout title="Mon espace">
    <div className={styles.Applications}>
      <div className={styles.Applications__sidebar}>
        <SideBar href="./orders" title="Mes commandes" />
        <SideBar href="./applications" title="Mes candidatures" />
        <SideBar href="./profile" title="Mon profil" />
      </div>

      <div className={styles.Applications__body}>
        <h3 className={styles.Applications__title}>Où en sont mes candidatures?</h3>
        <div className={styles.Applications__card}>
          <CardMacBook
            macbook={exampleMacbook}
          />
          <div className={styles.Applications__card__progressbar}>
            <p>Envoyée</p>
            <ProgressBar />
            <p>Traitée</p>
          </div>
        </div>
      </div>

    </div>
  </Layout>
);

export default Applications;
export { getServerSideProps };
