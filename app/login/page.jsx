import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function PoliticaCookies() {
  return (
    <div className={styles['login-page']}>
      <div className={styles['login-page__form-section']}>
        <h1 className={styles['login-page__heading']}>Iniciar Sesión</h1>
        <form action="#" method="POST" className={styles['login-page__form']}>
          <div className={styles['form__input-group']}>
            <label htmlFor="username" className={styles['form__label']}>Usuario</label>
            <input type="text" id="username" name="username" className={styles['form__input']} autoComplete="off"/>
          </div>
          <div className={styles['form__input-group']}>
            <label htmlFor="password" className={styles['form__label']}>Contraseña</label>
            <input type="password" id="password" name="password" className={styles['form__input']} autoComplete="off"/>
          </div>
          <div className={styles['form__checkbox-group']}>
            <input type="checkbox" id="remember" name="remember" className={styles['form__checkbox']}/>
            <label htmlFor="remember" className={styles['form__label']}>Recuerdame</label>
          </div>
          <div className={styles['form__forgot-password']}>
            <Link href="#" className={styles['form__link']} style={{textDecoration: 'none'}}>Forgot Password?</Link>
          </div>
          <button type="submit" className={styles['form__submit-button']}>Iniciar</button>
          <div className={styles['form__signup-link']}>
            <Link href="/registro" className={styles['form__link']} style={{textDecoration: 'none'}}>Registrarme</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
