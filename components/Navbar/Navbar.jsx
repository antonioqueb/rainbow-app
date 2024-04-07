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

  const handleSearch = () => {
    // Aquí puedes implementar la lógica para manejar la búsqueda
    console.log('Realizar búsqueda...');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);  
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };  

  let navbarClasses = [styles.navbar];
  if (scrolled) {
    navbarClasses.push(styles.scrolled);
  }



  return (
    <>
      <nav className={navbarClasses.join(' ')}>


        <div className={styles['navbar__logo']}>
          <Link href='/'>
            <Image src='/logo-b.svg' alt='Logo Ark Project' width={95} height={95} />
          </Link>
        </div>











        <div className={styles['navbar__navigation']} >
       
         <div className={styles['menu']}>
          {links.map(({ href, label, key }) => (
            <Link href={href} key={key}  style={{ textDecoration: 'none', display: isSidebarOpen ? 'none' : 'flex' }} className={styles['navbar__link']}>
              <span className={styles['navbar__item']}>{label}</span>
            </Link>
          ))}
          </div>
          <section className={styles['search']}>
            <input type="text" placeholder="Buscar..." className={styles['search__input']} />
            <button className={styles['search__button']} onClick={handleSearch}>
              Buscar
            </button>
          </section>

       
        

        </div>
        
        


         
        



        <div className={styles['navbar__icons']} onClick={toggleSidebar}>



          <div className={styles['navbar__gamification']}>
            <Image src='/gamification/gema.png' alt='Gema' width={35} height={35} />
            <p>1136</p>

          </div>

          <Image src='/artist/artist.jpeg' alt='Logo' width={60} height={60} className={styles['navbar__profile']} />
          <GrMoreVertical className={styles['navbar__icon']} />

        </div>



      </nav>
      {isSidebarOpen && <SidebarComponent onClose={closeSidebar} />} {/* Renderización condicional del Sidebar */}
    </>
  );
};

export default NavbarComponent;
