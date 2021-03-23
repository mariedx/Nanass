import CardMacBook from 'components/CardMacBook';
import Layout from 'components/Layout';
import SearchBar from 'components/SearchBar';
import styles from './purchaseMacBook.module.scss';

const purchase = () => (
  <Layout title="ACHETER UN MACBOOK" subtitle="Tous nos produits sont garantis 12 mois !">
    <div className={styles.Purchase}>
      <div className={styles.Purchase__searchbar}>
        <SearchBar />
      </div>
      <div className={styles.Purchase__content}>
        <CardMacBook />
      </div>
    </div>
  </Layout>
);

export default purchase;
