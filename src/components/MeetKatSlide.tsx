'use client'
import { motion } from 'framer-motion'

export default function MeetKatSlide() {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-4xl font-bold mb-8">Meet Kat</h2>
      {/* Add your case study content about Kat here */}
    </motion.div>
  )
}
