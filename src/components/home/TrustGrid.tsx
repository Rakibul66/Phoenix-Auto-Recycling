"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ShieldCheck, ArrowUpRight } from "lucide-react"
import { TRUST_FACTS } from "@/lib/constants"

export const TrustGrid = () => {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative py-12">
      {/* Visual Header for the Grid */}
      <div className="mb-8 flex items-center gap-4">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-500">
          Operational Standards
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <motion.div
        initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {TRUST_FACTS.map((fact, idx) => (
          <motion.div
            key={idx}
            whileHover={!reduceMotion ? { y: -4, borderColor: "rgba(255,255,255,0.2)" } : {}}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/5 bg-neutral-900/40 p-6 transition-all duration-300"
          >
            {/* Subtle Gradient Glow */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors" />

            {/* Verification Badge */}
            <div className="mb-12 flex items-center justify-between">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.03] text-primary shadow-inner">
                <ShieldCheck size={16} />
              </div>
              <ArrowUpRight size={14} className="text-neutral-700 opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
            </div>

            {/* Fact Content */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                Protocol {idx + 1}
              </p>
              <p className="text-sm font-medium leading-relaxed text-white group-hover:text-primary/90 transition-colors">
                {fact}
              </p>
            </div>

            {/* Technical Detail Line */}
            <div className="mt-6 flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    i === 0 ? "bg-primary w-4 shadow-[0_0_8px_#15b25b]" : "bg-white/5"
                  }`} 
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}