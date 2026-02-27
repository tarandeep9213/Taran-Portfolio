import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Contributions from './components/Contributions'
//import SkillBars from './components/SkillBars'
import TechStackGrid from './components/TechStackGrid'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Nav />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12">
        <Hero />
        <About />
        {/*<SkillBars />*/}
        <Experience />
        <Contributions />
        <TechStackGrid />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
