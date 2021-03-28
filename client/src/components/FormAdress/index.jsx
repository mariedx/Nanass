import Input from 'components/RegisInput';
import { useState } from 'react';
import styles from './formadress.module.scss';

const FormAdress = () => {
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [streetNumberValue, setStreetNumberValue] = useState('');
  const [streetNameValue, setStreetNameValue] = useState('');
  const [zipValue, setZipValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [complementValue, setComplementValue] = useState('');

  return (
    <div className={styles.FormAdress}>
      <h3>Indiquez votre adresse de livraison</h3>
      <Input
        title="Prénom"
        type="text"
        handleChange={setFirstNameValue}
        value={firstNameValue}
      />
      <Input
        title="Nom"
        type="text"
        handleChange={lastNameValue}
        value={setLastNameValue}
      />
      <Input
        title="N°"
        type="text"
        handleChange={setStreetNumberValue}
        value={streetNumberValue}
      />
      <Input
        title="Rue"
        type="text"
        handleChange={setStreetNameValue}
        value={streetNameValue}
      />
      <Input
        title="Code postal"
        type="text"
        handleChange={setZipValue}
        value={zipValue}
      />
      <Input
        title="Ville"
        type="text"
        handleChange={setCityValue}
        value={cityValue}
      />
      <Input
        title="Pays"
        type="text"
        handleChange={countryValue}
        value={setCountryValue}
      />
      <Input
        title="Téléphone"
        type="text"
        handleChange={phoneValue}
        value={setPhoneValue}
      />
      <Input
        title="Compléments"
        type=""
        handleChange={complementValue}
        value={setComplementValue}
        placeholder="Digicode, indication supplémentaire..."
      />
    </div>
  );
};

export default FormAdress;
