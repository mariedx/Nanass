import Layout from 'components/Layout';
import SideBar from 'components/SideBar';
import Link from 'next/link';
import { useState } from 'react';
import Button from 'components/Button';
import RegisInput from 'components/RegisInput';
import cookie from 'cookie';
import config from 'config';
import isJwtExpired from 'utils/jwt';
import styles from './addproduct.module.scss';

const getServerSideProps = ({ req }) => {
  const cookieData = cookie.parse(req.headers.cookie || 'null');
  const tokenKey = config.COOKIE_STORAGE_KEY_USER_TOKEN;
  const token = cookieData[tokenKey];

  if (!token || isJwtExpired(token)) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    };
  }

  const userDataKey = config.COOKIE_STORAGE_KEY_USER_DATA;
  const userData = JSON.parse(cookieData[userDataKey]);

  if (!userData.adminId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return { props: {} };
};

const AddProduct = () => {
  const [modelValue, setModelValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [sizeValue, setSizeValue] = useState('');
  const [processorValue, setProcessorValue] = useState('');
  const [ramValue, setRamValue] = useState('');
  const [priceValue, setPriceValue] = useState('');

  const handleModel = (e) => {
    setModelValue(e.target.value);
  };

  const handleDate = (e) => {
    setDateValue(e.target.value);
  };

  const handleSize = (e) => {
    setSizeValue(e.target.value);
  };

  const handleProcessor = (e) => {
    setProcessorValue(e.target.value);
  };

  const handleRam = (e) => {
    setRamValue(e.target.value);
  };

  const handlePrice = (e) => {
    setPriceValue(e.target.value);
  };

  return (
    <Layout title="Gérer les candidatures" subtitle="">
      <div className={styles.AddProduct}>
        <div className={styles.AddProduct__sidebar}>
          <SideBar href="./products" title="Gérer annonces ventes" />
          <SideBar href="./searches" title="Gérer recherches" />
          <SideBar href="./applications" title="Gérer candidatures" />
          <SideBar href="./add-product" title="Ajouter un produit a la vente" />
        </div>
        <div className={styles.AddProduct__body}>
          <h2 className={styles.AddProduct__title}>Ajouter un nouveau produit</h2>
          <RegisInput
            title="Modèle"
            className={styles.RegisInput}
            placeholder="Modèle"
            handleChange={handleModel}
            value={modelValue}
            type="text"
          />
          <RegisInput
            title="Date"
            className={styles.RegisInput}
            placeholder="Date"
            handleChange={handleDate}
            value={dateValue}
            type="text"
          />
          <RegisInput
            title="Taille de l'écran"
            className={styles.RegisInput}
            placeholder="Taille de l'ecran"
            handleChange={handleSize}
            value={sizeValue}
            type="text"
          />
          <RegisInput
            title="Processeur"
            className={styles.RegisInput}
            placeholder="Processeur"
            handleChange={handleProcessor}
            value={processorValue}
            type="text"
          />
          <RegisInput
            title="RAM"
            className={styles.RegisInput}
            placeholder="RAM"
            handleChange={handleRam}
            value={ramValue}
            type="text"
          />
          <RegisInput
            title="Prix"
            className={styles.RegisInput}
            placeholder="Prix"
            handleChange={handlePrice}
            value={priceValue}
            type="text"
          />
          <div className={styles.AddProduct__button}>
            <Link href="/">
              <Button
                href="#"
                title="Ajouter un produit"
                type="primary"
              />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;
export { getServerSideProps };
