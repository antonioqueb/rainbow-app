'use client';
import React, { useState } from 'react';
import styles from './CardPost.module.css';
import Image from 'next/image';
import SkeletonCardPost from './SkeletonCardPost'

export const CardPost = ({ Titulo, Description, ImagePost }) => {
  const [loading, setLoading] = useState(true);

  // Longitudes máximas
  const maxTituloLength = 100;
  const maxDescriptionLength = 110;

  // Función para cortar el texto y añadir '...'
  const truncate = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };

  // Función para manejar la carga de la imagen
  const handleImageLoad = () => {
    setLoading(false);
  };

  if (loading) {
    return <SkeletonCardPost />;
  }

  return (
    <div className={styles.CardPosts__container__news}>
      <Image
        src={ImagePost}
        alt={Titulo}
        width={540}
        height={360}
        onLoad={handleImageLoad} // Manejar la carga de la imagen
        className={styles.CardPost__container__news__image__img}
      />
      <div className={styles.CardPost__container__news__title}>
        <h3>{truncate(Titulo, maxTituloLength)}</h3>
      </div>
      <div className={styles.CardPost__container__news__description}>
        <p>{truncate(Description, maxDescriptionLength)}</p>
      </div>
    </div>
  );
};

export default CardPost;
