import CartShow from 'components/CartShow';
import Layout from 'components/Layout';
import styles from './cart.module.scss';

const Cart = () => (
  <Layout title="Mon panier" subtitle="">
    <div className={styles.Cart}>
      <CartShow />
      <p>ça part en prod</p>
    </div>
  </Layout>
);

export default Cart;
