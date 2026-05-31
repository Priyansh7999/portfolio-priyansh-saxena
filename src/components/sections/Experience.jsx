import React from 'react'
import RadialGradientBackground from '../background/RadialGradientBackground'
import FadeIn from '../animation/FadeIn'
import { MdWorkspaces } from 'react-icons/md'
import { experience } from '../../data/experience'
import ExperienceCard from '../ui/ExperienceCard'

function Experience() {
  return (
    <div id='experience' className='relative min-h-screen overflow-hidden'>
      <RadialGradientBackground variant="experience" />
      <div className='relative z-10 flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 w-full'>
        <FadeIn delay={100}>
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='inline-flex text-sm text-primary gap-2.5 items-center rounded-full px-4 py-2 border bg-black/30 border-primary/20'>
              <MdWorkspaces className='w-4 h-4 fill-white' />
              <span className='text-sm text-primary font-medium'>MY CAREER & EXPERIENCE</span>
            </div>
            <h2 className='text-4xl text-center lg:text-5xl'>Experience That Brings <span className='font-bold px-1 text-primary'>Ideas to Life</span></h2>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <div className='flex flex-col gap-10 p-5 lg:p-10'>
            {
              experience.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))
            }
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

export default Experience
