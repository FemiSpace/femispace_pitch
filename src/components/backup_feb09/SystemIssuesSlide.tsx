'use client'
import { motion } from 'framer-motion'

export default function SystemIssuesSlide() {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-4xl font-bold mb-8">Current System Issues</h2>
      {/* Add your system issues content here */}
    </motion.div>
  )
}
