import config from 'config';

const key = config.LOCAL_STORAGE_KEY_PRODUCT;

const isInLocalStorage = () => {
  const cart = localStorage.getItem(key);
  return cart !== undefined;
};

const setEmptyCartInLocalStorage = () => {
  localStorage.setItem(key, JSON.stringify([]));
};

const get = () => {
  const productsJson = localStorage.getItem(key);
  return JSON.parse(productsJson);
};

const size = () => {
  const productsJson = localStorage.getItem(key);
  const products = JSON.parse(productsJson);
  return products.length;
};

const setInLocalStorage = (products) => {
  localStorage.setItem(key, JSON.stringify(products));
};

const Cart = {
  isInLocalStorage,
  setEmptyCartInLocalStorage,
  get,
  size,
  setInLocalStorage,
};

export default Cart;
