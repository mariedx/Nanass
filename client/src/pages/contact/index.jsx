import Layout from 'components/Layout';
import emailjs from 'emailjs-com';
import config from 'config';
import { useState } from 'react';
import styles from './contact.module.scss';

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    if (successMessage) {
      setSuccessMessage('');
    }

    emailjs.sendForm(
      config.EMAIL_JS_SERVICE,
      config.EMAIL_JS_TEMPLATE,
      e.target,
      config.EMAIL_JS_USER,
    )
      .then((result) => {
        setSuccessMessage('Votre message a bien été envoyé !');
      }, (error) => {
        console.error(error.text);
      });
  };

  return (
    <Layout title="Nous contacter" subtitle="Une question ? Un devis ? Contactez-nous !">
      <div className={styles.Contact}>
        <p className={styles.Contact__text}>
          L&apos;équipe de Nanass se tient à votre disposition
          pour répondre à toutes vos questions !
        </p>
        <form className="contact-form" onSubmit={sendEmail}>
          <ul className={styles.Contact__inputs__list}>
            <input type="hidden" name="contact_number" />
            <li>
              <label>Votre nom</label>
              <input type="text" name="user_name" className={styles.Contact__input} />
            </li>
            <li>
              <label>Votre email</label>
              <input type="email" name="user_email" className={styles.Contact__input} />
            </li>
            <li>
              <label>Votre message</label>
              <textarea name="message" rows="10" className={styles.Contact__textarea} />
            </li>
            <li>
              <input type="submit" value="Envoyer" className={styles.Contact__button} />
            </li>
          </ul>
          {successMessage && (
            <p className={styles.Contact__success}>
              {successMessage}
            </p>
          )}
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
