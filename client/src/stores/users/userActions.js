/* eslint-disable camelcase */

const LOGIN_CUSTOMER = 'LOGIN_CUSTOMER';
const LOGIN_ADMIN = 'LOGIN_ADMIN';
const LOG_OUT = 'LOG_OUT';

export {
  LOGIN_CUSTOMER,
  LOGIN_ADMIN,
  LOG_OUT,
};

const loginCustomer = (customer, token) => {
  const {
    id,
    email,
    first_name,
    last_name,
  } = customer;

  return {
    type: LOGIN_CUSTOMER,
    payload: {
      id,
      email,
      firstName: first_name,
      lastName: last_name,
    },
    token,
  };
};

const loginAdmin = (admin, token) => {
  const {
    id,
    email,
  } = admin;

  return {
    type: LOGIN_ADMIN,
    payload: {
      id,
      email,
    },
    token,
  };
};

const logout = () => ({
  type: LOG_OUT,
});

export {
  loginCustomer,
  loginAdmin,
  logout,
};
