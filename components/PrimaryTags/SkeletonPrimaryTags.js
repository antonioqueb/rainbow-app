// SkeletonPrimaryTags.js
import React from 'react';
import styles from './SkeletonPrimaryTags.module.css'; // Asegúrate de tener este archivo con los estilos

const SkeletonPrimaryTags = () => {
  return (
    <div className={styles.skeletonTags}>
      {Array.from({ length: 7 }).map((_, index) => ( // Ajusta el número según la cantidad de etiquetas
        <div key={index} className={styles.skeletonTag}>
          <div className={styles.skeletonTagIcon}></div>
          <div className={styles.skeletonTagText}></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonPrimaryTags;
