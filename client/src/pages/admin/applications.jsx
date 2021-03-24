import Layout from 'components/Layout';
import styles from './applications.module.scss';

const Applications = () => (

  <Layout title="Gérer les candidatures" subtitle="">
    <div className={styles.Applications}>
      <h2 className={styles.Applications__title}>Liste des candidatures</h2>
    </div>
  </Layout>

);

export default Applications;
