import Layout from 'components/Layout';
import SideBar from 'components/SideBar';
import styles from './applications.module.scss';

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
