import React from 'react';
import style from './CardItemArtist.module.css';
import Image from 'next/image';
import { FaEye } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";



const CardItemArtist = ({ content }) => {
  return (
    <div className={style.slide}>
      <div className={style.imageWrapper}>
        <Image
          src={content.imageUrl}
          alt={content.imageAlt || "Slide image"}
          width={300}
          height={300}
          objectPosition="center"
          objectFit="cover"
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
          objectPosition="center"
          objectFit="cover"
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
