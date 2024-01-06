import style from './nosotros.module.css'
import Image from 'next/image'



export default function AboutPage() {
  return (
    <>
    <section className={style.container}>
      <div className={style.container__img}>
        <Image src="/Iconos/Arquitectura.svg" width={500} height={500} />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>¿Quiénes somos nosotros?</h2>
        <p className={style.container__text__paragraph}>Somos una empresa dedicada a la venta de productos de limpieza, para el hogar, oficina, industria, etc. Contamos con productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro objetivo es satisfacer las necesidades de nuestros clientes, ofreciendo productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro compromiso es brindar un excelente servicio, para que nuestros clientes se sientan satisfechos.</p>
      </div>
    </section>
     <section className={style.container_reverse}>
      <div className={style.container__img}>
        <Image src="/Iconos/Danza.svg" width={500} height={700} />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Misión</h2>
        <p className={style.container__text__paragraph}>Somos una empresa dedicada a la venta de productos de limpieza, para el hogar, oficina, industria, etc. Contamos con productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro objetivo es satisfacer las necesidades de nuestros clientes, ofreciendo productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro compromiso es brindar un excelente servicio, para que nuestros clientes se sientan satisfechos.</p>
      </div>
    </section>
        <section className={style.container}>
      <div className={style.container__img}>
        <Image src="/Iconos/Pintura.svg" width={500} height={500} />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Visión</h2>
        <p className={style.container__text__paragraph}>Somos una empresa dedicada a la venta de productos de limpieza, para el hogar, oficina, industria, etc. Contamos con productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro objetivo es satisfacer las necesidades de nuestros clientes, ofreciendo productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro compromiso es brindar un excelente servicio, para que nuestros clientes se sientan satisfechos.</p>
      </div>
    </section>
         <section className={style.container_reverse}>
      <div className={style.container__img}>
        <Image src="/Iconos/Escultura.svg" width={500} height={500} />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Valores</h2>
        <p className={style.container__text__paragraph}>Somos una empresa dedicada a la venta de productos de limpieza, para el hogar, oficina, industria, etc. Contamos con productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro objetivo es satisfacer las necesidades de nuestros clientes, ofreciendo productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro compromiso es brindar un excelente servicio, para que nuestros clientes se sientan satisfechos.</p>
      </div>
    </section>
    </>
  )
}
