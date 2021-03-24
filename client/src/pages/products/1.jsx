import { useState, useEffect } from 'react';
import ApiMacbooks from 'api/macbooks';
import Layout from 'components/Layout';
import MacBookShow from 'components/MacBookShow';
// import styles from './product_page.module.scss';

const product = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [TheMacbook, setTheMacbook] = useState({});

  useEffect(async () => {
    if (errorMessage !== '') {
      setErrorMessage('');
    }

    const result = await ApiMacbooks.getOneMacbook('1');

    if (result.error) {
      setErrorMessage(result.error.message);
      return;
    }
    setTheMacbook(result);
  }, []);
  return (
    <Layout title="trouvez votre macbook" subtitle="Tous nos produits sont garantis 12 mois !">
      <MacBookShow
        model={TheMacbook.model}
        size={TheMacbook.size}
        year={TheMacbook.year}
        processor={TheMacbook.processor}
        ram={TheMacbook.ram}
        aspect={TheMacbook.aspect}
        price={TheMacbook.price}
      />
    </Layout>
  );
};

https://stackoverflow.com/questions/63602771/next-js-9-3-and-catch-all-routes

export default product;
