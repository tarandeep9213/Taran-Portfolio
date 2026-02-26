import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="mt-12 pb-12">
      <h2 className="text-2xl font-display font-semibold">Contact</h2>
      <p className="text-gray-400 mt-2">Let’s connect! Reach out for collaborations, project inquiries, or to discuss how AI and automation can transform your workflow. Email, LinkedIn, GitHub, or send a quick note below.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-800">
          <div className="text-sm text-gray-300">Email</div>
          <div className="mt-1 font-medium">tarandeep.9213@gmail.com</div>
          <div className="mt-3 text-sm text-gray-300">LinkedIn</div>
          <div className="mt-1 font-medium">https://www.linkedin.com/in/tarandeep-sethi1313</div>
          <div className="mt-3 text-sm text-gray-300">GitHub</div>
          <div className="mt-1 font-medium">https://github.com/tarandeep9213</div>
        </div>
        <form className="p-6 bg-gray-800/50 rounded-lg border border-gray-800 flex flex-col gap-3">
          <input className="bg-gray-900 border border-gray-700 px-3 py-2 rounded text-gray-100" placeholder="Your name" />
          <input className="bg-gray-900 border border-gray-700 px-3 py-2 rounded text-gray-100" placeholder="Email" />
          <textarea className="bg-gray-900 border border-gray-700 px-3 py-2 rounded text-gray-100" rows="4" placeholder="Message (optional example)"></textarea>
          <div className="mt-2">
            <button type="submit" className="px-4 py-2 bg-indigo-600 rounded text-white">Send</button>
          </div>
          {/*<div className="text-xs text-gray-500 mt-2">Note: This form is static in the template — replace with your form backend or a service like Formspree.</div> */}
        </form>
      </div>
    </section>
  )
}
