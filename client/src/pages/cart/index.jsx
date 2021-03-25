import CartProduct from 'components/CartProduct';
import Layout from 'components/Layout';
import styles from './cart.module.scss';

const Cart = () => (
  <Layout title="Mon panier" subtitle="">
    <div className={styles.Cart}>
      <CartProduct />
      <p>ça part en prod</p>
    </div>
  </Layout>
);

export default Cart;
