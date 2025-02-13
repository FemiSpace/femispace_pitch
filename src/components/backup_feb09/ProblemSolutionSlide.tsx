'use client'

import { motion } from 'framer-motion'

export default function ProblemSolutionSlide() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-secondary opacity-90"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.9 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-secondary mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Addressing the Cardiometabolic Crisis
        </motion.h2>

        {/* Content will be added here */}
      </div>
    </div>
  )
}
