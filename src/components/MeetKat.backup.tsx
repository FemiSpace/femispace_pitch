'use client'

import { motion } from 'framer-motion'
import { HeartIcon, BrainIcon, DiabetesIcon, StomachIcon, DoctorIcon } from './icons/MedicalIcons'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.2 } }
}

export default function MeetKat() {
  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-3 gap-8 items-start pt-16">
        {/* Left Column: Photo and Title */}
        <div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="space-y-3"
          >
            {/* Photo Area with Pulsing Effect */}
            <motion.div
              className="relative w-72 h-72 mx-auto bg-gradient-to-br from-[#D3FFF4]/20 to-[#8D43A4]/20 rounded-lg overflow-hidden"
              variants={fadeInUp}
            >
              <motion.div
                className="absolute inset-0 bg-[#D3FFF4]/10"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="w-full h-full flex items-center justify-center">
                <DoctorIcon className="w-32 h-32 text-[#D3FFF4]" />
              </div>
            </motion.div>

            {/* Diagnosis Text Below Photo */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#D3FFF4]/10 p-3 rounded-lg backdrop-blur-sm border border-[#D3FFF4]/20"
            >
              <p className="text-white text-lg text-center">
                Years later, she was finally diagnosed with <span className="font-bold">diabetes</span>, <span className="font-bold">heart disease</span>, <span className="font-bold">kidney disease</span>, and <span className="font-bold">fatty liver</span>—conditions that could have been prevented.
              </p>
            </motion.div>

            {/* Pulsating Text */}
            <motion.div
              animate={{
                textShadow: [
                  "0 0 8px rgba(211, 255, 244, 0.3)",
                  "0 0 12px rgba(211, 255, 244, 0.6)",
                  "0 0 8px rgba(211, 255, 244, 0.3)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-gradient-to-r from-[#D3FFF4] via-white to-[#D3FFF4] bg-clip-text text-transparent font-bold text-xl text-center"
            >
              Now, she faces lifelong medication, increased disability risks, and mounting healthcare costs.
            </motion.div>
          </motion.div>
        </div>

        {/* Middle and Right Columns: Story Content */}
        <div className="col-span-2 space-y-8">
          {/* Initial Symptoms */}
          <div className="space-y-4">
            <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-3 p-3 bg-[#D3FFF4]/5 rounded-lg backdrop-blur-sm"
            >
              <div className="text-[#D3FFF4]">
                <HeartIcon />
              </div>
              <p className="text-white text-lg">At 42, Kat felt exhausted, dizzy, and had heart palpitations. Doctors dismissed her symptoms as stress.</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-3 p-3 bg-[#D3FFF4]/5 rounded-lg backdrop-blur-sm"
            >
              <div className="text-[#D3FFF4]">
                <BrainIcon />
              </div>
              <p className="text-white text-lg">Over time, she developed swelling, weight gain, and nausea.</p>
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              className="text-[#D3FFF4] text-lg font-medium"
            >
              She saw multiple specialists with no treatment because:
            </motion.p>
          </div>

          {/* Doctor Visits Timeline */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="space-y-4"
          >
            <div className="space-y-4 relative">
              {/* Timeline Line */}
              <motion.div
                className="absolute left-6 top-8 bottom-8 w-0.5 bg-[#D3FFF4]/20"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              {/* Doctor Visits */}
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerChildren}
                className="space-y-1"
              >
                {[
                  { icon: <HeartIcon />, text: 'The cardiologist checks her heart but finds "nothing urgent."' },
                  { icon: <DiabetesIcon />, text: 'The endocrinologist says her blood sugar is "borderline" but not bad enough for treatment.' },
                  { icon: <BrainIcon />, text: 'The general practitioner prescribes anxiety meds for her fatigue and heart palpitations.' },
                  { icon: <StomachIcon />, text: 'The gastroenterologist tells her she has mild fatty liver and should "eat better."' }
                ].map((visit, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 }
                    }}
                    className="flex items-start space-x-3 ml-4 py-1"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#D3FFF4]/10 flex items-center justify-center text-[#D3FFF4] shrink-0">
                      {visit.icon}
                    </div>
                    <p className="text-white text-lg mt-1.5">{visit.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Title moved to bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative overflow-hidden mt-8"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#D3FFF4]/20 to-transparent"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="space-y-4 bg-[#D3FFF4]/10 p-6 rounded-lg backdrop-blur-sm border border-[#D3FFF4]/20">
                <h2 className="text-3xl font-bold text-[#D3FFF4]">Kat's Story: A Healthcare System That Failed Her</h2>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
