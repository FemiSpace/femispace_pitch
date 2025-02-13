'use client'

import { motion } from 'framer-motion'

interface Section {
  name: string
  screens: number
  color?: string
}

const sections: Section[] = [
  { name: 'Intro', screens: 1 },
  { name: 'Problem', screens: 2, color: '#FF6B6B' },
  { name: 'Solution', screens: 2, color: '#4ECDC4' },
  { name: 'Market', screens: 1, color: '#45B7D1' },
  { name: 'GTM & Business', screens: 1, color: '#96CEB4' },
  { name: 'Why Me', screens: 1 },
  { name: 'Traction', screens: 1, color: '#D4A5A5' },
  { name: 'Competition', screens: 1, color: '#9B5DE5' },
  { name: 'Financials', screens: 1, color: '#45B7D1' },
  { name: 'Team', screens: 1 },
  { name: 'Funding', screens: 1, color: '#FF9A8B' },
  { name: 'Milestones', screens: 1 },
  { name: 'Contacts', screens: 1 }
]

export default function SlideNavigation({ currentSlide, totalSlides }: { currentSlide: number, totalSlides: number }) {
  // Calculate which section we're in
  let currentSection = 0
  let screenCount = 0
  for (let i = 0; i < sections.length; i++) {
    screenCount += sections[i].screens
    if (currentSlide < screenCount) {
      currentSection = i
      break
    }
  }

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-7xl mx-auto bg-black/20 backdrop-blur-lg rounded-full p-2">
        <div className="flex justify-between items-center relative">
          {/* Progress bar */}
          <motion.div 
            className="absolute left-0 top-0 bottom-0 bg-accent/30 rounded-full"
            initial={{ width: '0%' }}
            animate={{ 
              width: `${(currentSlide / (totalSlides - 1)) * 100}%`
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Section names */}
          <div className="flex justify-between items-center w-full px-2">
            {sections.map((section, index) => (
              <motion.div
                key={section.name}
                className={`px-3 py-1 rounded-full relative z-10 text-sm md:text-base transition-all duration-300 ${
                  index === currentSection 
                    ? 'text-white font-bold scale-110'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="whitespace-nowrap">
                  {section.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
