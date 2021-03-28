import Link from 'next/link';
import styles from './cartproduct.module.scss';

const CartProduct = ({ macbook }) => {
  const {
    model,
    size,
    price,
    image_url: image,
    id,
  } = macbook;

  return (
    <div className={styles.CartProduct}>
      <ul className={styles.CartProduct__data}>
        <li>
          <Link href={`macbooks/${id}`}>
            <a>
              <img
                src={image}
                className={styles.CartProduct__miniature}
                alt="macbook"
              />
            </a>
          </Link>
        </li>
        <li>
          {`${model} ${size}'`}
        </li>
        <li>
          {`${price} €`}
        </li>
      </ul>
      <div className={styles.CartProduct__space} />
    </div>
  );
};

export default CartProduct;
