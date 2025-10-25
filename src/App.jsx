import { useEffect, useState } from 'react'
import { BrowserRouter } from "react-router-dom";


import Topbar from './components/Topbar'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Stats from './components/Stats'
import Work from './components/Work'
import Faq from './components/Faq'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  const [headerActive, setHeaderActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isActive = window.scrollY > 200
      setHeaderActive(prev => {
        if (prev !== isActive) return isActive
        return prev
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  console.log(headerActive)

  return (
    <BrowserRouter>

      <div >
        <Topbar />
        {/* static header */}
        <div className='relative z-10'>
          <Header />
        </div>
        {/* animate header */}
        <div className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${headerActive ? "translate-y-0" : "-translate-y-full"}`}>
          <Header />
        </div>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Work />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />

        {/* temp div */}
        <div className='h-[1000px] '></div>



      </div>
    </BrowserRouter>

  )
}

export default App
