'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FundingAskSlide() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const fundingItems = [
    {
      amount: "$200,000",
      description: "GenAI training, EHR integration, MDs listings"
    },
    {
      amount: "$150,000",
      description: "Team, advisors, contractors"
    },
    {
      amount: "$150,000",
      description: "Marketing"
    }
  ]

  return (
    <div className="min-h-screen py-24" ref={containerRef}>
      {/* Centered Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-secondary text-center mb-20"
      >
        Funding Ask
      </motion.h1>

      <div className="px-16">
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-white/90 leading-relaxed"
            >
              We are seeking a $500,000 investment to expand solution for hospital, works on Gen AI agents, and build the evidence base to secure partnerships with insurers and payers.
            </motion.p>

            {/* Funds Allocation Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl font-semibold text-secondary"
            >
              Funds will be allocated to:
            </motion.h2>
          </div>
        </div>

        {/* Funding Allocation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative"
        >
          {/* Timeline line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-secondary/30"
            style={{ transformOrigin: 'left' }}
          />

          {/* Funding Items */}
          <div className="grid grid-cols-3 gap-8 relative">
            {fundingItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-secondary absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-secondary/50 rounded-full"
                    />
                  </div>
                </div>
                <motion.h3
                  className="text-4xl font-bold text-secondary mt-8"
                >
                  {item.amount}
                </motion.h3>
                <p className="text-white/80 text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
