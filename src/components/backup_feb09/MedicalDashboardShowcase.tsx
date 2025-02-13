'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface DashboardFeature {
  title: string
  description: string
  highlight?: { x: number; y: number }
}

const dashboardFeatures: DashboardFeature[] = [
  {
    title: 'Patient Analytics',
    description: 'AI-driven insights and pattern detection',
    highlight: { x: 120, y: 100 }
  },
  {
    title: 'Smart Scheduling',
    description: 'Automated appointment management',
    highlight: { x: 280, y: 180 }
  },
  {
    title: 'Clinical Workflows',
    description: 'Customizable templates and protocols',
    highlight: { x: 440, y: 260 }
  }
]

export default function MedicalDashboardShowcase() {
  const [activeFeature, setActiveFeature] = useState<number>(-1)

  return (
    <div className="grid grid-cols-2 min-h-screen items-center pt-24">
      {/* Left: Dashboard Display */}
      <div className="relative flex items-center justify-center p-8">
        <motion.div 
          className="dashboard-frame relative bg-white rounded-xl w-full h-[600px] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Top Bar */}
          <div className="bg-[#8D43A4] text-white p-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">FemiSpace Medical Hub</h3>
            <div className="flex space-x-4">
              <span>Dr. Sarah Chen</span>
              <span>Women's Health Clinic</span>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-2 gap-4 p-4">
            {/* Patient Overview */}
            <div className="col-span-2 bg-[#8D43A4]/5 rounded-lg p-4">
              <h4 className="text-[#8D43A4] font-semibold mb-2">Today's Overview</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white shadow p-3 rounded-md">
                  <div className="text-sm text-[#8D43A4]/60">Appointments</div>
                  <div className="text-2xl font-bold text-[#8D43A4]">12</div>
                </div>
                <div className="bg-white shadow p-3 rounded-md">
                  <div className="text-sm text-[#8D43A4]/60">New Patients</div>
                  <div className="text-2xl font-bold text-[#8D43A4]">3</div>
                </div>
                <div className="bg-white shadow p-3 rounded-md">
                  <div className="text-sm text-[#8D43A4]/60">Messages</div>
                  <div className="text-2xl font-bold text-[#8D43A4]">5</div>
                </div>
              </div>
            </div>

            {/* Patient Timeline */}
            <div className="bg-[#8D43A4]/5 rounded-lg p-4">
              <h4 className="text-[#8D43A4] font-semibold mb-2">Patient Timeline</h4>
              <div className="space-y-2">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="bg-white p-2 rounded-md shadow">
                    <div className="text-sm font-medium text-[#8D43A4]">9:0{i} AM</div>
                    <div className="text-[#8D43A4]/60 text-sm">Patient Check-up</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics Preview */}
            <div className="bg-[#8D43A4]/5 rounded-lg p-4">
              <h4 className="text-[#8D43A4] font-semibold mb-2">Analytics</h4>
              <div className="bg-white p-3 rounded-md shadow h-[150px] flex items-center justify-center">
                <div className="text-[#8D43A4]/40">Analytics Dashboard</div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <AnimatePresence>
            {activeFeature !== -1 && dashboardFeatures[activeFeature].highlight && (
              <motion.div
                className="absolute w-16 h-16 bg-[#8D43A4]/20 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                style={{
                  left: dashboardFeatures[activeFeature].highlight!.x,
                  top: dashboardFeatures[activeFeature].highlight!.y,
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
            Medical Professional Platform
          </h2>

          {/* Features */}
          <div className="space-y-6">
            {dashboardFeatures.map((feature, index) => (
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
