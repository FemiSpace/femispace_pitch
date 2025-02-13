'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { 
  BanknotesIcon,
  DevicePhoneMobileIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import FemiService, { femiServices } from './FemiSpaceService'

const competitors = [
  {
    category: "Expensive concierge-service providers",
    examples: "Maven Clinic, Carrot Fertility, Parsley health",
    icon: <BanknotesIcon className="w-8 h-8 text-secondary" />,
    delay: 0.2
  },
  {
    category: "Cardiovascular and metabolic monitoring tools",
    examples: "Omada health, Noom",
    icon: <HeartIcon className="w-8 h-8 text-secondary" />,
    delay: 0.4
  },
  {
    category: "Wearables, home tests, food and fitness tracking",
    examples: "Fitbit, Garmin, Oura ring, Ouva, Whoop, Apple watch",
    icon: <DevicePhoneMobileIcon className="w-8 h-8 text-secondary" />,
    delay: 0.6
  }
]

export default function CompetitionSlide() {
  const [activeService, setActiveService] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-20%" })

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveService(prev => (prev + 1) % femiServices.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isInView])

  return (
    <div ref={containerRef} className="w-full min-h-screen pl-24 pr-24">
      {/* Main Title and Subtitle */}
      <motion.div 
        className="w-full pt-20 pb-8 space-y-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-secondary text-center">
          Market Competition
        </h2>
        <div className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#D3FFF4]/20 to-transparent"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <div className="bg-[#D3FFF4]/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-[#D3FFF4]/20">
            <p className="text-2xl text-[#D3FFF4] text-center font-bold">
              FemiSpace integrates whole-person science and access to care
            </p>
          </div>
        </div>
      </motion.div>

      <div className="flex">
        {/* Left Section - Competitors */}
        <motion.div
          className="w-2/5 space-y-8 pr-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-white/90">Competitors</h3>
          
          {competitors.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
            >
              <div className="mt-1">{item.icon}</div>
              <div>
                <h4 className="text-lg font-medium text-white/90 group-hover:text-secondary transition-colors">
                  {item.category}
                </h4>
                <p className="text-base text-white/70 mt-2">{item.examples}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Section - FemiSpace Services */}
        <motion.div 
          className="w-3/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-[500px]">
            {femiServices.map((service, index) => {
              const positions = [
                { x: 0, y: -200 },      // Top
                { x: 190, y: -60 },     // Top Right
                { x: 120, y: 160 },     // Bottom Right
                { x: -120, y: 160 },    // Bottom Left
                { x: -190, y: -60 }     // Top Left
              ]

              return (
                <div
                  key={service.id}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${positions[index].x}px), calc(-50% + ${positions[index].y}px))`
                  }}
                >
                  <FemiService
                    service={service}
                    isActive={index === activeService}
                    size="md"
                  />
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
