import Layout from 'components/Layout';
import styles from './contact.module.scss';

const Contact = () => (
  <Layout title="Nous contacter" subtitle="Une question ? Un devis ? Contactez-nous !">
    <div className={styles.Contact}>
      <p>Je suis un form de contact</p>
    </div>
  </Layout>
);

export default Contact;
