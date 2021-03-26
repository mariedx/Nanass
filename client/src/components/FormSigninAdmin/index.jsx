/* eslint-disable jsx-a11y/anchor-is-valid */
import Input from 'components/RegisInput';
import { useState } from 'react';
import ApiRegistrations from 'api/registrations';
import ApiAdmins from 'api/admins';
import { loginAdmin } from 'store/users/userActions';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styles from './form_signin_admin.module.scss';

const FormSigninAdmin = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const redirectAdmin = () => {
    router.push('/admin/products');
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
    const signinAdminResult = await ApiRegistrations.signin({
      email: emailValue,
      password: passwordValue,
    });

    if (signinAdminResult.error) {
      setErrorMessage(signinAdminResult.error.message);
      return;
    }

    if (signinAdminResult.adminId) {
      const admin = await ApiAdmins.get({
        id: signinAdminResult.adminId,
        token: signinAdminResult.token,
      });

      const { token } = signinAdminResult;
      const {
        user_id: id,
        id: adminId,
        email,
      } = admin;

      dispatch(loginAdmin({
        id,
        email,
        adminId,
      }, token));

      redirectAdmin();
    }
  };

  return (
    <form
      className={styles.FormSigninAdmin}
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
        className={styles.FormSigninAdmin__button}
        onSubmit={handleSubmit}
      >
        Se connecter
      </button>
      <br />
      {errorMessage && (
        <p className={styles.FormSigninAdmin__error}>{errorMessage}</p>
      )}
    </form>
  );
};

export default FormSigninAdmin;
