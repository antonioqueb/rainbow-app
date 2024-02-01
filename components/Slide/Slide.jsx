import style from './Slide.module.css';
import Image from 'next/image';
import SkeletonSlide from './SkeletonSlide';
import { useState } from 'react';

const Slide = ({ content }) => {
  const [loading, setLoading] = useState(true);

  // Función para manejar la carga de la imagen
  const handleImageLoad = () => {
    setLoading(false);
  };

  if (loading) {
    return <SkeletonSlide />;
  }

  return (
    <div id="explorar" className={style.slide}>
      <div className={style.imageWrapper}>
        <div className={style.category}>{content.category}</div>
        <Image
          src={content.imageUrl}
          alt={content.imageAlt || "Slide image"}
          width={500}
          height={500}
          onLoad={handleImageLoad} // Manejar la carga de la imagen
        />
      </div>
      <section className={style.slide__content}>
        <h4 className={style.title}>{content.title}</h4>
        <p className={style.description}>{content.description.substring(0, 53) + "..." }</p>
      </section>
    </div>
  );
};

export default Slide;
