import RadialGradientBackground from '../background/RadialGradientBackground'
import FadeIn from '../animation/FadeIn'
import { BiComment } from 'react-icons/bi'
import SocialMediaCard from '../ui/SocialMediaCard'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { PERSONAL_INFO } from '../../utils/constants'
import ContactInfo from '../ui/ContactInfo'
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useForm } from 'react-hook-form'

function Contact() {
  const formRef = useRef();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const sendEmail = async () => {
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };
  return (
    <div id='contact' className='relative min-h-screen overflow-hidden'>
      <RadialGradientBackground variant="contact" />
      <div className='relative z-10 flex flex-col gap-6 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 w-full'>

        <FadeIn delay={100}>
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='inline-flex text-sm text-primary gap-2.5 items-center rounded-full px-4 py-2 border bg-black/30 border-primary/20'>
              <BiComment className='w-4 h-4 fill-white' />
              <span className='text-sm text-primary font-medium'>GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">Let's Work Together</h2>
            <p className="text-base md:text-lg max-w-2xl text-center text-white/70 leading-relaxed">From Idea to Execution, Let's build something <span className='font-bold text-primary '>REAL!</span></p>
          </div>
        </FadeIn>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
          <FadeIn delay={200}>
            <div className='p-5 bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl shadow-black/30 rounded-xl'>
              <form
                ref={formRef}
                onSubmit={handleSubmit(sendEmail)}
                className="flex flex-col gap-5"
              >
                <div className='flex flex-col gap-2'>
                  <label className='text-white'>Name</label>
                  <input
                    type="text"
                    {...register("from_name", {
                      required: "Name is required",
                    })}
                    name="from_name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-primary/50"
                  />

                  {errors.from_name && (
                    <p className="text-red-400 text-sm">
                      {errors.from_name.message}
                    </p>
                  )}
                </div>
                <div className='flex flex-col gap-2'>
                  <label>Your Email</label>
                  <input
                    type="email"
                    {...register("from_email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Enter a valid email",
                      },
                    })}
                    name="from_email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-primary/50"
                  />

                  {errors.from_email && (
                    <p className="text-red-400 text-sm">
                      {errors.from_email.message}
                    </p>
                  )}                </div>
                <div className='flex flex-col gap-2'>
                  <label>Message</label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-primary/50"
                  />

                  {errors.message && (
                    <p className="text-red-400 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="glow-button"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className='flex flex-col gap-5 justify-center'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-center text-2xl text-primary/80'>Available for full-time roles and selective freelance projects.</h2>
                <p className='text-center text-white/80'>I focus on shipping clean, scalable web solutions that support real users and growing products.</p>
              </div>

              <div className='flex flex-col gap-2'>
                <SocialMediaCard icon={<MdEmail />} iconName={"Email"} title={PERSONAL_INFO.email} link={`mailto:${PERSONAL_INFO.email}`} />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <SocialMediaCard icon={<MdPhone />} iconName={"Phone"} title={PERSONAL_INFO.mobile} link={`tel:${PERSONAL_INFO.mobile}`} />
                <SocialMediaCard icon={<MdLocationOn />} iconName={"Location"} title={PERSONAL_INFO.location} link={`https://www.google.com/maps/place/Shivpuri,+Madhya+Pradesh`} />
              </div>
              <div className=' flex flex-col gap-2'>
                <ContactInfo />
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  )
}

export default Contact
