'use client'

import { motion } from 'framer-motion'

const menuItems = [
  { id: 'intro', label: 'Intro' },
  { id: 'problem', label: 'Problem', screens: 2 },
  { id: 'solution', label: 'Solution', screens: 2 },
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

export default function MainMenu({ currentSection = 'intro', onNavigate }: { currentSection: string; onNavigate: (section: string) => void }) {
  return (
    <motion.div
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="bg-white/10 backdrop-blur-lg rounded-lg p-4 shadow-xl border border-white/20">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  currentSection === item.id
                    ? 'bg-secondary text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-sm font-medium">{item.label}</span>
                {item.screens && (
                  <span className="ml-2 text-xs opacity-60">
                    ({item.screens} screens)
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  )
}
