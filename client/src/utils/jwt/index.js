import jwtDecode from 'jwt-decode';

const isJwtExpired = (token) => {
  const { exp } = jwtDecode(token);
  const now = Date.now() / 1000;
  return (exp < now);
};

export default isJwtExpired;
