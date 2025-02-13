'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const FloatingParticle = ({ index }: { index: number }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full bg-[#D3FFF4]/30"
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.2, 1],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: index * 0.2,
      ease: "easeInOut"
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
)

const ImpactMetric = ({ value, label, delay }: { value: number, label: string, delay: number }) => {
  const radius = 40
  const circumference = 2 * Math.PI * radius
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center space-y-4 w-40"
    >
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32">
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke="rgba(211, 255, 244, 0.2)"
            strokeWidth="6"
          />
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke="#D3FFF4"
            strokeWidth="6"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference * (1 - value / 100) }}
            transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-3xl font-bold text-[#D3FFF4] translate-y-[2px]">{value}%</span>
          </div>
        </div>
      </div>
      <span className="text-lg text-white/90 text-center font-medium leading-tight">{label}</span>
    </motion.div>
  )
}

const FeatureCard = ({ icon, title, description, delay }: { icon: string, title: string, description: string, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay }}
      className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#D3FFF4]/10 to-[#8D43A4]/10 p-4 backdrop-blur-sm border border-[#D3FFF4]/20"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#D3FFF4]/20 to-transparent"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay: delay
        }}
      />
      <div className="relative z-10 flex items-start space-x-3">
        <div className="text-2xl">{icon}</div>
        <div>
          <h3 className="text-sm font-semibold text-[#D3FFF4] mb-1">{title}</h3>
          <p className="text-white/90 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function BiologicalGrail() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  return (
    <div className="container-custom min-h-screen flex flex-col justify-center overflow-hidden relative pt-24 pb-8" ref={containerRef}>
      {/* Floating Background Particles */}
      {[...Array(15)].map((_, i) => (
        <FloatingParticle key={i} index={i} />
      ))}

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D3FFF4] to-[#8D43A4] bg-clip-text text-transparent mb-4"
          animate={{
            textShadow: [
              "0 0 8px rgba(211, 255, 244, 0.3)",
              "0 0 12px rgba(211, 255, 244, 0.6)",
              "0 0 8px rgba(211, 255, 244, 0.3)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Solution: Your Biological Grail
        </motion.h1>
        <motion.p 
          className="text-lg text-white/90 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We've created the first comprehensive health platform that understands, tracks, and optimizes women's unique biology, 
          making premium preventive and restorative care accessible to millions.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-2 gap-8 items-start">
        {/* Left Column - Analytics */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl font-semibold text-[#D3FFF4] mb-4"
          >
            Proprietary Analytics
          </motion.h2>

          <div className="grid grid-cols-2 gap-3">
            {[
              {
                icon: "📊",
                title: "Health Score™",
                description: "Combining 200+ biomarkers"
              },
              {
                icon: "🔍",
                title: "Early Detection",
                description: "5-7 years before traditional tests"
              },
              {
                icon: "🧬",
                title: "Biological Patterns",
                description: "First-ever women's database"
              },
              {
                icon: "🤖",
                title: "AI Guidance",
                description: "24/7 personalized insights"
              },
              {
                icon: "🔄",
                title: "Integration",
                description: "Provider-lab-pharmacy network"
              },
              {
                icon: "⚡",
                title: "Optimization",
                description: "Real-time treatment adjustment"
              }
            ].map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={0.4 + index * 0.15}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Impact & Visualization */}
        <div className="relative flex flex-col items-center">
          {/* DNA-like Animation */}
          <div className="relative w-full h-40 mb-6">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 w-2 h-2"
                style={{
                  top: `${i * 10}%`,
                }}
                animate={{
                  x: ['-100px', '100px', '-100px'],
                  y: [0, 20, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              >
                <div className="w-2 h-2 rounded-full bg-[#D3FFF4]" />
                <motion.div
                  className="absolute w-16 h-0.5 bg-gradient-to-r from-[#D3FFF4] to-transparent"
                  style={{ transform: `rotate(${i * 36}deg)` }}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Impact Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-center"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="text-2xl font-semibold text-[#D3FFF4] mb-8"
            >
              Proven Impact
            </motion.h2>
            
            <div className="flex justify-between items-center gap-4 px-6">
              <ImpactMetric value={80} label="Earlier Detection" delay={1.7} />
              <ImpactMetric value={70} label="Lower Costs" delay={1.9} />
              <ImpactMetric value={90} label="Patient Satisfaction" delay={2.1} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
