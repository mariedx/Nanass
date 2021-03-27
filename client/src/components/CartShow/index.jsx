import Button from 'components/Button';
import CartProduct from 'components/CartProduct';
import cart from 'utils/cart';
import styles from './cartshow.module.scss';

const CartShow = () => {
  const productsArray = cart.get();
  console.log(productsArray);
  console.log(productsArray[0].model);

  return (
    <div className="CartShow">
      <ul className={styles.CartShow__list}>
        <li>Produit</li>
        <li>Description</li>
        <li>Prix</li>
      </ul>
      <div className={styles.CartShow__space} />
      {productsArray.map((product) => <CartProduct macbook={product} />)}
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
};

export default CartShow;
