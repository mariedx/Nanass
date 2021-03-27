import Layout from 'components/Layout';
import styles from './legal_notice.module.scss';

const LegalNotice = () => (
  <Layout title="Mentions Légales">
    <div className={styles.LegalNotice}>
      <h2>Mentions Légales</h2>
    </div>
  </Layout>
);

export default LegalNotice;
