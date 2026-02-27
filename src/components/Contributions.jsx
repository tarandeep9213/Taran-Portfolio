import React from 'react'

const contributions = [
  {
    title: 'Hosted Tech Seminars',
    desc: 'Led interactive workshops and seminars on modern web development topics, sharing insights on React hooks, state management, and performance optimization. Conducted monthly sessions for a local developer group.'
  },
  {
    title: 'Judged College Hackathon',
    desc: "Evaluated innovative projects at the 'FutureTech Hackathon 2024', providing constructive feedback and helping select winning teams. Assessed over 50 projects ranging from AI-powered solutions to sustainable tech initiatives."
  },
  {
    title: 'Mentored Students',
    desc: 'Provided guidance and support to aspiring developers, helping them navigate career paths, improve coding skills, and prepare for interviews.'
  }
]

export default function Contributions() {
  return (
    <section id="contributions" className="mt-16">
      <h2 className="text-2xl font-display font-semibold mb-6">Contributions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contributions.map((c, i) => (
          <div key={i} className="bg-gray-800/50 rounded-lg p-6 border border-gray-800">
            <div className="font-semibold text-lg text-white">{c.title}</div>
            <div className="mt-2 text-gray-300 text-sm">{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
