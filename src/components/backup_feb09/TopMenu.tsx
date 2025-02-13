'use client'

import { motion } from 'framer-motion'

const menuItems = [
  { id: 'intro', label: 'Intro' },
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'market', label: 'Market Opportunity' },
  { id: 'gtm', label: 'GTM & Business Model' },
  { id: 'why-me', label: 'Why Me' },
  { id: 'traction', label: 'Traction' },
  { id: 'competitive', label: 'Competitive Landscape' },
  { id: 'financials', label: 'Financials' },
  { id: 'team', label: 'Team' },
  { id: 'funding', label: 'Funding Ask' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'thank-you', label: 'Thank You' }
]

export default function TopMenu() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center justify-center space-x-6 py-4 overflow-x-auto">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
