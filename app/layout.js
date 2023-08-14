import Head from 'next/head'
import Nav from './components/Nav'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from './components/Footer'


const poppins = Poppins({
  weight:["200","400"],
  
  subsets: ['latin'] })

export const metadata = {
  title: 'Justise',
  description: 'We Provide Effective Legal Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning={true} className={poppins.className}>
       

        <Nav/>
     
        {children}

        <Footer/>

       
        </body>
    </html>
  )
}
