import Layout from 'components/Layout';
import SideBar from 'components/SideBar';
import Link from 'next/link';
import { useState } from 'react';
import Button from 'components/Button';
import styles from './addproduct.module.scss';
import RegisInput from 'components/RegisInput';

const AddProduct = () => {

  const [modeleValue, setModeleValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [sizeValue, setSizeValue] = useState('');
  const [processorValue, setProcessorValue] = useState('');
  const [ramValue, setRamValue] = useState('');
  const [priceValue, setPriceValue] = useState('');


  const handleModele = (e) => {
    setModeleValue(e.target.value);
  };

  const handleDate = (e) => {
    setDateValue(e.target.value);
  };

  const handleSize = (e) => {
    setSizeValue(e.target.value);
  };

  const handleProcessor = (e) => {
    setProcessorValue(e.target.value);
  };

  const handleRam = (e) => {
    setRamValue(e.target.value);
  };

  const handlePrice = (e) => {
    setPriceValue(e.target.value);
  };

  return (
  <Layout title="Gérer les candidatures" subtitle="">
    <div className={styles.AddProduct}>
      <div className={styles.AddProduct__sidebar}>
        <SideBar href="./products" title="Gérer annonces ventes" />
        <SideBar href="./searches" title="Gérer recherches" />
        <SideBar href="./applications" title="Gérer candidatures" />
        <SideBar href="./addproduct" title="Ajouter un produit a la vente" />
      </div>
      <div className={styles.AddProduct__body}>
        <h2 className={styles.AddProduct__title}>Ajouter un nouveau produit</h2>
        <RegisInput 
          title="Modèle"
          className={styles.RegisInput}
          placeholder="Modèle"
          handleChange={handleModele}
          value={modeleValue}
          type="text"
        />
        <RegisInput 
          title="Date"
          className={styles.RegisInput}
          placeholder="Date"
          handleChange={handleDate}
          value={dateValue}
          type="text"
        />
        <RegisInput 
          title="Taille de l'écran"
          className={styles.RegisInput}
          placeholder="Taille de l'ecran"
          handleChange={handleSize}
          value={sizeValue}
          type="text"
        />
        <RegisInput 
          title="Processeur"
          className={styles.RegisInput}
          placeholder="Processeur"
          handleChange={handleProcessor}
          value={processorValue}
          type="text"
        />
        <RegisInput 
          title="RAM"
          className={styles.RegisInput}
          placeholder="RAM"
          handleChange={handleRam}
          value={ramValue}
          type="text"
        />
        <RegisInput 
          title="Prix"
          className={styles.RegisInput}
          placeholder="Prix"
          handleChange={handlePrice}
          value={priceValue}
          type="text"
        />
        <div className={styles.AddProduct__button}>
          <Link href="/">
            <Button
              href="#"
              title="Ajouter un produit"
              type="primary"
            />
          </Link>
        </div>
      </div>
    </div>
  </Layout>
  );
};

export default AddProduct;
