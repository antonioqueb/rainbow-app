import style from './politica-cookies.module.css'
import Image from "next/image"

export default function PoliticaCookies() {
  return (
    <>
      <div className={style.container}>
        
        <div className={style.container__title}>
          <h1 className={style.title}>Política de Cookies</h1>
        </div>
        
        <div className={style.container__text}>
          <h2 className={style.heading}>1. Introducción</h2>
          <p className={style.text}>
            En ARK PROJECT, utilizamos cookies y tecnologías similares para mejorar la experiencia de nuestros usuarios y personalizar el contenido y los anuncios, proporcionar funcionalidades a las redes sociales y analizar nuestro tráfico. Esta política explica cómo lo hacemos.
          </p>

          <h2 className={style.heading}>2. ¿Qué son las Cookies?</h2>
          <p className={style.text}>
            Las cookies son pequeños archivos de texto que los sitios web pueden usar para hacer más eficiente la experiencia del usuario. Se guardan en tu dispositivo cuando el sitio web se carga en tu navegador.
          </p>

          <h2 className={style.heading}>3. Tipos de Cookies que Utilizamos</h2>
          <p className={style.text}>
            Utilizamos tanto cookies de sesión como persistentes. Las cookies de sesión son temporales y se eliminan cuando cierras el navegador, mientras que las cookies persistentes permanecen en tu dispositivo hasta que se cumplen sus criterios de caducidad o hasta que las elimines manualmente.
          </p>

          <h2 className={style.heading}>4. Uso de Cookies</h2>
          <p className={style.text}>
            Utilizamos cookies para varias funciones, como asegurar que nuestro sitio web funcione de manera eficiente, entender las preferencias de nuestros usuarios, mejorar la experiencia general, y mantener segura nuestra plataforma.
          </p>

          <h2 className={style.heading}>5. Cookies de Terceros</h2>
          <p className={style.text}>
            Además de nuestras propias cookies, también utilizamos varias cookies de terceros para informar sobre las estadísticas del uso del sitio, entregar anuncios en y a través del servicio, y así sucesivamente.
          </p>

          <h2 className={style.heading}>6. Control de Cookies</h2>
          <p className={style.text}>
            Puedes controlar y administrar las cookies en tu navegador. Si eliges eliminar cookies, la configuración y preferencias controladas por estas cookies, incluidas las preferencias de publicidad, se eliminarán y podrían necesitar ser recreadas.
          </p>

          <h2 className={style.heading}>7. Cambios en la Política de Cookies</h2>
          <p className={style.text}>
            Podemos actualizar nuestra Política de Cookies ocasionalmente. Te informaremos sobre cualquier cambio publicándolo en esta página.
          </p>

          <h2 className={style.heading}>8. Contacto</h2>
          <p className={style.text}>
            Si tienes preguntas sobre nuestra Política de Cookies, contáctanos en: Email: contacto@arkprj.com Dirección: Naranjo 355, Atlampa CDMX, C.P: 06450.
          </p>
        </div>
      </div>
    </>
  )
}
