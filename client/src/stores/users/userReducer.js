import config from 'config';
import Cookies from 'js-cookie';
import {
  LOGIN_ADMIN,
  LOGIN_CUSTOMER,
  LOG_OUT,
} from './userActions';

const emptyState = {
  id: null,
  email: '',
  firstName: '',
  lastName: '',
};

const initialState = emptyState;

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
        firstName: 'Admin',
        lastName: 'Istrator',
        ...payload,
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
