import Layout from 'components/Layout';
import React from 'react';
import styles from './concept.module.scss';

const Concept = () => (
  <Layout title="Concept" subtitle="Bienvenue chez Nanass !">
    <div className={styles.Concept}>
      <span className={styles.Concept__title}> Pourquoi Nanass ?</span>
      <p>
        Nanass, c&apos;est d&apos;abord deux nanas, expertes en ordinateurs Mac,
        qui veulent les réutiliser les rendre accessibles.
        C&apos;est aussi l&apos;ananas : l&apos;un des fruits qui se régénère seul !
        <br />
        Notre objectif ? régénérer les pommes à l&apos;infini tel un ananas !
      </p>
      <span className={styles.Concept__title}>Responsable</span>
      <p>
        Chaque année, des millions de Mac sont vendus à travvers le monde.
        Chez Nanass, nous nous sommes fixés une mission :
        réparer un produit existant et le remettre en état, plutôt qu&apos;en produire un nouveau.
        La planète, ainsi que votre budget, vous remercierons !
      </p>
      <span className={styles.Concept__title}>Local</span>
      <p>
        Chez Nanass, nous sommes persuadés que près des yeux = près du coeur !
        C&apos;est pourquoi nous travaillons avec des réparateurs situés en Ile-deFrance,
        à proximité de nos locaux. Nous mettons tout en oeuvre pour limiter
        au maximum les deplacements inutils et centraliser tous nos prestataires.
      </p>
      <span className={styles.Concept__title}>Confiance</span>
      <p>
        Tous nos MacBooks sont chouchoutés de leur reception dans nos locaux à leur envoi chez
        vous.
        Nous inspectons minutieusement le produit dès sa reception et le confions entre les mains
        expertes de nos réparateurs. Une fois reçu chez vous, pas de panique, votre ordinateur
        fait
        toujours parti de la famille Nanass : il est garanti 12 mois !
      </p>
    </div>
  </Layout>
);

export default Concept;
