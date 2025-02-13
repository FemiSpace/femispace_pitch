'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProblemSolutionSlide() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  return (
    <div className="relative w-full min-h-screen" ref={containerRef}>
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-secondary opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.9 : 0 }}
        transition={{ duration: 0.7 }}
      />

      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-secondary mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
        >
          Addressing the Cardiometabolic Crisis
        </motion.h2>

        {/* Content will be added here */}
      </div>
    </div>
  )
}
