'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function ThankYouSlide() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const partnershipTypes = [
    {
      type: "Investment Partners",
      description: "Join us in revolutionizing women's healthcare"
    },
    {
      type: "Research Partners",
      description: "Collaborate on clinical validation and studies"
    },
    {
      type: "Go-to-Market Partners",
      description: "Scale our solution through your network"
    }
  ]

  return (
    <div className="min-h-screen py-24" ref={containerRef}>
      <div className="grid grid-cols-2 gap-16">
        {/* Left Column */}
        <div className="pl-16 space-y-12">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold text-white leading-tight"
          >
            Thank you
            <br />
            for considering
            <br />
            <span className="text-secondary">
              FemiSpace.
            </span>
          </motion.h1>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold text-white">Contact us:</h2>
            <div className="space-y-4">
              <Link 
                href="mailto:marina@femispace.com"
                className="text-xl text-secondary hover:text-white transition-colors block"
              >
                marina@femispace.com
              </Link>
              <p className="text-xl text-secondary">+1 213 691 7401</p>
              <Link 
                href="https://www.femispace.com"
                target="_blank"
                className="text-xl text-secondary hover:text-white transition-colors block"
              >
                www.femispace.com
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="pr-16 space-y-12">
          {/* Partnership Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-secondary">We're looking for:</h3>
            <div className="space-y-4">
              {partnershipTypes.map((partner, index) => (
                <motion.div
                  key={partner.type}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4"
                >
                  <h4 className="text-white font-semibold text-lg">{partner.type}</h4>
                  <p className="text-white/80">{partner.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-24"
          >
            <p className="text-2xl text-white leading-relaxed">
              We're excited about the opportunity
              <br />
              to partner with you in creating a
              <br />
              <span className="text-secondary font-semibold">sustainable future!</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
