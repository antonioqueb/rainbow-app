import React from 'react';
import styles from './SidebarComponent.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { MdHomeFilled } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";
import { MdContactPage } from 'react-icons/md';
import { FaBlog } from 'react-icons/fa';
import { MdDeveloperMode } from "react-icons/md";
import { FaCloud } from "react-icons/fa6";
import { SiAffinitydesigner } from "react-icons/si";
import { PiStrategyBold } from "react-icons/pi";
import { HiSupport } from "react-icons/hi";
import { MdSettingsSuggest } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { SiHiveBlockchain } from "react-icons/si";
import { AiFillBulb } from "react-icons/ai";
import { GrMoreVertical } from "react-icons/gr";
import { MdOutlineFindReplace } from "react-icons/md";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";
import { LiaCookieSolid } from "react-icons/lia";
import { TbMoneybag } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";












const SidebarComponent = ({onClose}) => {
  return (
    <div className={styles.sidebar}>
      <section className={styles.sidebar_section}>
        
        {/* Icono del Menú y Título */}
        <div className={styles.Hero__container__header}>
        <Image src="/logo-b.png" alt="Logotipo de la marca Ark to Art" width={70} height={70}/>
      </div>

        {/* Links del Menú */}
        <div className={styles.sidebar_links}>
          <Link onClick={onClose} style={{textDecoration: 'none'}} href="/" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            <MdHomeFilled className={styles.sidebar_icon} />
            Inicio
          </Link>
          <Link onClick={onClose} style={{textDecoration: 'none'}} href="/nosotros" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
           <AiFillApi className={styles.sidebar_icon} />
            Nosotros
          </Link>
          <Link onClick={onClose} style={{textDecoration: 'none'}} href="/contacto" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
           <MdContactPage className={styles.sidebar_icon} />
            Contacto
          </Link>
          <Link onClick={onClose} style={{textDecoration: 'none'}} href="/blog" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            <FaBlog className={styles.sidebar_icon} />
            Blog
          </Link> 
         
          <Link onClick={onClose} style={{textDecoration: 'none'}} href="/politica-de-privacidad" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            <RiGitRepositoryPrivateFill className={styles.sidebar_icon} />
            Política de Privacidad
          </Link>
          <Link onClick={onClose} style={{textDecoration: 'none'}} href="/terminos-y-condiciones" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            <IoDocumentText className={styles.sidebar_icon} />
            Términos y Condiciones
          </Link>
          <Link onClick={onClose} style={{textDecoration: 'none'}} href="/aviso-de-privacidad" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            <MdPrivacyTip className={styles.sidebar_icon} />
            Aviso de Privacidad
          </Link>
          <Link onClick={onClose} style={{textDecoration: 'none'}} href="/politica-de-cookies" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            <LiaCookieSolid className={styles.sidebar_icon} />
            Politíca de Cookies
          </Link>


          {/* Categoría: Servicios */}
          <h4 className={styles.sidebar_subtitle}>Servicios</h4>
          <Link onClick={onClose} style={{textDecoration: 'none'}} href="https://docs.google.com/forms/d/e/1FAIpQLSeLBSBXjW1vIp0DMtsT0m7leWSYeZU1TNGvsiZlVPaFDKDkyg/viewform" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            <TbMoneybag className={styles.sidebar_icon} />
            Vender Arte
          </Link>
        <Link onClick={onClose} style={{textDecoration: 'none'}} href="/colabora" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            <GiPayMoney className={styles.sidebar_icon} />
            Comprar Arte
          </Link>
         
          
        </div>
      </section>
    </div>
  );
}

export default SidebarComponent;
