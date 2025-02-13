'use client'

// Backup from Feb 8, 2025 - Working version with statistics
import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function ProblemSlide() {
  const ref = useRef(null)

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center" ref={ref}>
      {/* Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-secondary mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          The Problem
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Statistic 1 */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-primary-dark/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/30">
              <motion.p 
                className="text-5xl font-bold text-secondary mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                47%
              </motion.p>
              <p className="text-xl text-white/90">
                of women are affected by cardiometabolic conditions, yet they remain underdiagnosed
              </p>
            </div>
          </motion.div>

          {/* Statistic 2 */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-primary-dark/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/30">
              <motion.p 
                className="text-5xl font-bold text-secondary mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                2-3x
              </motion.p>
              <p className="text-xl text-white/90">
                higher risk of heart disease in women with cardiometabolic conditions
              </p>
            </div>
          </motion.div>

          {/* Statistic 3 */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-primary-dark/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/30">
              <motion.p 
                className="text-5xl font-bold text-secondary mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                80%
              </motion.p>
              <p className="text-xl text-white/90">
                of cases could be prevented with early intervention and lifestyle changes
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
