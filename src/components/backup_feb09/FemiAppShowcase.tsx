'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface AppFeature {
  title: string
  description: string
  highlight?: { x: number; y: number }
}

const appFeatures: AppFeature[] = [
  {
    title: 'Smart Health Tracking',
    description: 'AI-powered symptom tracking and pattern recognition',
    highlight: { x: 50, y: 150 }
  },
  {
    title: 'Instant MD Connection',
    description: 'Direct communication with healthcare providers',
    highlight: { x: 50, y: 250 }
  },
  {
    title: 'Personalized Insights',
    description: 'Data-driven health recommendations',
    highlight: { x: 50, y: 350 }
  }
]

export default function FemiAppShowcase() {
  const [activeFeature, setActiveFeature] = useState<number>(-1)

  return (
    <div className="grid grid-cols-2 min-h-screen items-center pt-24">
      {/* Left: App Display */}
      <div className="relative flex items-center justify-center">
        <motion.div 
          className="phone-frame relative bg-white rounded-[3rem] w-[300px] h-[600px] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Status Bar */}
          <div className="absolute top-0 w-full h-6 bg-black/5 z-10" />
          
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-20" />

          {/* Screen Content (Placeholder for Flutter) */}
          <div className="absolute inset-0 bg-white text-[#8D43A4]">
            <div className="mt-12 p-6">
              <h3 className="text-xl font-semibold mb-4">FemiSpace</h3>
              {/* App UI Elements */}
              <div className="space-y-4">
                <div className="bg-[#8D43A4]/5 p-4 rounded-xl">
                  <div className="text-sm font-medium">Today's Summary</div>
                  <div className="mt-2 text-xs text-gray-600">Track your daily health metrics</div>
                </div>
                <div className="bg-[#8D43A4]/5 p-4 rounded-xl">
                  <div className="text-sm font-medium">Upcoming</div>
                  <div className="mt-2 text-xs text-gray-600">Doctor's appointment at 2 PM</div>
                </div>
                <div className="bg-[#8D43A4]/5 p-4 rounded-xl">
                  <div className="text-sm font-medium">Health Insights</div>
                  <div className="mt-2 text-xs text-gray-600">View your personalized recommendations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <AnimatePresence>
            {activeFeature !== -1 && appFeatures[activeFeature].highlight && (
              <motion.div
                className="absolute w-16 h-16 bg-[#8D43A4]/20 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                style={{
                  left: appFeatures[activeFeature].highlight!.x,
                  top: appFeatures[activeFeature].highlight!.y,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Right: Features */}
      <div className="p-12">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-[#D3FFF4] mb-8">
            Revolutionizing Women's Healthcare
          </h2>

          {/* Features */}
          <div className="space-y-6">
            {appFeatures.map((feature, index) => (
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
                      ${activeFeature === index 
                        ? 'bg-[#D3FFF4] text-[#8D43A4] shadow-lg' 
                        : 'bg-white/10 hover:bg-[#D3FFF4]/20'}`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold transition-colors
                        ${activeFeature === index ? 'text-[#D3FFF4]' : 'text-[#D3FFF4] group-hover:text-[#D3FFF4]'}`}>
                        {feature.title}
                      </h3>
                      <p className="text-white mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
