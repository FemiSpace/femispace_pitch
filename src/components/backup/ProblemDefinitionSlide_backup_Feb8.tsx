'use client'

// Backup from Feb 8, 2025 - Working version with correct circle layout
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { HeartIcon, PancreasIcon, KidneyIcon, LiverIcon } from '../MedicalIcons'

export default function ProblemDefinitionSlide() {
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

      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-secondary mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Cardiometabolic Disease: The Deadly Connection
          <br />
          <span className="text-3xl md:text-4xl text-white/90">Between Four Major Conditions</span>
        </motion.h2>

        {/* Three Column Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mt-4">
          {/* Left Text Box */}
          <motion.div
            className="lg:w-1/4 lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-primary-dark/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/30">
              <motion.p
                className="text-xl md:text-2xl text-white/90"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Cardiometabolic disease is a cluster of interconnected, life-threatening conditions 
                significantly increasing health risks.
              </motion.p>
            </div>
          </motion.div>

          {/* Center Disease Circle */}
          <div className="lg:w-2/4">
            <div className="relative w-[28rem] h-[28rem] mx-auto">
              {/* Center Circle */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-secondary/30"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />

              {/* Connecting Lines */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <div className="absolute w-px h-64 bg-secondary/30 left-1/2 -top-8 transform -translate-x-1/2 rotate-0" />
                <div className="absolute w-px h-64 bg-secondary/30 left-1/2 -top-8 transform -translate-x-1/2 rotate-90" />
                <div className="absolute w-px h-64 bg-secondary/30 left-1/2 -top-8 transform -translate-x-1/2 rotate-45" />
                <div className="absolute w-px h-64 bg-secondary/30 left-1/2 -top-8 transform -translate-x-1/2 -rotate-45" />
              </motion.div>

              {/* Disease Icons */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.8
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-20 h-20 text-secondary bg-primary-dark/80 rounded-full p-4"
                  initial={{ rotate: -180 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <HeartIcon />
                </motion.div>
                <motion.div 
                  className="text-white text-base font-medium bg-primary-dark/80 px-4 py-2 rounded-lg whitespace-nowrap"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Cardiovascular Disease
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex items-center gap-4"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.8,
                    delay: 0.3
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-20 h-20 text-secondary bg-primary-dark/80 rounded-full p-4"
                  initial={{ rotate: -180 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <PancreasIcon />
                </motion.div>
                <motion.div 
                  className="text-white text-base font-medium bg-primary-dark/80 px-4 py-2 rounded-lg whitespace-nowrap"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Diabetes
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[80%] flex items-center gap-4"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.8,
                    delay: 0.6
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-20 h-20 text-secondary bg-primary-dark/80 rounded-full p-4"
                  initial={{ rotate: -180 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <KidneyIcon />
                </motion.div>
                <motion.div 
                  className="text-white text-base font-medium bg-primary-dark/80 px-4 py-2 rounded-lg whitespace-nowrap"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Chronic Kidney Disease (CKD)
                </motion.div>
              </motion.div>

              {/* Left (Liver) Element - ON THE CIRCLE LINE */}
              <motion.div
                className="absolute top-1/2 left-[1px] -translate-y-1/2 flex items-center gap-4"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.8,
                    delay: 0.9
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-20 h-20 text-secondary bg-primary-dark/80 rounded-full p-4"
                  initial={{ rotate: -180 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <LiverIcon />
                </motion.div>
                <motion.div 
                  className="text-white text-base font-medium bg-primary-dark/80 px-4 py-2 rounded-lg whitespace-nowrap"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  Nonalcoholic Fatty Liver Disease<br />(NAFLD)
                </motion.div>
              </motion.div>

              {/* Pulsing Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-secondary/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>

          {/* Right Text Box */}
          <motion.div
            className="lg:w-1/4 lg:sticky lg:top-24"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 3.0 }}
          >
            <div className="bg-primary-dark/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/30">
              <motion.p
                className="text-xl md:text-2xl text-white/90 font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 3.3 }}
              >
                These conditions are deeply linked, making prevention and early intervention critical.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
