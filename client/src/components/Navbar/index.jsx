/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'store/users/userActions';
import styles from './navbar.module.scss';

const Navbar = () => {
  const currentUser = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

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
        {!currentUser.id && (
          <ul>
            <li>
              <Link href="/registrations/signin">
                <a className={styles.Navbar__link}>Connexion</a>
              </Link>
            </li>
            <li>
              <Link href="/registrations/signup">
                <a className={styles.Navbar__link}>Inscription</a>
              </Link>
            </li>
          </ul>
        )}
        {currentUser.id && (
          <ul>
            <li>
              <Link href="/concept">
                <a className={styles.Navbar__link}> Notre concept</a>
              </Link>
            </li>
            <li>
              <Link href="/profil">
                <a className={styles.Navbar__link}>Mon espace</a>
              </Link>
            </li>
            <li>
              <a
                href="/"
                className={styles.Navbar__link}
                onClick={handleLogout}
              >
                Déconnexion
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
