import Navbar from 'components/Navbar';
import styles from './layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <Navbar />
    <main>
      {children}
    </main>
  </div>
);

export default Layout;
