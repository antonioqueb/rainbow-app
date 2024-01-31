// SkeletonCardItemArtistProfile.js
import React from 'react';
import styles from './SkeletonCardItemArtistProfile.module.css'; // Asegúrate de tener este archivo con los estilos

const SkeletonCardItemArtistProfile = () => {
  return (
    <div className={styles.skeletonSlide}>
      <div className={styles.skeletonImageWrapper}></div>
      <div className={styles.skeletonProfile}>
        <div className={styles.skeletonProfileImageWrapper}></div>
        <div className={styles.skeletonProfileInfo}>
          <div className={styles.skeletonUserName}></div>
          <div className={styles.skeletonMetric}>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.skeletonText}></div>
          </div>
          <div className={styles.skeletonMetric}>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.skeletonText}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCardItemArtistProfile;
