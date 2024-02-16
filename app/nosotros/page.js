import style from './nosotros.module.css'
import Image from 'next/image'



export default function AboutPage() {

  

  return (
    <>
    <section  className={style.container}>
      <div className={style.container__img}>
        <Image src='/ark/arktoart.jpg' width={330} height={330} alt='cover' />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Nuestra Visión</h2>
        <p className={style.container__text__paragraph}>Potenciar la venta de Arte queer y aumentar colaboraciones de artistas con empresas, ya sea del sector público o privado.</p>
        </div>
    </section>
     <section  className={style.container_reverse}>
      <div className={style.container__img}>
        <Image src='/ark/newartist.jpg' width={330} height={330} alt='cover'  
         />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Nuestra Misión</h2>
        <p className={style.container__text__paragraph}>Conectar con audiencias fuera de la de la propia comunidad queer.  </p>
        <p className={style.container__text__paragraph}>Ser una plataforma de  referencia en Arte Contemporáneo Queer.</p>
        <p className={style.container__text__paragraph}>Apoyar a artistas queer, sobre todo en países donde son censurados y es difícil lograr una visibilidad o difusión de su obra.</p>
      </div>
    </section>
        <section  className={style.container}>
      <div className={style.container__img}>
        <Image src='/ark/vision.jpg' width={330} height={330}   alt='cover'
         />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Beneficio</h2>
        <p className={style.container__text__paragraph}>Venta de la obra de artistas queer y cerrar colaboraciones con empresas del sector públicao/privado.</p>
       </div>
    </section>

    </>
  )
}
