'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  BuildingOfficeIcon, 
  BriefcaseIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  BuildingOffice2Icon,
  HeartIcon
} from '@heroicons/react/24/solid'

export default function GTMBusinessSlide() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })

  const subscriptionPlans = [
    { 
      price: "$10", 
      type: "Digital Only", 
      features: "Digital tracking & insights • AI-powered recommendations",
      color: "bg-[#F0FFF8]" 
    },
    { 
      price: "$30-50", 
      type: "Digital + Coaching", 
      features: "All Digital features • Personal coaching sessions",
      color: "bg-[#FFF2ED]" 
    },
    { 
      price: "$50-100", 
      type: "Complete Care", 
      features: "All Coaching features • Expert medical guidance",
      color: "bg-[#F7F0FF]" 
    },
    { 
      price: "$50-200", 
      type: "Fertility Package", 
      features: "All Complete Care • Full fertility support",
      color: "bg-[#F0F9FF]" 
    }
  ]

  const gtmChannels = [
    {
      title: "B2B Partnerships",
      description: "Healthcare Providers & Insurers",
      details: "Direct integration with clinics • Enterprise solutions for hospitals",
      growth: 45,
      revenue: 60,
      icon: <BuildingOffice2Icon className="w-6 h-6" />
    },
    {
      title: "Direct to Consumer",
      description: "Mobile App & Web Platform",
      details: "In-app subscriptions • Premium features access",
      growth: 75,
      revenue: 80,
      icon: <UserGroupIcon className="w-6 h-6" />
    },
    {
      title: "Fertility Clinics",
      description: "Specialized Care Centers",
      details: "Full-service packages • Integrated care solutions",
      growth: 55,
      revenue: 70,
      icon: <HeartIcon className="w-6 h-6" />
    }
  ]

  return (
    <div className="container-custom min-h-screen flex flex-col justify-center overflow-hidden relative pt-24 pb-8" ref={containerRef}>
      {/* Header with proper spacing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-secondary-light mb-2">
          GTM & Business Model
        </h2>
        <p className="text-xl text-white/80">
          Multi-channel growth strategy with scalable revenue
        </p>
      </motion.div>

      {/* Pricing Strategy Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.7 }}
        className="mb-3 text-center"
      >
        <h3 className="text-2xl font-medium text-secondary-light">
          Pricing Strategy
        </h3>
      </motion.div>

      {/* Subscription Plans */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {subscriptionPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              y: isInView ? 0 : 50, 
              scale: isInView ? 1 : 0.9 
            }}
            transition={{ 
              duration: 0.7,
              delay: index * 0.15,
              type: "spring",
              stiffness: 120
            }}
            className={`p-4 rounded-lg ${plan.color} text-gray-800`}
          >
            <div className="text-2xl font-bold mb-2">{plan.price}</div>
            <div className="font-semibold mb-2">{plan.type}</div>
            <div className="text-sm">{plan.features}</div>
          </motion.div>
        ))}
      </div>

      {/* GTM Strategy Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.7 }}
        className="mb-4 text-center"
      >
        <h3 className="text-2xl font-medium text-white">
          Go-To-Market Strategy
        </h3>
      </motion.div>

      {/* GTM Channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gtmChannels.map((channel, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              x: isInView ? 0 : (index % 2 === 0 ? -50 : 50)
            }}
            transition={{ 
              duration: 0.7,
              delay: 0.5 + index * 0.15,
              type: "spring",
              stiffness: 120
            }}
            className="bg-white rounded-lg p-4 relative shadow-lg"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="text-[#8D43A4]">{channel.icon}</div>
              <div className="flex items-center space-x-2">
                <ChartBarIcon className="w-4 h-4 text-[#8D43A4]" />
                <span className="text-sm font-medium text-[#8D43A4]">
                  {channel.growth}% Growth
                </span>
              </div>
            </div>
              
            <h3 className="text-lg font-semibold text-[#8D43A4] mb-1">
              {channel.title}
            </h3>
            <div className="text-[#8D43A4] font-medium mb-1 text-sm">
              {channel.description}
            </div>
            <p className="text-gray-600 text-xs mb-3 leading-relaxed">
              {channel.details.split('•').map((detail, i) => (
                <div key={i} className="mb-1">• {detail.trim()}</div>
              ))}
            </p>

            {/* Revenue Progress Bar */}
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isInView ? `${channel.revenue}%` : 0 }}
                transition={{ duration: 1, delay: 1 + index * 0.1 }}
                className="h-full bg-gradient-to-r from-[#8D43A4] to-[#A355BC]"
              />
            </div>
            <div className="flex justify-between items-center mt-0.5">
              <span className="text-xs text-gray-500 font-medium">Revenue Potential</span>
              <div className="flex items-center text-xs text-[#8D43A4] font-medium">
                <ArrowTrendingUpIcon className="w-3 h-3 text-[#8D43A4] mr-1" />
                {channel.revenue}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
