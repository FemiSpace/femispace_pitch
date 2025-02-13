'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import FemiAppShowcase from '@/components/FemiAppShowcase'
import MedicalDashboardShowcase from '@/components/MedicalDashboardShowcase'

type DemoMode = 'patient' | 'medical'

export default function ShowcasePage() {
  const [mode, setMode] = useState<DemoMode>('patient')

  return (
    <div className="min-h-screen bg-[#8D43A4]">
      {/* Mode Selector */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 flex shadow-xl">
          <button
            onClick={() => setMode('patient')}
            className={`px-6 py-2 rounded-full transition-all ${
              mode === 'patient' 
                ? 'bg-[#D3FFF4] text-[#8D43A4] shadow-lg' 
                : 'text-white hover:bg-[#D3FFF4]/20'
            }`}
          >
            Patient App
          </button>
          <button
            onClick={() => setMode('medical')}
            className={`px-6 py-2 rounded-full transition-all ${
              mode === 'medical' 
                ? 'bg-[#D3FFF4] text-[#8D43A4] shadow-lg' 
                : 'text-white hover:bg-[#D3FFF4]/20'
            }`}
          >
            Medical Platform
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="min-h-screen">
        {mode === 'patient' ? (
          <FemiAppShowcase />
        ) : (
          <MedicalDashboardShowcase />
        )}
      </div>
    </div>
  )
}
