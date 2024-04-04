import { Roboto } from 'next/font/google';
import './globals.css'
import Navbar from '../components/Navbar/Navbar'
import Providers from '@/store/provider'




const roboto = Roboto({
  display: 'swap',
  family: 'Roboto',
  strategy: 'selfHosted',
  subsets: ['latin'],
  weight: ['400']  
});

export const metadata = {
  title: 'ARK PROJECT',
  description: 'Ark Project emerge como una iniciativa cultural destinada a contrarrestar la discriminación y homofobia prevalente en la sociedad, ofreciendo un refugio seguro y una plataforma de lanzamiento para artistas de la comunidad LGBTQ+ en diversas disciplinas artísticas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Providers>
      <body className={roboto.className}>
      
    <div className="container-layout">
        <div className="glass">
        <Navbar />
       
       {children}
        
        </div>
        <div className="moving-balls">
			      <div className="ball small-day"></div>
            <div className="ball medium"></div>
            <div className="ball ultra-tiny"></div>
            <div className="ball mini"></div>
            <div className="ball giant"></div>
        </div>
    </div>
        </body>
       </Providers>
    </html>
  )
}
