import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

const Skills = () => {
  const skillsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate section label
            animate('.skills-label', {
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 800,
              ease: 'out(3)'
            })
            
            // Animate heading
            animate('.skills-heading', {
              translateY: [30, 0],
              opacity: [0, 1],
              duration: 1000,
              delay: 200,
              ease: 'out(3)'
            })
            
            // Animate description
            animate('.skills-description', {
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 1000,
              delay: 400,
              ease: 'out(3)'
            })
            
            // Animate process cards
            animate('.process-card', {
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 800,
              delay: stagger(150, { start: 600 }),
              easing: 'out(3)'
            })
            
            // Animate tech badges
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
      description: "Understanding requirements and planning the architecture. Breaking down complex problems into manageable components."
    },
    {
      number: "02",
      title: "DESIGN",
      description: "Creating user-friendly interfaces and designing database schemas. Focusing on UX and scalability."
    },
    {
      number: "03",
      title: "DEVELOP",
      description: "Writing clean, maintainable code following best practices. Building both frontend and backend components."
    },
    {
      number: "04",
      title: "DEPLOY",
      description: "Testing, debugging, and deploying applications. Ensuring everything works smoothly in production."
    }
  ]

  const technologies = {
    "Frontend": ["React.js", "JavaScript", "Tailwind CSS", "HTML/CSS", "Vite"],
    "Backend": ["Node.js", "Express.js", "MongoDB", "SQL", "RESTful APIs"],
    "Tools": ["Git/GitHub", "Docker", "Kubernetes", "VS Code", "Postman"],
    "Other": ["Java", "Python", "Android", "Microservices", "OOP"]
  }

  return (
    <section ref={skillsRef} id="skills" className="min-h-screen px-6 py-32 bg-dark-800 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Label */}
        <div className="skills-label text-xs tracking-[0.3em] text-gray-500 mb-6 text-center opacity-0 uppercase">
          My Process
        </div>
        
        {/* Heading */}
        <h2 className="skills-heading text-4xl md:text-6xl font-bold text-center mb-6 opacity-0">
          FROM IDEA TO LAUNCH
        </h2>
        
        {/* Description */}
        <p className="skills-description text-center text-gray-400 max-w-3xl mx-auto mb-20 opacity-0 text-base md:text-lg">
          MY APPROACH TO BUILDING WEB APPLICATIONS WITH FOCUS ON QUALITY, 
          PERFORMANCE, AND USER EXPERIENCE
        </p>
        
        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {process.map((step, index) => (
            <div
              key={index}
              className="process-card bg-dark-700 border border-gray-800 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 opacity-0"
            >
              {/* Number */}
              <div className="text-5xl font-bold text-primary-500/20 mb-4">
                {step.number}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-white">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Technologies Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
            TECHNOLOGIES & TOOLS
          </h3>
          
          <div className="space-y-8">
            {Object.entries(technologies).map(([category, techs], index) => (
              <div key={index} className="border-b border-gray-800 pb-8 last:border-0">
                <h4 className="text-sm text-gray-500 tracking-wider uppercase mb-4">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech, i) => (
                    <span
                      key={i}
                      className="tech-badge px-4 py-2 bg-dark-700 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-primary-500/50 hover:text-white transition-all opacity-0"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6 text-base max-w-2xl mx-auto">
              Proficient across the full development stack with hands-on experience in multiple frameworks and technologies. 
              Always learning and adapting to deliver the best solutions.
            </p>
            <a
              href="mailto:Devindi08@outlook.com"
              className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold transition-all hover:bg-gray-200 uppercase text-sm tracking-wider"
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
