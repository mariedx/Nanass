import Button from 'components/Button';
import CardMacBook from 'components/CardMacBook';
import Layout from 'components/Layout';
import SideBar from 'components/SideBar';
import Link from 'next/link';
import styles from './products.module.scss';

const Products = () => (

  <Layout title="Gérer les annonces de produits en vente" subtitle="">
    <div className={styles.Products}>
      <div className={styles.Products__sidebar}>
        <SideBar href="./products" title="Gérer annonces ventes" />
        <SideBar href="./searches" title="Gérer recherches" />
        <SideBar href="./applications" title="Gérer candidatures" />
        <SideBar href="./addproduct" title="Ajouter un produit a la vente" />
      </div>
      <div className={styles.Products__body}>
        <Link href="/purchase">
          <Button
            href="#"
            title="Créer une annonce"
            type="primary"
          />
        </Link>

        <h2 className={styles.Products__title}>Annonces en ligne</h2>

        <div className={styles.Products__card}>
          <CardMacBook
            image="https://images.pexels.com/photos/5588490/pexels-photo-5588490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
    </div>
  </Layout>

);

export default Products;
