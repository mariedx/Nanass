import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import styles from './layout.module.scss';

const Layout = ({
  children, home, title, subtitle,
}) => (
  <div className={styles.Layout}>

    {home && (
      <>
        <Navbar />
      </>
    )}
    {!home && (
      <div className={styles.Header}>
        <Navbar />
        <h1 className={styles.Header__title}>{title}</h1>
        <p className={styles.Header__subtitle}>{subtitle}</p>
      </div>
    )}
    <main>
      {children}
    </main>
    {!home && (
      <Footer />
    )}
  </div>
);

export default Layout;
