import SocialNetworks from 'components/SocialNetworks';
import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.Footer}>
    <SocialNetworks />
    <div className={styles.FooterLinks}>
      <ul>
        <li>
          <Link href="/resources/terms-and-conditions">
            Conditions générales de vente
          </Link>
        </li>
        <li>
          <Link href="/resources/legal-notice">
            Mentions légales
          </Link>
        </li>
        <li>
          <Link href="/resources/feedbacks">
            Vos avis
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/resources/privacy-policy">
            Politique de confidentialité
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </footer>

);

export default Footer;
