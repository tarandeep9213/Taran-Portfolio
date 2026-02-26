import React from 'react'

export default function Footer(){
  return (
    <footer className="w-full border-t border-gray-800 mt-8">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-400 flex items-center justify-between">
        <div>
          © {new Date().getFullYear()} Tarandeep Sethi — AI-focused full-stack developer
        </div>
        <div className="space-x-4">
          <a 
            href="https://www.linkedin.com/in/tarandeep-sethi1313" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/tarandeep9213" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}