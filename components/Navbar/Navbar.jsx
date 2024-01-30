import Link from "next/link";
import Image from "next/image";
import styles from './Navbar.module.css';
import { FaShoppingCart, FaUserAlt  } from "react-icons/fa";
import { BsSearchHeartFill } from "react-icons/bs";
import Buttom from '../Client/Buttom/Buttom'
import { GrMoreVertical } from "react-icons/gr";
import { FaUserLarge } from "react-icons/fa6";
import { FaMicrophoneAlt } from "react-icons/fa";
import { MdOutlineEmojiEvents } from "react-icons/md";






const NavbarComponent = () => (

  
  <nav className={styles.navbar}>
  
    <section className={styles['navbar__section--start']}>
      {/* Elemento: navbar__logo */}
      <div className={styles['navbar__logo']}>
        <Link href="/">
          {/* Modificador: navbar__logo-text */}
          <Image src="/logo-b.svg" alt="Logo" width={90} height={90} />
        </Link>
      </div>
      
      {/* Elemento: navbar__navigation */}
      <div className={styles['navbar__navigation']}>
        <Link href="/explorar">
          {/* Modificador: navbar__item */}
          <span className={styles['navbar__item']}>Explorar</span>
        </Link>
        <Link href="/tienda">
          <span className={styles['navbar__item']}>Tienda</span>
        </Link>
        <Link href="/colaborar">
          <span className={styles['navbar__item']}>Colaborar</span>
        </Link>
      </div>
    </section>

    <section className={styles['navbar__section--center']}>
      <div className={styles['navbar__finder']}>
        <input type="text" placeholder="Buscar" className={styles['navbar__search-input']} />
        <button className={styles['navbar__search-button']}>
          <BsSearchHeartFill className={styles['navbar__icon']} />
        </button>
      </div>
    </section>

    <section className={styles['navbar__section--end']}>
      <div className={styles['navbar__buttoms']}>
        <div className={styles['navbar__podcast']}>
        <button class={styles['bookmarkBtn']}>
          <span class={styles['IconContainer']}>
            <FaMicrophoneAlt className={styles['navbar__icon_podcast']} />
          </span>
          <p class={styles['text']}>Podcast</p>
        </button>

          
        </div>
         <div className={styles['navbar__podcast']}>
        <button class={styles['bookmarkBtn']}>
          <span class={styles['IconContainer']}>
            <MdOutlineEmojiEvents className={styles['navbar__icon_event']} />
          </span>
          <p class={styles['text']}>Eventos</p>
        </button>

          
        </div>

      </div>
      <div className={styles['navbar__icons']}>
        <div className={styles['navbar__login']}>
        <Link href="/login">
          <FaUserLarge className={styles['navbar__icon']} />
        </Link>
      </div>
      <div className={styles['navbar__cart']}>
        <Link href="/carrito">
          <FaShoppingCart className={styles['navbar__icon']} />
        </Link>
      </div>
      <div className={styles['navbar__user']}>
        <Link href="/usuario">
          <GrMoreVertical className={styles['navbar__icon']} />
        </Link>
      </div>
      </div>
    </section>

  </nav>
);

export default NavbarComponent;
