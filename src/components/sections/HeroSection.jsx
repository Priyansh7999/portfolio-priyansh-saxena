import React from 'react'
import { PERSONAL_INFO, STATS } from '../../utils/constants'
import { scrollToSection } from '../../hooks/useScrollSpy'
import FadeIn from '../animation/FadeIn'
import RadialGradientBackground from '../background/RadialGradientBackground'
import { ChevronDown, Star } from 'lucide-react'
import { SiExpress, SiNextdotjs, SiNodebb, SiNodedotjs, SiPostgresql, SiReact, SiSpringboot } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
function HeroSection() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <RadialGradientBackground variant="hero" />
      <div className='relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='text-left flex flex-col gap-5'>
            <FadeIn delay={0}>
              <div className='flex gap-2 items-center rounded-full px-4.5 py-2.75 bg-linear-to-r from-primary/20 via-primary/15 to-primary/20 border border-primary/20'>
                <Star className='w-4 h-4 text-white fill-white' />
                <span className='text-xs md:text-sm text-white tracking-[1.2px]'>{PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}</span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight'>
                {PERSONAL_INFO.name}
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className='text-xs md:text-sm lg:text-base text-justify font-extralight text-white/70'>
                {PERSONAL_INFO.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection('contact')}
                className='glow-button'
              >
                Get In Touch
              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-10 max-w-full'>
                {STATS.map((stat, index) => {
                  return (
                    <div key={index} className="text-left border-r border-white/50 pr-10 last:border-r-0">
                      <div className='text-2xl font-normal text-primary mb-2'>{stat?.value}</div>
                      <div className='text-sm text-white leading-snug'>{stat?.label}</div>
                    </div>
                  );
                })}
              </div>

            </FadeIn>
          </div>

          <FadeIn delay={200}>
            <div className='relative'>
              <div className='relative overflow-hidden max-w-125 mx-auto'>
                
                <div className='absolute inset-2.5 bg-linear-to-r from-primary/20 via-primary/10 to-primary/20 animate-spin-slow '>
                </div>

                <div className='relative rounded-3xl overflow-hidden m-1.5 h-150 border border-white/10 shadow-2xl shadow-primary/10'>
                  <img
                    src="/personal-image/developer.png"
                    alt="Developer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className='absolute bottom-1.5 p-3'>
                  <FadeIn delay={500}>
                    <div className="text-primary text-2xl flex items-center gap-5 p-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/30">
                      <div className="relative group flex flex-col items-center">
                        <span className="tooltip">React</span>
                        <SiReact className="hover:scale-110 transition-transform duration-200 cursor-pointer" />
                      </div>

                      <div className="relative group flex flex-col items-center">
                        <span className="tooltip">React Native</span>
                        <TbBrandReactNative className="hover:scale-110 transition-transform duration-200 cursor-pointer" />
                      </div>

                      <div className="relative group flex flex-col items-center">
                        <span className="tooltip">Node.js</span>
                        <SiNodedotjs className="hover:scale-110 transition-transform duration-200 cursor-pointer" />
                      </div>

                      <div className="relative group flex flex-col items-center">
                        <span className="tooltip">Express</span>
                        <SiExpress className="hover:scale-110 transition-transform duration-200 cursor-pointer" />
                      </div>

                      <div className="relative group flex flex-col items-center">
                        <span className="tooltip">PostgreSQL</span>
                        <SiPostgresql className="hover:scale-110 transition-transform duration-200 cursor-pointer" />
                      </div>

                      <div className="relative group flex flex-col items-center">
                        <span className="tooltip">Next.js</span>
                        <SiNextdotjs className="hover:scale-110 transition-transform duration-200 cursor-pointer" />
                      </div>

                      <div className="relative group flex flex-col items-center">
                        <span className="tooltip">Spring Boot</span>
                        <SiSpringboot className="hover:scale-110 transition-transform duration-200 cursor-pointer" />
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>

            </div>

          </FadeIn>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className='absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce cursor-pointer'
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </div>
  )
}

export default HeroSection
