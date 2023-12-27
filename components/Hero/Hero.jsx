import styles from './Hero.module.css'

const HeroComponent = () => (
    <div class={styles.hero_container}>
        <div class={styles.hero_text}>
            <h1>Bienvenidx a la página de la Comunidad LGBT+</h1>
        </div>
        <div class={styles.hero_image}>
            <img src="/pride_festival.png" alt="Logo" width={500} height={500} />
        </div>


      </div>
);

export default HeroComponent;