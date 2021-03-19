/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.scss';

const Navbar = () => {
  const currentUser = 'hello';
  console.log(currentUser);
  return (
    <nav className={styles.Navbar}>
      <ul>
        <li>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/logo.svg"
                height={70}
                width={70}
                alt="Nanass"
                className={styles.Navbar__logo}
              />
            </a>
          </Link>
        </li>
      </ul>

      <div className={styles.Navbar__right}>
        {/* {!currentUser.id && (
        <> */}
        <ul>
          {/* <li>
            <Link href="/log-in">
              <a className={styles.Navbar__link}>Connexion</a>
            </Link>
          </li>
          <li>
            <Link href="/sign-up">
              <a className={styles.Navbar__link}>Inscription</a>
            </Link>

          </li> */}
          {/* </>
        )} */}

          {/* {currentUser.id && (
        <> */}
          <li>
            <Link href="/profile">
              <a className={styles.Navbar__link}>Profile</a>
            </Link>
          </li>

          <li>
            <a
              className={styles.Navbar__link}
              type="button"
            >
              Déconnexion
            </a>
          </li>
          {/* </>
        )} */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
