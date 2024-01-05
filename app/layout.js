import { Roboto } from 'next/font/google';
import './globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
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
  description: 'Web de ARK PROJECT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Providers>
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer/>
        </body>
       </Providers>
    </html>
  )
}
