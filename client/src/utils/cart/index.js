import config from 'config';

const key = config.LOCAL_STORAGE_KEY_PRODUCTS;

const isInLocalStorage = () => {
  const cart = localStorage.getItem(key);
  return cart !== null;
};

const setEmptyCartInLocalStorage = () => {
  localStorage.setItem(key, JSON.stringify([]));
};

const get = () => {
  if (isInLocalStorage()) {
    const productsJson = localStorage.getItem(key);
    return JSON.parse(productsJson);
  }
  return undefined;
};

const initialize = () => {
  if (isInLocalStorage()) {
    return get();
  }
  setEmptyCartInLocalStorage();
  return [];
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

const hasProduct = (item) => {
  const products = get();
  const isItemInCart = products.filter((product) => product.id === item.id);
  return isItemInCart.length !== 0;
};

const Cart = {
  isInLocalStorage,
  setEmptyCartInLocalStorage,
  get,
  initialize,
  size,
  setInLocalStorage,
  removeItem,
  addItem,
  hasProduct,
};

export default Cart;
