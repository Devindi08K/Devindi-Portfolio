import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import Particles from './Particles'

const Skills = () => {
  const skillsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate('.skills-label', {
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 800,
              ease: 'out(3)'
            })
            
            animate('.skills-heading', {
              translateY: [30, 0],
              opacity: [0, 1],
              duration: 1000,
              delay: 200,
              ease: 'out(3)'
            })
            
            animate('.skills-description', {
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 1000,
              delay: 400,
              ease: 'out(3)'
            })
            
            animate('.process-card', {
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 800,
              delay: stagger(150, { start: 600 }),
              easing: 'out(3)'
            })
            
            animate('.tech-badge', {
              scale: [0.8, 1],
              opacity: [0, 1],
              duration: 600,
              delay: stagger(50, { start: 1200 }),
              easing: 'outElastic(1, .8)'
            })
            
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const process = [
    {
      number: "01",
      title: "IDEA",
      description: "Understanding requirements and planning the architecture."
    },
    {
      number: "02",
      title: "DESIGN",
      description: "Creating user-friendly interfaces and database schemas."
    },
    {
      number: "03",
      title: "DEVELOP",
      description: "Writing clean, maintainable code following best practices."
    },
    {
      number: "04",
      title: "DEPLOY",
      description: "Testing, debugging, and deploying to production."
    }
  ]

  const technologies = {
    "Frontend": ["React.js", "JavaScript", "Tailwind CSS", "HTML/CSS", "Vite"],
    "Backend": ["Node.js", "Express.js", "MongoDB", "SQL", "RESTful APIs"],
    "Tools": ["Git/GitHub", "Docker", "Kubernetes", "VS Code", "Postman"],
    "Other": ["Java", "Python", "Android", "Microservices", "OOP"]
  }

  return (
    <section ref={skillsRef} id="skills" className="min-h-screen px-6 py-32 bg-dark-800 relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 opacity-70"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Label */}
        <div className="skills-label text-xs tracking-[0.3em] text-gray-500 mb-6 text-center opacity-0 uppercase">
          My Process
        </div>
        
        {/* Heading */}
        <h2 className="skills-heading text-4xl md:text-5xl font-bold text-center mb-4 opacity-0">
          FROM IDEA TO LAUNCH
        </h2>
        
        {/* Description */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="skills-description text-center text-gray-400 opacity-0">
            <p className="text-base md:text-lg leading-relaxed">
              As a <span className="text-white font-semibold">4th Year Software Engineering Student at SLIIT</span>, I focus on building 
              scalable web applications with quality, performance, and user experience at the core. 
              My approach combines academic knowledge with hands-on professional experience from developing 
              enterprise-level systems.
            </p>
          </div>
        </div>
        
        {/* Process Steps - Compact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
          {process.map((step, index) => (
            <div
              key={index}
              className="process-card bg-dark-700/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 opacity-0"
            >
              <div className="text-3xl font-bold text-primary-500/20 mb-3">
                {step.number}
              </div>
              <h3 className="text-base font-bold mb-2 text-white">
                {step.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Technologies Section - Smaller */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8 text-white">
            TECH STACK
          </h3>
          
          <div className="space-y-6">
            {Object.entries(technologies).map(([category, techs], index) => (
              <div key={index} className="border-b border-gray-800 pb-6 last:border-0">
                <h4 className="text-xs text-gray-500 tracking-wider uppercase mb-3">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, i) => (
                    <span
                      key={i}
                      className="tech-badge px-3 py-1.5 bg-dark-700/50 backdrop-blur-sm border border-gray-700 rounded-lg text-xs text-gray-300 hover:border-primary-500/50 hover:text-white transition-all opacity-0"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6 text-sm max-w-2xl mx-auto">
              Proficient across the full development stack with hands-on experience in multiple frameworks. 
              Always learning and adapting to deliver the best solutions.
            </p>
            <a
              href="mailto:Devindi08@outlook.com"
              className="inline-block px-6 py-3 bg-white text-black rounded-lg font-semibold transition-all hover:bg-gray-200 uppercase text-xs tracking-wider"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
