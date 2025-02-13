'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function ProblemSlide() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center" ref={ref}>
      {/* Animated Background with Gradient Movement */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary"
        initial={{ opacity: 0, backgroundPosition: "0% 0%" }}
        animate={{ 
          opacity: 1,
          backgroundPosition: ["0% 0%", "100% 100%"],
          transition: {
            backgroundPosition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            },
            opacity: { duration: 1 }
          }
        }}
      />

      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-secondary"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            The Problem
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Women's Health Crisis: The Hidden Impact of Cardiometabolic Disease
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Statistic 1 - Floating Animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <motion.div 
              className="bg-primary-dark/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/30 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {/* Animated Gradient Border */}
              <motion.div
                className="absolute inset-0 opacity-50"
                animate={{
                  background: [
                    "linear-gradient(0deg, transparent 0%, var(--color-secondary) 50%, transparent 100%)",
                    "linear-gradient(360deg, transparent 0%, var(--color-secondary) 50%, transparent 100%)"
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <motion.p 
                className="text-5xl font-bold text-secondary mb-4 relative"
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
              >
                47%
              </motion.p>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-xl text-white/90">
                  of women are affected by cardiometabolic conditions
                </p>
                <p className="text-lg text-white/70 mt-2">
                  Yet most cases remain undiagnosed until severe complications arise
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Statistic 2 - Pulse Animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <motion.div 
              className="bg-primary-dark/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/30 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {/* Pulse Effect */}
              <motion.div
                className="absolute inset-0 bg-secondary/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.p 
                className="text-5xl font-bold text-secondary mb-4 relative"
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
              >
                2-3x
              </motion.p>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <p className="text-xl text-white/90">
                  higher risk of heart disease in women
                </p>
                <p className="text-lg text-white/70 mt-2">
                  Compared to those without cardiometabolic conditions
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Statistic 3 - Slide Up Animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <motion.div 
              className="bg-primary-dark/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/30 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.p 
                className="text-5xl font-bold text-secondary mb-4 relative"
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200
                }}
              >
                80%
              </motion.p>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <p className="text-xl text-white/90">
                  of cases could be prevented
                </p>
                <p className="text-lg text-white/70 mt-2">
                  Through early intervention and personalized lifestyle changes
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Despite these alarming statistics, women's cardiometabolic health remains understudied and undertreated.
            We're changing that.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
