import Layout from 'components/Layout';
import styles from '../../styles/avis.module.scss';


const Avis = () => {
  return (
    <Layout title="Vos avis">
      <div className={styles.Avis}>
        <h2>Ce que vous pensez de nous !</h2>
      </div>
    </Layout>
  );
};

export default Avis;