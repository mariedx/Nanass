import styles from './cartproduct.module.scss';

const CartProduct = ({ macbook }) => {
  const {
    model,
    size,
    price,
    image_url: image,
  } = macbook;
  console.log(model);

  return (
    <div className={styles.CartProduct}>
      <ul className={styles.CartProduct__data}>
        <li>
          <img
            src={image}
            className={styles.CartProduct__miniature}
            alt="macbook"
          />
        </li>
        <li>
          {model}
          {' '}
          +
          {size}
        </li>
        <li>
          {price}
          {' '}
          €
        </li>
      </ul>
      <div className={styles.CartProduct__space} />
    </div>
  );
};

export default CartProduct;
