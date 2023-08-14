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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className}>
        <Head>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.css" rel="stylesheet" />
          {/* <link href="https://cdn.jsdelivr.net/npm/daisyui@3.5.1/dist/full.css" rel="stylesheet" type="text/css" /> */}
          </Head>

        <Nav/>
     
        {children}

        <Footer/>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script>
        </body>
    </html>
  )
}
