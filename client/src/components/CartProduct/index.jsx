import styles from './cartproduct.module.scss';

const CartProduct = ({ macbook }) => (
  <div className={styles.CartProduct}>
    <ul className={styles.CartProduct__list}>
      <li>Produit</li>
      <li>Description</li>
      <li>Prix</li>
      <li>Quantité</li>
      <li>Total</li>
    </ul>
    <ul>
    <li><img
      src="https://s1.1zoom.me/big0/241/328840-alexfas01.jpg"
      className={styles.CartProduct__miniature}
      alt="macbook"
    /></li>
    <li>
      description
    </li>

    </ul>
  </div>
);

export default CartProduct;
