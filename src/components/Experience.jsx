import React, { useRef, useEffect } from 'react'

const experiences = [
  {
    role: 'Senior Software Developer',
    company: 'OneData Software Solutions',
    period: 'Apr 2023 - July 2025',
    desc: 'Led the complete development journey of a SaaS product from initial architecture to final deployment while building and mentoring a cross-functional team. Focused on performance optimization, team scalability, and aligning technical decisions with product goals.'
  },
  {
    role: 'UI/UX Developer',
    company: 'Envestnet | Yodlee',
    period: 'Dec 2020 - Feb 2023',
    desc: 'Spearheaded the design and development of responsive, user-centric in-house applications. Built and maintained a scalable, reusable component library, streamlining workflows and reducing development time.'
  },
  {
    role: 'Bachelor of Engineering',
    company: 'Dayananda Sagar College Of Engineering',
    period: '2016 - 2020',
    desc: 'Graduated with a strong foundation in data structures, algorithms, OOP, and web development. Participated in hackathons and coding competitions.'
  }
]

function useAnimateOnScroll() {
  const refs = useRef([])
  useEffect(() => {
    const handleScroll = () => {
      refs.current.forEach(ref => {
        if (!ref) return
        const rect = ref.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          ref.classList.add('fade-in')
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return refs
}

export default function Experience() {
  const refs = useAnimateOnScroll()
  return (
    <section id="experience" className="mt-16">
      <h2 className="text-3xl font-display font-bold mb-10 text-purple-200 text-center">Experience</h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-400 rounded-full opacity-60" style={{zIndex:0}} />
        <div className="space-y-12 relative z-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              ref={el => refs.current[i] = el}
              className="relative flex items-start gap-6 fade-in opacity-0 transition-opacity duration-700"
              style={{animationDelay: `${i * 0.2 + 0.2}s`}}
            >
              {/* Timeline dot */}
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 border-4 border-[#10111a] flex-shrink-0 mt-2 shadow-lg" />
              <div className="bg-gray-800/70 border border-purple-700 rounded-xl p-6 shadow-lg flex-1">
                <div className="font-bold text-xl text-purple-200 mb-1">{exp.role}</div>
                <div className="text-cyan-300 text-md font-medium mb-1">{exp.company}</div>
                <div className="text-gray-400 text-sm mb-2">{exp.period}</div>
                <div className="text-gray-200 text-base">{exp.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
