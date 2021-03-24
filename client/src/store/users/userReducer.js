import Cookies from 'js-cookie';
import isJwtExpired from 'utils/jwt';
import config from 'config';
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
  adminId: undefined,
  customerId: undefined,
};

const getInitialState = () => {
  const jwt = Cookies.get(config.COOKIE_STORAGE_KEY_USER_TOKEN);
  if (!jwt) return emptyState;
  if (isJwtExpired(jwt)) {
    Cookies.remove(config.COOKIE_STORAGE_KEY_USER_TOKEN);
    Cookies.remove(config.COOKIE_STORAGE_KEY_USER_DATA);
    return emptyState;
  }
  return JSON.parse(Cookies.get(config.COOKIE_STORAGE_KEY_USER_DATA));
};

const initialState = getInitialState();

const userReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case LOGIN_CUSTOMER: {
      const { token } = action;
      Cookies.set(config.COOKIE_STORAGE_KEY_USER_TOKEN, token);
      const { payload } = action;
      Cookies.set(config.COOKIE_STORAGE_KEY_USER_DATA, JSON.stringify(payload));

      return {
        ...state,
        ...payload,
      };
    }
    case LOGIN_ADMIN: {
      const { token } = action;
      Cookies.set(config.COOKIE_STORAGE_KEY_USER_TOKEN, token);
      const { payload } = action;
      const adminState = {
        ...state,
        ...payload,
        firstName: undefined,
        lastName: undefined,
      };
      Cookies.set(config.COOKIE_STORAGE_KEY_USER_DATA, JSON.stringify(adminState));

      return {
        ...adminState,
      };
    }
    case LOG_OUT: {
      Cookies.remove(config.COOKIE_STORAGE_KEY_USER_TOKEN);
      Cookies.remove(config.COOKIE_STORAGE_KEY_USER_DATA);
      return {
        ...emptyState,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
export { initialState };
