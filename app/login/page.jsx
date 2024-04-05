'use client'
import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import  {supabase}  from '../../lib/supabaseClient'; 
import Image from 'next/image'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Función para manejar el envío del formulario de inicio de sesión
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    setLoading(true); // Activar el indicador de carga

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    
    

    setLoading(false); // Desactivar el indicador de carga

    if (error) {
      alert(error.message); // Mostrar mensaje de error
    } else {
      window.location.href = '/';

    }
  };

  return (
    <div className={styles['login-page']}>
      <div className={styles['login-page__start']}>
        <Link href='/' >
        <Image alt='Logo' src='./logo-b.svg' width={250} height={250} />
        </Link> 
        
      
        <h1 className={styles['login-page__start__title']}>Impulsa y celebra artistas LGBTQ+ ofreciendo un espacio seguro y oportunidades de crecimiento artístico.</h1>
      </div>
      <div className={styles['login-page__end']}>
      <div className={styles['login-page__form-section']}>
        <h1 className={styles['login-page__heading']}>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className={styles['login-page__form']}>
          <div className={styles['form__input-group']}>
            <label htmlFor="email" className={styles['form__label']}>Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles['form__input']} autoComplete="off"/>
          </div>
          <div className={styles['form__input-group']}>
            <label htmlFor="password" className={styles['form__label']}>Contraseña</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles['form__input']} autoComplete="off"/>
          </div>
          <div className={styles['form__checkbox-group']}>
            <input type="checkbox" id="remember" name="remember" className={styles['form__checkbox']}/>
            <label htmlFor="remember" className={styles['form__label']}>Recuérdame</label>
          </div>
          <div className={styles['form__forgot-password']}>
            <Link style={{textDecoration:"none", color:'white'}} href="/forgot-password">¿Olvidaste la contraseña?</Link>
          </div>
          <button type="submit" disabled={loading} className={styles['form__submit-button']}>
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>
          <div className={styles['form__signup-link']}>
            <Link style={{textDecoration:"none", color:'white'}} href="/registro">¿No tienes una cuenta? Regístrate</Link>
          </div>
        </form>
      </div>
      </div>
      
    </div>
  );
}
