import React from 'react'
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants'
import { scrollToSection } from '../../hooks/useScrollSpy'
import ContactInfo from '../ContactInfo'
import SocialMediaCard from '../ui/SocialMediaCard'
import { MdEmail, MdPhone } from 'react-icons/md'
function Footer() {
  return (
    <div className='bg-black backdrop-blur-xl border-t border-primary/20'>
      <div className='flex flex-col gap-2 items-center'>
        <img src='/logo.svg' alt='logo' className='w-20 h-20' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-bold text-primary'>{PERSONAL_INFO.name}</h2>
          <p className='text-sm text-white/70'>
            I'm Priyansh Saxena - I build, learn, and solve problems through quality code. Thanks for exploring my corner of the web!
          </p>
          <div className='flex flex-col gap-2'>
            <SocialMediaCard icon={<MdEmail />} iconName={"Email"} title={PERSONAL_INFO.email} link={`mailto:${PERSONAL_INFO.email}`} />
          </div>
          <div className='flex flex-col gap-2'>
            <SocialMediaCard icon={<MdPhone />} iconName={"Phone"} title={PERSONAL_INFO.mobile} link={`tel:${PERSONAL_INFO.mobile}`} />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-bold text-primary'>Quick Links</h2>
          <div className='flex flex-col gap-3 justify-center items-start'>
            {
              NAV_LINKS.map((link) => (
                <button
                  onClick={() => scrollToSection(link.label.toLowerCase())}
                  className='text-sm text-white/70 cursor-pointer hover:text-white hover:underline transition-all duration-200'
                >
                  {link.label}
                </button>
              ))
            }
          </div>
        </div>
        <div className='flex flex-col gap-2 items-start'>
          <ContactInfo />
        </div>
      </div>
      <div className='flex flex-col gap-2 items-center p-10'>
        <h2>Copyright © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</h2>
      </div>
    </div>
  )
}

export default Footer
