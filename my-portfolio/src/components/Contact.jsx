import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

const Contact = () => {
  const contactRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate('.contact-label', {
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 800,
              ease: 'out(3)'
            })
            
            animate('.contact-heading', {
              translateY: [30, 0],
              opacity: [0, 1],
              duration: 1000,
              delay: 200,
              ease: 'out(3)'
            })
            
            animate('.contact-description', {
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 1000,
              delay: 400,
              ease: 'out(3)'
            })
            
            animate('.contact-item', {
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 800,
              delay: stagger(150, { start: 600 }),
              easing: 'out(3)'
            })
            
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactMethods = [
    {
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "EMAIL",
      value: "Devindi08@outlook.com",
      link: "mailto:Devindi08@outlook.com"
    },
    {
      icon: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
      title: "GITHUB",
      value: "github.com/Devindi08K",
      link: "https://github.com/Devindi08K"
    },
    {
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      title: "LINKEDIN",
      value: "Devindi Anjalika",
      link: "https://www.linkedin.com/in/devindi-anjalika-8890852a1/"
    }
  ]

  return (
    <section ref={contactRef} id="contact" className="min-h-screen px-6 py-32 bg-dark-900 relative flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="container mx-auto relative z-10 max-w-5xl">
        {/* Section Label */}
        <div className="contact-label text-xs tracking-[0.3em] text-gray-500 mb-6 text-center opacity-0 uppercase">
          Get In Touch
        </div>
        
        {/* Heading */}
        <h2 className="contact-heading text-4xl md:text-6xl font-bold text-center mb-6 opacity-0">
          LET'S WORK TOGETHER
        </h2>
        
        {/* Description */}
        <p className="contact-description text-center text-gray-400 max-w-2xl mx-auto mb-20 opacity-0 text-base md:text-lg">
          OPEN TO NEW OPPORTUNITIES, COLLABORATIONS, AND INTERESTING PROJECTS. 
          FEEL FREE TO REACH OUT!
        </p>
        
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item group bg-dark-800 border border-gray-800 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 opacity-0 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-primary-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d={method.icon} />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-sm font-bold mb-3 text-gray-500 tracking-wider uppercase">
                {method.title}
              </h3>
              
              {/* Value */}
              <p className="text-white group-hover:text-primary-400 transition-colors break-all">
                {method.value}
              </p>
            </a>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Currently based in Sri Lanka • Available for remote work
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
