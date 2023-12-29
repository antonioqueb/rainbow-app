// Boton.js
import React from 'react';
import styles from './Buttom.module.css'; // Importa tu archivo de módulo CSS

const Boton = ({ placeholder }) => {
  
    return (
    <button className={styles.boton} >
      {placeholder}
    </button>
  );
};

export default Boton;
