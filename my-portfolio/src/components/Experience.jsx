import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

const Experience = () => {
  const experienceRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate('.experience-label', {
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 800,
              ease: 'out(3)'
            })
            
            animate('.experience-heading', {
              translateY: [30, 0],
              opacity: [0, 1],
              duration: 1000,
              delay: 200,
              ease: 'out(3)'
            })
            
            animate('.experience-card', {
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 1000,
              delay: 400,
              easing: 'out(3)'
            })
            
            animate('.experience-highlight', {
              translateX: [-20, 0],
              opacity: [0, 1],
              duration: 600,
              delay: stagger(100, { start: 800 }),
              easing: 'out(3)'
            })
            
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (experienceRef.current) {
      observer.observe(experienceRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={experienceRef} id="experience" className="min-h-screen px-6 py-32 bg-dark-900 relative flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="container mx-auto relative z-10 max-w-5xl">
        {/* Section Label */}
        <div className="experience-label text-xs tracking-[0.3em] text-gray-500 mb-6 text-center opacity-0 uppercase">
          Professional Experience
        </div>
        
        {/* Heading */}
        <h2 className="experience-heading text-4xl md:text-6xl font-bold text-center mb-20 opacity-0">
          WORK EXPERIENCE
        </h2>
        
        {/* Experience Card */}
        <div className="experience-card bg-dark-800 border border-gray-800 rounded-3xl p-8 md:p-12 opacity-0 hover:border-primary-500/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
            <div>
              <div className="inline-block px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-xs text-primary-400 tracking-wider uppercase mb-4">
                Full-Time Internship
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Software Engineering Intern
              </h3>
              <p className="text-xl text-primary-400 mb-2">
                Sri Lanka Telecom (SLT)
              </p>
              <p className="text-gray-500">
                SLT Head Office • 6 Months
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-gray-400 text-sm">
              2025 - 2026
            </div>
          </div>
          
          <div className="border-l-2 border-primary-500/30 pl-6 mb-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Contributed to enterprise-level web applications in healthcare, internship management, 
              and digital queue systems, focusing on full stack development, UI/UX implementation, 
              backend integration, and system optimization.
            </p>
          </div>
          
          {/* Key Highlights */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="experience-highlight opacity-0">
              <h4 className="text-sm font-bold text-primary-400 mb-3 uppercase tracking-wider">
                Key Responsibilities
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Developed UI components and dashboards using React & Next.js
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Implemented backend logic with Node.js, Express, and MySQL
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Fixed security vulnerabilities based on OWASP ZAP reports
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Enhanced mobile responsiveness and UI consistency
                </li>
              </ul>
            </div>
            
            <div className="experience-highlight opacity-0">
              <h4 className="text-sm font-bold text-primary-400 mb-3 uppercase tracking-wider">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'Express', 'MySQL', 'REST APIs', 'OWASP ZAP', 'GitHub', 'Postman'].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-dark-700 border border-gray-700 rounded-lg text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <h4 className="text-sm font-bold text-primary-400 mb-3 mt-6 uppercase tracking-wider">
                Projects Delivered
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  Internship Management System (IMS)
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  E-Channeling Revamp System
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  Digital Queue Management System
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
