import React from 'react';
import styles from './blog.module.css';
import { HeroPost } from '@/components/HeroPost/HeroPost';

export const blog = () => {
  return (
    <div className={styles.blog__contenedor}>
      <div className={styles.blog__column}>
        <div className={styles.blog__row}>
          <HeroPost />
        </div>
      </div>
  
      
    </div>
  );
};

export default blog;