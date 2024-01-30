import React from 'react';
import styles from './perfil.module.css';
import CardProfile from '@/components/CardProfile/CardProfile';

export const Page = () => {
  return (
    <section className={styles['perfil__section']}>
      <CardProfile />
    </section>
  );
}

export default Page;
