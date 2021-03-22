import Link from 'next/link';
import Image from 'next/image';
import styles from './socialnetworks.module.scss';

const SocialNetworks = () => (
  <div className={styles.Socials}>
    <ul>
      <li className={styles.Socials__iconelist}>
        <Link href="https://www.facebook.com/">
          <a target="_blank">
            <Image
              priority
              src="/images/facebook.svg"
              alt="Nanass Facebook"
              height={30}
              width={30}
              className={styles.Socials__icone}
            />
          </a>
        </Link>
      </li>
      <li className={styles.Socials__iconelist}>
        <Link href="https://www.instagram.com/">
          <a target="_blank">
            <Image
              priority
              src="/images/instagram.svg"
              alt="Nanass Instagram"
              height={30}
              width={30}
              className={styles.Socials__icone}
            />
          </a>
        </Link>
      </li>
      <li className={styles.Socials__iconelist}>
        <Link href="https://www.linkedin.com/">
          <a target="_blank">
            <Image
              priority
              src="/images/linkedin.svg"
              alt="Nanass LinkdIn"
              height={30}
              width={30}
              className={styles.Socials__icone}
            />
          </a>
        </Link>
      </li>
    </ul>
  </div>
);

export default SocialNetworks;
