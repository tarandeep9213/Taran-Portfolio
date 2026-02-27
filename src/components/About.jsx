{/*import SkillBars from './SkillBars'*/}
import avatar from '../assets/avatar.jpg'

export default function About() {
  return (
    <section id="about" className="mt-16 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-shrink-0">
        <img
          src={avatar}
          alt="Tarandeep Singh Sethi"
          className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg object-cover mb-6 md:mb-0"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-display font-bold mb-2 text-purple-200">About Me</h2>
        <p className="text-gray-300 text-lg max-w-2xl">
          Hello! I’m a passionate AI-focused full-stack developer with a love for building robust, scalable, and user-friendly applications. My journey began with curiosity for how things work, evolving into a dedication to crafting intuitive user experiences and efficient backend systems. I thrive on solving complex problems, learning new technologies, and collaborating with teams to deliver real-world impact. When I’m not coding, you’ll find me exploring tech trends, contributing to open-source, or enjoying a good book.
        </p>
        <div className="mt-8">
          {/*<h3 className="text-2xl font-bold text-purple-300 mb-4">Key Skills</h3>
          <SkillBars />*/}
        </div>
      </div>
    </section>
  )
}