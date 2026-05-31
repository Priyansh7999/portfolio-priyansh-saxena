import React from 'react'

function SocialMediaCard({ icon, iconName, title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className='group flex items-center gap-2 p-2 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(141,255,105,0.12)]'
    >
      <div className='p-3 rounded-xl bg-primary/10 text-primary text-xl  transition-transform duration-300'>
        {icon}
      </div>

      <div className='flex flex-col'>
        <p className='text-sm text-white/50'>
          {iconName}
        </p>
        <p className='text-xs font-medium text-white group-hover:text-primary transition-colors duration-300'>
          {title}
        </p>
      </div>
    </a>
  )
}

export default SocialMediaCard