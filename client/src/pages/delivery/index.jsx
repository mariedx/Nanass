import FormAdress from 'components/FormAdress';
import Layout from 'components/Layout';
import styles from './delivery.module.scss';

const Delivery = () => (
  <Layout title="Livraison" subtitle="Livrés où vous voulez">
    <div className={styles.Delivery}>
      <FormAdress />
    </div>
  </Layout>
);

export default Delivery;
