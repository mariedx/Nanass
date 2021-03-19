/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import userReducer from './users/userReducer';

const stores = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default stores;
