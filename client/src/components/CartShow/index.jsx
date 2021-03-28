import Button from 'components/Button';
import CartProduct from 'components/CartProduct';
import cart from 'utils/cart';
import { useState, useEffect } from 'react';
import styles from './cartshow.module.scss';

const shippingFees = 5;

const CartShow = () => {
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    const cartProducts = cart.get();
    setProductsArray(cartProducts);
  }, []);

  return (
    <div className="CartShow">
      <ul className={styles.CartShow__list}>
        <li>Produit</li>
        <li>Description</li>
        <li>Prix</li>
      </ul>
      <div className={styles.CartShow__space} />
      {productsArray.length === 0 && (
        <p className={styles.CartShow__emptycart}> Votre panier est vide</p>
      )}
      {productsArray.length > 0 && (
      <div>
        {productsArray.map((product) => <CartProduct macbook={product} />)}

        <div className={styles.CartShow__deliveryfees}>
          <p>{`Frais de livraison : ${shippingFees} €`}</p>
          <p>
            Total :
            {' '}
            {productsArray.reduce((sum, product) => sum + Number(product.price), 5)}
            {' '}
            €
          </p>
        </div>
        <div className={styles.CartShow__button}>
          <Button href="/" type="primary" title="Livraison et paiement" />
        </div>
      </div>
      )}
    </div>
  );
};

export default CartShow;
