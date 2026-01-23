import { useEffect } from 'react'
import { animate, stagger } from 'animejs'
import LetterGlitch from './LetterGlitch'

const Hero = () => {
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Animate the tagline
      animate('.hero-tagline', {
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 1000,
        ease: 'out(3)'
      })

      // Animate the main heading
      animate('.hero-heading', {
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1200,
        delay: 200,
        ease: 'out(3)'
      })

      // Animate the description
      animate('.hero-description', {
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 500,
        ease: 'out(3)'
      })

      // Animate the button
      animate('.hero-button', {
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 800,
        delay: 800,
        ease: 'outElastic(1, .8)'
      })

      // Animate the badge
      animate('.hero-badge', {
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
        delay: 1000,
        ease: 'out(3)'
      })
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-dark-900">
      {/* Letter Glitch Background */}
      <div className="absolute inset-0">
        <LetterGlitch
          glitchColors={['#0ea5e9', '#38bdf8', '#7dd3fc']}
          glitchSpeed={30}
          smooth={true}
          outerVignette={true}
          centerVignette={false}
        />
      </div>
      
      {/* Additional gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/30 to-dark-900/70"></div>
      
      <div className="container mx-auto text-center relative z-10 max-w-5xl">
        <div className="hero-tagline text-xs md:text-sm tracking-[0.3em] text-gray-400 mb-8 opacity-0 uppercase">
          Full Stack Developer
        </div>
        
        <h1 className="hero-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-8 opacity-0 leading-tight">
          <span className="block mb-2">CODE FOR</span>
          <span className="block bg-gradient-to-r from-primary-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            INNOVATION
          </span>
        </h1>
        
        <p className="hero-description text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 opacity-0 leading-relaxed">
          4th Year Software Engineering Student at Sri Lanka Institute of Information Technology (SLIIT). 
          Building scalable, high-performance web applications with proven experience developing enterprise-level systems at SLT.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#projects"
            className="hero-button px-8 py-4 bg-white text-black rounded-lg font-semibold transition-all hover:bg-gray-200 opacity-0 uppercase text-sm tracking-wider"
          >
            View My Work
          </a>
        </div>

        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-full text-xs text-gray-400 opacity-0">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          4th Year SE at SLIIT • 6 Months at SLT Head Office
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 hero-badge">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
