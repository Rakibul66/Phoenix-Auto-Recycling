"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ShieldCheck, Zap, Coins, Languages } from "lucide-react"

const highlights = [
  { label: "20+ Years", description: "Trusted Phoenix Recyclers", icon: ShieldCheck },
  { label: "Same-Day", description: "Valley-Wide Pickup", icon: Zap },
  { label: "Fast Payment", description: "Instant Cash/Transfer", icon: Coins },
  { label: "Bilingual", description: "English & Spanish Team", icon: Languages },
]

export const TrustHighlights = () => {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-8">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-30" />
      
      <motion.div
        className="relative z-10 grid grid-cols-1 divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4"
        initial={reduceMotion ? {} : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {highlights.map((item, idx) => (
          <motion.div
            key={item.label}
            className="group flex flex-col items-center justify-center p-8 transition-colors hover:bg-white/[0.02]"
            initial={reduceMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            {/* Minimal Icon Node */}
            <div className="mb-4 rounded-full bg-primary/10 p-2.5 text-primary group-hover:scale-110 transition-transform">
              <item.icon size={18} strokeWidth={2.5} />
            </div>

            {/* Content */}
            <div className="space-y-1 text-center">
              <p className="text-3xl font-black uppercase tracking-tighter text-white">
                {item.label}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 group-hover:text-primary transition-colors">
                {item.description}
              </p>
            </div>

            {/* Accent Corner (Visual Interest) */}
            <div className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-white/5 group-hover:bg-primary transition-colors" />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Bottom Architectural Line */}
      <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}