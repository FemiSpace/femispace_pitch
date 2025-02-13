'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import TitleSlide from '@/components/TitleSlide'
import ProblemSlide from '@/components/ProblemSlide'
import ProblemDefinitionSlide from '@/components/ProblemDefinitionSlide'
import MeetKat from '@/components/MeetKat'
import SystemIssuesSlide from '@/components/SystemIssuesSlide'
import BiologicalGrail from '@/components/BiologicalGrail'
import MarketSlide from '@/components/MarketSlide'
import FemiApp from '@/components/FemiApp'
import GTMBusinessSlide from '@/components/GTMBusinessSlide'
import WhyMeSlide from '@/components/WhyMeSlide'
import TractionSlide from '@/components/TractionSlide'
import CompetitionSlide from '@/components/CompetitionSlide'
import FinancialSlide from '@/components/FinancialSlide'
import TeamSlide from '@/components/TeamSlide'
import FundingAskSlide from '@/components/FundingAskSlide'
import MilestonesSlide from '@/components/MilestonesSlide'
import ThankYouSlide from '@/components/ThankYouSlide'
import { menuItems } from '@/config/navigation'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [transitioningTo, setTransitioningTo] = useState('')
  const observerRef = useRef(null)

  useEffect(() => {
    setMounted(true)
    setActiveSection('intro')
  }, [])

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
          setTransitioningTo('')
        }
      })
    }, { threshold: 0.5 })

    observerRef.current = observer
    const sections = document.querySelectorAll('section')
    sections.forEach(section => observer.observe(section))

    return () => {
      if (observerRef.current) {
        sections.forEach(section => observerRef.current.unobserve(section))
      }
    }
  }, [mounted])

  const scrollToSection = (id: string) => {
    if (!mounted) return;
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Navigation Menu */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent py-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -20 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="w-full">
          <div className="flex items-center justify-center py-4 max-w-full overflow-x-auto px-4 gap-2">
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
      <div className="fixed inset-0 bg-gradient-to-b from-[#8D43A4] via-[#582973] to-[#271A45] opacity-90" />

      {/* Main Content */}
      <main className="relative snap-y snap-mandatory h-screen overflow-y-auto">
        {mounted && (
          <>
            {/* Intro */}
            <section id="intro" className="snap-start min-h-screen flex items-center justify-center">
              <TitleSlide />
            </section>

            {/* Problem */}
            <section id="problem" className="snap-start min-h-screen flex items-center justify-center">
              <ProblemSlide />
            </section>

            {/* Problem Definition */}
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
              <BiologicalGrail />
            </section>

            {/* Market */}
            <section id="market" className="snap-start min-h-screen flex items-center justify-center">
              <MarketSlide />
            </section>

            {/* FemiApp Section */}
            <section id="femiapp" className="snap-start min-h-screen flex items-center justify-center">
              <FemiApp />
            </section>

            {/* GTM & Business Section */}
            <section id="gtm" className="snap-start min-h-screen flex items-center justify-center">
              <GTMBusinessSlide />
            </section>

            {/* Why Me Section */}
            <section id="why-me" className="snap-start min-h-screen flex items-center justify-center">
              <WhyMeSlide />
            </section>

            {/* Traction Section */}
            <section id="traction" className="snap-start min-h-screen flex items-center justify-center">
              <TractionSlide />
            </section>

            {/* Competition Section */}
            <section id="competition" className="snap-start min-h-screen flex items-center justify-center">
              <CompetitionSlide />
            </section>

            {/* Financial Section */}
            <section id="financials" className="snap-start min-h-screen flex items-center justify-center">
              <FinancialSlide />
            </section>

            {/* Team Section */}
            <section id="team" className="snap-start min-h-screen flex items-center justify-center">
              <TeamSlide />
            </section>

            {/* Funding Ask Section */}
            <section id="funding" className="snap-start min-h-screen flex items-center justify-center">
              <FundingAskSlide />
            </section>

            {/* Milestones Section */}
            <section id="milestones" className="snap-start min-h-screen flex items-center justify-center">
              <MilestonesSlide />
            </section>

            {/* Contact/Thank You Section */}
            <section id="contact" className="snap-start min-h-screen flex items-center justify-center">
              <ThankYouSlide />
            </section>
          </>
        )}
      </main>
    </>
  )
}
