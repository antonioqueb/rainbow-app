import React from 'react';
import style from './Slide.module.css';
import Image from 'next/image';

const Slide = ({ content }) => {
  return (
    <div className={style.slide}>
      <div className={style.imageWrapper}>
        <div className={style.category}>{content.category}</div>
        <Image
          src={content.imageUrl}
          alt={content.imageAlt || "Slide image"}
          width={500}
          height={500} 
        />
      </div>
      <section className={style.slide__content}>
        <h2 className={style.title}>{content.title}</h2>
        <p className={style.description}>{content.description.substring(0, 28) + " ..." }</p>
      </section>
    </div>
  );
};

export default Slide;
