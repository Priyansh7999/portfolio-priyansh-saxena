import { ExternalLink } from 'lucide-react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

function ProjectCard({ project }) {
  return (
    <div className='relative flex flex-col border border-white/10 hover:border-primary/50 rounded-2xl h-full'>
      <div className='relative w-full rounded-t-2xl overflow-hidden'>
        <img 
          src={project.image} 
          alt={project.title} 
          className='w-full h-60 object-cover' 
        />
        <div className='absolute bottom-0 right-0 flex gap-3 px-4 pb-3 justify-end w-full text-xl'>
          <button
            className='cursor-pointer px-2 py-2 border border-white/40 rounded-lg hover:border-primary/50 hover:text-primary transition-colors bg-black/40 backdrop-blur-sm'
            onClick={() => window.open(project.githubUrl)}
          >
            <FaGithub />
          </button>
          <button
            className='cursor-pointer px-2 py-2 border border-white/40 rounded-lg hover:border-primary/50 hover:text-primary transition-colors bg-black/40 backdrop-blur-sm'
            onClick={() => window.open(project.demoUrl)}
          >
            <ExternalLink />
          </button>
        </div>
      </div>

      <div className='flex flex-col flex-1 p-5 gap-4'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-medium'>{project.title}</h3>
          <p className='text-sm text-white/60 line-clamp-3 min-h-15'>
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs lg:text-sm px-3 py-1 border border-white/20 rounded-lg text-white/70 hover:text-primary hover:border-primary/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='mt-auto flex flex-col gap-3'>
          <hr className='border-primary/40'/>
          <p className='text-sm text-justify text-white/70'>{project.metrics}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard