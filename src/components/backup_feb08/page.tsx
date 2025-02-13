'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import TitleSlide from '@/components/TitleSlide'
import ProblemSlide from '@/components/ProblemSlide'

export default function Home() {
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.5 })

    const sections = document.querySelectorAll('section')
    sections.forEach(section => observer.observe(section))

    return () => sections.forEach(section => observer.unobserve(section))
  }, [])

  const menuItems = [
    { id: 'intro', label: 'Intro' },
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'market', label: 'Market' },
    { id: 'gtm', label: 'GTM&Business' },
    { id: 'why-me', label: 'Why Me' },
    { id: 'traction', label: 'Traction' },
    { id: 'competition', label: 'Competition' },
    { id: 'financials', label: 'Financials' },
    { id: 'team', label: 'Team' },
    { id: 'funding', label: 'Funding' },
    { id: 'milestones', label: 'Milestones' },
    { id: 'contacts', label: 'Contacts' }
  ]

  return (
    <main className="relative bg-primary-dark text-white overflow-hidden">
      {/* Navigation Menu */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-4 gap-2">
            {menuItems.map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group
                  ${activeSection === item.id ? 'text-white' : 'text-white/70 hover:text-white'}`}
              >
                {item.label}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary transition-transform duration-300
                    ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                />
              </a>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Background Pattern */}
      <div className="fixed inset-0 bg-hero-pattern opacity-20" />
      <div className="fixed inset-0 bg-gradient-to-br from-primary-dark via-primary to-secondary opacity-90" />

      {/* Content */}
      <div className="relative snap-y snap-mandatory h-screen overflow-y-auto">
        {/* Title Section */}
        <section id="intro" className="snap-start min-h-screen flex items-center justify-center">
          <TitleSlide />
        </section>

        {/* Problem Section */}
        <section id="problem" className="snap-start min-h-screen flex items-center justify-center">
          <ProblemSlide />
        </section>

        {/* Other sections will be added here */}
      </div>
    </main>
  )
}
