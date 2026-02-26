import React from 'react'

const stacks = [
  {title: 'AI / ML', items: ['PyTorch', 'TensorFlow', 'Transformers', 'scikit-learn', 'MLflow']},
  {title: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'GraphQL', 'Postgres']},
  {title: 'Frontend', items: ['React', 'Vite', 'TypeScript', 'Tailwind CSS']},
  {title: 'Cloud / DevOps', items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD']}
]

export default function TechStack(){
  return (
    <section id="tech" className="mt-16">
      <h2 className="text-2xl font-display font-semibold">Tech Stack</h2>
      <p className="text-gray-400 mt-2">Organized by domain — tools I use to build scalable AI systems.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stacks.map(s => (
          <div key={s.title} className="p-4 bg-gray-800/50 rounded-lg border border-gray-800">
            <div className="font-medium text-white">{s.title}</div>
            <ul className="mt-3 text-gray-300 text-sm space-y-1">
              {s.items.map(i => <li key={i}>• {i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
