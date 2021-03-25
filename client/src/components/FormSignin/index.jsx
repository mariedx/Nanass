import Input from 'components/RegisInput';
import { useState } from 'react';
import Button from 'components/Button';
import ApiRegistrations from 'api/registrations';
import ApiCustomers from 'api/customers';
import { useDispatch } from 'react-redux';
import { loginCustomer } from 'store/users/userActions';
import { useRouter } from 'next/router';
import styles from './formsignin.module.scss';

const FormSignin = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const redirectHome = () => {
    router.push('/');
  };

  const handleEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (errorMessage) {
      setErrorMessage('');
    }
    const signinResult = await ApiRegistrations.signin({
      email: emailValue,
      password: passwordValue,
    });

    if (signinResult.error) {
      setErrorMessage(signinResult.error.message);
      return;
    }

    if (signinResult.customerId) {
      const customer = await ApiCustomers.get({
        id: signinResult.customerId,
        token: signinResult.token,
      });

      const { token } = signinResult;
      const {
        user_id: id,
        id: customerId,
        first_name: firstName,
        last_name: lastName,
        email,
      } = customer;

      dispatch(loginCustomer({
        id,
        email,
        firstName,
        lastName,
        customerId,
      }, token));

      redirectHome();
    }
  };

  return (
    <div className={styles.FormSignIn}>
      <Input
        title="Email"
        type="email"
        handleChange={handleEmail}
        value={emailValue}
        placeholder="Email"
      />
      <Input
        title="Mot de passe"
        type="password"
        handleChange={handlePassword}
        value={passwordValue}
        placeholder="Mot de passe"
      />
      <br />
      <br />
      <Button
        href="#"
        title="S'enregistrer"
        type="primary"
        handleClick={handleSubmit}
      />
      {errorMessage && (
        <p className={styles.FormSignIn__error}>{errorMessage}</p>
      )}
    </div>
  );
};

export default FormSignin;
