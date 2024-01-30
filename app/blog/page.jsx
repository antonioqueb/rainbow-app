import React from 'react';
import styles from './blog.module.css';
import LastNews from '@/components/LastNews/LastNews';

export const blog = () => {
  return (
    <section className={styles['blog__section']}>
     <LastNews/>
    </section>
  );
}

export default blog;
