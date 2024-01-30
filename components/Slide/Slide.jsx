import style from './Slide.module.css';
import Image from 'next/image';
import SkeletonSlide from './SkeletonSlide'; // Importa el componente de esqueleto
import { useState, useEffect } from 'react';


const Slide = ({ content }) => {
  const [loading, setLoading] = useState(true);

  // Simular la carga de imagen o datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 250); // Ajusta el tiempo según sea necesario
    return () => clearTimeout(timer);
  }, [content]); // Dependencia para recargar si el contenido cambia

  if (loading) {
    return <SkeletonSlide />;
  }
  return (
    <div  id="explorar" className={style.slide}>
      <div className={style.imageWrapper}>
        <div className={style.category}>{content.category}</div>
        <Image
          src={content.imageUrl}
          alt={content.imageAlt || "Slide image"}
          width={500}
          height={500} 
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,..."
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

