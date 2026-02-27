import React from 'react'

const projects = [
  {
    title: 'Event Express (SAAS)',
    desc: 'All-in-one platform to host events and create stunning websites with ease.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    type: 'Fullstack',
    link: 'https://eventxpress.in/'
  },
  {
    title: 'OneCare',
    desc: 'Remote connectivity between patients and medical service providers. Access advanced lifestyle care programs and services.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    type: 'Fullstack',
    link: 'https://www.onedatasoftware.com/onecare'
  },
  {
    title: 'ODeX',
    desc: 'Centralized platform for the EXIM community.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    type: 'Frontend',
    link: 'https://odexglobal.com/'
  },
  {
    title: 'Elevate-CRM (SAAS)',
    desc: 'Accounting, invoicing, and quote app. (Initial slow load time due to free server)',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    type: 'Fullstack',
    link: 'https://elevate-crm.vercel.app/'
  },
  {
    title: 'Sharkdom',
    desc: 'AI-first PRM that finds, signs, and grows revenue with your best partners.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    type: 'Frontend',
    link: 'https://dev.sharkdom.com/'
  },
  {
    title: 'DocuGuard',
    desc: 'AI-powered legal document guardian.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    type: 'Fullstack',
    link: 'https://docuguard-v1.vercel.app/'
  }
]

function ProjectCard({ p }) {
  return (
    <article className="p-6 bg-gradient-to-br from-gray-800/60 to-gray-900 rounded-xl border border-gray-800 hover:shadow-lg hover:scale-[1.03] transition-transform flex flex-col h-full">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{p.title}</h3>
        <span className="text-xs px-2 py-1 bg-indigo-700/70 text-white rounded-full ml-2">{p.type}</span>
      </div>
      <p className="mt-2 text-gray-300 text-sm flex-1">{p.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-200">{t}</span>)}
      </div>
      <div className="mt-4">
        <a href={p.link} target="_blank" rel="noopener" className="text-sm text-indigo-300 hover:text-white underline">View Project →</a>
      </div>
    </article>
  )
}

export default function Projects(){
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-display font-semibold">Projects</h2>
      <p className="text-gray-400 mt-2">A selection of full-stack and frontend projects, including SaaS platforms, AI-powered tools, and business apps.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.title} p={p} />)}
      </div>
    </section>
  )
}
