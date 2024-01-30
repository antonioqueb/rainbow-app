
  //LastNews
import React from 'react';
import styles from './LastNews.module.css';
import { CardPost } from '../CardPost/CardPost';

export const LastNews = () => {
  return (
    <>
    <div className={styles.LastNews__container__title}>
      <h3 className={styles.LastNews__title}>Últimos Artículos</h3>
    
    </div>
    <div className={styles.LastNews__container}>
      
      <CardPost Titulo="¿Cómo comenzar si sueño con ser artista?" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet enim tortor at auctor urna nunc id cursus. Quis varius quam quisque id." ImagePost="/cover/1.jpg" />
      <CardPost Titulo="La fantasía y el arte" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet enim tortor at auctor urna nunc id cursus. Quis varius quam quisque id." ImagePost="/cover/2.jpg"/>
      <CardPost Titulo="NSFW y arte queer" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet enim tortor at auctor urna nunc id cursus. Quis varius quam quisque id." ImagePost="/cover/3.jpg"/>
      <CardPost Titulo="Emprendiendo como artista independiente" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet enim tortor at auctor urna nunc id cursus. Quis varius quam quisque id." ImagePost="/cover/4.jpg"/>
      
    </div>
    </>
  );
}

export default LastNews;