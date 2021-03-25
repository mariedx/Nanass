import Button from 'components/Button';
import CardMacBook from 'components/CardMacBook';
import Layout from 'components/Layout';
import SideBar from 'components/SideBar';
import Link from 'next/link';
import styles from './searches.module.scss';

const Searches = () => (

  <Layout title="Gérer les annonces de recherches" subtitle="">
    <div className={styles.Searches}>
      <div className={styles.Searches__sidebar}>
        <SideBar href="./products" title="Gérer annonces ventes" />
        <SideBar href="./searches" title="Gérer recherches" />
        <SideBar href="./applications" title="Gérer candidatures" />
      </div>
      <div className={styles.Searches__body}>
        <Link href="/purchase" passHref>
          <Button
            href="#"
            title="Créer une annonce"
            type="primary"
          />
        </Link>

        <h2 className={styles.Searches__title}>Annonces en ligne</h2>

        <div className={styles.Searches__card}>
          <CardMacBook
            model="Macbook Air"
            size="15"
            year="mid-2015"
            processor="1.7"
            ram="256"
            price="490"
          />
          <Button
            href="#"
            title="Editer"
            type="light"
            className={styles.Searches__button}
          />
          {' '}
          <Button
            href="#"
            title="Supprimer"
            type="light"
          />
        </div>
      </div>
    </div>
  </Layout>

);

export default Searches;
