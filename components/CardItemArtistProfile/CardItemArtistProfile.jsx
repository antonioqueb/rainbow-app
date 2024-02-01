// CardItemArtistProfile.js
import React, { useState, useEffect } from 'react';
import style from './CardItemArtistProfile.module.css';
import Image from 'next/image';
import SkeletonCardItemArtistProfile from './SkeletonCardItemArtistProfile'; // Importa el componente de esqueleto

const CardItemArtistProfile = ({ content }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de datos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1); // Ajusta el tiempo según sea necesario
    return () => clearTimeout(timer);
  }, [content]); // Dependencia para recargar si el contenido cambia

  if (loading) {
    return <SkeletonCardItemArtistProfile />;
  }

  return (
    <div className={style.slide}>
      
        <Image
          src={content.imageUrl}
          alt={content.imageAlt || "Slide image"}
          width={195}
          height={195}
            
         
        />
      </div>
  
  );
};

export default CardItemArtistProfile;
