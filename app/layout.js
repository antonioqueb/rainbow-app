import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ARK PROJECT',
  description: 'Web de ARK PROJECT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
