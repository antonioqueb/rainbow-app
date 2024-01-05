import style from './politica-privacidad.module.css'
import Image from "next/image"

export default function PoliticaPrivacidad() {
  return (
    <>
      <div className={style.container}>
        
        <div className={style.container__title}>
          <h1 className={style.title}>Política de Privacidad</h1>
        </div>
        
        <div className={style.container__text}>
          <h2 className={style.heading}>1. Introducción</h2>
          <p className={style.text}>
            Bienvenido a ARK PROJECT, una agencia dedicada al posicionamiento de artistas en el mercado. Esta política de privacidad explica cómo recopilamos, usamos y compartimos información personal en el curso de nuestro servicio.
          </p>

          <h2 className={style.heading}>2. Datos Personales Recolectados</h2>
          <p className={style.text}>
            Recopilamos datos que incluyen, pero no se limitan a, nombres, direcciones de correo electrónico, números de teléfono, información demográfica, preferencias artísticas, portafolios de trabajos, y datos financieros.
          </p>

          <h2 className={style.heading}>3. Métodos de Recolección de Datos</h2>
          <p className={style.text}>
            Los datos se recopilan a través de varios métodos, como formularios en nuestro sitio web, entrevistas personales, y colaboraciones con terceros.
          </p>

          <h2 className={style.heading}>4. Uso de los Datos</h2>
          <p className={style.text}>
            Utilizamos los datos recopilados para mejorar nuestros servicios, realizar análisis de mercado, comunicarnos con artistas y clientes, y para fines de marketing y promoción.
          </p>

          <h2 className={style.heading}>5. Compartición y Divulgación de Datos</h2>
          <p className={style.text}>
            Podemos compartir datos con socios comerciales y anunciantes en la medida necesaria para proporcionar nuestros servicios. Los datos también pueden ser divulgados si así lo requiere la ley.
          </p>

          <h2 className={style.heading}>6. Seguridad de los Datos</h2>
          <p className={style.text}>
            Estamos comprometidos con la protección de la seguridad de tus datos personales. Implementamos medidas de seguridad técnica y organizativa para proteger contra el acceso no autorizado o ilegal, la pérdida, la alteración o la destrucción.
          </p>

          <h2 className={style.heading}>7. Derechos del Usuario</h2>
          <p className={style.text}>
            Los usuarios tienen derecho a acceder, rectificar o eliminar sus datos personales, así como a limitar u oponerse a su procesamiento. Para ejercer estos derechos, por favor contáctanos en la dirección proporcionada abajo.
          </p>

          <h2 className={style.heading}>8. Cookies y Tecnologías de Seguimiento</h2>
          <p className={style.text}>
            Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario en nuestro sitio web y para análisis internos. Los usuarios pueden controlar el uso de estas tecnologías a través de la configuración de su navegador.
          </p>

          <h2 className={style.heading}>9. Enlaces a Terceros</h2>
          <p className={style.text}>
            Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de estos sitios externos.
          </p>

          <h2 className={style.heading}>10. Cambios en la Política de Privacidad</h2>
          <p className={style.text}>
            Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en nuestro sitio web.
          </p>

          <h2 className={style.heading}>11. Contacto</h2>
          <p className={style.text}>
            Si tienes preguntas sobre nuestra política de privacidad, contáctanos en: Email: contacto@arkprj.com Dirección: Naranjo 355, Atlampa CDMX, C.P: 06450.
          </p>
        </div>
      </div>
    </>
  )
}
