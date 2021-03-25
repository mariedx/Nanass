/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import ApiMacbooks from 'api/macbooks';
import CardMacBook from 'components/CardMacBook';
import Layout from 'components/Layout';
import SearchBar from 'components/SearchBar';
import Link from 'next/link';
import styles from './purchaseMacBook.module.scss';

const purchase = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [allMacbooks, setAllMacbooks] = useState([]);
  const [displayedMacbooks, setDisplayedMacbooks] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const updateSearchInput = (value) => {
    setSearchInput(value);
  };

  useEffect(() => {
    // Filter logic with displayed Macbooks
  }, [searchInput]);

  useEffect(async () => {
    if (errorMessage !== '') {
      setErrorMessage('');
    }

    const result = await ApiMacbooks.getAllMacbooks();

    if (result.error) {
      setErrorMessage(result.error.message);
      return;
    }

    setAllMacbooks(result);
  }, []);

  useEffect(() => {
    setDisplayedMacbooks(allMacbooks);
  }, [allMacbooks]);

  return (
    <Layout title="ACHETER UN MACBOOK" subtitle="Tous nos produits sont garantis 12 mois !">
      <div className={styles.Purchase}>
        <div className={styles.Purchase__searchbar}>
          <SearchBar
            handleChange={updateSearchInput}
            keyword={searchInput}
          />
        </div>
        <p className={styles.Purchase__errorMessage}>{errorMessage}</p>
        <div className={styles.Purchase__list}>
          {displayedMacbooks.length !== 0 && (
            displayedMacbooks.map((macbook) => {
              const {
                model,
                size,
                year,
                processor,
                ram,
                price,
                serial_number,
                id,
                image_url,
              } = macbook;
              return (
                <Link href={`macbooks/${id}`}>
                  <a>
                    <CardMacBook
                      model={model}
                      size={size}
                      year={year}
                      processor={processor}
                      ram={ram}
                      price={price}
                      key={serial_number}
                      image={image_url}
                    />
                  </a>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </Layout>
  );
};

export default purchase;
