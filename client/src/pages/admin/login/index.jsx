import React from 'react';
import FormSigninAdmin from 'components/FormSigninAdmin';
import Layout from 'components/Layout';
import cookie from 'cookie';
import config from 'config';
import isJwtExpired from 'utils/jwt';

const getServerSideProps = ({ req }) => {
  const cookieData = cookie.parse(req.headers.cookie || 'null');
  const tokenKey = config.COOKIE_STORAGE_KEY_USER_TOKEN;
  const token = cookieData[tokenKey];

  if (!token || isJwtExpired(token)) {
    return { props: {} };
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

const Signin = () => (
  <Layout title="Se connecter en tant qu'admin" subtitle="Bienvenue chez Nanass !">
    <div className="Signin">
      <FormSigninAdmin />
    </div>
  </Layout>
);

export default Signin;
export { getServerSideProps };
