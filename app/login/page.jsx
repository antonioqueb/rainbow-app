import { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image'; // Asegúrate de usar este componente si es necesario, de lo contrario, puedes quitarlo.
import Link from 'next/link';
import { supabase } from './../../lib/supabaseClient'; // Verifica que la ruta de importación sea correcta.

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Función para manejar el envío del formulario de inicio de sesión
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    setLoading(true); // Activar el indicador de carga

    // Intento de inicio de sesión con Supabase
    const { error } = await supabase.auth.signIn({
      email,
      password,
    });

    setLoading(false); // Desactivar el indicador de carga

    if (error) {
      alert(error.message); // Mostrar mensaje de error
    } else {
      // Navegación a otra página o actualización del estado global del usuario
    }
  };

  return (
    <div className={styles['login-page']}>
      <div className={styles['login-page__form-section']}>
        <h1 className={styles['login-page__heading']}>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className={styles['login-page__form']}>
          <div className={styles['form__input-group']}>
            <label htmlFor="email" className={styles['form__label']}>Usuario</label>
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
            <Link href="/forgot-password">¿Olvidaste la contraseña?</Link>
          </div>
          <button type="submit" disabled={loading} className={styles['form__submit-button']}>
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>
          <div className={styles['form__signup-link']}>
            <Link href="/registro">¿No tienes una cuenta? Regístrate</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
