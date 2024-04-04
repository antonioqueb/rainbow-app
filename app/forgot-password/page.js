'use client'
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import styles from './ForgotPassword.module.css'; 

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      alert(error.message);
      setLoading(false);
    } else {
      setMessage('Revisa tu correo electrónico para el enlace de restablecimiento de contraseña.');
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Restablecer Contraseña</h1>
      <form onSubmit={handleResetPassword} className={styles.form}>
        <input 
          className={styles.input}
          type="email" 
          placeholder="Tu correo electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          type="submit" 
          disabled={loading} 
          className={`${styles.button} ${loading ? styles.buttonDisabled : ''}`}
        >
          {loading ? 'Enviando...' : 'Restablecer Contraseña'}
        </button>
        {message && <p className={styles.message}>{message}</p>}
      </form>
    </div>
  );
}
