'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ProblemSlideProps {
  isActive?: boolean
}

export default function ProblemSlideFirstScreen({ isActive = true }: ProblemSlideProps) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (isActive) {
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
    } else {
      setCount(0)
    }
  }, [isActive])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Statistics Section */}
        <div className="text-center mb-20">
          <motion.div 
            className="relative mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-baseline justify-center">
              <motion.span 
                className="text-8xl md:text-9xl font-bold text-secondary mr-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                {count}M
              </motion.span>
              <motion.span 
                className="text-3xl md:text-4xl font-medium text-white"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                of women in the U.S.
              </motion.span>
            </div>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl leading-relaxed mb-16 text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            have at least one risk factor for cardiometabolic disease with only <span className="text-secondary font-bold">&lt;12%</span> receiving care with 7-10 years of delay in diagnosis.
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}
