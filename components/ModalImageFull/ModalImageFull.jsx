import React from 'react';
import styles from './ModalImageFull.module.css';
import Image from 'next/image';
import { AiOutlineFullscreenExit } from "react-icons/ai";

export const ModalImageFull = () => {
  return (
    <section className={styles['ModalImageFull__section']}>



   









      {/* Contenido de la imagen a la izquierda */}
      <div className={styles['ModalImageFull__section__content']}>

           {/* Botón de cierre en la esquina superior derecha */}
      <div className={styles['ModalImageFull__section__close__modal']}>
        <button className={styles['ModalImageFull__section__close__modal__button']}>
          <AiOutlineFullscreenExit  className={styles['ModalImageFull__section__close__modal__button__icon']} />
        </button>
      </div>

          {/* Imagen de perfil */}
          <Image
            src='/Trend/3.jpeg'
            alt='perfil'
            width={900}
            height={900}
            className={styles['ModalImageFull__section__image__Image']}
          />
        
      </div>

   





      {/* Seccion a la derecha */}
      <section className={styles['ModalImageFull__section__comments']}>
      <div className={styles['ModalImageFull__section__info__artist']}>

        <div className={styles['ModalImageFull__section__info__artist__text']}>
        <div className={styles['ModalImageFull__section__info__artist__avatar']}>
          {/* Imagen de perfil */}
          <Image src='/artist/artist.jpeg' alt='perfil' width={70} height={70} className={styles['ModalImageFull__section__info__artist__avatar__img']} />
        </div>
        <div className={styles['ModalImageFull__section__info__artist__name__and__username']}>
        <div className={styles['ModalImageFull__section__info__artist__name']}>
          <p>Ariadna García</p>
          <span>• 1 sem</span>
        </div>
        <div className={styles['ModalImageFull__section__info__artist__username']}>
          <p>@ariadnarte</p>
          </div>
        </div>
        </div>
        <div className={styles['ModalImageFull__section__info__artist__follow']}>
          <button className={styles['ModalImageFull__section__info__artist__follow__button']}>Seguir</button>
          </div>
          
      </div>

      <div className={styles['ModalImageFull__section__info__artist__description']}>
        <p>¡Hola! Soy Ariadna, una artista digital que se dedica a crear ilustraciones personalizadas. Me encanta dibujar y pintar, y me encantaría compartir mi arte contigo. Si te gusta lo que ves, no dudes en seguirme para ver más de mi trabajo. ¡Gracias por tu apoyo! 💖</p>
      </div>

        {/* Comentario ficticio con nombre de usuario y texto */}
        <div className={styles['ModalImageFull__section__comment__group']}>
          <div className={styles['ModalImageFull__section__comment']}>
            <Image
              src='/comments/1.jpeg'
              alt='usuario'
              width={40}
              height={40}
              className={styles['ModalImageFull__section__comment__avatar']}
            />
          <div className={styles['ModalImageFull__section__comment__name__and__username']}>
          <div className={styles['ModalImageFull__section__comment__name']}>
            <p>Rebeca Salas</p>
            <span>• 1 d</span>
          </div>
          <div className={styles['ModalImageFull__section__comment__username']}>
            <p>@rebecasal12</p>
            </div>
          </div>
          </div>
          <div className={styles['ModalImageFull__section__comment__text']}>
            <p>Que bonito, me encanta 💖 </p>
            </div>
        </div>

        
        {/* Comentario ficticio con nombre de usuario y texto */}
        <div className={styles['ModalImageFull__section__comment__group']}>
          <div className={styles['ModalImageFull__section__comment']}>
            <Image
              src='/comments/2.jpeg'
              alt='usuario'
              width={40}
              height={40}
              className={styles['ModalImageFull__section__comment__avatar']}
            />
          <div className={styles['ModalImageFull__section__comment__name__and__username']}>
          <div className={styles['ModalImageFull__section__comment__name']}>
            <p>Emma</p>
            <span>• 1 d</span>
          </div>
          <div className={styles['ModalImageFull__section__comment__username']}>
            <p>@emmanu</p>
            </div>
          </div>
          </div>
          <div className={styles['ModalImageFull__section__comment__text']}>
            <p>Que precioso uwu 💖 </p>
            </div>
        </div>


        {/* Comentario ficticio con nombre de usuario y texto */}
        <div className={styles['ModalImageFull__section__comment__group']}>
          <div className={styles['ModalImageFull__section__comment']}>
            <Image
              src='/comments/4.jpeg'
              alt='usuario'
              width={40}
              height={40}
              className={styles['ModalImageFull__section__comment__avatar']}
            />
          <div className={styles['ModalImageFull__section__comment__name__and__username']}>
          <div className={styles['ModalImageFull__section__comment__name']}>
            <p>Daniel</p>
            <span>• 5 h</span>
          </div>
          <div className={styles['ModalImageFull__section__comment__username']}>
            <p>@danielaguirre</p>
            </div>
          </div>
          </div>
          <div className={styles['ModalImageFull__section__comment__text']}>
            <p>Donde puedo comprar un dibujo personalizado con mi hushband 🙆‍♀️</p>
            </div>
        </div>

        {/* Comentario ficticio con nombre de usuario y texto */}
        <div className={styles['ModalImageFull__section__comment__group']}>
          <div className={styles['ModalImageFull__section__comment']}>
            <Image
              src='/comments/5.jpeg'
              alt='usuario'
              width={40}
              height={40}
              className={styles['ModalImageFull__section__comment__avatar']}
            />
          <div className={styles['ModalImageFull__section__comment__name__and__username']}>
          <div className={styles['ModalImageFull__section__comment__name']}>
            <p>Lorena Mas</p>
            <span>• 4 h</span>
          </div>
          <div className={styles['ModalImageFull__section__comment__username']}>
            <p>@loremas</p>
            </div>
          </div>
          </div>
          <div className={styles['ModalImageFull__section__comment__text']}>
            <p>Es bellisimo por dioooooos 🙆💘</p>
            </div>
        </div>     
        

        {/* Comentario ficticio con nombre de usuario y texto */}
        <div className={styles['ModalImageFull__section__comment__group']}>
          <div className={styles['ModalImageFull__section__comment']}>
            <Image
              src='/comments/6.jpeg'
              alt='usuario'
              width={40}
              height={40}
              className={styles['ModalImageFull__section__comment__avatar']}
            />
          <div className={styles['ModalImageFull__section__comment__name__and__username']}>
          <div className={styles['ModalImageFull__section__comment__name']}>
            <p>Darla Lara</p>
            <span>• 4 h</span>
          </div>
          <div className={styles['ModalImageFull__section__comment__username']}>
            <p>@darlara</p>
            </div>
          </div>
          </div>
          <div className={styles['ModalImageFull__section__comment__text']}>
          <p>Gracias por compartir tu arte /u\</p>
            </div>
        </div>

        {/* Comentario ficticio con nombre de usuario y texto */}
        <div className={styles['ModalImageFull__section__comment__group']}>
          <div className={styles['ModalImageFull__section__comment']}>
            <Image
              src='/comments/7.jpeg'
              alt='usuario'
              width={40}
              height={40}
              className={styles['ModalImageFull__section__comment__avatar']}
            />
          <div className={styles['ModalImageFull__section__comment__name__and__username']}>
          <div className={styles['ModalImageFull__section__comment__name']}>
            <p>Alejandra Casas</p>
            <span>• 1 h</span>
          </div>
          <div className={styles['ModalImageFull__section__comment__username']}>
            <p>@casas_ale</p>
            </div>
          </div>
          </div>
          <div className={styles['ModalImageFull__section__comment__text']}>
            <p>💘💘💘💘💘💘</p>
            </div>
        </div>     
        
           

        {/* Comentario ficticio con nombre de usuario y texto */}
        <div className={styles['ModalImageFull__section__comment__group']}>
          <div className={styles['ModalImageFull__section__comment']}>
            <Image
              src='/comments/8.jpeg'
              alt='usuario'
              width={40}
              height={40}
              className={styles['ModalImageFull__section__comment__avatar']}
            />
          <div className={styles['ModalImageFull__section__comment__name__and__username']}>
          <div className={styles['ModalImageFull__section__comment__name']}>
            <p>Dalí P</p>
            <span>• 1 h</span>
          </div>
          <div className={styles['ModalImageFull__section__comment__username']}>
            <p>@soydalip</p>
            </div>
          </div>
          </div>
          <div className={styles['ModalImageFull__section__comment__text']}>
            <p>Es excentrico, una delicia.</p>
            </div>
        </div>


           
           



      </section>


    </section>
  );
}

export default ModalImageFull;
