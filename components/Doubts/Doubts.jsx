
  //Doubts
  import React from 'react';
import styles from './Doubts.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const Doubts = () => {
  return (
    <div className={styles.Doubts__container}>
      <div className={styles.Doubts__container__text__and__form}>
      <div className={styles.Doubts__container__text}>
        <h2 className={styles.Doubts__title}>¿Requieres asistencia?</h2>
        
      </div>


      <div className={styles.Doubts__container__text__form}>
        <form action="" className={styles.Doubts__container__text__form__container}>
          <input type="text" placeholder="Correo Electrónico" className={styles.Doubts__container__text__form__input }/>
          <button  className={styles.Doubts__container__text__form__button }><p className={styles['text__buttom']} >Enviar</p></button>
        </form>
        <span className={styles.Doubts__container__text__form__span}>Al enviar aceptas nuestros <Link className={styles.Doubts__container__text__form__Link } href="/" style={{ textDecoration: 'none'}}>Terminos y condiciones.</Link></span>
        </div>

      </div>
      <Image src="/ark/contact.svg" alt="Doubts" width={600} height={600}   
          className={styles.Doubts__container__image}/>

     
      
    </div>
  );
}

export default Doubts;