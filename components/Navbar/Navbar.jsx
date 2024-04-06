'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { GrMoreVertical } from 'react-icons/gr';
import SidebarComponent from '../SidebarComponent/SidebarComponent';

const links = [
  
  { href: '/explorar', label: 'Explorar', key: 'explorar' },
  { href: '/tienda', label: 'Tienda', key: 'tienda' },
  { href: 'https://docs.google.com/forms/d/e/1FAIpQLSeLBSBXjW1vIp0DMtsT0m7leWSYeZU1TNGvsiZlVPaFDKDkyg/viewform', label: 'Colaborar', key: 'colaborar' }
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
          <Link href='/'>
            <Image src='/logo-b.svg' alt='Logo Ark Project' width={75} height={75} />
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
         <div className={styles['navbar__gamification']}>
         <Image src='/gamification/gema.png' alt='Gema' width={40} height={40} />
         <p>136</p>

         </div>

          <Image src='/artist/artist.jpeg' alt='Logo' width={45} height={45} className={styles['navbar__profile']} />
          <GrMoreVertical className={styles['navbar__icon']} />

        </div>
      </nav>
      {isSidebarOpen && <SidebarComponent onClose={closeSidebar} />} {/* Renderización condicional del Sidebar */}
    </>
  );
};

export default NavbarComponent;
