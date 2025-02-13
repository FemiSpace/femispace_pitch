import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { HeartIcon, SparklesIcon, BeakerIcon, RocketLaunchIcon, ChartBarIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'

export default function WhyMeSlide() {
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const journeySteps = [
    {
      title: "Lived Experience",
      text: "Born with cardiometabolic predispositions, I explored nutritional and lifestyle solutions across 3 continents, gaining unique insights into patient struggles.",
      icon: <HeartIcon className="w-12 h-12 text-teal-500" />,
      bgIcon: <Image src="/icons/dna.svg" width={40} height={40} alt="DNA" className="opacity-20" />,
      animation: "pulse"
    },
    {
      title: "Self-Empowerment",
      text: "In my 30s, lifestyle interventions failed to control worsening symptoms. Dismissed by healthcare, I became my own researcher and biohacker.",
      icon: <SparklesIcon className="w-12 h-12 text-rose-500" />,
      bgIcon: <Image src="/icons/research.svg" width={40} height={40} alt="Research" className="opacity-20" />,
      animation: "bounce"
    },
    {
      title: "Deep Expertise",
      text: "In my 40s, hormonal changes triggered insulin resistance and heart issues. Lack of help pushed me to master functional medicine, aging science, and reproductive health",
      icon: <BeakerIcon className="w-12 h-12 text-sky-500" />,
      bgIcon: <Image src="/icons/science.svg" width={40} height={40} alt="Science" className="opacity-20" />,
      animation: "float"
    },
    {
      title: "Mission-Driven",
      text: "My journey turned into a mission to democratize access to science-backed, personalized women's health solutions through FemiSpace.",
      icon: <RocketLaunchIcon className="w-12 h-12 text-violet-500" />,
      bgIcon: <Image src="/icons/target.svg" width={40} height={40} alt="Target" className="opacity-20" />,
      animation: "spin"
    }
  ]

  return (
    <div ref={ref} className="relative min-h-screen bg-gradient-to-b from-[#8D43A4] via-[#582973] to-[#271A45] overflow-hidden">
      <div className="relative z-10 container mx-auto px-12 pt-24">
        {/* Centered Title with padding from nav */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-[#D3FFF4] text-center pt-10 pb-12"
        >
          Why Me?
        </motion.h2>

        <div className="flex justify-between gap-12 mb-16">
          <div className="w-5/12">
            {/* Text Above Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <p className="text-2xl font-bold text-[#D3FFF4] mb-4">
                Founder-market fit with two decades of deep expertise in healthcare & AI.
              </p>
              <p className="text-white/90 text-lg">
                Marina Vieva is a prominent voice in women's digital health, delivering expert insights 
                on AI-driven healthcare transformation through keynote presentations at major industry conferences.
              </p>
            </motion.div>

            {/* Photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="h-[400px] relative"
            >
              <Image
                src="/Why me picture.png"
                alt="Marina Vieva"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Journey Steps - Right Side */}
          <div className="w-7/12">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 200 }}
                animate={isInView ? { 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 70,
                    damping: 12,
                    delay: index * 0.15
                  }
                } : {}}
                className="mb-8 relative group"
              >
                {/* Floating Background Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="absolute -right-16 top-0"
                >
                  {step.bgIcon}
                </motion.div>

                {/* Main Icon with Glow Effect */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  animate={step.animation === "pulse" ? {
                    scale: [1, 1.1, 1],
                    transition: { repeat: Infinity, duration: 2 }
                  } : step.animation === "bounce" ? {
                    y: [0, -15, 0],
                    transition: { repeat: Infinity, duration: 1.5 }
                  } : step.animation === "float" ? {
                    y: [0, -10, 0],
                    transition: { repeat: Infinity, duration: 3 }
                  } : {
                    rotate: [0, 360],
                    transition: { repeat: Infinity, duration: 8, ease: "linear" }
                  }}
                  className="mb-3 inline-block"
                  style={{
                    filter: `drop-shadow(0 0 10px ${step.animation === "pulse" ? "rgb(20 184 166 / 0.5)" : 
                      step.animation === "bounce" ? "rgb(244 63 94 / 0.5)" : 
                      step.animation === "float" ? "rgb(14 165 233 / 0.5)" : 
                      "rgb(139 92 246 / 0.5)"})`
                  }}
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-[#D3FFF4] mb-2">
                  {step.title}
                </h3>
                <p className="text-white/90 text-lg max-w-2xl">
                  {step.text}
                </p>

                {/* Connecting Line */}
                {index < journeySteps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={isInView ? { height: 24 } : {}}
                    transition={{ delay: index * 0.15 + 0.4 }}
                    className="absolute left-6 bottom-[-24px] w-0.5 bg-white/20"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Empty Div */}
        <div className="pl-16 pr-8">
        </div>
      </div>
    </div>
  )
}
