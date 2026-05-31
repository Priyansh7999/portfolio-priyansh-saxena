import React, { useState, useEffect } from 'react'
import { Code, Menu, X } from "lucide-react";
import { useScrollSpy, scrollToSection } from "../../hooks/useScrollSpy";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants"
import logo from "../../assets/logo.svg"
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  }

  return (
    <nav className={`fixed top-0 right-0 z-100 w-full px-5 py-4 md:px-10 transition-all duration-300
     ${isScrolled ? 'bg-black/30 backdrop-blur-lg' : 'bg-transparent'}`}
      style={{ transform: 'translate3d(0,0,0)' }}
    >
      <div className='flex justify-between items-center'>
        <div className='flex items-center '>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="Logo" className='cursor-pointer w-15 h-15 ' />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-base font-medium transition-all duration-300 cursor-pointer
                ${activeSection === link.id
                  ? "text-primary"
                  : "text-white/70 hover:text-white"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className='hidden md:flex items-center gap-2'>
          <button
            onClick={() => handleNavClick('contact')}
            className='p-2 bg-white text-[#212121] font-medium text-base rounded-[17px] border hover:border-white/90 shadow-[0_4px_20px_rgba(255,255,255,0.25)] hover:shadow-[0_6px_30px_rgba(255,255,255,0.4)] transition-all duration-300 cursor-pointer'
          >
            Hire Me
          </button>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden hover:text-white/80 text-2xl transition-all duration-300 px-2'
          aria-label="menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>

      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden bg-primary/5 backdrop-blur-2xl rounded-2xl
          ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className='py-3 border-t border-white/10 px-4 space-y-3'>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left p-4 rounded-lg font-medium transition-all duration-300 cursor-pointer
                ${activeSection === link.id
                  ? "text-primary bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className='p-2 w-full mb-5 bg-white text-[#212121] font-medium text-base rounded-[17px] border hover:border-white/90 shadow-[0_4px_20px_rgba(255,255,255,0.25)] hover:shadow-[0_6px_30px_rgba(255,255,255,0.4)] transition-all duration-300 cursor-pointer'
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
