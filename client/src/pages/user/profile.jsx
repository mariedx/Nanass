import React from 'react';
import Layout from 'components/Layout';
import SideBar from 'components/SideBar';
import RegisInput from 'components/RegisInput';
import Button from 'components/Button';
import styles from './profile.module.scss';

const Profile = () => (
  <Layout title="Mon espace">
    <div className={styles.Profile}>
      <div className={styles.Profile__sidebar}>
        <SideBar href="./order" title="Mes commandes" />
        <SideBar href="./application" title="Mes candidatures" />
        <SideBar href="./profile" title="Mon profil" />
      </div>

      <div className={styles.Profile__body}>
        <h3 className={styles.Profile__title}>Mettre à jour mon profil</h3>
        <div className={styles.Profile__form}>
          <RegisInput
            title="email"
            placeholder="Email"
          />
          <RegisInput
            title="Prénom"
            placeholder="Prénom"
          />
          <RegisInput
            title="Nom"
            placeholder="Nom"
          />
          <RegisInput
            title="Mot de passe"
            placeholder="Mot de passe"
          />
          <RegisInput
            title="Confirmation mot de passe"
            placeholder="Confirmation mot de passe"
          />
          <div className={styles.Profile__form__button}>
            <Button
              title="valider"
              type="primary"
              href="#"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Profile;
