import Input from 'components/RegisInput';
import { useState } from 'react';
import Link from 'next/link';
import ApiRegistrations from 'api/registrations';
import ApiCustomers from 'api/customers';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { loginCustomer } from 'store/users/userActions';
import styles from './formsignup.module.scss';

const FormSignup = () => {
  const [emailValue, setEmailValue] = useState('');
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const redirectHome = () => {
    router.push('/');
  };

  const handleEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstNameValue(e.target.value);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errorMessage) {
      setErrorMessage('');
    }
    const signupResult = await ApiRegistrations.signup({
      email: emailValue,
      password: passwordValue,
      passwordConfirmation: confirmPasswordValue,
    });

    if (signupResult.error) {
      setErrorMessage(signupResult.error.message);
      return;
    }

    const {
      token,
      id,
      email,
    } = signupResult;

    const customerResult = await ApiCustomers.create({
      token,
      userId: id,
      firstName: firstNameValue,
      lastName: lastNameValue,
    });

    if (customerResult.error) {
      setErrorMessage(customerResult.error.message);
      return;
    }

    const {
      id: customerId,
      first_name: firstName,
      last_name: lastName,
    } = customerResult;

    dispatch(loginCustomer({
      id,
      email,
      firstName,
      lastName,
      customerId,
    }, token));

    redirectHome();
  };

  return (
    <form
      className={styles.FormSignup}
      onSubmit={handleSubmit}
    >
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
        type="password"
        handleChange={handlePassword}
        value={passwordValue}
        placeholder="Mot de passe"
      />
      <Input
        title="Confirmation du mot de passe"
        type="password"
        handleChange={handlePasswordConfirm}
        value={confirmPasswordValue}
        placeholder="Confirmation du mot de passe"
      />
      <br />
      <br />
      <button
        type="submit"
        className={styles.FormSignup__button}
        onSubmit={handleSubmit}
      >
        S&apos;inscrire
      </button>
      <br />
      <Link href="/registrations/signin">
        <a className={styles.FormSignup__signinLink}>Déjà un compte ? Connectez-vous.</a>
      </Link>
      {errorMessage && (
        <p className={styles.FormSignup__error}>{errorMessage}</p>
      )}
    </form>
  );
};

export default FormSignup;
