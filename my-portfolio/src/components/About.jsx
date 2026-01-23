import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import Waves from './Waves'

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate section label
            animate('.about-label', {
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 800,
              ease: 'out(3)'
            })
            
            // Animate heading
            animate('.about-heading', {
              translateY: [30, 0],
              opacity: [0, 1],
              duration: 1000,
              delay: 200,
              ease: 'out(3)'
            })
            
            // Animate description
            animate('.about-description', {
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 1000,
              delay: 400,
              ease: 'out(3)'
            })
            
            // Animate service cards
            animate('.service-card', {
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "FRONTEND DEVELOPMENT",
      description: "I CREATE MODERN, RESPONSIVE WEB INTERFACES WITH REACT, JAVASCRIPT, AND TAILWIND CSS. FOCUSED ON USER EXPERIENCE AND CLEAN, MAINTAINABLE CODE.",
      features: [
        "Responsive Design",
        "React Components",
        "Modern UI/UX",
        "Performance Optimization"
      ],
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      title: "BACKEND DEVELOPMENT",
      description: "BUILDING ROBUST SERVER-SIDE APPLICATIONS WITH NODE.JS, EXPRESS, AND MONGODB. CREATING SCALABLE APIS AND DATABASE SOLUTIONS.",
      features: [
        "RESTful APIs",
        "Database Design",
        "Authentication",
        "Server Architecture"
      ],
      icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
    },
    {
      title: "FULL STACK SOLUTIONS",
      description: "END-TO-END APPLICATION DEVELOPMENT COMBINING FRONTEND AND BACKEND EXPERTISE TO DELIVER COMPLETE, WORKING SOLUTIONS.",
      features: [
        "Complete Architecture",
        "Scalable Solutions",
        "Best Practices",
        "Production Ready"
      ],
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    }
  ]

  return (
    <section ref={aboutRef} id="about" className="min-h-screen px-6 py-32 bg-dark-800 relative overflow-hidden">
      {/* Waves Background */}
      <div className="absolute inset-0 opacity-30">
        <Waves
          lineColor="#0ea5e9"
          backgroundColor="transparent"
          waveSpeedX={0.0125}
          waveSpeedY={0.005}
          waveAmpX={32}
          waveAmpY={16}
          className="w-full h-full"
        />
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Label */}
        <div className="about-label text-xs tracking-[0.3em] text-gray-500 mb-6 text-center opacity-0 uppercase">
          What I Do
        </div>
        
        {/* Heading */}
        <h2 className="about-heading text-4xl md:text-6xl font-bold text-center mb-6 opacity-0">
          DEVELOPMENT SERVICES
        </h2>
        
        {/* Description */}
        <p className="about-description text-center text-gray-400 max-w-3xl mx-auto mb-20 opacity-0 text-base md:text-lg">
          SPECIALIZING IN MODERN WEB DEVELOPMENT WITH A FOCUS ON CLEAN CODE, 
          USER EXPERIENCE, AND SCALABLE SOLUTIONS
        </p>
        
        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-dark-700 border border-gray-800 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 opacity-0"
            >
              {/* Background Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-700"></div>
              </div>
              
              <div className="p-8 -mt-16 relative z-10">
              {/* Icon */}
              <div className="mb-6">
                <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-white tracking-wide">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300 text-sm">
                    <svg className="w-4 h-4 mr-3 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Hover effect arrow */}
              <div className="mt-6 flex items-center text-primary-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="uppercase tracking-wider">Learn More</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
