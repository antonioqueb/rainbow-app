
  //Footer
import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__container}>
        <div className={styles.Footer__container__row}>
          <div className={styles.Footer__container__row__footer__links}>
            <h4 className={styles.Footer__container__footer__links__title}>ARK PROJECT</h4>
            <ul className={styles.Footer__container__footer__links__list}>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/nosotros" style={{ textDecoration: 'none'}}>
                  <span className={styles.Footer__container__footer__links__list__item__link}>¿Porqué Nosotros?</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/contacto" style={{ textDecoration: 'none'}}>
                  <span className={styles.Footer__container__footer__links__list__item__link}>Contacto</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/login" style={{ textDecoration: 'none'}}>
                  <span className={styles.Footer__container__footer__links__list__item__link}>Login</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/registro"  style={{ textDecoration: 'none'}}>
                  <span className={styles.Footer__container__footer__links__list__item__link}>Registro</span>
                </Link>
              </li>

            </ul>
          </div>
          <div className={styles.Footer__container__row__footer__links}>
            <h4 className={styles.Footer__container__footer__links__title}>Ayuda</h4>
            <ul className={styles.Footer__container__footer__links__list}>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/aviso-de-privacidad" style={{ textDecoration: 'none'}}>
                  <span className={styles.Footer__container__footer__links__list__item__link}>Aviso de privacidad</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/politica-de-cookies" style={{ textDecoration: 'none'}}>
                  <span className={styles.Footer__container__footer__links__list__item__link}>Política de cookies</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/politica-de-privacidad" style={{ textDecoration: 'none'}}>
                  <span className={styles.Footer__container__footer__links__list__item__link}>Política de privacidad</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/terminos-y-condiciones" style={{ textDecoration: 'none'}}>
                  <span className={styles.Footer__container__footer__links__list__item__link}>Terminos y Condiciones</span>
                </Link>
              </li>
              
            </ul>
          </div>
          <div className={styles.Footer__container__row__footer__links}>
            <h4 className={styles.Footer__container__footer__links__title}>Blog</h4>
            <ul className={styles.Footer__container__footer__links__list}>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/about" style={{ textDecoration: 'none'}}>
                  <span className={styles.Footer__container__footer__links__list__item__link}>¿Cómo comenzar si sueño con ser artista?</span>
                </Link>
              </li>           
            </ul>
          </div>
          <div className={styles.Footer__container__row__footer__links}>
            <h4 className={styles.Footer__container__footer__links__title}>Síguenos</h4>
            <div className={styles.Footer__container__footer__links__title__social__link}>
              <Link href="https://www.facebook.com/ark.for.art" style={{ textDecoration: 'none'}}>
                <FaFacebook className={styles.Footer__container__footer__links__title__social__link__icon} />
              </Link>
              <Link href="https://twitter.com/ArkProject_Art" style={{ textDecoration: 'none'}}>
                <FaXTwitter className={styles.Footer__container__footer__links__title__social__link__icon} />
              </Link>
              <Link href="https://www.instagram.com/arkproject.mx/" style={{ textDecoration: 'none'}}>
                <FaInstagram className={styles.Footer__container__footer__links__title__social__link__icon} />
              </Link>
              <Link href="https://www.tiktok.com/@arkproject.mx" style={{ textDecoration: 'none'}}>
                <FaTiktok className={styles.Footer__container__footer__links__title__social__link__icon} />
              </Link>


            </div>
          </div>
          
        </div>
      </div>
      
    </div>

  );
}

export default Footer;