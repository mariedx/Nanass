/* eslint-disable max-len */
import Layout from 'components/Layout';
import React from 'react';
import styles from './concept.module.scss';

const Concept = () => (
  <Layout title="Concept" subtitle="Bienvenue chez Nanass !">
    <div className={styles.Concept}>
      <img className={styles.Concept__image} alt="nanass - illustration" src="https://images.unsplash.com/photo-1506203396712-45cde6442eaa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" />
      <div className={styles.Concept__text}>
        <h2 className={styles.Concept__title}> Pourquoi Nanass ?</h2>
        <p>
          Nanass, c&apos;est d&apos;abord deux nanas, expertes en ordinateurs Mac,
          qui veulent les réutiliser les rendre accessibles.
          C&apos;est aussi l&apos;ananas : l&apos;un des fruits qui se régénère seul !
          <br />
          Notre objectif ? Régénérer les pommes à l&apos;infini tel un ananas !
        </p>
        <p className={styles.Concept__title}>Responsable</p>
        <p>
          Chaque année, des millions de Mac sont vendus à travers le monde.
          Chez Nanass, nous nous sommes fixés une mission :
          réparer un produit existant et le remettre en état, plutôt qu&apos;en produire un nouveau.
          La planète, ainsi que votre budget, vous remercieront !
        </p>
        <p className={styles.Concept__title}>Local</p>
        <p>
          Chez Nanass, nous sommes persuadés que près des yeux, près du coeur !
          C&apos;est pourquoi nous travaillons avec des réparateurs situés en Ile-deFrance,
          à proximité de nos locaux. Nous mettons tout en oeuvre pour limiter
          au maximum les deplacements inutiles et centraliser tous nos prestataires.
        </p>
        <p className={styles.Concept__title}>Confiance</p>
        <p>
          Tous nos MacBooks sont chouchoutés de leur reception dans nos locaux à leur envoi chez vous.
          Nous inspectons minutieusement le produit dès sa reception et le confions entre les mains
          expertes de nos réparateurs. Une fois reçu chez vous, pas de panique, votre ordinateur fait
          toujours parti de la famille Nanass : il est garanti 12 mois !
        </p>
      </div>
    </div>
  </Layout>
);

export default Concept;
