import { useState, useEffect } from 'react';
import Cart from 'utils/cart';
import Link from 'next/link';
import Image from 'next/image';
import styles from './carticone.module.scss';

const CartIcon = () => {
  const [cart, setCart] = useState([]);

  useEffect(async () => {
    const localCart = await Cart.get();
    if (localCart === undefined) {
      await Cart.setEmptyCartInLocalStorage();
      setCart([]);
      return;
    }
    setCart(localCart);
  }, []);

  return (
    <div className={styles.CartIcone}>
      <Link href="/cart">
        <a className={styles.Navbar__cart}>
          <Image
            priority
            src="/images/cart.svg"
            height={40}
            width={40}
            alt="Cart"
          />
        </a>
      </Link>
    </div>
  );
};

export default CartIcon;
