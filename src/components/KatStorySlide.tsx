'use client'

import { motion } from 'framer-motion'
import { katStory } from '@/content/slides/kat-story'

export default function KatStorySlide() {
  const { title, initialSymptoms } = katStory.screens[0]

  return (
    <div className="min-h-screen bg-[#8D43A4] flex items-center">
      <div className="container-custom grid grid-cols-2 gap-12">
        {/* Left: Kat's Photo/Video Area */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[4/5] bg-[#D3FFF4]/10 rounded-2xl overflow-hidden">
            {/* Placeholder for Kat's photo/video */}
            <div className="absolute inset-0 flex items-center justify-center text-[#D3FFF4]/40">
              Photo/Video Area
            </div>
          </div>
        </motion.div>

        {/* Right: Story Content */}
        <div className="space-y-8">
          <motion.h2 
            className="text-4xl font-bold text-[#D3FFF4]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h2>

          <div className="space-y-6">
            {initialSymptoms.map((symptom, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              >
                <div className="w-2 h-2 mt-2 rounded-full bg-[#D3FFF4]" />
                <p className="text-white text-lg">{symptom}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="inline-block bg-[#D3FFF4]/10 backdrop-blur-sm rounded-lg p-6 border border-[#D3FFF4]/20">
              <p className="text-[#D3FFF4] text-xl">
                Kat's story is not unique. Millions of women face similar challenges in our fragmented healthcare system.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
