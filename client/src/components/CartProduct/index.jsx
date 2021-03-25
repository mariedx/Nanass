import styles from './cartproduct.module.scss';

// const CartProduct = ({ macbook }) => {
// const {
//   model,
//   size,
//   year,
//   processor,
//   ram,
//   aspect,
//   price,
//   image_url: image,
// } = macbook;

const CartProduct = () => (
  <div className={styles.CartProduct}>
    <ul className={styles.CartProduct__data}>
      <li>
        <img
          src="https://s1.1zoom.me/big0/241/328840-alexfas01.jpg"
          className={styles.CartProduct__miniature}
          alt="macbook"
        />
      </li>
      <li>
        MacBook Pro 15&apos;
        {/* {model}
          {' '}
          +
          {size} */}
      </li>
      <li>
        {/* {price}
          {' '}
          € */}
        250 €
      </li>
      <li>
        1
      </li>
      <li>
        250 €
      </li>
    </ul>
  </div>
);

export default CartProduct;
