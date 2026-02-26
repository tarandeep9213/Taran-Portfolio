import React from 'react'

const projects = [
  {
    title: 'InsightFlow AI Review Suite',
    desc: 'A suite of AI-powered tools for automated code review, documentation, and workflow optimization. Used by teams to accelerate code quality and reduce review time by 40%.',
    tech: ['Python', 'React', 'OpenAI API', 'Docker', 'AWS'],
    link: '#'
  },
  {
    title: 'DataOps Visualizer',
    desc: 'Interactive platform for visualizing and managing complex data pipelines. Enables real-time monitoring, impact analysis, and automated anomaly detection for enterprise data workflows.',
    tech: ['TypeScript', 'Node.js', 'D3.js', 'Kubernetes'],
    link: '#'
  },
  {
    title: 'SmartDoc Extractor',
    desc: 'AI-driven document intelligence system that extracts, classifies, and summarizes business documents. Reduced manual processing by 80% for clients in finance and healthcare.',
    tech: ['Transformers', 'FastAPI', 'Postgres', 'GCP'],
    link: '#'
  },
  {
    title: 'CloudOps Utilizer',
    desc: 'Cloud-native tool for tracking, analyzing, and optimizing API usage across distributed systems. Helped organizations cut cloud costs by up to 25% through actionable insights.',
    tech: ['Go', 'React', 'BigQuery', 'Prometheus'],
    link: '#'
  },
  {
    title: 'Solution Explorer Pro',
    desc: 'A visual explorer for microservices and solution architectures, enabling teams to map dependencies, monitor health, and streamline deployments.',
    tech: ['React', 'GraphQL', 'Docker', 'Azure'],
    link: '#'
  }
]

function ProjectCard({p}){
  return (
    <article className="p-6 bg-gradient-to-br from-gray-800/60 to-gray-900 rounded-xl border border-gray-800 hover:scale-[1.02] transition-transform">
      <h3 className="font-semibold text-lg">{p.title}</h3>
      <p className="mt-2 text-gray-300 text-sm">{p.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-200">{t}</span>)}
      </div>
      <div className="mt-4">
        <a href={p.link} className="text-sm text-indigo-300 hover:text-white">Live / Demo →</a>
      </div>
    </article>
  )
}

export default function Projects(){
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-display font-semibold">Featured Projects</h2>
      <p className="text-gray-400 mt-2">A selection of AI-powered platforms and developer tools, each designed to deliver measurable impact and streamline complex workflows.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.title} p={p} />)}
      </div>
    </section>
  )
}
