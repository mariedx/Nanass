/* eslint-disable jsx-a11y/anchor-is-valid */
import Input from 'components/RegisInput';
import { useState } from 'react';
import ApiRegistrations from 'api/registrations';
import ApiCustomers from 'api/customers';
import { useDispatch } from 'react-redux';
import { loginCustomer } from 'store/users/userActions';
import { useRouter } from 'next/router';
import Link from 'next/link';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <form
      className={styles.FormSignin}
      onSubmit={handleSubmit}
    >
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
      <button
        type="submit"
        className={styles.FormSignin__button}
        onSubmit={handleSubmit}
      >
        Se connecter
      </button>
      <br />
      <Link href="/registrations/signup">
        <a className={styles.FormSignin__signupLink}>Pas encore de compte ? Inscrivez-vous.</a>
      </Link>
      {errorMessage && (
        <p className={styles.FormSignin__error}>{errorMessage}</p>
      )}
    </form>
  );
};

export default FormSignin;
