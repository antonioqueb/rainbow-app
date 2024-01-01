import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import CardSlider from '@/components/CardSlider/CardSlider'
import PrimaryTags from '@/components/PrimaryTags/PrimaryTags'
import DynamicTitle from '@/components/DynamicTitle/DynamicTitle'
import Providers from '@/store/provider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ARK PROJECT',
  description: 'Web de ARK PROJECT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Providers>
      <body className={inter.className}>
        <Navbar />
      <CardSlider />
      <PrimaryTags />
      <DynamicTitle />
        {children}
        <Footer/>
        </body>
       </Providers>
    </html>
  )
}
