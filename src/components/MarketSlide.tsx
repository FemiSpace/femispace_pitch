'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const GlowingNumber = ({ value, suffix = '', delay = 0, size = 'large' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const textSizes = {
    large: 'text-7xl md:text-8xl',
    medium: 'text-4xl',
    small: 'text-3xl'
  }

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? {
        scale: [0.5, 1.2, 1],
        opacity: 1,
      } : {}}
      transition={{ 
        duration: 0.7, 
        delay,
        type: "spring",
        stiffness: 120
      }}
    >
      <motion.div 
        className="absolute -inset-2 bg-gradient-to-r from-secondary via-accent to-primary rounded-lg blur-lg opacity-75"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className={`relative ${textSizes[size]} font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent`}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {value}{suffix}
      </motion.div>
    </motion.div>
  )
}

const MarketSegment = ({ icon, title, description, delay }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <motion.div
      ref={ref}
      className="p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? {
        opacity: 1,
        x: 0
      } : {}}
      transition={{ 
        duration: 0.7, 
        delay,
        type: "spring",
        stiffness: 120
      }}
    >
      <div className="flex items-start gap-3">
        <motion.span 
          className="text-2xl"
          animate={{
            y: [0, -5, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.span>
        <div>
          <h3 className="text-sm font-medium text-white">{title}</h3>
          {description && (
            <p className="text-xs text-white/70 mt-1">{description}</p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function MarketSlide() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <div ref={ref} className="relative w-full max-w-7xl mx-auto px-4 pt-16 pb-8">
      <div className="h-[calc(100vh-8rem)] flex flex-col">
        {/* Header with Global Market Size */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-medium text-white/80 mb-4"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Global Hyper-Personalized Medicine Market
          </motion.h2>
          <div className="flex items-center justify-center gap-6">
            <GlowingNumber value="$5.5T" suffix=" in 2023" size="large" delay={0.2} />
            <motion.div 
              className="flex items-baseline gap-2"
              animate={{
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                12% CAGR
              </span>
              <span className="text-sm text-white/80">2025-2030</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-6 flex-grow">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Market Segments */}
            <div className="space-y-3">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-white/90"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                Key Market Segments
              </motion.h3>
              <div className="grid grid-cols-1 gap-2">
                <MarketSegment 
                  icon="🧬" 
                  title="Direct-To-Consumer (DTC) Diagnostics"
                  description="Personalized testing and diagnostics"
                  delay={0.5} 
                />
                <MarketSegment 
                  icon="📱" 
                  title="Software as Medical Devices"
                  description="AI-driven health monitoring"
                  delay={0.6} 
                />
                <MarketSegment 
                  icon="👩‍⚕️" 
                  title="Personalized Medical Care"
                  description="Telemedicine and precision treatment"
                  delay={0.7} 
                />
                <MarketSegment 
                  icon="🥗" 
                  title="Personalized Nutrition & Wellness"
                  description="Tailored health optimization"
                  delay={0.8} 
                />
              </div>
            </div>

          </div>

          {/* Right Column - Target Market */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white/90">Target Market Focus</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4 bg-white/5 rounded-xl p-4"
                whileHover={{ scale: 1.02 }}
              >
                <motion.span 
                  className="text-4xl"
                  animate={{
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👩‍💼
                </motion.span>
                <div>
                  <h4 className="text-white font-medium">Professional Women</h4>
                  <p className="text-white/70">Ages 35-49 in USA</p>
                </div>
              </motion.div>

              <div className="space-y-3">
                <p className="text-white/80">Key Health Concerns:</p>
                <div className="flex gap-3">
                  {["Cardiovascular Risks", "Perimenopausal Risks"].map((risk, index) => (
                    <motion.div
                      key={risk}
                      className="px-3 py-1.5 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 backdrop-blur-sm text-white/90 text-sm border border-white/10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.2 + index * 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {risk}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <GlowingNumber value="$250B" suffix=" US Market" size="medium" delay={1.4} />
                <motion.p 
                  className="text-base text-white/90 mt-2 font-medium"
                  animate={{
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Addressable market size for women's cardiometabolic care
                </motion.p>
              </div>

              <div className="mt-4">
                <GlowingNumber value="$1650B" size="medium" delay={1.5} />
                <motion.p 
                  className="text-base text-white/90 mt-2 font-medium"
                  animate={{
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Lifestyle-driven interventions segment
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
