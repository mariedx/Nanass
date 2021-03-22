import Input from 'components/Input';
import { useState } from 'react';
import Button from 'components/Button';
import styles from './formsignin.module.scss';

const Signin = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className={styles.FormSignIn}>
      <Input
        title="Email"
        type="registration"
        handleChange={handleEmail}
        value={emailValue}
        placeholder="Email"
      />
       <Input
        title="Mot de passe"
        type="registration"
        handleChange={handlePassword}
        value={passwordValue}
        placeholder="Mot de passe"
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

export default Signin;
