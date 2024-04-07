// components/ContentCardArtist/ContentCardArtist.jsx
"use client";

import React from 'react';
import useSlider from '../../hooks/useSlider';
import CardItemArtist from '../CardItemArtist/CardItemArtist';
import style from './ContentCardArtist.module.css';
import slidesData from '../../data/slides.json';


const ContentCardArtist = () => {
  const { currentSlide, next, prev } = useSlider(slidesData.length);
  const slidesToShow = 12;

  // Calcular los índices de las tarjetas a mostrar
  const slidesToRender = slidesData.slice(currentSlide, currentSlide + slidesToShow).concat(
    slidesData.slice(0, Math.max(slidesToShow - (slidesData.length - currentSlide), 0))
  );

  return (
    <div className={style.cardGrid}>
      {slidesToRender.map((slide, index) => (
        <div className={style.cardGrid__item} key={slide.id}>
          <CardItemArtist content={slide} />
        </div>
      ))}
      </div>
  );
};



export default ContentCardArtist;
