import React, { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#techstack' },
  { label: 'Contributions', href: '#contributions' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [active, setActive] = useState('Home')

  // Scroll spy for active link
  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.querySelector(link.href)
        return el ? el.getBoundingClientRect().top : Infinity
      })
      const idx = offsets.findIndex(offset => offset > 0)
      setActive(idx === -1 ? navLinks[navLinks.length - 1].label : navLinks[Math.max(0, idx - 1)].label)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="w-full sticky top-0 z-50 bg-[#10111a] border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-display text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent select-none">Tarandeep<span className="text-cyan-400">.dev</span></a>
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={
                'transition-colors px-1 pb-1 ' +
                (active === link.label
                  ? 'text-purple-300 border-b-2 border-purple-400'
                  : 'text-gray-200 hover:text-purple-300')
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden text-gray-300 text-2xl">☰</div>
      </div>
    </header>
  )
}
