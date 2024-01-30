const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const generateJsTemplate = (name, type) => {
  const componentName = type.toLowerCase() === 'c' ? name : 'Page';
  return `import React from 'react';
import styles from './${name}.module.css';

export const ${componentName} = () => {
  return (
    <section className={styles['${name}__section']}>
      Hola
    </section>
  );
}

export default ${componentName};
`;
};

const generateCssTemplate = (name) => {
  return `.${name}__section {\n  /* Estilos para la sección */\n}\n`;
};

rl.question('¿Componente o Página? (c/p): ', (type) => {
  rl.question('Ingresa el nombre: ', (name) => {
    const directory = type.toLowerCase() === 'c' ? './components' : './app';
    const folderPath = path.join(directory, name);
    const fileName = type.toLowerCase() === 'c' ? `${name}.jsx` : 'page.jsx';
    const jsFilePath = path.join(folderPath, fileName);
    const cssFilePath = path.join(folderPath, `${name}.module.css`);

    const jsContent = generateJsTemplate(name, type);
    const cssContent = generateCssTemplate(name);

    fs.mkdirSync(folderPath, { recursive: true });
    fs.writeFileSync(jsFilePath, jsContent, 'utf8');
    fs.writeFileSync(cssFilePath, cssContent, 'utf8');

    console.log(`Se creó ${type === 'c' ? 'el componente' : 'la página'} ${name} en ${jsFilePath} con su módulo CSS correspondiente en ${cssFilePath}`);
    rl.close();
  });
});
