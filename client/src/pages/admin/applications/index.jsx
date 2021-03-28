import Layout from 'components/Layout';
import SideBar from 'components/SideBar';
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

const Applications = () => (

  <Layout title="Gérer les candidatures" subtitle="">
    <div className={styles.Applications}>
      <div className={styles.Applications__sidebar}>
        <SideBar href="./products" title="Gérer annonces ventes" />
        <SideBar href="./searches" title="Gérer recherches" />
        <SideBar href="./applications" title="Gérer candidatures" />
        <SideBar href="./add-product" title="Ajouter un produit a la vente" />
      </div>
      <div className={styles.Applications__body}>
        <h2 className={styles.Applications__title}>Liste des candidatures</h2>
      </div>
    </div>
  </Layout>

);

export default Applications;
export { getServerSideProps };
