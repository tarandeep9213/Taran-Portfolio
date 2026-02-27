import React from 'react'

const skills = [
  { name: 'Frontend Development', percent: 90 },
  { name: 'Backend Development', percent: 80 },
  { name: 'Database Management', percent: 75 },
  { name: 'Application Deployment', percent: 80 },
]

export default function SkillBars1() {
  return (
    <div className="mt-8 space-y-4 max-w-xl">
      {skills.map(skill => (
        <div key={skill.name}>
          <div className="flex justify-between text-sm text-gray-300 mb-1">
            <span>{skill.name}</span>
            <span>{skill.percent}%</span>
          </div>
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-700"
              style={{ width: skill.percent + '%' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
