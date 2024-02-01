import React, { useState } from 'react';
import style from './CardItemArtistProfile.module.css';
import Image from 'next/image';
import SkeletonCardItemArtistProfile from './SkeletonCardItemArtistProfile'; 

const CardItemArtistProfile = ({ content }) => {
  const [loading, setLoading] = useState(true);

  // Función para manejar la carga de la imagen
  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className={style.slide}>
      {loading && <SkeletonCardItemArtistProfile />}
      <Image
        src={content.imageUrl}
        alt={content.imageAlt || "Slide image"}
        width={195}
        height={195}
        onLoad={handleImageLoad} // Manejar la carga de la imagen
      />
    </div>
  );
};

export default CardItemArtistProfile;
