import styles from './page.module.css'
import ContentCardArtist from '@/components/ContentCardArtist/ContentCardArtist'
import CardSlider from '@/components/CardSlider/CardSlider'
import PrimaryTags from '@/components/PrimaryTags/PrimaryTags'
import DynamicTitle from '@/components/DynamicTitle/DynamicTitle'



export default function Home() {
  return (
    
    <main className={styles.main}>

      
      <CardSlider />
       {/* 
      <PrimaryTags />
      <DynamicTitle />
      <ContentCardArtist />
      */}


     
    
     </main>
  )
}
