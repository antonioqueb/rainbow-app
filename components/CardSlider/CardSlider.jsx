// components/CardSlider/CardSlider.jsx
// This is content of Slide
"use client";

import React from 'react';
import useSlider from '../../hooks/useSlider';
import Slide from '../Slide/Slide';
import style from './CardSlider.module.css';
import slidesData from '../../data/slides.json';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const CardSlider = () => {
  const { currentSlide, next, prev } = useSlider(slidesData.length);
  const slidesToShow = 6;

  // Calcular los índices de las tarjetas a mostrar
  const slidesToRender = slidesData.slice(currentSlide, currentSlide + slidesToShow).concat(
    slidesData.slice(0, Math.max(slidesToShow - (slidesData.length - currentSlide), 0))
  );

  return (
    <div className={style.cardSlider}>
      <div className={style.cardSlider__track}>
        {slidesToRender.map((slide, index) => (
          <div className={style.cardSlider__slide} key={slide.id}>
            <Slide content={slide} />
          </div>
        ))}
      </div>
      <button onClick={prev} aria-label="Previous slide">
        <FaChevronCircleLeft style={{ color: 'white', fontSize: '2rem' }} />
      </button>
      <button onClick={next} aria-label="Next slide">
        <FaChevronCircleRight style={{ color: 'white', fontSize: '2rem' }} />
      </button>
    </div>
  );
};

export default CardSlider;


