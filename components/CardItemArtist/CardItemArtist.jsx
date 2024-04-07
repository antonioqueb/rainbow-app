import React, { useState, useEffect } from 'react';
import style from './CardItemArtist.module.css';
import Image from 'next/image';
import { FaEye } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import SkeletonCardItemArtist from './SkeletonCardItemArtist';

const CardItemArtist = ({ content }) => {
  const [loading, setLoading] = useState(true);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1);
    return () => clearTimeout(timer);
  }, [content]);

  if (loading) {
    return <SkeletonCardItemArtist />;
  }

  return (
    <div className={style.slide} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className={style.imageWrapper}>
        <Image
          src={content.imageUrl}
          alt={content.imageAlt || "Slide image"}
          width={200}
          height={200}
          className={style.imageWrapper__img}
        />
        {hover && (
          <div className={style.overlay}>
            <div className={style.profileInfo}>
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
        )}
      </div>
    </div>
  );
};

export default CardItemArtist;
