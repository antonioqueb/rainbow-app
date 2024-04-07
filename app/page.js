import styles from './page.module.css'
import ContentCardArtist from '@/components/ContentCardArtist/ContentCardArtist'
import CardSlider from '@/components/CardSlider/CardSlider'
import PrimaryTags from '@/components/PrimaryTags/PrimaryTags'
import DynamicTitle from '@/components/DynamicTitle/DynamicTitle'
import NavbarComponent from '@/components/Navbar/Navbar'
import 'tailwindcss/tailwind.css';





export default function Home() {
  return (
    <>
    <NavbarComponent/>
    <main className={styles.main}>

        <CardSlider />
        <PrimaryTags />
        <ContentCardArtist />


       {/* 
      Test

          

      */}


     
    
     </main>
     </>
  )
}
