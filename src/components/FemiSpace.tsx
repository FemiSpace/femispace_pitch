'use client'
import { motion } from 'framer-motion'

export default function FemiSpace() {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-4xl font-bold mb-8">FemiSpace Solution</h2>
      <div className="max-w-4xl">
        {/* Add presentation content about how FemiSpace is better */}
      </div>
    </motion.div>
  )
}
