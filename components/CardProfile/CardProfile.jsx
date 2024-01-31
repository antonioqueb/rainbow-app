'use client';
import styles from './CardProfile.module.css';
import Image from 'next/image';
import useSlider from '../../hooks/useSlider';
import slidesData from '../../data/slides.json';
import CardItemArtistProfile from '../CardItemArtistProfile/CardItemArtistProfile';

export const CardProfile = () => {


  const { currentSlide, next, prev } = useSlider(slidesData.length);
  const slidesToShow = 12;

  // Calcular los índices de las tarjetas a mostrar
  const slidesToRender = slidesData.slice(currentSlide, currentSlide + slidesToShow).concat(
    slidesData.slice(0, Math.max(slidesToShow - (slidesData.length - currentSlide), 0))
  );


  return (
    <section className={styles['CardProfile']}>
      <div className={styles['CardProfile__left']} >
        <header className={styles['CardProfile__CardProfile__left__header']} >
          <div className={styles['CardProfile__CardProfile__left__header__img']} >
            <Image src='/artist/artist.jpeg' alt='perfil' width={100} height={100}  className={styles['CardProfile__CardProfile__left__header__img__Image']}/>
            <div className={styles['CardProfile__CardProfile__left__header__title']} >
            <h3>@ariadnarte</h3>
            </div>
          </div>
          <div className={styles['CardProfile__CardProfile__left__header__details']} >
            <div className={styles['CardProfile__CardProfile__left__header__details__item']} >
              <p>10k</p>
              <h4>Seguidores</h4>
             
            </div>
            <div className={styles['CardProfile__CardProfile__left__header__details__item']} >
              <p>2.1k</p>
              <h4>Seguidos</h4>
              
            </div>
            <div className={styles['CardProfile__CardProfile__left__header__details__item']} >
              <p>1k</p>
              <h4>Publicaciones</h4>
            </div>
          

          </div>
          

         
        </header>
          {slidesToRender.map((slide, index) => (
          <div className={styles['CardProfile__CardProfile__left__cardsContainer_grid']} key={slide.id}>
            <CardItemArtistProfile content={slide} />
          </div>
          ))} 
      </div>
      <div className={styles['CardProfile__right']} >    
      </div>
      
    </section>
  );
}

export default CardProfile;
