import React from 'react'

export default function Hero() {
  return (
    <section className="pt-16 pb-20 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-shrink-0">
        <img
          src="https://avatars.githubusercontent.com/u/9919?v=4" // Replace with your avatar URL
          alt="Your Avatar"
          className="w-32 h-32 rounded-full border-4 border-indigo-600 shadow-lg object-cover mb-6 md:mb-0"
        />
      </div>
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          AI-Focused Full-Stack Developer
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          Crafting robust, scalable, and intelligent digital experiences. I blend AI, automation, and modern web technologies to deliver impactful solutions for teams and businesses.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#projects" className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md text-white font-medium shadow hover:scale-[1.05] transition-transform">View My Work</a>
          <a href="/resume.pdf" target="_blank" rel="noopener" className="inline-flex items-center px-5 py-3 border border-gray-700 rounded-md text-gray-200 hover:bg-gray-800">Download Resume</a>
        </div>
      </div>
    </section>
  )
}
