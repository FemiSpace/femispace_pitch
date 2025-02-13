'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback, useRef } from 'react'
import { HeartIcon, PancreasIcon, KidneyIcon, LiverIcon } from './MedicalIcons'

const SLIDE_DURATION = 12000 // 12 seconds per slide
const TRANSITION_DURATION = 1.4 // 1.4 seconds for transitions

interface ProblemSlide {
  id: number
  content: JSX.Element
}

export default function ProblemSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [count, setCount] = useState(0)
  const firstSlideRef = useRef(null)

  useEffect(() => {
    if (currentSlide === 0) {
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
  }, [currentSlide])

  const slides: ProblemSlide[] = [
    {
      id: 0,
      content: (
        <div className="relative w-full min-h-screen" ref={firstSlideRef}>
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
            <div className="text-center">
              {/* First Statistic */}
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex items-baseline justify-center">
                  <motion.span 
                    className="text-8xl md:text-9xl font-bold text-secondary mr-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    {count}M
                  </motion.span>
                  <motion.span 
                    className="text-3xl md:text-4xl font-medium text-white"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  have at least one risk factor for cardiometabolic disease
                </motion.p>

                <motion.div
                  className="flex items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <div className="text-center">
                    <motion.span 
                      className="block text-6xl md:text-7xl font-bold text-secondary mb-2"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.8 }}
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
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.1 }}
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
    },
    {
      id: 1,
      content: (
        <div className="relative w-full min-h-screen flex items-center justify-center">
          <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
            {/* Title */}
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-secondary mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Cardiometabolic Disease: The Deadly Connection
              <br />
              <span className="text-3xl md:text-4xl text-white/90">Between Four Major Conditions</span>
            </motion.h2>

            {/* Three Column Layout */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Text Box */}
              <motion.div
                className="lg:w-1/4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="bg-primary-dark/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/30">
                  <motion.p
                    className="text-xl md:text-2xl text-white/90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Cardiometabolic disease is a cluster of interconnected, life-threatening conditions 
                    significantly increasing health risks.
                  </motion.p>
                </div>
              </motion.div>

              {/* Center Disease Circle */}
              <div className="lg:w-2/4">
                <div className="relative w-96 h-96 mx-auto">
                  {/* Center Circle */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-secondary/30"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  />

                  {/* Connecting Lines */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                  >
                    <div className="absolute w-px h-48 bg-secondary/30 left-1/2 -top-8 transform -translate-x-1/2 rotate-0" />
                    <div className="absolute w-px h-48 bg-secondary/30 left-1/2 -top-8 transform -translate-x-1/2 rotate-90" />
                    <div className="absolute w-px h-48 bg-secondary/30 left-1/2 -top-8 transform -translate-x-1/2 rotate-45" />
                    <div className="absolute w-px h-48 bg-secondary/30 left-1/2 -top-8 transform -translate-x-1/2 -rotate-45" />
                  </motion.div>

                  {/* Disease Icons */}
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                  >
                    <div className="w-24 h-24 text-secondary">
                      <HeartIcon />
                    </div>
                    <div className="text-white text-sm whitespace-nowrap">Cardiovascular Disease</div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex items-center gap-4"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.1 }}
                  >
                    <div className="w-24 h-24 text-secondary">
                      <PancreasIcon />
                    </div>
                    <div className="text-white text-sm whitespace-nowrap">Diabetes</div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center gap-4"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.4 }}
                  >
                    <div className="w-24 h-24 text-secondary">
                      <KidneyIcon />
                    </div>
                    <div className="text-white text-sm whitespace-nowrap pl-2">Chronic Kidney Disease (CKD)</div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 flex items-center gap-4"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.7 }}
                  >
                    <div className="w-24 h-24 text-secondary">
                      <LiverIcon />
                    </div>
                    <div className="text-white text-sm whitespace-nowrap pl-2">Nonalcoholic Fatty Liver Disease (NAFLD)</div>
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
                className="lg:w-1/4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 3.0 }}
              >
                <div className="bg-primary-dark/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/30">
                  <motion.p
                    className="text-xl md:text-2xl text-white/90 font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
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
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(nextSlide, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [nextSlide, isAutoPlaying])

  return (
    <div className="relative w-full min-h-screen">
      {/* Full screen gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ 
              opacity: 0, 
              x: -100,
              transition: {
                duration: TRANSITION_DURATION,
                ease: "easeInOut",
                delay: 0.3 // Added delay before exit
              }
            }}
            transition={{ 
              duration: TRANSITION_DURATION,
              ease: "easeInOut"
            }}
            className="w-full"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${currentSlide === index ? 'bg-secondary w-6' : 'bg-white/50 hover:bg-white/70'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={previousSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors"
          aria-label="Previous slide"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors"
          aria-label="Next slide"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
