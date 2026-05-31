import { HiLocationMarker } from 'react-icons/hi'

function ExperienceCard({ duration, logo, company, website, location, role, description, tech_stack }) {
    return (
        <div className="group flex flex-col lg:flex-row w-full gap-6 lg:gap-10">
            <div className="flex flex-col gap-2 lg:w-1/3">
                <p className="text-sm text-primary/70">{duration}</p>
                <a href={website} target="_blank" className="flex items-center gap-2 w-fit">
                    <img src={logo} alt={company} className="w-8 h-8 rounded-full object-cover" />
                    <h3 className="text-lg lg:text-xl font-bold text-white">
                        {company}
                    </h3>
                </a>
                <div className="text-sm text-white/70 flex items-center gap-2">
                    <HiLocationMarker className="w-4 h-4 shrink-0" />
                    <p>{location}</p>
                </div>
            </div>

            <div className="block border-b md:border-l border-primary/50 group-hover:border-primary" />
            <div className="flex flex-col gap-5 lg:px-10 py-2 lg:py-7 flex-1">
                <h3 className="text-lg lg:text-xl font-bold text-primary/80">
                    {role}
                </h3>
                <div className="flex flex-col gap-2">
                    {description.map((desc, index) => (
                        <p key={index} className="text-sm text-white/70 leading-relaxed">
                            {index + 1}. {desc}
                        </p>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2">
                    {tech_stack.map((tech, index) => (
                        <span key={index} className="text-xs lg:text-sm px-3 py-1 border border-white/20 rounded-lg text-white/70 hover:text-primary hover:border-primary/50 transition-colors">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard
