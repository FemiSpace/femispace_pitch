'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import TitleSlide from '@/components/TitleSlide'
import ProblemSlide from '@/components/ProblemSlide'
import ProblemDefinitionSlide from '@/components/ProblemDefinitionSlide'
import MeetKat from '@/components/MeetKat'
import SystemIssuesSlide from '@/components/SystemIssuesSlide'
import FemiSpace from '@/components/FemiSpace'
import FemiApp from '@/components/FemiApp'
import { menuItems } from '@/config/navigation'

export default function Home() {
  const [activeSection, setActiveSection] = useState('intro')
  const [transitioningTo, setTransitioningTo] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
          setTransitioningTo('')
        } else if (entry.boundingClientRect.top > 0) {
          setTransitioningTo(entry.target.id)
        }
      })
    }, { threshold: 0.5 })

    const sections = document.querySelectorAll('section')
    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="relative bg-primary-dark text-white overflow-hidden">
      {/* Navigation Menu */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="w-full">
          <div className="flex items-center justify-center py-4 max-w-full overflow-hidden">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                className={`px-2.5 py-2 text-sm font-medium transition-all duration-300 relative
                  ${activeSection === item.id 
                    ? 'text-secondary font-bold scale-110 after:content-[""] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-secondary' 
                    : 'text-white/70 hover:text-white'}`}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Background Pattern */}
      <div className="fixed inset-0 bg-hero-pattern opacity-20" />
      <div className="fixed inset-0 bg-gradient-to-br from-primary-dark via-primary to-secondary opacity-90" />

      {/* Main Content */}
      <div className="relative snap-y snap-mandatory h-screen overflow-y-auto">
        {/* Title Section */}
        <section id="intro" className="snap-start min-h-screen flex items-center justify-center">
          <TitleSlide />
        </section>

        {/* First Problem Screen - Statistics */}
        <section id="problem" className="snap-start min-h-screen flex items-center justify-center">
          <ProblemSlide />
        </section>

        {/* Second Problem Screen - Disease Circle */}
        <section id="problem-definition" className="snap-start min-h-screen flex items-center justify-center">
          <ProblemDefinitionSlide />
        </section>

        {/* Meet Kat */}
        <section id="meet-kat" className="snap-start min-h-screen flex items-center justify-center">
          <MeetKat />
        </section>

        {/* System Issues */}
        <section id="system-issues" className="snap-start min-h-screen flex items-center justify-center">
          <SystemIssuesSlide />
        </section>

        {/* Solution */}
        <section id="solution" className="snap-start min-h-screen flex items-center justify-center">
          <FemiSpace />
        </section>

        {/* FemiApp Demo */}
        <section id="femiapp" className="snap-start min-h-screen flex items-center justify-center">
          <FemiApp />
        </section>

        {/* Case Study */}
        <section id="case-study" className="snap-start min-h-screen flex items-center justify-center">
          <div className="text-white text-lg">Case Study</div>
        </section>

        {/* Market */}
        <section id="market" className="snap-start min-h-screen flex items-center justify-center">
          <div className="text-white text-lg">Market</div>
        </section>

        {/* GTM & Business */}
        <section id="gtm" className="snap-start min-h-screen flex items-center justify-center">
          <div className="text-white text-lg">GTM & Business</div>
        </section>

        {/* Why Me */}
        <section id="why-me" className="snap-start min-h-screen flex items-center justify-center">
          <div className="text-white text-lg">Why Me</div>
        </section>

        {/* Traction */}
        <section id="traction" className="snap-start min-h-screen flex items-center justify-center">
          <div className="text-white text-lg">Traction</div>
        </section>

        {/* Competition */}
        <section id="competition" className="snap-start min-h-screen flex items-center justify-center">
          <div className="text-white text-lg">Competition</div>
        </section>

        {/* Financials */}
        <section id="financials" className="snap-start min-h-screen flex items-center justify-center">
          <div className="text-white text-lg">Financials</div>
        </section>

        {/* Team */}
        <section id="team" className="snap-start min-h-screen flex items-center justify-center">
          <div className="text-white text-lg">Team</div>
        </section>

        {/* Funding */}
        <section id="funding" className="snap-start min-h-screen flex items-center justify-center">
          <div className="text-white text-lg">Funding</div>
        </section>

        {/* Milestones */}
        <section id="milestones" className="snap-start min-h-screen flex items-center justify-center">
          <div className="text-white text-lg">Milestones</div>
        </section>

        {/* Contact */}
        <section id="contact" className="snap-start min-h-screen flex items-center justify-center">
          <div className="text-white text-lg">Contact</div>
        </section>

        {/* Thank You */}
        <section id="thank-you" className="snap-start min-h-screen flex items-center justify-center">
          <div className="text-white text-lg">Thank You</div>
        </section>
      </div>
    </main>
  )
}
