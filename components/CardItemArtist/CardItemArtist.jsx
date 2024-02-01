// CardItemArtist.js
import React, { useState, useEffect } from 'react';
import style from './CardItemArtist.module.css';
import Image from 'next/image';
import { FaEye } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import SkeletonCardItemArtist from './SkeletonCardItemArtist'; // Importa el componente de esqueleto

const CardItemArtist = ({ content }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de datos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5); // Ajusta el tiempo según sea necesario
    return () => clearTimeout(timer);
  }, [content]); // Dependencia para recargar si el contenido cambia

  if (loading) {
    return <SkeletonCardItemArtist />;
  }

  return (
    <div className={style.slide}>
      <div className={style.imageWrapper}>
        <Image
          src={content.imageUrl}
          alt={content.imageAlt || "Slide image"}
          width={500}
          height={500}
            
         
        />
      </div>
      <div className={style.profile}>
        <div className={style.profileImageWrapper}>
        <Image
          className={style.profileImage}
          src={content.profileUrl}
          width={50}
          height={50}
          alt={content.profileAlt || "Profile image"}
            
         
          
        />
        </div>
        <div className={style.profileInfo}>
      <div className={style.profileInfo}>
        <h2 className={style.userName}>{content.user}</h2>

    </div>
    <div className={style.views}>
      <FaEye className={style.viewsIcon} />
      <p className={style.viewsNumber}>{content.views}</p>
    </div>
    <div className={style.likes}>
      <FcLike className={style.likesIcon} />
      <p className={style.likesNumber}>{content.likes}</p>
      </div>
    </div>

        </div>
        

    </div>

  );
};

export default CardItemArtist;
