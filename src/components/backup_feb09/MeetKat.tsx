'use client'
import { motion } from 'framer-motion'

export default function MeetKat() {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-4xl font-bold mb-8">Meet Kat</h2>
      <div className="max-w-3xl text-center">
        <p className="text-xl mb-6">A Real Patient's Journey</p>
        {/* Add problem case study content about Kat's healthcare journey and challenges */}
      </div>
    </motion.div>
  )
}
