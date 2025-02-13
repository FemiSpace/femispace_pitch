'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function ProblemSlide() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })
  
  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = 184
      const duration = 2000
      const increment = end / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView])

  return (
    <div className="relative w-full min-h-screen" ref={ref}>
      {/* Full screen transition */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          {/* First Statistic */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-baseline justify-center">
              <motion.span 
                className="text-8xl md:text-9xl font-bold text-secondary mr-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.5 }}
              >
                {count}M
              </motion.span>
              <motion.span 
                className="text-3xl md:text-4xl font-medium text-white"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                of women in the U.S.
              </motion.span>
            </div>
          </motion.div>

          {/* Problem Statement with Emphasized Stats */}
          <div className="flex flex-col items-center space-y-8">
            <motion.p
              className="text-xl md:text-2xl leading-relaxed text-white/90 max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 2.1 }}
            >
              have at least one risk factor for cardiometabolic disease
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <div className="text-center">
                <motion.span 
                  className="block text-6xl md:text-7xl font-bold text-secondary mb-2"
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 2.7 }}
                >
                  &lt;12%
                </motion.span>
                <span className="text-lg md:text-xl text-white/90">receiving care</span>
              </div>

              <div className="h-16 w-px bg-white/20" />

              <div className="text-center">
                <motion.span 
                  className="block text-6xl md:text-7xl font-bold text-secondary mb-2"
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 3.0 }}
                >
                  7-10
                </motion.span>
                <span className="text-lg md:text-xl text-white/90">years delay in diagnosis</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
