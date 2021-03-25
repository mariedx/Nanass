import Button from 'components/Button';
import CartProduct from 'components/CartProduct';
import styles from './cartshow.module.scss';

const CartShow = () => (
  <div className="CartShow">
    <ul className={styles.CartShow__list}>
      <li>Produit</li>
      <li>Description</li>
      <li>Prix</li>
    </ul>
    <div className={styles.CartShow__space} />
    <CartProduct />
    <div className={styles.CartShow__deliveryfees}>
      <p>Frais de livraison : 5 €</p>
      <p>Total : 255 €</p>
    </div>
    <div className={styles.CartShow__button}>
      <Button href="/" type="primary" title="Livraison et paiement" />
    </div>
  </div>
);

export default CartShow;
