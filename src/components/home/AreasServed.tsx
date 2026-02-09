"use client"

import { AREAS } from "@/lib/constants"
import { motion, useReducedMotion } from "framer-motion"
import { MapPin, Navigation, Radio } from "lucide-react"

export const AreasServed = () => {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-12">
      {/* Background Decorative "Signal" Pulse */}
      <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Radio size={14} className="text-primary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Live Network Coverage
            </span>
          </div>
          <h3 className="text-4xl font-black uppercase tracking-tighter text-white">
            Valley <span className="text-neutral-500">Service Zones</span>
          </h3>
        </div>
        
        <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-2">
          <Navigation size={14} className="text-neutral-500" />
          <p className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">
            Dispatching from Central Phoenix
          </p>
        </div>
      </div>

      <motion.div
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, staggerChildren: 0.05 }}
      >
        {AREAS.map((area, idx) => (
          <motion.div
            key={area}
            whileHover={!reduceMotion ? { scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" } : {}}
            className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/40 p-5 transition-all hover:border-primary/40"
          >
            {/* Subtle Node Index */}
            <span className="absolute -right-2 -top-2 select-none font-mono text-4xl font-black text-white/[0.02]">
              {idx + 1}
            </span>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-black">
                <MapPin size={18} />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                {area}
              </span>
            </div>

            {/* Status Indicator */}
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-bold uppercase text-neutral-600">Status</span>
              <span className="text-[9px] font-bold uppercase text-primary">Active</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Technical Footer */}
      <div className="mt-10 rounded-3xl border border-white/5 bg-gradient-to-r from-neutral-900/50 to-transparent p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-neutral-500">
            Our fleet provides <span className="text-white font-semibold">Priority Rapid Response</span> to all neighborhoods across the Valley. 
            Arrival windows are typically under <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 text-white">120 minutes</span> from quote acceptance.
          </p>
          <div className="h-px flex-1 bg-white/5 md:mx-8 md:h-px" />
          <div className="flex shrink-0 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`h-1 w-4 rounded-full ${i === 0 ? 'bg-primary shadow-[0_0_8px_#15b25b]' : 'bg-white/10'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}