import React from 'react';
import styles from './progressbar.module.scss'

const ProgressBar = ({width, percent}) => {

  const progress = percent * width;

  return (
    <div className={styles.ProgressBar} style={{width: width}}>
           <div style={{width: `${progress}px`}}className={styles.ProgressBar__inside}/>
      </div>
  );
};

export default ProgressBar;
