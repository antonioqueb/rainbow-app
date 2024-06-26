// Component {Slide} into CardSlider

import style from './Slide.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SkeletonSlide from './SkeletonSlide'; // Importa el componente de esqueleto
import { useState, useEffect } from 'react';


const Slide = ({ content }) => {
  const [loading, setLoading] = useState(true);

  // Simular la carga de imagen o datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1); // Ajusta el tiempo según sea necesario
    return () => clearTimeout(timer);
  }, [content]); // Dependencia para recargar si el contenido cambia

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
        />
      </div>
      <section className={style.slide__content}>
     
        <div className={style.slide__content__div}>
        <div className={style.slide__content__div__profile}>
        <Image
                className={style.profileImage}
                src={content.profileUrl}
                width={50}
                height={50}
                alt={content.profileAlt || "Profile image"}
              />
          <section className={style.slide__content__user_and_name}>
          <Link href="/" style={{ textDecoration: 'none' }} >
            <h4 className={style.title}>{content.title}</h4>
          </Link>
          <p className={style.username}>{content.user}</p>


          </section>
          </div>
          

          <Link href="/perfil" style={{ textDecoration: 'none' }} className={style['slide__link']}>
            Galería
          </Link>

        </div>
        
      </section>
    </div>
  );
};

export default Slide;

