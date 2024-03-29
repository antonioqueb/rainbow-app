import styles from './CardProfile.module.css';
import Image from 'next/image';

export const CardProfile = () => {




  return (
    <section className={styles['CardProfile']}>
        <header className={styles['CardProfile__CardProfile__header']} >
          <div className={styles['CardProfile__CardProfile__header__img']} >
            <Image src='/artist/artist.jpeg' alt='perfil' width={100} height={100}  className={styles['CardProfile__CardProfile__header__img__Image']}/>
            <div className={styles['CardProfile__CardProfile__header__title']} >
            <h5>@ariadnarte</h5>
            </div>
          </div>
          <div className={styles['CardProfile__CardProfile__header__details']} >
            <div className={styles['CardProfile__CardProfile__header__details__item']} >
              <p>10k</p>
              <h4>Seguidores</h4>
             
            </div>
            <div className={styles['CardProfile__CardProfile__header__details__item']} >
              <p>2.1k</p>
              <h4>Seguidos</h4>
              
            </div>
            <div className={styles['CardProfile__CardProfile__header__details__item']} >
              <p>1k</p>
              <h4>Publicaciones</h4>
            </div>
          

          </div>
          </header>
          
    </section>
  );
}

export default CardProfile;
