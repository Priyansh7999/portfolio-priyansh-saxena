import React from 'react'
import RadialGradientBackground from '../background/RadialGradientBackground'
import FadeIn from '../animation/FadeIn'
import { FaTools } from 'react-icons/fa'
import { services } from '../../data/services'
import * as Icons from 'lucide-react'
import ServiceCard from '../ui/ServiceCard'
function Service() {
    return (
        <div id='services' className='relative min-h-fit overflow-hidden'>
            <RadialGradientBackground variant="services" />
            <div className='relative z-10 flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 w-full'>
                <FadeIn delay={100}>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <div className='inline-flex text-sm text-primary gap-2.5 items-center rounded-full px-4 py-2 border bg-black/30 border-primary/20'>
                            <FaTools className='w-4 h-4 fill-white' />
                            <span className='text-sm text-primary font-medium'>WHAT I OFFER</span>
                        </div>
                        <h2 className='text-4xl text-center lg:text-5xl'>Build for innovation. Designed for results.</h2>
                        <p className='text-lg max-w-2xl text-center text-white/60'>A Comprehensive solution to transform your ideas into exceptional digital experiences.</p>
                    </div>
                </FadeIn>

                <FadeIn delay={200}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {services.slice(0, 2).map((service) => {
                            const IconComponent = Icons[service.icon] || Icons.Code2;

                            return (
                                <ServiceCard
                                    key={service.id}
                                    icon={IconComponent}
                                    title={service.title}
                                    description={service.description}
                                />
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {services.slice(2).map((service) => {
                            const IconComponent = Icons[service.icon] || Icons.Code2;

                            return (
                                <ServiceCard
                                    key={service.id}
                                    icon={IconComponent}
                                    title={service.title}
                                    description={service.description}
                                />
                            );
                        })}
                    </div>
                </FadeIn>

            </div>
        </div>
    )
}

export default Service
