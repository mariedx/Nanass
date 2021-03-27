/* eslint-disable react/jsx-props-no-spreading */
import { Provider } from 'react-redux';
import 'styles/globals.scss';
import { useStore } from 'store';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
