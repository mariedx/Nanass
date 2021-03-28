import Layout from 'components/Layout';
import Link from 'next/link';
import styles from './index.module.scss';

const Error404 = () => (
  <Layout home>
    <div className={styles.Error404}>
      <div className={styles.Error404__messageBloc}>
        <h1 className={styles.Error404__messageBloc__title}>Erreur 404 : page introuvable</h1>
        <p className={styles.Error404__messageBloc__description}>
          {'Nous sommes désolé, la page que vous avez demandée n\'existe pas ou plus.'}
        </p>
        <p className={styles.Error404__messageBloc__description}>
          {' Veuillez vérifier l\'adresse que vous avez saisie, et si le problème persiste, contactez l\'administration du site depuis la rubrique contact, dont le lien se trouve ci-dessous.'}
        </p>
        <Link href="/contact">
          <a className={styles.Error404__messageBloc__link}>Contactez-nous</a>
        </Link>
      </div>
    </div>
  </Layout>
);

export default Error404;
