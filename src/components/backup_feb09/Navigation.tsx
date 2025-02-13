'use client'

import { motion } from 'framer-motion'

export const slides = [
  { id: 'intro', label: 'Intro', screens: 1 },
  { id: 'problem', label: 'Problem', screens: 2 },
  { id: 'solution', label: 'Solution', screens: 2 },
  { id: 'market', label: 'Market Opportunity', screens: 1 },
  { id: 'gtm', label: 'GTM & Business Model', screens: 1 },
  { id: 'why-me', label: 'Why Me', screens: 1 },
  { id: 'traction', label: 'Traction', screens: 1 },
  { id: 'competitive', label: 'Competitive Landscape', screens: 1 },
  { id: 'financials', label: 'Financials', screens: 1 },
  { id: 'team', label: 'Team', screens: 1 },
  { id: 'funding', label: 'Funding Ask', screens: 1 },
  { id: 'milestones', label: 'Milestones', screens: 1 },
  { id: 'thank-you', label: 'Thank You', screens: 1 }
]

interface NavigationProps {
  currentSlide: number
  currentScreen: number
  onNavigate: (slideIndex: number) => void
}

export default function Navigation({ currentSlide, currentScreen, onNavigate }: NavigationProps) {
  return (
    <>
      {/* Menu */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="bg-white/10 backdrop-blur-lg rounded-lg p-4 shadow-xl border border-white/20">
          <ul className="space-y-2">
            {slides.map((slide, index) => (
              <li key={slide.id}>
                <button
                  onClick={() => onNavigate(index)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    currentSlide === index
                      ? 'bg-secondary text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-sm font-medium">{slide.label}</span>
                  {slide.screens > 1 && (
                    <span className="ml-2 text-xs opacity-60">
                      ({currentSlide === index ? `${currentScreen + 1}/${slide.screens}` : `${slide.screens} screens`})
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      {/* Screen Navigation (only for multi-screen sections) */}
      {slides[currentSlide].screens > 1 && (
        <div className="fixed bottom-8 right-8 flex gap-4">
          <button
            onClick={() => {
              if (currentScreen > 0) {
                onNavigate(currentSlide, currentScreen - 1)
              }
            }}
            className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            disabled={currentScreen === 0}
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (currentScreen < slides[currentSlide].screens - 1) {
                onNavigate(currentSlide, currentScreen + 1)
              }
            }}
            className="px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            disabled={currentScreen === slides[currentSlide].screens - 1}
          >
            Next
          </button>
        </div>
      )}

      {/* Slide Progress */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-secondary' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </>
  )
}
