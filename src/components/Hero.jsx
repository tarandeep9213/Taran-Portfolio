import React from 'react'

export default function Hero(){
  return (
    <section className="pt-12 pb-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Empowering Innovation with AI & Automation
        </h1>
        <p className="mt-4 text-gray-300 text-lg">I create intelligent platforms and developer tools that streamline workflows, automate reviews, and unlock new possibilities for teams and businesses.</p>
        <div className="mt-6 flex gap-4">
          <a href="#projects" className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md text-white font-medium shadow hover:scale-[1.02] transition-transform">View Projects</a>
          <a href="#contact" className="inline-flex items-center px-5 py-3 border border-gray-700 rounded-md text-gray-200 hover:bg-gray-800">Contact Me</a>
        </div>
      </div>
    </section>
  )
}
