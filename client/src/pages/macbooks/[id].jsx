import { useState, useEffect } from 'react';
import ApiMacbooks from 'api/macbooks';
import Layout from 'components/Layout';
import MacBookShow from 'components/MacBookShow';
// import styles from './product_page.module.scss';

export async function getServerSideProps(context) {
  return {
    props: { id: context.params.id },
  };
}

const product = ({ id }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [theMacbook, setTheMacbook] = useState({});

  useEffect(async () => {
    if (errorMessage !== '') {
      setErrorMessage('');
    }

    const result = await ApiMacbooks.getOneMacbook(id);

    if (result.error) {
      setErrorMessage(result.error.message);
      return;
    }
    setTheMacbook(result);
  }, []);

  return (
    <Layout title="trouvez votre macbook" subtitle="Tous nos produits sont garantis 12 mois !">
      <MacBookShow
        macbook={theMacbook}
      />
    </Layout>
  );
};

export default product;
