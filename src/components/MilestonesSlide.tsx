'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function MilestonesSlide() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const milestones = [
    {
      date: "March 2025",
      round: "$500K round",
      title: "Product Launch",
      subtitle: "Q2 $20K in MRR",
      description: "A/B testing with early adopters",
      icon: "🚀"
    },
    {
      date: "July 2025",
      round: "Q3 $2M round",
      title: "First $50,000 in MRR",
      description: "Demonstrated product-market fit and effective sales strategies.",
      icon: "📈"
    },
    {
      date: "Q4 2026",
      title: "$3.9 M in ARR",
      subtitle: "Expand Product Line",
      description: "Aiming for market diversification and revenue growth through offerings",
      icon: "🎯"
    }
  ]

  return (
    <div className="min-h-screen py-24" ref={containerRef}>
      {/* Centered Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="text-7xl font-bold text-secondary text-center mb-20"
      >
        Milestones
      </motion.h1>

      <div className="px-16">
        {/* Timeline */}
        <div className="relative mt-20">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute left-0 right-0 h-0.5 bg-secondary/30"
            style={{ 
              top: '50%',
              transformOrigin: 'left'
            }}
          />

          {/* Milestones */}
          <div className="grid grid-cols-3 gap-8 relative">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'pt-0' : 'pt-32'}`}
              >
                {/* Milestone dot */}
                <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 'calc(50% - 0.5rem)' }}>
                  <div className="w-4 h-4 rounded-full bg-secondary relative">
                    <motion.div
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                      className="absolute inset-0 bg-secondary/50 rounded-full"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 space-y-3">
                  {/* Icon */}
                  <div className="text-4xl mb-4">
                    {milestone.icon}
                  </div>
                  
                  {/* Date and Round */}
                  <div className="space-y-1">
                    <h3 className="text-white text-xl font-semibold">{milestone.date}</h3>
                    {milestone.round && (
                      <p className="text-white/80 font-medium">{milestone.round}</p>
                    )}
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-2">
                    <h4 className="text-secondary text-2xl font-bold">{milestone.title}</h4>
                    {milestone.subtitle && (
                      <h5 className="text-secondary/90 text-xl">{milestone.subtitle}</h5>
                    )}
                    <p className="text-white/70 text-base leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
