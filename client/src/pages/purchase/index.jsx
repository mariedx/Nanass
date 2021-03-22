import CardMacBook from 'components/CardMacBook';
import Layout from 'components/Layout';
import styles from './purchaseMacBook.module.scss';

const purchase = () => (
  <Layout title="ACHETER UN MACBOOK" subtitle="Tous nos produits sont garantis 12 mois !">
    <div className={styles.purchase}>
      <div className={styles.purchase__sidebar}>
        <p>Année de sortie</p>
        <p>Aspect</p>
        <p>Mémoire</p>
        <p>Taille écran</p>
      </div>
      <div className={styles.purchase__content}>
        <CardMacBook />
      </div>
    </div>
  </Layout>
);

export default purchase;
