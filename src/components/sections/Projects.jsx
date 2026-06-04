import React, { useState } from 'react'
import RadialGradientBackground from '../background/RadialGradientBackground'
import { categories, projects } from '../../data/projects'
import FadeIn from '../animation/FadeIn';
import { MdWorkspacePremium } from 'react-icons/md';
import ProjectCard from '../ui/ProjectCard';
function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filterProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category == activeCategory)

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  }

  return (
    <div id='projects' className='relative min-h-screen overflow-hidden'>
      <RadialGradientBackground variant="projects" />
      <div className='relative z-10 flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 w-full'>
        <FadeIn delay={100}>
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='inline-flex text-sm text-primary gap-2.5 items-center rounded-full px-4 py-2 border bg-black/30 border-primary/20'>
              <MdWorkspacePremium className='w-4 h-4 fill-white' />
              <span className='text-sm text-primary font-medium'>PROJECTS</span>
            </div>
            <h2 className='text-4xl text-center lg:text-5xl'>Crafting modern experiences</h2>
            <p className='text-lg max-w-2xl text-center text-white/60'>A showcase of my work and the impact it has made.</p>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5 justify-center items-center'>
            {
              categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-1 border hover:border-white/90 rounded-2xl hover:shadow-[0_6px_30px_rgba(255,255,255,0.4)] transition-all duration-300 cursor-pointer ${activeCategory == category ? 'bg-primary/50 font-medium text-base hover:border-white/90 shadow-[0_4px_20px_rgba(255,255,255,0.25)]' : 'text-white/80 border-white/20'}`}
                >
                  {category}
                </button>
              ))
            }
          </div>
        </FadeIn>
        <FadeIn delay={300}>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
              filterProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} />
              ))
            }
          </div>

        </FadeIn>
      </div>
    </div>
  )
}

export default Projects;
