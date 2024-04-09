import styles from './page.module.css'
import ContentCardArtist from '@/components/ContentCardArtist/ContentCardArtist'
import CardSlider from '@/components/CardSlider/CardSlider'
import PrimaryTags from '@/components/PrimaryTags/PrimaryTags'
import NavbarComponent from '@/components/Navbar/Navbar'
import Link from 'next/link';




const cargarUsuarios =()=>{
  return fetch('http://localhost:3000/api/usuarios')
  .then(response => response.json())
}




export default async function Home() {
  let usuarios = [];

  try {
    const data = await cargarUsuarios();
    usuarios = data.user;
  } catch (error) {
    console.error('Error al cargar usuarios:', error);
  }
  return (
    <>
    <NavbarComponent/>
    <main className={styles.main}>



        <CardSlider />
        <PrimaryTags />

        {usuarios.map((valor, id) => (
          <div key={id}>
            <Link
              href={`${valor.username}`}
            >{valor.username}</Link>
            </div>
        ))}

        <ContentCardArtist />
        


       {/* 
      Test

          

      */}


     
    
     </main>
     </>
  )
}
