import Button from 'components/Button';
import CardMacBook from 'components/CardMacBook';
import Layout from 'components/Layout';
import SideBar from 'components/SideBar';
import Link from 'next/link';
import cookie from 'cookie';
import config from 'config';
import isJwtExpired from 'utils/jwt';
import styles from './products.module.scss';

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

const exampleMacbook = {
  model: 'Macbook Air',
  size: '15',
  year: 'mid-2015',
  processor: '1.7',
  ram: '256',
  price: '490',
  image_url: 'https://images.pexels.com/photos/5588490/pexels-photo-5588490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
};

const Products = () => (

  <Layout title="Gérer les produits en vente" subtitle="">
    <div className={styles.Products}>
      <div className={styles.Products__sidebar}>
        <SideBar href="./products" title="Gérer annonces ventes" />
        <SideBar href="./searches" title="Gérer recherches" />
        <SideBar href="./applications" title="Gérer candidatures" />
        <SideBar href="./add-product" title="Ajouter un produit a la vente" />
      </div>
      <div className={styles.Products__body}>
        <Link href="/purchase">
          <Button
            href="#"
            title="Créer une annonce"
            type="primary"
          />
        </Link>

        <h2 className={styles.Products__title}>Produits en vente</h2>

        <div className={styles.Products__card}>
          <CardMacBook
            macbook={exampleMacbook}
          />
          <Button
            href="#"
            title="Editer"
            type="light"
            className={styles.Products__button}
          />
          {' '}
          <Button
            href="#"
            title="Supprimer"
            type="light"
          />
        </div>
      </div>
    </div>
  </Layout>

);

export default Products;
export { getServerSideProps };
