import React from 'react'
import RadialGradientBackground from '../background/RadialGradientBackground'
import FadeIn from '../animation/FadeIn'
import { Sparkles } from 'lucide-react'
import { SkillCategories } from '../../data/skills'

function Skills() {
  return (
    <div id='skills' className='relative min-h-screen md:min-h-fit lg:min-h-screen  overflow-hidden'>
      <RadialGradientBackground variant="skills" />
      <div className='relative z-10 flex flex-col gap-8 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-15 w-full'>
       
        <FadeIn delay={100}>
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='inline-flex text-sm text-primary gap-2.5 items-center rounded-full px-4 py-2 border bg-black/30 border-primary/20'>
              <Sparkles className='w-4 h-4 fill-white' />
              <span className='text-sm text-primary font-medium'>MY SKILLSET</span>
            </div>
            <h2 className='text-4xl lg:text-5xl'>Skills & Technologies</h2>
            <p className='text-lg max-w-2xl text-white/60'>A Comprehensive overview of my technical Skills</p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SkillCategories.map((category) => (
              <div
                key={category.title}
                className='realtive bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'
              >
                <h2 className="mb-5 pl-3 border-l-4 border-primary text-white text-xl font-semibold">
                  {category.title}
                </h2>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="hover:scale-105 transition-transform duration-200"
                    >
                      <img
                        src={skill.src}
                        alt={skill.name}
                        loading="lazy"
                        className="h-5 w-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

export default Skills
