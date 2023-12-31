import styles from './page.module.css'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import CardSlider from '@/components/CardSlider/CardSlider'
import PrimaryTags from '@/components/PrimaryTags/PrimaryTags'

export default function Home() {
  return (
    <main className={styles.main}>
      <CardSlider />
      <PrimaryTags />
    
     </main>
  )
}
