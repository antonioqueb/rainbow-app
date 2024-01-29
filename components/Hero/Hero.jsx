import styles from './Hero.module.css'

const HeroComponent = () => (
    <>
    <div class={styles.hero_container}>
        <div class={styles.hero_text}>
            <h1>Navega en el Arca del Arte y la Expresión
                
            </h1>
        </div>
        <div class={styles.hero_image}>
            <img src="//Trend/1.jpeg" alt="Logo" width={400} height={400} />
        </div>


      </div>
      </>
);

export default HeroComponent;

