"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, ShieldAlert } from 'lucide-react'

export function NinetyTenSwitcher() {
  const [view, setView] = useState<'dpc' | 'insurance'>('dpc')

  const content = {
    dpc: {
      title: "The 90%: Day-to-Day Care",
      subtitle: "Managed by Direct Care Indy Membership",
      items: ["Unlimited Sick Visits", "Chronic Disease Management", "Stitches & Minor Procedures", "Wholesale Labs & Meds"],
      icon: <Activity className="w-6 h-6 text-[#8A9A8A]" />,
      color: "bg-[#8A9A8A]"
    },
    insurance: {
      title: "The 10%: Catastrophic Events",
      subtitle: "Managed by Your Insurance/Healthshare",
      items: ["Major Surgeries", "Hospital Stays & ICU", "Emergency Trauma", "Specialist Procedures"],
      icon: <ShieldAlert className="w-6 h-6 text-[#2C3E50]" />,
      color: "bg-[#2C3E50]"
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-3xl shadow-xl border border-gray-100">
      <div className="flex bg-[#F0F0F0] p-1 rounded-full mb-8 relative">
        <motion.div 
          className={`absolute h-full rounded-full ${content[view].color} opacity-10`}
          layoutId="activeGlow"
          animate={{ x: view === 'dpc' ? 0 : '100%' }}
        />
        <button 
          onClick={() => setView('dpc')}
          className={`flex-1 py-3 px-6 rounded-full transition-all z-10 font-medium ${view === 'dpc' ? 'text-[#8A9A8A] shadow-sm bg-white' : 'text-gray-500'}`}
        >
          90% Routine Care
        </button>
        <button 
          onClick={() => setView('insurance')}
          className={`flex-1 py-3 px-6 rounded-full transition-all z-10 font-medium ${view === 'insurance' ? 'text-[#2C3E50] shadow-sm bg-white' : 'text-gray-500'}`}
        >
          10% Emergencies
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl ${view === 'dpc' ? 'bg-[#8A9A8A]/10' : 'bg-[#2C3E50]/10'}`}>
              {content[view].icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#2C3E50]">{content[view].title}</h3>
              <p className="text-gray-500">{content[view].subtitle}</p>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content[view].items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <div className={`w-1.5 h-1.5 rounded-full ${content[view].color}`} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
      <p className="mt-8 text-sm text-center text-gray-400 italic font-light">
        The Mechanic Analogy: Insurance is for when you total the car; we are the mechanic for your oil changes.
      </p>
    </div>
  )
}
