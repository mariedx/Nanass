import CartProduct from 'components/CartProduct';
import styles from './cartshow.module.scss';

const CartShow = () => (
  <div className="CartShow">
    <ul className={styles.CartShow__list}>
      <li>Produit</li>
      <li>Description</li>
      <li>Prix</li>
      <li>Quantité</li>
      <li>Total</li>
    </ul>
    <CartProduct />
  </div>
);

export default CartShow;
