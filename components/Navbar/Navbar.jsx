import Link from "next/link";
import Image from "next/image";
import styles from './Navbar.module.css'; // Importa el módulo CSS

const NavbarComponent = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>
      <Image src="/pride.png" alt="Logo" width={100} height={100} />
    </div>
    <div className={styles.navigation}>
      <Link href="/nosotros" passHref><span className={styles.rainbow1}>Nosotros</span></Link>
      <Link href="/contacto" passHref><span className={styles.rainbow2}>Contacto</span></Link>
      <Link href="/eventos" passHref><span className={styles.rainbow3}>Eventos</span></Link>
      <Link href="/donaciones" passHref><span className={styles.rainbow4}>Donaciones</span></Link>
      <Link href="/recursos" passHref><span className={styles.rainbow5}>Recursos</span></Link>
      <Link href="/galeria" passHref><span className={styles.rainbow6}>Galería</span></Link>
    </div>
  </nav>
);

export default NavbarComponent;
