import Button from 'components/Button';
import CartProduct from 'components/CartProduct';
import cart from 'utils/cart';
import { useState, useEffect } from 'react';
// import ApiSessions from 'api/sessions';
// import Cookies from 'js-cookie';
// import config from 'config';
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

// const currentUser = useSelector((state) => state);
// const dispatch = useDispatch();

// const handleLogout = async (event) => {
//   event.preventDefault();
//   const token = Cookies.get(config.COOKIE_STORAGE_KEY_USER_TOKEN);
//   await ApiSessions.logout({ token });
//   dispatch(logout());
// };

// { currentUser.id && (
//   <>
//     <Item>
//       <Link href="/user/profile">
//         <a>Mon profil</a>
//       </Link>
//     </Item>
//     <ItemButton onClick={handleLogout}>
//       Déconnexion
//     </ItemButton>
//   </>
// ); }
// { !currentUser.id && (
//   <>
//     <Item>
//       <Link href="/registrations/signin">
//         <a>Connexion</a>
//       </Link>
//     </Item>
//     <Item>
//       <Link href="/registrations/signup">
//         <a>Inscription</a>
//       </Link>
//     </Item>
//   </>
// ); }
