import Layout from 'components/Layout';
import styles from './feedbacks.module.scss';

const Feedbacks = () => (
  <Layout title="Vos avis">
    <div className={styles.Feedbacks}>
      <h2>Ce que vous pensez de nous !</h2>
    </div>
  </Layout>
);

export default Feedbacks;
