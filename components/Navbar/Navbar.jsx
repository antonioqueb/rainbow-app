'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from './Navbar.module.css';
import { GrMoreVertical } from "react-icons/gr";
import SidebarComponent from '../SidebarComponent/SidebarComponent';

const links = [
  { href: "/colaborar", label: "Colaborar", key: "colaborar" },
  { href: "/contacto", label: "Contacto", key: "contacto" },
  { href: "/blog", label: "Blog", key: "blog" },
  { href: "/nosotros", label: "Nosotros", key: "nosotros" },
];

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = [styles.navbar];
  if (scrolled) {
    navbarClasses.push(styles.scrolled);
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);  
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };  




  return (
    <>
      <nav className={navbarClasses.join(' ')}>
        <div className={styles['navbar__logo']}>
          <Link href="/">
            <Image src="/logo-b.png" alt="Logo" width={70} height={70} />
          </Link>
        </div>

        <div className={styles['navbar__navigation']} >
          {links.map(({ href, label, key }) => (
            <Link href={href} key={key}  style={{ textDecoration: 'none', display: isSidebarOpen ? 'none' : 'flex' }}>
              <span className={styles['navbar__item']}>{label}</span>
            </Link>
          ))}
        </div>

        <div className={styles['navbar__icons']} onClick={toggleSidebar}>
          <GrMoreVertical className={styles['navbar__icon']} />
        </div>
      </nav>
      {isSidebarOpen && <SidebarComponent onClose={closeSidebar} />} {/* Renderización condicional del Sidebar */}
    </>
  );
};

export default NavbarComponent;
