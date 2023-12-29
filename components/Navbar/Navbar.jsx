import Link from "next/link";
import Image from "next/image";
import styles from './Navbar.module.css';
import { FaShoppingCart, FaUserAlt  } from "react-icons/fa";
import { BsSearchHeartFill } from "react-icons/bs";
import Buttom from '../Client/Buttom/Buttom'
import { GrMoreVertical } from "react-icons/gr";



const NavbarComponent = () => (

  
  <nav className={styles.navbar}>
  
    {/* Bloque: navbar__section */}
    <section className={styles['navbar__section--start']}>
      {/* Elemento: navbar__logo */}
      <div className={styles['navbar__logo']}>
        <Link href="/">
          {/* Modificador: navbar__logo-text */}
          <h1 className={styles['navbar__logo-text']}>ARK PROJECT</h1>
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
        <Buttom placeholder="Iniciar sesión" />
        
        <Buttom placeholder="Registrarse" />

      </div>
      <div className={styles['navbar__icons']}>
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
