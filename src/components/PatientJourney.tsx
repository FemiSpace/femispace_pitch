'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface JourneyStep {
  id: string
  title: string
  description: string
  features: {
    title: string
    description: string
    highlight?: { x: number; y: number }
  }[]
  screenPosition?: 'center' | 'left' | 'right'
}

const journeySteps: JourneyStep[] = [
  {
    id: 'onboarding',
    title: 'Personal Health Profile',
    description: 'Your journey starts with a personalized health profile that adapts to your unique needs.',
    features: [
      {
        title: 'Smart Questionnaire',
        description: 'AI-driven questions that understand your health context',
        highlight: { x: 50, y: 150 }
      },
      {
        title: 'Symptom History',
        description: 'Track your symptoms and identify patterns over time',
        highlight: { x: 50, y: 250 }
      },
      {
        title: 'Privacy First',
        description: 'Your data is encrypted and secure',
        highlight: { x: 50, y: 350 }
      }
    ],
    screenPosition: 'center'
  },
  // Add more steps as needed
]

export default function PatientJourney() {
  const [currentStep, setCurrentStep] = useState(0)
  const [activeFeature, setActiveFeature] = useState<number>(-1)
  const step = journeySteps[currentStep]

  return (
    <div className="grid grid-cols-2 min-h-screen bg-primary-dark">
      {/* Left: App Display */}
      <div className="relative flex items-center justify-center p-8">
        <motion.div 
          className="phone-container relative"
          initial={false}
          animate={{
            x: step.screenPosition === 'left' ? -100 : 
               step.screenPosition === 'right' ? 100 : 0
          }}
        >
          {/* Phone Frame */}
          <motion.div 
            className="phone-frame relative bg-white rounded-[3rem] w-[300px] h-[600px] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Status Bar */}
            <div className="absolute top-0 w-full h-6 bg-black/10 z-10" />
            
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-20" />

            {/* Screen Content */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark text-white">
              <div className="mt-12 p-6">
                <h3 className="text-xl font-semibold mb-4">FemiSpace</h3>
                {/* Placeholder for Flutter content */}
              </div>
            </div>

            {/* Feature Highlights */}
            <AnimatePresence>
              {activeFeature !== -1 && step.features[activeFeature].highlight && (
                <motion.div
                  className="absolute w-16 h-16 bg-secondary/30 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  style={{
                    left: step.features[activeFeature].highlight!.x,
                    top: step.features[activeFeature].highlight!.y,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Right: Explanations */}
      <div className="p-12 text-white">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-secondary">
            {step.title}
          </h2>
          
          <p className="text-xl text-gray-300">
            {step.description}
          </p>

          {/* Features */}
          <div className="space-y-6 mt-12">
            {step.features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(-1)}
              >
                <div className="group cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors
                      ${activeFeature === index ? 'bg-secondary' : 'bg-gray-800 group-hover:bg-gray-700'}`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold transition-colors
                        ${activeFeature === index ? 'text-secondary' : 'text-white group-hover:text-secondary'}`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-800">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <div className="flex space-x-2">
              {journeySteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentStep ? 'bg-secondary' : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentStep(Math.min(journeySteps.length - 1, currentStep + 1))}
              disabled={currentStep === journeySteps.length - 1}
              className="px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
