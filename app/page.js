import styles from './page.module.css'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Footer />
      
    </main>
  )
}
