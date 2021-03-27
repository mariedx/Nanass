/* eslint-disable react/jsx-props-no-spreading */
import { Provider } from 'react-redux';
import 'styles/globals.scss';
import { useStore } from 'store';
import cart from 'utils/cart';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  useEffect(() => {
    cart.setEmptyCartInLocalStorage();
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
