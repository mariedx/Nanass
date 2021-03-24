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
    firstName,
    lastName,
    customerId,
  } = customer;

  return {
    type: LOGIN_CUSTOMER,
    payload: {
      id,
      email,
      firstName,
      lastName,
      customerId,
    },
    token,
  };
};

const loginAdmin = (admin, token) => {
  const {
    id,
    email,
    adminId,
  } = admin;

  return {
    type: LOGIN_ADMIN,
    payload: {
      id,
      email,
      adminId,
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
