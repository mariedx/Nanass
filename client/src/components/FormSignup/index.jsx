import Input from 'components/Input';
import { useState } from 'react';
import Button from 'components/Button';
import styles from './formsignup.module.scss';

const FormSignup = () => {
  const [emailValue, setEmailValue] = useState('');
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const handleEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstNameValue(e.targer.value);
  };

  const handleLastName = (e) => {
    setLastNameValue(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const handlePasswordConfirm = (e) => {
    setConfirmPasswordValue(e.target.value);
  };

  return (
    <div className={styles.FormSignup}>
      <Input
        title="Email"
        type="registration"
        handleChange={handleEmail}
        value={emailValue}
        placeholder="Email"
      />
      <Input
        title="Prénom"
        type="registration"
        handleChange={handleFirstName}
        value={firstNameValue}
        placeholder="Prénom"
      />
      <Input
        title="Nom"
        type="registration"
        handleChange={handleLastName}
        value={lastNameValue}
        placeholder="Nom"
      />
      <Input
        title="Mot de passe"
        type="registration"
        handleChange={handlePassword}
        value={passwordValue}
        placeholder="Mot de passe"
      />
      <Input
        title="Confirmation du mot de passe"
        type="registration"
        handleChange={handlePasswordConfirm}
        value={confirmPasswordValue}
        placeholder="Confirmation du mot de passe"
      />
      <br />
      <br />
      <Button
        title="S'enregistrer"
        type="primary"
      />
    </div>
  );
};

export default FormSignup;
