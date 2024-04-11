import React from 'react';
import styles from './perfil.module.css';
import CardProfile from '@/components/CardProfile/CardProfile';
import ContentCardArtist from '@/components/ContentCardArtist/ContentCardArtist';
import Navbar from '../../components/Navbar/Navbar'

export const Page = () => {
  return (
    <>
    <Navbar/>
    <section className={styles['perfil__section']}>
      <CardProfile />
      <ContentCardArtist />
    </section>
    </>
  );
}

export default Page;
