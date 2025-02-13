'use client'

import { motion } from 'framer-motion'
import { Slide } from '@/types/slide'
import Image from 'next/image'

interface SlideContentProps {
  slide: Slide;
  isActive: boolean;
}

const animations = {
  'fade-in': {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  'slide-up': {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  },
  'slide-in-right': {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  },
  'slide-in-left': {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  },
}

export default function SlideContent({ slide, isActive }: SlideContentProps) {
  const animation = slide.animation || 'fade-in'
  const { initial, animate, exit } = animations[animation]

  if (slide.layout === 'hero') {
    return (
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {slide.title}
            </motion.h1>

            <motion.h2
              className="text-3xl md:text-4xl text-accent-light"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {slide.subtitle}
            </motion.h2>

            <motion.p
              className="text-xl text-accent-light"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {slide.content}
            </motion.p>

            {/* Metrics */}
            {slide.metrics && (
              <motion.div
                className="grid grid-cols-3 gap-8 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {slide.metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-accent mb-2">
                      {metric.prefix}{metric.value}{metric.suffix}
                    </div>
                    <div className="text-sm text-accent-light">{metric.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Image Side */}
          {slide.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          )}
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="container-custom relative z-10"
      initial={initial}
      animate={isActive ? animate : initial}
      exit={exit}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
        >
          {slide.title}
        </motion.h2>

        {slide.subtitle && (
          <motion.h3
            className="text-2xl md:text-3xl mb-6 text-primary-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            {slide.subtitle}
          </motion.h3>
        )}

        <motion.div
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
          dangerouslySetInnerHTML={{ __html: slide.content }}
        />

        {slide.image && (
          <motion.div
            className="mt-8 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.6 }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              width={800}
              height={450}
              className="w-full"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
