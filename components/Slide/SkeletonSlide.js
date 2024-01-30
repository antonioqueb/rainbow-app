// SkeletonSlide.js
import React from 'react';
import styles from './SkeletonSlide.module.css'; // Asegúrate de tener este archivo con los estilos

const SkeletonSlide = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <div className={styles.skeletonImage}></div>
      <section className={styles.skeletonContent}>
        <div className={styles.skeletonTextTitle}></div>
        <div className={styles.skeletonText}></div>
      </section>
    </div>
  );
};

export default SkeletonSlide;
