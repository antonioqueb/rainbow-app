import React from 'react';
import styles from './ArtWhitDetails.module.css';
import Image from 'next/image';

export const ArtWhitDetails = (imageUrl) => {
  return (
    <section className={styles['ArtWhitDetails__section']}>
      <div className={styles['ArtWhitDetails__section__left']} >
        <Image src={imageUrl} alt='perfil' width={100} height={100}  className={styles['ArtWhitDetails__section__left__Image']}/>
      </div>
      <div className={styles['ArtWhitDetails__section__right']} >
        <header className={styles['ArtWhitDetails__section__right__header']} >
          <div className={styles['ArtWhitDetails__section__right__header__title']} >
            <h3>@ariadnarte</h3>
          </div>
          
        </header>
      </div>
    </section>
  );
}

export default ArtWhitDetails;
