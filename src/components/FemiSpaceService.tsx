'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const femiServices = [
  {
    id: 'preventive-analytics',
    name: "Preventive analytics & monitoring",
    icon: "/icons/analytics.svg",
    color: "#FFD700", // Gold
    description: "Advanced AI-driven health predictions and monitoring systems"
  },
  {
    id: 'specialist-matching',
    name: "Matching with specialists",
    icon: "/icons/network.svg",
    color: "#00CED1", // Turquoise
    description: "Connect with the right healthcare professionals"
  },
  {
    id: 'vitals-tracking',
    name: "Tracking vitals & biomarkers",
    icon: "/icons/vitals.svg",
    color: "#FF69B4", // Hot Pink
    description: "Comprehensive health data monitoring"
  },
  {
    id: 'lifestyle-coaching',
    name: "Behavioral & lifestyle coaching",
    icon: "/icons/coaching.svg",
    color: "#98FB98", // Pale Green
    description: "Personalized guidance for lasting change"
  },
  {
    id: 'integration',
    name: "Integration of EHR & devices",
    icon: "/icons/integration.svg",
    color: "#DDA0DD", // Plum
    description: "Seamless health data ecosystem"
  }
] as const

export type FemiServiceId = typeof femiServices[number]['id']

interface FemiServiceProps {
  service: typeof femiServices[number]
  isActive?: boolean
  showDescription?: boolean
  size?: 'sm' | 'md' | 'lg'
  animate?: boolean
}

const sizeConfig = {
  sm: {
    container: 'w-48',
    icon: 40,
    text: 'text-base'
  },
  md: {
    container: 'w-64',
    icon: 56,
    text: 'text-lg'
  },
  lg: {
    container: 'w-72',
    icon: 64,
    text: 'text-xl'
  }
}

export default function FemiService({ 
  service, 
  isActive = false,
  showDescription = false,
  size = 'md',
  animate = true 
}: FemiServiceProps) {
  const config = sizeConfig[size]
  
  return (
    <motion.div
      className={`${config.container} flex flex-col items-center gap-4 p-6 rounded-2xl
        ${isActive ? 'bg-white/5 backdrop-blur-sm' : ''}`}
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={animate ? { 
        opacity: 1,
        y: 0,
        scale: isActive ? 1.1 : 1
      } : {}}
      whileHover={{ scale: 1.05 }}
      transition={{ 
        duration: 0.5
      }}
    >
      <motion.div
        className="relative"
        animate={isActive && animate ? {
          rotate: [0, 360]
        } : {}}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div 
          className="absolute inset-0 blur-md"
          style={{ backgroundColor: service.color, opacity: isActive ? 0.3 : 0 }}
        />
        <Image
          src={service.icon}
          width={config.icon}
          height={config.icon}
          alt={service.name}
          className="relative z-10"
          style={{ filter: `drop-shadow(0 0 10px ${service.color})` }}
        />
      </motion.div>
      <div className="text-center">
        <p 
          className={`${config.text} font-medium`}
          style={{ 
            color: isActive ? service.color : 'rgba(255,255,255,0.9)'
          }}
        >
          {service.name}
        </p>
        {showDescription && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-white/70 mt-2"
          >
            {service.description}
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}
