import React from 'react'
import { SiGithub, SiInstagram, SiLeetcode } from 'react-icons/si'
import { SlSocialLinkedin } from 'react-icons/sl'
import { MdEmail } from 'react-icons/md'
import { PERSONAL_INFO, SOCIAL_LINKS } from '../utils/constants'
function ContactInfo() {
    return (
        <div className='flex flex-col gap-5 rounded-xl'>
            <div>
                <h2 className='text-primary text-xl'>Connect with Me</h2>
                <p className='text-white/60'>Lets Connect and create something <span className='font-bold text-primary '>REAL!</span></p>
            </div>
            <div className="flex justify-center items-center gap-5 py-2">
                <div className="relative group flex flex-col items-center" onClick={() => window.open(SOCIAL_LINKS.github)}>
                    <span className="tooltip">Github</span>
                    <SiGithub className="w-12 h-12 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/40 hover:scale-110 transition-all cursor-pointer" />
                </div>

                <div className="relative group flex flex-col items-center" onClick={() => window.open(SOCIAL_LINKS.linkedin)}>
                    <span className="tooltip">Linkedin</span>
                    <SlSocialLinkedin className="w-12 h-12 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/40 hover:scale-110 transit ion-all cursor-pointer" fill='cyan' />
                </div>

                <div className="relative group flex flex-col items-center" onClick={() => window.open(`mailto:${PERSONAL_INFO.email}`)}>
                    <span className="tooltip">Email</span>
                    <MdEmail className="w-12 h-12 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/40 hover:scale-110 transition-all cursor-pointer" />
                </div>

                <div className="relative group flex flex-col items-center" onClick={() => window.open(SOCIAL_LINKS.leetcode)}>
                    <span className="tooltip">Leetcode</span>
                    <SiLeetcode className="w-12 h-12 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/40 hover:scale-110 transit ion-all cursor-pointer" fill='yellow' />
                </div>

                <div className="relative group flex flex-col items-center" onClick={() => window.open(SOCIAL_LINKS.instagram)}>
                    <span className="tooltip">Instagram</span>
                    <SiInstagram className="w-12 h-12 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/40 hover:scale-110 transition-all cursor-pointer" fill='pink' />
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
