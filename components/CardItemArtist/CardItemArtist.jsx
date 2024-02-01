import React, { useState } from 'react';
import style from './CardItemArtist.module.css';
import Image from 'next/image';
import { FaEye } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import SkeletonCardItemArtist from './SkeletonCardItemArtist'; 

const CardItemArtist = ({ content }) => {
  const [loading, setLoading] = useState(true);

  // Función para manejar la carga de imágenes
  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className={style.slide}>
      {loading && <SkeletonCardItemArtist />}
      <div className={style.imageWrapper}>
        <Image
          src={content.imageUrl}
          alt={content.imageAlt || "Slide image"}
          width={500}
          height={500}
          onLoad={handleImageLoad} // Manejar la carga de la imagen principal
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
            onLoad={handleImageLoad} // Manejar la carga de la imagen del perfil
          />
        </div>
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
  );
};

export default CardItemArtist;
