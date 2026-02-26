import React from 'react'

export default function Nav(){
  return (
    <header className="w-full border-b border-gray-800 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">AI</div>
          <div className="text-sm">
            <div className="font-display text-lg">Tarandeep Singh Sethi</div>
            <div className="text-xs text-gray-400">AI-focused Full-Stack Developer</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#tech" className="hover:text-white">Tech</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="md:hidden text-gray-300">☰</div>
      </div>
    </header>
  )
}
