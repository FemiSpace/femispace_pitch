'use client'

import { motion } from 'framer-motion'

export default function TitleSlide() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-8xl md:text-[10rem] font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            FemiSpace
          </motion.h1>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-secondary mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Precision medicine tailored to women's unique biology
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h2 className="text-4xl font-bold text-white">Marina Vieva</h2>
          <h3 className="text-2xl text-secondary-light mt-2">February 2025</h3>
        </motion.div>
      </div>
    </div>
  )
}
