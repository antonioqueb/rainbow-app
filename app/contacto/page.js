import styles from './contacto.module.css';

export default function ContactPage() {
    return (
        <>
        <section className={styles.contacto}>
           <form className={styles.form}>
            <div className={styles.formGroupTitle}>
                <h1>Contacto</h1>
                <p>Si tienes alguna duda o sugerencia, no dudes en contactarnos.</p>
            </div>
                <div className={styles.formGroup}>
                    <input type="text" placeholder="Nombre" />
                    <input type="email" placeholder="Apellido" />
                </div>
                <div className={styles.formGroup}>
                    <input type="email" placeholder="Email" />
                    <input type="email" placeholder="Teléfono" />
                </div>
                <div className={styles.buttomSection}>
                <button className={styles.button}>Enviar</button>
                </div>

            </form>
        </section>
        </>
    )
}

  