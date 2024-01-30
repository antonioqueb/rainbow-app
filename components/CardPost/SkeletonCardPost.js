// SkeletonCardPost.js
import React from 'react';
import styles from './SkeletonCardPost.module.css';

const SkeletonCardPost = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonTextTitle}></div>
      <div className={styles.skeletonText}></div>
    </div>
  );
};

export default SkeletonCardPost;
