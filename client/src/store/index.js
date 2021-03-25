/* eslint-disable no-underscore-dangle */
import { useMemo } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer, { initialState } from './users/userReducer';

let store;

const rootReducer = userReducer;

const initStore = (preloadedState = initialState) => (
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware()),
  )
);

const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

const useStore = (storeInitialState) => {
  const finalStore = useMemo(() => initializeStore(storeInitialState), [storeInitialState]);
  return finalStore;
};

export { initializeStore, useStore };
