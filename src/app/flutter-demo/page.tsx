'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface FeaturePoint {
  point: string
  highlight?: {
    x: number
    y: number
    radius: number
  }
}

interface ScreenContext {
  id: string
  title: string
  description: string
  features: FeaturePoint[]
}

// Temporary mock data
const mockContext: ScreenContext = {
  id: 'home',
  title: 'FemiApp Home Screen',
  description: 'Your personal health companion that understands and supports your journey.',
  features: [
    {
      point: 'Quick access to your health dashboard',
      highlight: { x: 50, y: 100, radius: 30 }
    },
    {
      point: 'Schedule appointments with ease',
      highlight: { x: 50, y: 200, radius: 30 }
    },
    {
      point: 'Track your symptoms and medications',
      highlight: { x: 50, y: 300, radius: 30 }
    }
  ]
}

export default function FlutterDemo() {
  const [currentContext] = useState<ScreenContext>(mockContext)
  const [activeFeature, setActiveFeature] = useState<number>(-1)

  return (
    <div className="min-h-screen bg-primary-dark">
      <div className="grid grid-cols-2 min-h-screen">
        {/* Left Side: Flutter App (placeholder for now) */}
        <div className="relative flex items-center justify-center bg-gray-900 p-8">
          <motion.div 
            className="phone-frame bg-white rounded-[3rem] w-[300px] h-[600px] relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Flutter App will be integrated here
            </div>
            
            {/* Highlight Overlay */}
            {activeFeature !== -1 && currentContext.features[activeFeature].highlight && (
              <motion.div
                className="absolute w-12 h-12 bg-secondary/20 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{
                  left: currentContext.features[activeFeature].highlight!.x,
                  top: currentContext.features[activeFeature].highlight!.y,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            )}
          </motion.div>
        </div>

        {/* Right Side: Context & Explanations */}
        <div className="p-12 bg-primary-dark text-white">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold">
              {currentContext.title}
            </h2>
            
            <p className="text-xl text-gray-300">
              {currentContext.description}
            </p>

            {/* Feature Points */}
            <div className="space-y-6 mt-12">
              {currentContext.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-point"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(-1)}
                >
                  <div className="flex items-center space-x-4 cursor-pointer group">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                      ${activeFeature === index ? 'bg-secondary text-white' : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700'}`}>
                      {index + 1}
                    </div>
                    <p className={`text-lg transition-colors ${activeFeature === index ? 'text-secondary' : 'text-gray-300 group-hover:text-white'}`}>
                      {feature.point}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="mt-12 flex justify-between">
              <button 
                className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                Previous
              </button>
              <button 
                className="px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                Next
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
