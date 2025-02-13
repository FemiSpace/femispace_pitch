'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import FemiAppShowcase from '@/components/FemiAppShowcase'

type DemoMode = 'patient' | 'medical'

export default function DemoPage() {
  const [mode, setMode] = useState<DemoMode>('patient')

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      {/* Mode Selector */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-full p-1 flex">
          <button
            onClick={() => setMode('patient')}
            className={`px-6 py-2 rounded-full transition-all ${
              mode === 'patient' 
                ? 'bg-secondary text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Patient Journey
          </button>
          <button
            onClick={() => setMode('medical')}
            className={`px-6 py-2 rounded-full transition-all ${
              mode === 'medical' 
                ? 'bg-secondary text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Medical Dashboard
          </button>
        </div>
      </div>

      {/* Content Area */}
      <motion.div 
        className="min-h-screen"
        initial={false}
        animate={mode}
        variants={{
          patient: { backgroundColor: '#1a1a2e' },
          medical: { backgroundColor: '#1e293b' }
        }}
      >
        {mode === 'patient' ? (
          <FemiAppShowcase />
        ) : (
          <div className="grid grid-cols-2 min-h-screen">
            {/* Medical Dashboard */}
            <div className="relative flex items-center justify-center p-8">
              <motion.div 
                className="dashboard-frame bg-gray-900 rounded-lg w-full h-[600px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Medical Monitoring Dashboard
                </div>
              </motion.div>
            </div>

            {/* Medical System Explanation */}
            <div className="p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">Medical Professional Dashboard</h2>
                <p className="text-xl text-gray-300">
                  Advanced monitoring and analytics for healthcare providers
                </p>
              </motion.div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
