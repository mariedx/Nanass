import React from 'react';
import FormSignin from 'components/FormSignin';
import Layout from 'components/Layout';

const Signin = () => (
  <Layout title="Se connecter" subtitle="Bienvenue chez Nanass !">
    <div className="Signin">
      <FormSignin />
    </div>
  </Layout>
);

export default Signin;
