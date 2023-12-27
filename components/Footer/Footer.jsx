import style from './Footer.module.css'; // Importa el módulo CSS
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = () => (
  <footer className={style.footer}>
    <div className={style.footer__logo}>
      <Image src="/pride.png" alt="Logo" width={100} height={100} />
    </div>
    <div className={style.footer__navigation}>
      <Link href="/nosotros" passHref><span className={style.footer__rainbow1}>Nosotros</span></Link>
      <Link href="/contacto" passHref><span className={style.footer__rainbow2}>Contacto</span></Link>
      <Link href="/eventos" passHref><span className={style.footer__rainbow3}>Eventos</span></Link>
      <Link href="/donaciones" passHref><span className={style.footer__rainbow4}>Donaciones</span></Link>
      <Link href="/recursos" passHref><span className={style.footer__rainbow5}>Recursos</span></Link>
      <Link href="/galeria" passHref><span className={style.footer__rainbow6}>Galería</span></Link>
    </div>
    <div className={style.footer__social}>
        <a href="https://www.facebook.com/AsociacionPride/" className={`${style.footer__icon} ${style.facebook}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="1x" /></a>
        <a href="https://www.instagram.com/asociacionpride/" className={`${style.footer__icon} ${style.instagram}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="1x" /></a>
        <a href="https://twitter.com/AsociacionPride" className={`${style.footer__icon} ${style.twitter}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="1x" /></a>
        <a href="https://www.youtube.com/channel/UC3x6QJb0Xa5dX8FQ5WU2y6A" className={`${style.footer__icon} ${style.youtube}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} size="1x" /></a>
    </div>

  </footer>
);

export default FooterComponent;
