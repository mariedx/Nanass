import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import styles from './layout.module.scss';

const Layout = ({
  children, home, title, subtitle,
}) => (
  <div className={styles.Layout}>
    <main>
      {home && <Navbar />}
      {!home && (
        <div className={styles.Header}>
          <Navbar />
          <h1 className={styles.Header__title}>{title}</h1>
          <h2 className={styles.Header__subtitle}>{subtitle}</h2>
        </div>
      )}
      {children}
      {!home && (
        <Footer />
      )}
    </main>
  </div>
);

export default Layout;
