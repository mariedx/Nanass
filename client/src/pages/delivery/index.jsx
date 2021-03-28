import FormAdress from 'components/FormAdress';
import Layout from 'components/Layout';
import cookie from 'cookie';
import config from 'config';
import isJwtExpired from 'utils/jwt';
import styles from './delivery.module.scss';

const getServerSideProps = ({ req }) => {
  const cookieData = cookie.parse(req.headers.cookie || 'null');
  const tokenKey = config.COOKIE_STORAGE_KEY_USER_TOKEN;
  const token = cookieData[tokenKey];

  if (!token || isJwtExpired(token)) {
    return {
      redirect: {
        destination: '/registrations/signin',
        permanent: false,
      },
    };
  }

  const userDataKey = config.COOKIE_STORAGE_KEY_USER_DATA;
  const userData = JSON.parse(cookieData[userDataKey]);

  if (!userData.customerId) {
    return {
      redirect: {
        destination: '/registrations/signin',
        permanent: false,
      },
    };
  }

  return { props: {} };
};

const Delivery = () => (
  <Layout title="Livraison" subtitle="Livrés où vous voulez">
    <div className={styles.Delivery}>
      <FormAdress />
    </div>
  </Layout>
);

export default Delivery;
export { getServerSideProps };
