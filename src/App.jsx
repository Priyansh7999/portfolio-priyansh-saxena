import React, { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Service from './components/sections/Service'
import Footer from './components/layout/Footer'
import Lenis from 'lenis'
import Experience from './components/sections/Experience'
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Skills />
        <Service />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}

export default App