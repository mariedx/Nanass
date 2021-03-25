import React from 'react';
import Layout from 'components/Layout';
import SideBar from 'components/SideBar';
import styles from '../../styles/profile.module.scss'
import RegisInput from 'components/RegisInput';
import Button from 'components/Button';




const Profile = () => {
  return (
    <Layout title="Mon espace" >
        <div className={styles.Profile}>
          <div className={styles.Profile__sidebar}>
          <SideBar/>
          </div>
          <div className={styles.Profile__body}>
            <div className={styles.Profile__title}>
              <h3>Mettre a jour mes infos</h3>
            </div>
          <div className={styles.Profile__input}>
            <RegisInput  
            title="email"
            placeholder="email"
            />
          </div>
            <div className={styles.Profile__name}>
              <RegisInput  
              title="Prénom"
              placeholder="prénom"
              />
              <RegisInput  
              title="Nom"
              placeholder="Nom"
              />
              </div>
            <div className={styles.Profile__password}>
              <RegisInput  
                title="Mot de passe"
                placeholder="Mot de passe"
              />
              <RegisInput  
                title="Confirmation mot de passe"
                placeholder="Confirmation mot de passe"
              />
            </div>
            <div className={styles.Profile__button}>
              <Button 
                title="valider"
                type="primary"
                href="#"
              />
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default Profile;
