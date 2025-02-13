'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { HeartIcon, PancreasIcon, KidneyIcon, LiverIcon } from './MedicalIcons'

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
        {/* Title - First to appear */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-[#D3FFF4] mb-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Cardiometabolic Disease: The Deadly Connection
          </motion.span>
          <br />
          <motion.span 
            className="text-3xl md:text-4xl text-[#D3FFF4] block mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            Between Four Major Conditions
          </motion.span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mt-4">
          {/* Left Text Box - Appears Second */}
          <motion.div
            className="lg:w-1/4 lg:sticky lg:top-24 flex items-center"
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              x: 0, 
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 60,
                damping: 12,
                duration: 1.2,
                delay: 2.0
              }
            }}
            viewport={{ once: true }}
          >
            <div className="bg-[#DCFCE7] backdrop-blur-sm p-6 rounded-xl border border-secondary/30 w-full">
              <motion.p
                className="text-xl md:text-2xl text-gray-900 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 2.5
                  }
                }}
                viewport={{ once: true }}
              >
                Cardiometabolic disease is a cluster of interconnected, life-threatening conditions 
                significantly increasing health risks.
              </motion.p>
            </div>
          </motion.div>

          {/* Center Disease Circle - Appears Third */}
          <div className="lg:w-2/4">
            <div className="relative w-[28rem] h-[28rem] mx-auto">
              {/* Center Circle */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-secondary/30"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 3.5 }}
              />

              {/* Connecting Lines */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 4.0 }}
              >
                <div className="absolute w-px h-64 bg-secondary/30 left-1/2 -top-8 transform -translate-x-1/2 rotate-0" />
                <div className="absolute w-px h-64 bg-secondary/30 left-1/2 -top-8 transform -translate-x-1/2 rotate-90" />
                <div className="absolute w-px h-64 bg-secondary/30 left-1/2 -top-8 transform -translate-x-1/2 rotate-45" />
                <div className="absolute w-px h-64 bg-secondary/30 left-1/2 -top-8 transform -translate-x-1/2 -rotate-45" />
              </motion.div>

              {/* Disease Icons with Enhanced Animations */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4"
                initial={{ scale: 0, opacity: 0, x: "50%" }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1, 
                  x: "-50%",
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.8,
                    delay: 4.5
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-20 h-20 text-secondary bg-primary-dark/80 rounded-full p-4"
                  initial={{ rotate: -180 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 0.8, delay: 4.7 }}
                >
                  <HeartIcon />
                </motion.div>
                <motion.div 
                  className="text-white text-base font-medium bg-primary-dark/80 px-4 py-2 rounded-lg whitespace-nowrap"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 4.9 }}
                >
                  Cardiovascular Disease
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex items-center gap-4"
                initial={{ scale: 0, opacity: 0, y: "-50%", x: "0%" }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1, 
                  x: "50%",
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.8,
                    delay: 5.0
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-20 h-20 text-secondary bg-primary-dark/80 rounded-full p-4"
                  initial={{ rotate: -180 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 0.8, delay: 5.2 }}
                >
                  <PancreasIcon />
                </motion.div>
                <motion.div 
                  className="text-white text-base font-medium bg-primary-dark/80 px-4 py-2 rounded-lg whitespace-nowrap"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 5.4 }}
                >
                  Diabetes
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[80%] flex items-center gap-4"
                initial={{ scale: 0, opacity: 0, y: "0%" }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1, 
                  y: "80%",
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.8,
                    delay: 5.5
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-20 h-20 text-secondary bg-primary-dark/80 rounded-full p-4"
                  initial={{ rotate: -180 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 0.8, delay: 5.7 }}
                >
                  <KidneyIcon />
                </motion.div>
                <motion.div 
                  className="text-white text-base font-medium bg-primary-dark/80 px-4 py-2 rounded-lg whitespace-nowrap"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 5.9 }}
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
                    delay: 6.0
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-20 h-20 text-secondary bg-primary-dark/80 rounded-full p-4"
                  initial={{ rotate: -180 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 0.8, delay: 6.2 }}
                >
                  <LiverIcon />
                </motion.div>
                <motion.div 
                  className="text-white text-base font-medium bg-primary-dark/80 px-4 py-2 rounded-lg whitespace-nowrap"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 6.4 }}
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

          {/* Right Text Box - Appears Last with Emphasis */}
          <motion.div
            className="lg:w-1/4 lg:sticky lg:top-24 flex items-center"
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              x: 0, 
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 60,
                damping: 12,
                duration: 1.2,
                delay: 6.5
              }
            }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-[#DCFCE7] backdrop-blur-sm p-6 rounded-xl border border-secondary/30 w-full"
              whileInView={{
                boxShadow: [
                  "0 0 0 0 rgba(34, 197, 94, 0)",
                  "0 0 20px 10px rgba(34, 197, 94, 0.3)",
                  "0 0 0 0 rgba(34, 197, 94, 0)"
                ],
                transition: {
                  duration: 2,
                  delay: 7.0,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <motion.p
                className="text-xl md:text-2xl text-gray-900 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 6.8
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="block"
                  initial={{ opacity: 0 }}
                  whileInView={{ 
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      delay: 7.0
                    }
                  }}
                  viewport={{ once: true }}
                >
                  These conditions are deeply linked,
                </motion.span>
                <motion.span 
                  className="block text-black mt-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1,
                    scale: 1 
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  making prevention and early intervention critical.
                </motion.span>
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
