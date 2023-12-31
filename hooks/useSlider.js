// hooks/useSlider.js

"use client";
// use client
import { useState } from 'react';

const useSlider = (length) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide(current => (current === length - 1 ? 0 : current + 1));
  };

  const prev = () => {
    setCurrentSlide(current => (current === 0 ? length - 1 : current - 1));
  };

  return { currentSlide, next, prev };
};

export default useSlider;
