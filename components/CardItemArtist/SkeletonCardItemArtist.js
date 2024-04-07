// SkeletonCardItemArtist.js
import React from 'react';
import styles from './SkeletonCardItemArtist.module.css'; // Asegúrate de tener este archivo con los estilos

const SkeletonCardItemArtist = () => {
  return (
    <div className={styles.skeletonSlide}>
      <div className={styles.skeletonImageWrapper}></div>
      
    </div>
  );
};

export default SkeletonCardItemArtist;
