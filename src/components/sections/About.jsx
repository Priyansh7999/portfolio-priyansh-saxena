import React from 'react'
import RadialGradientBackground from '../background/RadialGradientBackground'
import FadeIn from '../animation/FadeIn'
import { Code2, Code2Icon, Sparkles, Star } from 'lucide-react'
import { PERSONAL_INFO, ABOUT_STATS, SOCIAL_LINKS } from '../../utils/constants'
import { SiGithub, SiInstagram, SiLeetcode } from 'react-icons/si'
import { SlSocialLinkedin } from 'react-icons/sl'
import { MdEmail } from 'react-icons/md'
import SocialMediaCard from '../ui/SocialMediaCard'
function About() {
  return (
    <div id='about' className='relative min-h-screen overflow-hidden'>
      <RadialGradientBackground variant="about" />
      <div className='relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='flex flex-col gap-4'>

            <FadeIn delay={60}>
              <div className='inline-flex text-sm text-primary gap-2.5 items-center rounded-full px-4 py-2 border bg-black/30 border-primary/20'>
                <Code2 className='w-4 h-4' />
                <span>Full Stack Developer</span>
                <Sparkles className='w-4 h-4  fill-white' />
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div className='flex flex-col gap-3'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl leading-tight'>Crafting Digital Experiences That Matter</h1>
                <div className='flex flex-col gap-4'>
                  {
                    PERSONAL_INFO.bio.map((bio, index) => (
                      <p key={index} className='text-white/80 font-light text-justify'>{bio}</p>
                    ))
                  }
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={180}>
              <div className='grid grid-cols-3 gap-8'>
                {
                  ABOUT_STATS.map((stat, index) => (
                    <div key={index} className='relative border-l-5 border-primary/60 p-2 flex flex-col gap-2 items-center'>
                      <span className='text-3xl font-semibold text-white'>{stat.value}</span>
                      <span className='text-sm font-light text-white/80'>{stat.label}</span>
                    </div>
                  ))
                }
              </div>
            </FadeIn>

            <FadeIn delay={240}>
              <button
                onClick={() => window.open(PERSONAL_INFO.resume)}
                className='glow-button'
              >
                View Resume
              </button>
            </FadeIn>
          </div>

          {/* Right Content */}
          <FadeIn delay={200}>
            <div className='flex flex-col gap-2'>
              <div className='grid grid-cols-1 gap-2'>
                <div className='flex gap-5 items-start justify-center bg-linear-to-br from-primary/10 to-primary/5 rounded-xl p-5'>
                  <div className='p-3 bg-primary/10 rounded-xl'>
                    <Code2Icon className='w-6 h-6 text-primary' />
                  </div>
                  <div className='flex-1'>
                    <h2 className='text-lg font-semibold mb-2'>Expertise</h2>
                    <p className='text-sm text-white/70 leading-relaxed'>Specialized in building scalable web and mobile applications with modern technologies and best practices</p>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                  <div className='flex gap-5 items-start justify-center bg-linear-to-br from-primary/10 to-primary/5 rounded-xl p-5'>
                    <div className='p-3 bg-primary/10 rounded-xl'>
                      <Sparkles className='w-4 h-4 text-primary' />
                    </div>
                    <div>
                      <h2 className='text-lg font-semibold mb-2'>Clean Code</h2>
                      <p className='text-sm text-white/70 leading-relaxed'>Write clean and maintainable code that is easy to understand and maintain</p>
                    </div>
                  </div>

                  <div className='flex gap-5 items-start justify-center bg-linear-to-br from-primary/10 to-primary/5 rounded-xl p-5'>
                    <div className='p-3 bg-primary/10 rounded-xl'>
                      <Star className='w-4 h-4 text-primary' />
                    </div>
                    <div>
                      <h2 className='text-lg font-semibold mb-2'>Performance</h2>
                      <p className='text-sm text-white/70 leading-relaxed'>Optimizing for speed and efficiency in every project</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='flex flex-col gap-5 bg-linear-to-br from-primary/10 to-primary/5 rounded-xl p-5'>
                <div>
                  <h2 className='text-xl font-semibold mb-1'>
                    Find Me On
                  </h2>
                  <p className='text-sm text-white/60'>
                    Let’s connect and build something amazing.
                  </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                  <SocialMediaCard
                    icon={<SiGithub />}
                    iconName="GitHub"
                    link={SOCIAL_LINKS.github}
                    title="Priyansh7999"
                  />
                  <SocialMediaCard
                    icon={<SlSocialLinkedin />}
                    iconName="LinkedIn"
                    link={SOCIAL_LINKS.linkedin}
                    title="Priyansh Saxena"
                  />
                  <SocialMediaCard
                    icon={<SiLeetcode />}
                    iconName="LeetCode"
                    link={SOCIAL_LINKS.leetcode}
                    title="Priyansh7999"
                  />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                  <SocialMediaCard
                    icon={<SiInstagram />}
                    iconName="Instagram"
                    link={SOCIAL_LINKS.instagram}
                    title="Priyansh.saxena.5070"
                  />
                  <SocialMediaCard
                    icon={<MdEmail />}
                    iconName="Email"
                    link={`mailto:${PERSONAL_INFO.email}`}
                    title={PERSONAL_INFO.email}
                  />
                </div>
              </div>
            </div>

          </FadeIn>
        </div>

      </div>
    </div>
  )
}

export default About
