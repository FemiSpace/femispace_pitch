'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import FemiAppShowcase from '@/components/FemiAppShowcase'
import MedicalDashboardShowcase from '@/components/MedicalDashboardShowcase'
import MeetKat from '@/components/MeetKat'

type DemoMode = 'patient' | 'medical'

export default function AppDemosPage() {
  const [mode, setMode] = useState<DemoMode>('patient')

  return (
    <div className="min-h-screen bg-[#F7FFFC]">
      {/* Mode Selector */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 flex shadow-xl">
          <button
            onClick={() => setMode('patient')}
            className={`px-6 py-2 rounded-full transition-all ${
              mode === 'patient' 
                ? 'bg-[#8D43A4] text-white shadow-lg shadow-[#8D43A4]/30' 
                : 'text-gray-600 hover:text-[#8D43A4]'
            }`}
          >
            Patient App
          </button>
          <button
            onClick={() => setMode('medical')}
            className={`px-6 py-2 rounded-full transition-all ${
              mode === 'medical' 
                ? 'bg-[#8D43A4] text-white shadow-lg shadow-[#8D43A4]/30' 
                : 'text-gray-600 hover:text-[#8D43A4]'
            }`}
          >
            Medical Platform
          </button>
        </div>
      </div>

      {/* Content Area */}
      <motion.div 
        className="min-h-screen"
        initial={false}
        animate={mode}
        variants={{
          patient: { backgroundColor: '#F7FFFC' },
          medical: { backgroundColor: '#E9FFF7' }
        }}
      >
        {mode === 'patient' ? (
          <FemiAppShowcase />
        ) : (
          <MedicalDashboardShowcase />
        )}
        <MeetKat />
      </motion.div>
    </div>
  )
}
