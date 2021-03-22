import SocialNetworks from 'components/SocialNetworks';
import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.Footer}>
    <SocialNetworks />
    <div className={styles.FooterLinks}>
      <ul>
        <li>
          <Link href="/ressources/cgv">
            Conditions générales de vente
          </Link>
        </li>
        <li>
          <Link href="/ressources/legalemention">
            Mentions légales
          </Link>
        </li>
        <li>
          <Link href="/ressources/avis">
            Vos avis
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/ressources/confidentialpolitique">
            Politique de confidentialité
          </Link>
        </li>
        <li>
          <Link href="/ressources/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </footer>

);

export default Footer;
