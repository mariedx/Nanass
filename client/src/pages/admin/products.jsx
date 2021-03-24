import Button from 'components/Button';
import CardMacBook from 'components/CardMacBook';
import Layout from 'components/Layout';
import Link from 'next/link';
import styles from './products.module.scss';

const Products = () => (

  <Layout title="Gérer les annonces de produits en vente" subtitle="">
    <div className={styles.Products}>
      <Link href="/purchase" passHref>
        <Button
          href="#"
          title="Créer une annonce"
          type="primary"
        />
      </Link>

      <h2 className={styles.Products__title}>Annonces en ligne</h2>

      <div className={styles.Products__card}>
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
          className={styles.Products__button}
        />
        {' '}
        <Button
          href="#"
          title="Supprimer"
          type="light"
        />
      </div>
    </div>
  </Layout>

);

export default Products;
