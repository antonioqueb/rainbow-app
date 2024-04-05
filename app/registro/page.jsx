'use client'
import { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image'; // Si no usas este componente, puedes eliminar esta línea.
import Link from 'next/link';
import { supabase } from '../../lib/supabaseClient'; // Asegúrate de que la ruta es correcta.
import { Toaster, toast } from 'sonner';


export default function RegistroPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState(''); // Asumiendo que quieres guardar el nombre de usuario, aunque Supabase no usa este campo por defecto para el registro.
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario.

    if (password !== confirmPassword) {
      toast.error('Las contraseñas no coinciden.');
      return;
    }
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Registro exitoso. Por favor, verifica tu email.');
      // Redireccionar a la página de inicio de sesión o donde prefieras.
      window.location.href = '/login';
    }
    
  };

  return (
    <div className={styles['login-page']}>
     <Toaster />
      <div className={styles['login-page__form-section']}>
        <h1 className={styles['login-page__heading']}>¡Registrarme!</h1>
        <form onSubmit={handleRegister} className={styles['login-page__form']}>
          <div className={styles['form__input-group']}>
            <label htmlFor="email" className={styles['form__label']}>Correo</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles['form__input']} autoComplete="off"/>
          </div>
          <div className={styles['form__input-group']}>
            <label htmlFor="new-username" className={styles['form__label']}>Usuario</label>
            <input type="text" id="new-username" value={username} onChange={(e) => setUsername(e.target.value)} className={styles['form__input']} autoComplete="off"/>
          </div>
          <div className={styles['form__input-group']}>
            <label htmlFor="new-password" className={styles['form__label']}>Contraseña</label>
            <input type="password" id="new-password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles['form__input']} autoComplete="off"/>
          </div>
          <div className={styles['form__input-group']}>
            <label htmlFor="confirm-password" className={styles['form__label']}>Confirmar Contraseña</label>
            <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={styles['form__input']} autoComplete="off"/>
          </div>
          <button type="submit" className={styles['form__submit-button']}>Registrarme</button>
          <div className={styles['form__signup-link']}>
            <Link href="/login" style={{textDecoration: 'none', color: 'white'}}>Ya tengo cuenta, iniciar sesión.</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
