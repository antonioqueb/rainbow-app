/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{html,js,jsx,ts,tsx}'
    ],
    theme: {
      extend: {
        
        colors: {
          blueprimary: '#26E1FF',
          bluesecondary: '#91F2F2',
          whiteprimary: '#F2F2F2',
          grayprimary: '#595959',
          darkprimary: '#0D0D0D',
        },
        fontFamily: {
          // Añade aquí tus fuentes personalizadas
          rubik: ['Roboto', 'sans-serif'], // Asegúrate de tener 'Roboto' cargada en tu proyecto
          // Puedes seguir añadiendo otras familias de fuentes según necesites
        },
      },
    },
    plugins: [],
  };
  