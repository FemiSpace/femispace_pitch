'use client'
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const DashboardWindow = ({ title, children, delay = 0, inView = false }) => (
  <motion.div
    className="bg-white rounded-xl p-2 shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay }}
  >
    <h3 className="text-gray-800 font-medium text-lg mb-1">{title}</h3>
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
    <div ref={ref} className="min-h-screen w-full bg-gradient-to-b from-[#8D43A4] via-[#582973] to-[#271A45]">
      {/* Header */}
      <motion.div
        className="text-center pt-20 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[#D3FFF4] mb-1"
        >
          Solution: How it works
        </motion.h2>
        <motion.p className="text-white/60 text-lg">
          Comprehensive health management platform
        </motion.p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-2 w-full px-8">
        {/* SaaS Dashboard Section - Left Side */}
        <div className="col-span-4 space-y-2">
          <h3 className="text-xl text-white/90 mb-1 font-medium">SaaS Dashboard</h3>
          {/* Surveys/EHR Import */}
          <DashboardWindow title="Surveys/EHR import" delay={0.2} inView={inView}>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">📅</span>
                <span className="text-gray-700">Health Records Import</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📋</span>
                <span className="text-gray-700">Smart Surveys</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🔄</span>
                <span className="text-gray-700">Auto-Sync</span>
              </div>
            </div>
          </DashboardWindow>

          {/* Predictive Analytics */}
          <DashboardWindow title="Predictive analytics" delay={0.3} inView={inView}>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">AI-Driven</div>
              <div className="text-gray-700 mb-2">Risk Assessment</div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pattern Recognition</span>
                  <span className="text-blue-500">Active</span>
                </div>
              </div>
            </div>
          </DashboardWindow>

          {/* Health Dashboard */}
          <DashboardWindow title="Health dashboard" delay={0.4} inView={inView}>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold text-gray-800">Health Score</div>
                  <div className="text-green-500 text-sm">Improving</div>
                </div>
              </div>
            </div>
          </DashboardWindow>
        </div>

        {/* Video Demo Section - Middle */}
        <div className="col-span-4">
          <motion.div 
            className="bg-[#D3FFF4] rounded-xl p-4 text-center h-full flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl text-gray-900 mb-3 font-bold">Mobile App Demo</h3>
            <div className="relative w-[240px] h-[480px] bg-black rounded-[2.5rem] p-1 shadow-lg border-2 border-gray-800">
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
          </motion.div>
        </div>

        {/* Mobile App Section - Right Side */}
        <div className="col-span-4 space-y-2">
          <h3 className="text-xl text-white/90 mb-1 font-medium">Mobile Features</h3>
          {/* Symptoms Tracking */}
          <DashboardWindow title="Symptoms tracking" delay={0.6} inView={inView}>
            <div className="space-y-2">
              <div className="text-gray-700 font-medium mb-2">Daily Tracking</div>
              <div className="space-y-2">
                {['Pain Level', 'Mood'].map((symptom) => (
                  <div key={symptom} className="flex items-center gap-2">
                    <span className="text-gray-700">{symptom}</span>
                    <div className="flex-1 h-1 bg-gray-200 rounded">
                      <div className="w-3/4 h-full bg-blue-500 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DashboardWindow>

          {/* Personalized Program */}
          <DashboardWindow title="Personalized program" delay={0.7} inView={inView}>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">📱</span>
                <span className="text-gray-700">Mobile Reminders</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🎯</span>
                <span className="text-gray-700">Goal Tracking</span>
              </div>
            </div>
          </DashboardWindow>

          {/* Community Features */}
          <DashboardWindow title="Community features" delay={0.8} inView={inView}>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">👥</span>
                <span className="text-gray-700">Support Groups</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">💬</span>
                <span className="text-gray-700">Chat Support</span>
              </div>
            </div>
          </DashboardWindow>
        </div>
      </div>
    </div>
  );
}
