'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const revenueData = [
  { year: '2025', value: 0.27 },
  { year: '2026', value: 3.92 },
  { year: '2027', value: 16.47 },
  { year: '2028', value: 40.06 },
  { year: '2029', value: 88.70 }
]

const grossProfitData = [
  { year: '2025', value: -0.41 },
  { year: '2026', value: 0.37 },
  { year: '2027', value: 7.83 },
  { year: '2028', value: 24.24 },
  { year: '2029', value: 59.09 }
]

const cashFlowData = {
  quarters: ['Q1-25', 'Q2-25', 'Q3-25', 'Q4-25', 'Q1-26', 'Q2-26', 'Q3-26', 'Q4-26'],
  sections: [
    {
      title: 'Operations',
      rows: [
        { label: 'Revenue', values: [0, 20, 60, 220, 400, 500, 500, 600] },
        { label: 'Net Income', values: [-187, -181, -175, -205, -173, -173, -173, -173] },
        { label: 'Add: D&A', values: [8, 8, 8, 8, 47, 47, 47, 47] }
      ]
    },
    {
      title: 'Working Capital',
      rows: [
        { label: 'Accounts Receivable', values: [0, 3, 8, 28, 43, 50, 50, 70] },
        { label: 'Prepaid Expenses', values: [6, 6, 6, 6, 19, 19, 19, 19] },
        { label: 'Accounts Payable', values: [14, 14, 14, 14, 60, 60, 60, 60] },
        { label: 'Accrued Expenses', values: [7, 7, 7, 7, 16, 16, 16, 16] },
        { label: 'Deferred Revenue', values: [0, 2, 5, 18, 28, 35, 35, 43] },
        { label: 'Net WC Change', values: [28, 25, 25, 33, 42, 42, 42, 32] }
      ]
    },
    {
      title: 'Cash Flow from Operations',
      rows: [
        { label: 'CF from Operations', values: [-151, -148, -141, -164, -84, -84, -84, -95] }
      ]
    },
    {
      title: 'Investing',
      rows: [
        { label: 'Capitalized R&D', values: [-42, -42, -42, -42, -193, -193, -193, -193] },
        { label: 'Other CapEx', values: [-13, -13, -13, -13, -50, -50, -50, -50] },
        { label: 'CF from Investing', values: [-55, -55, -55, -55, -243, -243, -243, -243] }
      ]
    },
    {
      title: 'Financing',
      rows: [
        { label: 'Equity Investment', values: [0, 500, 2000, 0, 0, 0, 0, 7000] },
        { label: 'CF from Financing', values: [0, 500, 2000, 0, 0, 0, 0, 7000] }
      ]
    },
    {
      title: 'Cash Position',
      rows: [
        { label: 'Net Cash Flow', values: [-206, 298, 1804, -219, -328, -327, -327, 6662] },
        { label: 'Beginning Cash', values: [0, -206, 92, 1896, 1677, 1350, 1022, 695] },
        { label: 'Ending Cash', values: [-206, 92, 1896, 1677, 1350, 1022, 695, 7357] }
      ]
    }
  ]
}

export default function FinancialSlide() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <div ref={containerRef} className="w-full min-h-screen pl-8 pr-8">
      <motion.div 
        className="w-full pt-20 pb-8 space-y-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-secondary text-center">
          Financial Projections
        </h2>
      </motion.div>

      <div className="flex items-start justify-between w-full px-8">
        {/* Cash Flow Table */}
        <div className="w-[45%]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="border border-secondary/20 rounded-xl p-4 bg-white/5"
          >
            <h2 className="text-secondary text-2xl mb-4">Quarterly Cash Flow Forecast 2025-2026</h2>
            <div className="bg-secondary rounded-lg p-3 overflow-x-auto border-2 border-mint">
              <div className="max-h-[400px] overflow-y-auto">
                <table className="w-full text-sm whitespace-nowrap">
                  <thead className="sticky top-0 bg-secondary z-10">
                    <tr className="border-b border-purple-800/50">
                      <th className="text-left p-2 font-semibold text-purple-900 min-w-[160px]">Item</th>
                      {cashFlowData.quarters.map(quarter => (
                        <th key={quarter} className="p-1.5 font-semibold text-right text-purple-900 min-w-[60px] w-[60px]">{quarter}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cashFlowData.sections.map((section, sIndex) => (
                      <>
                        <tr key={`section-${sIndex}`} className="bg-purple-900/40 border-t border-purple-800/50">
                          <td colSpan={9} className="p-1.5 font-semibold text-white">{section.title}</td>
                        </tr>
                        {section.rows.map((row, rIndex) => (
                          <tr key={`row-${sIndex}-${rIndex}`} className="border-b border-purple-800/20">
                            <td className="p-1.5 text-purple-900">{row.label}</td>
                            {row.values.map((value, vIndex) => (
                              <td key={`value-${vIndex}`} className={`p-1 text-right ${value < 0 ? 'text-red-500' : 'text-purple-900'}`}>
                                {value.toLocaleString()}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="w-[52%] space-y-8 pb-12">
          <div className="h-[240px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="border border-secondary/20 p-4 rounded-xl h-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl font-semibold text-secondary mb-2">Revenue Growth ($M)</h3>
              <ResponsiveContainer width="100%" height="85%">
                <LineChart 
                  data={revenueData}
                  style={{ background: '#D3FFF4' }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#333"
                    axisLine={{ stroke: '#333' }}
                    tick={{ fill: '#333' }}
                  />
                  <YAxis 
                    stroke="#333"
                    tickFormatter={(value) => `$${value}M`}
                    domain={[0, 90]}
                    ticks={[0, 20, 40, 60, 80]}
                    axisLine={{ stroke: '#333' }}
                    tick={{ fill: '#333' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#D3FFF4',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                    formatter={(value) => [`$${value}M`, 'Revenue']}
                    labelStyle={{ color: '#333' }}
                    itemStyle={{ color: '#333' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8D43A4"
                    strokeWidth={3}
                    dot={{ fill: '#8D43A4', strokeWidth: 2 }}
                    activeDot={{ r: 8, fill: '#8D43A4', stroke: 'white' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          <div className="h-[240px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="border border-secondary/20 p-4 rounded-xl h-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl font-semibold text-secondary mb-2">Gross Profit ($M)</h3>
              <ResponsiveContainer width="100%" height="85%">
                <LineChart data={grossProfitData} style={{ background: '#D3FFF4' }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#333"
                    axisLine={{ stroke: '#333' }}
                    tick={{ fill: '#333' }}
                  />
                  <YAxis 
                    stroke="#333"
                    tickFormatter={(value) => `$${value}M`}
                    domain={[-10, 60]}
                    ticks={[-10, 0, 10, 20, 30, 40, 50, 60]}
                    axisLine={{ stroke: '#333' }}
                    tick={{ fill: '#333' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#D3FFF4',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                    formatter={(value) => [`$${value}M`, 'Gross Profit']}
                    labelStyle={{ color: '#333' }}
                    itemStyle={{ color: '#333' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8D43A4"
                    strokeWidth={3}
                    dot={{ fill: '#8D43A4', strokeWidth: 2 }}
                    activeDot={{ r: 8, fill: '#8D43A4', stroke: 'white' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
