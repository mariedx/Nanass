import Navbar from 'components/Navbar';
import styles from './layout.module.scss';

const Layout = ({ children, home }) => (
  <div className={styles.Layout}>
    <Navbar />
    <main>
      {home && (
        <h1 className="Layout__yesHome">ON EST À LA MAISON !!</h1>
      )}
      {!home && (
        <h1 className="Layout__notHome">ON N&apos;EST PAS À LA MAISON !!</h1>
      )}
      {children}
    </main>
  </div>
);

export default Layout;
