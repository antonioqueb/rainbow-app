import React from 'react';
import styles from './HeroPost.module.css';

export const HeroPost = () => {
  return (
    <div className={styles.HeroPost__contenedor}>
      <div className={styles.HeroPost__column}>Columna 1</div>
  <div className={styles.HeroPost__column}>Columna 2</div>
  
      
    </div>
  );
};