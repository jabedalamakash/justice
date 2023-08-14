import Image from 'next/image'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Content from './components/Content'
import Testimonial from './components/Testimonial'

export default function Home() {
  return (
    <main className="">
      <div className="">
       <Banner/>
       <Content/>
       <Testimonial/>
        <Faq/>
      
      <Contact/>


      </div>
    </main>
  )
}
