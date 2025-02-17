'use client'
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const DashboardWindow = ({ title, children, delay = 0, inView = false }) => (
  <motion.div
    className="bg-white rounded-xl p-3 shadow-lg max-w-[220px]"
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay }}
  >
    <h3 className="text-gray-800 font-medium text-lg mb-2">{title}</h3>
    <div className="bg-gray-50 rounded-lg p-2">
      {children}
    </div>
  </motion.div>
);

export default function FemiApp() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="min-h-screen w-full bg-gradient-to-b from-[#8D43A4] via-[#582973] to-[#271A45] pt-20">
      {/* Header */}
      <motion.div
        className="text-center mb-1"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[#D3FFF4] mb-0"
        >
          Solution: How it works
        </motion.h2>
        <motion.p className="text-white/60 text-lg">
          Comprehensive health management platform
        </motion.p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-4 w-full px-6">
        {/* Web Version Video - Left Side */}
        <div className="col-span-7">
          <motion.div 
            className="bg-[#D3FFF4] rounded-xl px-1 pt-0 pb-1 text-center flex flex-col items-center h-[500px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl text-gray-900 mb-0 font-bold">Web Dashboard</h3>
            <div className="relative w-full h-[500px] bg-[#D3FFF4] rounded-xl overflow-hidden">
              <video 
                className="w-full h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
                src="/Recording WEb version Femispace video.mp4"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile App Demo - Middle */}
        <div className="col-span-3">
          <motion.div 
            className="bg-[#D3FFF4] rounded-xl px-1 pt-0 pb-1 text-center flex flex-col items-center h-[500px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl text-gray-900 mb-0 font-bold">Mobile App Demo</h3>
            <div className="flex-1 flex items-center">
              <div className="relative w-[240px] h-[440px] bg-black rounded-[2.5rem] p-1 shadow-lg border-2 border-gray-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl"></div>
                <div className="w-full h-full bg-gray-100 rounded-[2.3rem] overflow-hidden">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/FemiSpace demo-quicker version_2.mp4"
                    style={{ 
                      borderRadius: "2.3rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Boxes - Right Side */}
        <div className="col-span-2 space-y-2">
          <DashboardWindow title="Predictive Analytics" delay={0.7} inView={inView}>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-lg">🧠</span>
                <span className="text-gray-700">AI-Driven Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📊</span>
                <span className="text-gray-700">Risk Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🔄</span>
                <span className="text-gray-700">Pattern Recognition</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📋</span>
                <span className="text-gray-700">Risk Reduction Plans</span>
              </div>
            </div>
          </DashboardWindow>

          <DashboardWindow title="Health Monitoring" delay={0.9} inView={inView}>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-lg">💊</span>
                <span className="text-gray-700">Medication Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🔍</span>
                <span className="text-gray-700">Condition Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📈</span>
                <span className="text-gray-700">Progress Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🔔</span>
                <span className="text-gray-700">Reports and Alerts</span>
              </div>
            </div>
          </DashboardWindow>
        </div>
      </div>
    </div>
  );
}
