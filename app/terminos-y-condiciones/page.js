import style from './politica-cookies.module.css'
import Image from "next/image"

export default function PoliticaCookies() {
  return (
    <>
      <div className={style.container}>
        
        <div className={style.container__title}>
          <Image src="/ark/terminos.svg" width={230} height={230} placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,..."/>
          <h3 className={style.toptitle}>Políticas</h3>
          <h1 className={style.title}>Términos y condiciones</h1>
        </div>
        
        <div className={style.container__text}>
          <h2 className={style.heading}>Propiedad intelectual</h2>
          <p className={style.text}>
          La plataforma de quinielas y todo el contenido relacionado, incluyendo textos, imágenes, gráficos, logos y marcas registradas, son propiedad exclusiva de la empresa.
          </p>
          <p className={style.text}>
          Todo el contenido relacionado con textos, imágenes, gráficos, logos y marcas registradas proporcionadas por el artista siguen y seguirán siendo propiedad de este, Ark Project no tiene derecho de lucrar con su venta o distribución a menos de tener el permiso expreso de esto.
          </p>

          <h2 className={style.heading}>Uso de la plataforma</h2>
          <p className={style.text}>
          La plataforma se proporciona para uso personal y no comercial. Los usuarios no pueden utilizar la plataforma para fines ilegales o no autorizados.
          </p>

          <h2 className={style.heading}>Responsabilidad de los usuarios</h2>
          <p className={style.text}>
          Los usuarios son responsables de mantener la privacidad y seguridad de su información de inicio de sesión y de cualquier actividad que ocurra en su cuenta.
           </p>

          <h2 className={style.heading}>Cambios en la plataforma</h2>
          <p className={style.text}>
          Nos reservamos el derecho de actualizar o descontinuar la plataforma en cualquier momento, sin previo aviso.
            </p>

          <h2 className={style.heading}>Limitación de responsabilidad</h2>
          <p className={style.text}>
          La empresa no será responsable por cualquier daño directo, indirecto, incidental, especial, consecuencial o punitivo derivado del uso de la plataforma.

            </p>

        </div>
      </div>
    </>
  )
}
