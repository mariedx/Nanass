import React from 'react';
import FormSignup from 'components/FormSignup';
import Layout from 'components/Layout';

const Signup = () => (
  <Layout title="Créer un compte" subtitle="Bienvenue chez Nanass !">
    <div className="Signup">
      <FormSignup />
    </div>
  </Layout>
);

export default Signup;
