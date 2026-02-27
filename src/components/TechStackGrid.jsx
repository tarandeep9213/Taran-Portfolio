import React, { useState } from 'react'

const mainTechs = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Tailwind CSS', icon: '🌬️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Next.js', icon: '⬛' },
  { name: 'Express.js', icon: '🚂' },
  { name: 'Figma', icon: '🎨' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'PostgreSQL', icon: '🐘' },
]

const allTechs = [
  ...mainTechs,
  { name: 'Git', icon: '🔺' },
  { name: 'Redux', icon: '🟣' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'GCP', icon: '🌥️' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'GraphQL', icon: '🔺' },
  { name: 'Jest', icon: '🧪' },
  { name: 'Bootstrap', icon: '🅱️' },
  { name: 'Material UI', icon: '📦' },
  { name: 'Sass', icon: '🎀' },
  { name: 'Python', icon: '🐍' },
  { name: 'C++', icon: '💻' },
  { name: 'Java', icon: '☕' },
  { name: 'Azure', icon: '🔷' },
]

export default function TechStackGrid() {
  const [showModal, setShowModal] = useState(false)
  return (
    <section id="techstack" className="mt-16">
      <h2 className="text-3xl font-display font-bold mb-6 text-purple-200 text-center">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {mainTechs.map(t => (
          <div key={t.name} className="flex flex-col items-center p-6 bg-gray-800/70 rounded-lg border border-gray-800 hover:scale-105 transition-transform">
            <div className="text-4xl mb-2">{t.icon}</div>
            <div className="text-gray-200 text-base font-semibold">{t.name}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
          onClick={() => setShowModal(true)}
        >
          View complete stack
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#181a23] rounded-2xl p-8 max-w-3xl w-full relative animate-fadeInUp">
            <button
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-purple-200 mb-6 text-center">Complete Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {allTechs.map(t => (
                <div key={t.name} className="flex flex-col items-center p-4 bg-gray-800/70 rounded-lg border border-gray-800">
                  <div className="text-3xl mb-2">{t.icon}</div>
                  <div className="text-gray-200 text-sm font-medium">{t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
