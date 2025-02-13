'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'

export default function TeamSlide() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div ref={ref} className="min-h-screen w-full px-24 gradient-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="pt-16"
      >
        <h1 className="text-6xl font-bold text-secondary text-center mb-8">Team Overview</h1>

        {/* Core Team Section */}
        <div className="flex gap-16 mb-12 justify-center">
          {/* Marina */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white flex gap-6 items-start"
          >
            <div className="w-36 h-36 rounded-xl overflow-hidden relative border-4 border-white/20 flex-shrink-0">
              <Image
                src="/team/my photos-site.jpg"
                alt="Marina Vieva"
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">MARINA VIEVA</h3>
              <p className="text-white/80 mb-2">FOUNDER & CEO</p>
              <p className="text-white/70 text-sm">25 years in health and wellness; former CFO, CEO, ARR 0 to 200M</p>
              <Link href="https://www.linkedin.com/in/marina-vieva/" target="_blank" className="text-secondary hover:text-secondary-light text-sm mt-2 inline-block">
                LinkedIn Profile →
              </Link>
            </div>
          </motion.div>

          {/* Theophile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white flex gap-6 items-start"
          >
            <div className="w-36 h-36 rounded-xl overflow-hidden relative border-4 border-white/20 flex-shrink-0">
              <Image
                src="/team/Theo_photo.jpg"
                alt="Theophile Hippolyte"
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">THEOPHILE GONOS</h3>
              <p className="text-white/80 mb-2">FRACTIONAL CTO, AI ADVISOR</p>
              <p className="text-white/70 text-sm">PhD in AI, 10 years experience in AI for hospitals and robotics</p>
              <Link href="https://www.linkedin.com/in/theophilegonos/" target="_blank" className="text-secondary hover:text-secondary-light text-sm mt-2 inline-block">
                LinkedIn Profile →
              </Link>
            </div>
          </motion.div>

          {/* Offshore Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white flex gap-6 items-start"
          >
            <div className="w-36 h-36 rounded-xl bg-white/10 border-4 border-white/20 flex flex-col items-center justify-center text-white text-center flex-shrink-0">
              <p className="text-lg font-semibold">Offshore</p>
              <p className="text-lg">team of</p>
              <p className="text-2xl font-bold">3 FTE</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">OFFSHORE TEAM</h3>
              <p className="text-white/80 mb-2">DEVELOPMENT</p>
              <p className="text-white/70 text-sm">Full-stack development team with expertise in AI/ML and mobile development</p>
            </div>
          </motion.div>
        </div>

        {/* Advisors Section */}
        <div>
          <h2 className="text-4xl font-bold text-secondary text-center mb-8">Advisor & Partners</h2>

          {/* Advisors Grid */}
          <div className="flex justify-center gap-12">
            {[
              {
                name: 'Brittany Baretto, PhD',
                role: "Women's health market advisor",
                company: 'FemTech Insight',
                photo: '/partners/Brittany.jpeg',
                linkedin: 'https://www.linkedin.com/in/brittanybarreto/'
              },
              {
                name: 'Anurupa Sharma',
                role: 'Technology Advisor',
                photo: '/partners/Anurupa Sharma.jpeg',
                linkedin: 'https://www.linkedin.com/in/anu-sarma/'
              },
              {
                name: 'Liz Powell',
                role: 'Grants&non-dilutive funding',
                company: 'SG2G consulting',
                photo: '/partners/Liz Powell.jpeg',
                linkedin: 'https://www.linkedin.com/in/liz-powell-507b135/'
              },
              {
                name: 'Mafalda Johannsen',
                role: 'Strategic Sales Advisor',
                photo: '/partners/Mafalda.jpeg?v=3',
                linkedin: 'https://www.linkedin.com/in/mafalda-johannsen-007489a4/'
              },
              {
                name: 'Rebecca Loar',
                role: 'Customer Experience Advisor',
                photo: '/partners/Rebecca.jpeg',
                linkedin: 'https://www.linkedin.com/in/rebecca-loar/'
              }
            ].map((advisor, index) => (
              <motion.div
                key={advisor.name + index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="text-white w-40"
              >
                <div className="w-40 h-40 rounded-xl overflow-hidden relative mb-4 border-4 border-white/20">
                  {advisor.photo ? (
                    <Image
                      src={advisor.photo}
                      alt={advisor.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-white/10 flex items-center justify-center">
                      <span className="text-white/50">Coming Soon</span>
                    </div>
                  )}
                </div>
                <h3 className="text-sm font-bold">{advisor.name}</h3>
                <p className="text-white/80 text-sm">{advisor.role}</p>
                {advisor.company && (
                  <p className="text-white/70 text-sm">{advisor.company}</p>
                )}
                {advisor.linkedin && (
                  <Link href={advisor.linkedin} target="_blank" className="text-secondary hover:text-secondary-light text-sm mt-2 inline-block">
                    LinkedIn Profile →
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
