import React from 'react';
import styles from './perfil.module.css';
import CardProfile from '@/components/CardProfile/CardProfile';
import ContentCardArtist from '@/components/ContentCardArtist/ContentCardArtist';

export const Page = () => {
  return (
    <section className={styles['perfil__section']}>
      <CardProfile />
      <ContentCardArtist />
    </section>
  );
}

export default Page;
