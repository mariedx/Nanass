import { useEffect } from 'react';
import Cart from 'utils/cart';
import Link from 'next/link';
import Image from 'next/image';
import styles from './carticon.module.scss';

const CartIcon = () => {
  useEffect(() => {
    if (!Cart.isInLocalStorage()) {
      Cart.setEmptyCartInLocalStorage();
    }
  }, []);

  return (
    <Link href="/cart">
      <a className={styles.CartIcon}>
        <Image
          priority
          src="/images/cart.svg"
          height={40}
          width={40}
          alt="Cart"
        />
      </a>
    </Link>
  );
};

export default CartIcon;
