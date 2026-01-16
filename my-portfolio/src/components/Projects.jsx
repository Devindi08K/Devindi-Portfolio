import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

const Projects = () => {
  const projectsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate section label
            animate('.projects-label', {
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 800,
              ease: 'out(3)'
            })
            
            // Animate heading
            animate('.projects-heading', {
              translateY: [30, 0],
              opacity: [0, 1],
              duration: 1000,
              delay: 200,
              ease: 'out(3)'
            })
            
            // Animate description
            animate('.projects-description', {
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 1000,
              delay: 400,
              ease: 'out(3)'
            })
            
            // Animate project cards
            animate('.project-card', {
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 800,
              delay: stagger(100, { start: 600 }),
              easing: 'out(3)'
            })
            
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Internship Management System",
      description: "SLT HEAD OFFICE • 6-MONTH INTERNSHIP",
      fullDescription: "Enterprise web platform streamlining end-to-end internship processes including applications, CV submissions, approvals, certificate generation, and admin workflows.",
      tech: ["React", "Next.js", "Node.js", "MySQL", "OWASP ZAP"],
      link: null,
      category: "PROFESSIONAL",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      isProfessional: true
    },
    {
      title: "E-Channeling Revamp System",
      description: "SLT HEAD OFFICE • 6-MONTH INTERNSHIP",
      fullDescription: "Healthcare appointment management platform modernizing hospital channeling, doctor scheduling, and prescription handling with role-based dashboards.",
      tech: ["Next.js", "React", "Node.js", "MySQL", "REST APIs"],
      link: null,
      category: "PROFESSIONAL",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      isProfessional: true
    },
    {
      title: "Digital Queue Management System",
      description: "SLT HEAD OFFICE • 6-MONTH INTERNSHIP",
      fullDescription: "Web-based solution for optimizing customer queues digitally, reducing waiting times and improving service efficiency with multi-role interfaces.",
      tech: ["React", "Next.js", "Node.js", "Express", "MySQL"],
      link: null,
      category: "PROFESSIONAL",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      isProfessional: true
    },
    {
      title: "Restaurant Management System",
      description: "YEAR 2 SEMESTER 2 ITP GROUP PROJECT",
      fullDescription: "Complete restaurant management solution with order processing, inventory tracking, and customer management.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      link: "https://github.com/Devindi08K/Y2S2-grp-pro-Restaurant-management-system-",
      category: "FULL STACK",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop"
    },
    {
      title: "Task Profile",
      description: "YEAR 2 SEMESTER 1 OOP PROJECT",
      fullDescription: "Object-oriented task management application built with Java, focusing on clean architecture and design patterns.",
      tech: ["Java", "OOP", "Web"],
      link: "https://github.com/Devindi08K/Y2S1-OOP-pro-task-profile",
      category: "BACKEND",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop"
    },
    {
      title: "TICKTOCK",
      description: "YEAR 2 SEMESTER 2 MOBILE PROJECT",
      fullDescription: "Task management Android application with intuitive UI and real-time synchronization capabilities.",
      tech: ["Android", "Mobile", "Java"],
      link: "https://github.com/Devindi08K/Y2S1-OOP-pro-task-profile",
      category: "MOBILE",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
    },
    {
      title: "Finance Management API",
      description: "YEAR 3 SEMESTER 1 APPLICATION FRAMEWORK",
      fullDescription: "RESTful API for financial operations with secure authentication and transaction management.",
      tech: ["Express.js", "MongoDB", "REST API"],
      link: "https://github.com/Devindi08K/project-IT22106742-AF1",
      category: "BACKEND",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "Countries Explorer",
      description: "YEAR 3 SEMESTER 1 APPLICATION FRAMEWORK",
      fullDescription: "React-based web application for exploring country data with interactive maps and detailed statistics.",
      tech: ["React", "JavaScript", "API"],
      link: "https://github.com/Devindi08K/Y3S1-AF-Assignment2",
      category: "FRONTEND",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&h=400&fit=crop"
    },
    {
      title: "Cravely",
      description: "YEAR 3 SEMESTER 1 DISTRIBUTED SYSTEMS",
      fullDescription: "Microservices-based delivery management platform with Docker containerization and Kubernetes orchestration.",
      tech: ["Microservices", "Docker", "Kubernetes"],
      link: "https://github.com/wahallu/cravely",
      category: "DISTRIBUTED",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    }
  ]

  return (
    <section ref={projectsRef} id="projects" className="min-h-screen px-6 py-32 bg-dark-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Label */}
        <div className="projects-label text-xs tracking-[0.3em] text-gray-500 mb-6 text-center opacity-0 uppercase">
          Portfolio
        </div>
        
        {/* Heading */}
        <h2 className="projects-heading text-4xl md:text-6xl font-bold text-center mb-6 opacity-0">
          SELECTED PROJECTS
        </h2>
        
        {/* Description */}
        <p className="projects-description text-center text-gray-400 max-w-3xl mx-auto mb-20 opacity-0 text-base md:text-lg">
          A COLLECTION OF ACADEMIC AND PERSONAL PROJECTS SHOWCASING MY 
          DEVELOPMENT JOURNEY AND TECHNICAL SKILLS
        </p>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group bg-dark-800 border border-gray-800 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 opacity-0"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-dark-700">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent opacity-60"></div>
              </div>
              
              {/* Category Badge */}
              <div className="p-6 pb-0">
                <span className="inline-block px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-xs text-primary-400 tracking-wider uppercase">
                  {project.category}
                </span>
              </div>
              
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-gray-500 mb-3 tracking-wider uppercase">
                  {project.description}
                </p>
                
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {project.fullDescription}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-dark-700 border border-gray-700 rounded text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Link or Badge */}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary-400 hover:text-primary-300 font-semibold transition-colors group"
                  >
                    <span className="uppercase tracking-wider">View Project</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                ) : (
                  <div className="inline-flex items-center text-sm text-gray-500 font-semibold">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="uppercase tracking-wider">Proprietary Project</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
