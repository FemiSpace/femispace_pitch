'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HeartIcon, BrainIcon, DiabetesIcon, StomachIcon, ClockIcon, IsolatedIcon, WomanIcon, HormoneIcon, BlockedIcon } from './icons/MedicalIcons'

export default function SystemIssuesSlide() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })

  const systemFailures = [
    {
      text: "It waits until disease is advanced before acting.",
      icon: <ClockIcon className="w-10 h-10 text-[#D3FFF4]" />,
      gradient: "from-[#D3FFF4]/20 to-[#8D43A4]/20"
    },
    {
      text: "It treats symptoms in isolation instead of seeing the full picture.",
      icon: <IsolatedIcon className="w-10 h-10 text-[#D3FFF4]" />,
      gradient: "from-[#8D43A4]/20 to-[#D3FFF4]/20"
    },
    {
      text: "It lacks diagnostic tools designed for women's unique risks.",
      icon: <WomanIcon className="w-10 h-10 text-[#D3FFF4]" />,
      gradient: "from-[#D3FFF4]/20 to-[#8D43A4]/20"
    },
    {
      text: "It ignores hormonal, metabolic, and lifestyle factors.",
      icon: <HormoneIcon className="w-10 h-10 text-[#D3FFF4]" />,
      gradient: "from-[#8D43A4]/20 to-[#D3FFF4]/20"
    },
    {
      text: "It makes real, preventive care inaccessible.",
      icon: <BlockedIcon className="w-10 h-10 text-[#D3FFF4]" />,
      gradient: "from-[#D3FFF4]/20 to-[#8D43A4]/20"
    }
  ]

  const conditions = [
    {
      title: "Type 2 diabetes",
      description: "Missed in the early stages when it could have been reversed.",
      icon: <DiabetesIcon className="w-8 h-8 text-[#D3FFF4]" />
    },
    {
      title: "Heart disease",
      description: "Years of high blood sugar damaged her arteries.",
      icon: <HeartIcon className="w-8 h-8 text-[#D3FFF4]" />
    },
    {
      title: "Kidney disease",
      description: "The silent result of both diabetes and heart strain.",
      icon: <BrainIcon className="w-8 h-8 text-[#D3FFF4]" />
    },
    {
      title: "Advanced fatty liver disease (NASH)",
      description: "Worsened by metabolic dysfunction.",
      icon: <StomachIcon className="w-8 h-8 text-[#D3FFF4]" />
    }
  ]

  return (
    <div className="container-custom py-8 overflow-hidden" ref={containerRef}>
      <div className="relative grid grid-cols-12 gap-6">
        {/* Title - centered */}
        <motion.div
          className="col-span-12 text-center mb-6 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#D3FFF4] text-center"
          >
            Why the Current System Failed Kat:
          </motion.h2>
        </motion.div>

        {/* Left Column - System Failures (40% width) */}
        <div className="col-span-5 space-y-3">
          {systemFailures.map((failure, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                x: "50%", 
                scale: 1.2
              }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                x: isInView ? 0 : "50%",
                scale: isInView ? 0.9 : 1.2
              }}
              transition={{ 
                duration: 0.7,
                delay: isInView ? 1 + index * 0.8 : 0,
                type: "spring",
                stiffness: 120
              }}
              className={`flex items-center space-x-4 p-3 rounded-lg bg-gradient-to-r ${failure.gradient} backdrop-blur-sm`}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="shrink-0"
              >
                {failure.icon}
              </motion.div>
              <p className="text-white text-lg">{failure.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Column - Conditions (60% width) */}
        <div className="col-span-7 space-y-3">
          {/* "No one connects the dots" emphasis */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ 
              duration: 0.7,
              delay: isInView ? 5 : 0
            }}
            className="relative"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(211, 255, 244, 0.2)",
                  "0 0 40px rgba(211, 255, 244, 0.4)",
                  "0 0 20px rgba(211, 255, 244, 0.2)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="p-3 rounded-lg bg-[#D3FFF4]/10 backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold text-[#D3FFF4] mb-2">
                No one connects the dots.
              </h3>
              <p className="text-white text-lg">
                By the time Kat is finally diagnosed, she's not dealing with just one condition—she has four:
              </p>
            </motion.div>
          </motion.div>

          {/* Conditions appear one by one */}
          <div className="space-y-2 mt-3">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  x: isInView ? 0 : 100, 
                  scale: isInView ? 1 : 0.8 
                }}
                transition={{ 
                  duration: 0.7,
                  delay: isInView ? 6 + index * 0.8 : 0,
                  type: "spring",
                  stiffness: 120
                }}
                className="flex items-start space-x-3 bg-[#D3FFF4]/10 p-3 rounded-lg backdrop-blur-sm"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="shrink-0 mt-1"
                >
                  {condition.icon}
                </motion.div>
                <div>
                  <h4 className="text-[#D3FFF4] font-bold text-base mb-1">
                    {condition.title}
                  </h4>
                  <p className="text-white text-sm">
                    {condition.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
