import React, { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Lenis from 'lenis'
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
    </div>
  )
}

export default App