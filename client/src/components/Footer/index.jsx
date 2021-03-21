import SocialNetworks from 'components/SocialNetworks';
import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.Footer}>
    <SocialNetworks />
    <div className={styles.FooterLinks}>
      <ul>
        <li>
          <Link href="/">
            Conditions générales de vente
          </Link>
        </li>
        <li>
          <Link href="/">
            Mentions légales
          </Link>
        </li>
        <li>
          <Link href="/">
            Vos avis
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/">
            Politique de confidentialité
          </Link>
        </li>
        <li>
          <Link href="/">
            CGV
          </Link>
        </li>
        <li>
          <Link href="/">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </footer>

);

export default Footer;
