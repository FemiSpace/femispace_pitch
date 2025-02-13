'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import { BuildingOffice2Icon, UsersIcon, DevicePhoneMobileIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const iconAnimations = {
  pulse: {
    scale: [1, 1.1, 1],
    transition: { repeat: Infinity, duration: 2 }
  },
  float: {
    y: [0, -10, 0],
    transition: { repeat: Infinity, duration: 3 }
  },
  bounce: {
    y: [0, -15, 0],
    transition: { repeat: Infinity, duration: 1.5 }
  },
  spin: {
    rotate: [0, 360],
    transition: { repeat: Infinity, duration: 8, ease: "linear" }
  }
}

const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(end)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (!inView) return
    
    let startTimestamp = null
    const startValue = 0
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
      
      setCount(Math.floor(progress * (end - startValue) + startValue))
      
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    
    window.requestAnimationFrame(step)
  }, [end, duration, inView])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export default function TractionSlide() {
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const metrics = [
    {
      icon: <motion.div animate={iconAnimations.pulse}><BuildingOffice2Icon className="w-16 h-16 text-teal-500" /></motion.div>,
      number: 2,
      label: "Hospitals",
      subtext: "Initial discussions for pilots",
      delay: 0,
      bgClass: "bg-gradient-to-br from-green-50 to-teal-50",
      decorClass: "after:absolute after:top-0 after:right-0 after:w-32 after:h-32 after:bg-teal-500/5 after:rounded-full after:blur-xl after:animate-pulse"
    },
    {
      icon: <motion.div animate={iconAnimations.bounce}><UsersIcon className="w-16 h-16 text-rose-500" /></motion.div>,
      number: 4500,
      label: "Early Interest",
      subtext: "Direct consumers and counting",
      delay: 0.2,
      bgClass: "bg-gradient-to-br from-rose-50 to-orange-50",
      decorClass: "after:absolute after:bottom-0 after:left-0 after:w-40 after:h-40 after:bg-rose-500/5 after:rounded-full after:blur-xl after:animate-pulse"
    },
    {
      icon: <motion.div animate={iconAnimations.float}><DevicePhoneMobileIcon className="w-16 h-16 text-sky-500" /></motion.div>,
      number: 14,
      label: "Wearables",
      subtext: "Integrating from the start including glucose and BP monitoring",
      delay: 0.4,
      bgClass: "bg-gradient-to-br from-sky-50 to-indigo-50",
      decorClass: "after:absolute after:top-10 after:right-10 after:w-36 after:h-36 after:bg-sky-500/5 after:rounded-full after:blur-xl after:animate-pulse"
    },
    {
      icon: <motion.div animate={iconAnimations.spin}><ChartBarIcon className="w-16 h-16 text-violet-500" /></motion.div>,
      number: 15,
      label: "Risk Scores",
      subtext: "Prediction, tracking, and interventions for improved health outcomes",
      delay: 0.6,
      bgClass: "bg-gradient-to-br from-violet-50 to-fuchsia-50",
      decorClass: "after:absolute after:bottom-10 after:right-10 after:w-44 after:h-44 after:bg-violet-500/5 after:rounded-full after:blur-xl after:animate-pulse"
    }
  ]

  return (
    <div 
      id="traction"
      ref={ref}
      className="min-h-screen relative flex flex-col items-center justify-center px-4 py-20"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-primary-500 to-primary-300"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-primary-500 to-primary-300"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-[#D3FFF4] text-center mb-20"
        >
          Traction
        </motion.h2>

        <div className="grid grid-cols-2 gap-12 mt-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: metric.delay }}
              className={`${metric.bgClass} ${metric.decorClass} backdrop-blur-lg rounded-2xl p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300 border border-white/20`}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-300/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-6">
                  <div className="transform transition-transform duration-300 group-hover:scale-110">
                    {metric.icon}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-3">
                      <span className="text-6xl font-bold text-gray-800">
                        <Counter end={metric.number} />
                      </span>
                      <span className="text-2xl font-semibold text-gray-800">
                        {metric.label}
                      </span>
                    </div>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-primary-300 rounded mt-2"></div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 font-medium">{metric.subtext}</p>
              </div>

              {/* Decorative dots with color matching the box theme */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 opacity-20">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                      className={`w-2 h-2 rounded-full ${
                        metric.label === "Hospitals" ? "bg-teal-500" :
                        metric.label === "Early Interest" ? "bg-rose-500" :
                        metric.label === "Wearables" ? "bg-sky-500" :
                        "bg-violet-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
