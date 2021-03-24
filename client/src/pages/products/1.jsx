import Button from 'components/Button';
import Layout from 'components/Layout';
import Link from 'next/link';
import styles from './product_page.module.scss';

const product = () => (

  <Layout title="trouvez votre macbook" subtitle="Tous nos produits sont garantis 12 mois !">
    <div className={styles.Product}>
      <img className={styles.Product__image} src="https://i.pinimg.com/originals/20/12/b4/2012b42a4ea9a504786efaff5dab7f15.jpg" alt="MacBook" />
      <div className={styles.Product__lists}>
        <ul className={styles.Product__lists__criteria}>
          <li>
            Modèle
          </li>
          <li>
            Taille de l&apos;écran
          </li>
          <li>
            Année de sortie
          </li>
          <li>
            Processor
          </li>
          <li>
            RAM
          </li>
          <li>
            État
          </li>
          <li>
            Prix
          </li>
        </ul>
        <ul className={styles.Product__lists__data}>
          <li>
            Modèle
          </li>
          <li>
            Taille de l&apos;écran
          </li>
          <li>
            Année de sortie
          </li>
          <li>
            Processor
          </li>
          <li>
            RAM
          </li>
          <li>
            État
          </li>
          <li>
            Prix
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.Product__button}>
      <Link href="/purchase" passHref>
        <Button
          href="/purchase"
          title="Ajouter au panier"
          type="primary"
        />
      </Link>
    </div>
  </Layout>

);

export default product;
