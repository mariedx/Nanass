import config from 'config';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import {
  LOGIN_ADMIN,
  LOGIN_CUSTOMER,
  LOG_OUT,
} from './userActions';

const emptyState = {
  id: null,
  email: null,
  firstName: undefined,
  lastName: undefined,
};

const isTokenExpired = (token) => {
  const { exp } = jwtDecode(token);
  const now = Date.now() / 1000;
  return (exp < now);
};

const getInitialState = () => {
  const jwt = Cookies.get(config.COOKIE_STORAGE_KEY_USER);
  if (!jwt) return emptyState;
  if (isTokenExpired(jwt)) {
    Cookies.remove(config.COOKIE_STORAGE_KEY_USER);
    localStorage.removeItem(config.LOCAL_STORAGE_KEY_USER);
    return emptyState;
  }
  return JSON.parse(localStorage.getItem(config.LOCAL_STORAGE_KEY_USER));
};

const initialState = getInitialState();

const userReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case LOGIN_CUSTOMER: {
      const { token } = action;
      Cookies.set(config.COOKIE_STORAGE_KEY_USER, token);
      const { payload } = action;
      localStorage.setItem(config.LOCAL_STORAGE_KEY_USER, JSON.stringify(payload));

      return {
        ...state,
        ...payload,
      };
    }
    case LOGIN_ADMIN: {
      const { token } = action;
      Cookies.set(config.COOKIE_STORAGE_KEY_USER, token);
      const { payload } = action;
      const adminState = {
        ...state,
        ...payload,
        firstName: undefined,
        lastName: undefined,
      };
      localStorage.setItem(config.LOCAL_STORAGE_KEY_USER, JSON.stringify(adminState));

      return {
        ...adminState,
      };
    }
    case LOG_OUT: {
      Cookies.remove(config.COOKIE_STORAGE_KEY_USER);
      localStorage.removeItem(config.LOCAL_STORAGE_KEY_USER);
      return {
        ...emptyState,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
