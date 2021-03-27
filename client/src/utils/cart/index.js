import config from 'config';

const key = config.LOCAL_STORAGE_KEY_PRODUCTS;

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

const removeItem = (id) => {
  const storageProducts = JSON.parse(localStorage.getItem(key));
  const products = storageProducts.filter((product) => product.id !== id);
  localStorage.setItem(key, JSON.stringify(products));
};

const addItem = (item) => {
  const products = get();
  const newProductsList = [...products, item];
  localStorage.setItem(key, JSON.stringify(newProductsList));
};

const Cart = {
  isInLocalStorage,
  setEmptyCartInLocalStorage,
  get,
  size,
  setInLocalStorage,
  removeItem,
  addItem,
};

export default Cart;
