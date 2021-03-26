import React from 'react';
import FormSignup from 'components/FormSignup';
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

const Signup = () => (
  <Layout title="S'inscrire" subtitle="Bienvenue chez Nanass !">
    <div className="Signup">
      <FormSignup />
    </div>
  </Layout>
);

export default Signup;
export { getServerSideProps };
