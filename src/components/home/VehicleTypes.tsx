"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Car, Truck, Bike, Construction, ChevronRight } from "lucide-react"
import { VEHICLE_TYPES } from "@/lib/constants"

// Helper to map icons to vehicle types (extend based on your constants)
const getIcon = (type: string) => {
  const t = type.toLowerCase()
  if (t.includes("car") || t.includes("sedan")) return <Car size={24} />
  if (t.includes("truck") || t.includes("suv")) return <Truck size={24} />
  if (t.includes("motorcycle")) return <Bike size={24} />
  return <Construction size={24} /> // Default/Heavy machinery icon
}

export const VehicleTypes = () => {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative space-y-8 py-10">
      {/* Header with Technical Line */}
      <div className="flex items-end justify-between border-b border-white/10 pb-6">
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">
            Asset Inventory
          </p>
          <h3 className="text-4xl font-black uppercase tracking-tighter text-white">
            Accepted <span className="text-neutral-500">Units</span>
          </h3>
        </div>
        <div className="hidden text-right text-[10px] font-mono text-neutral-600 md:block">
          REV. 2026 // PHOENIX_DIV <br />
          ALL_CONDITIONS_ACCEPTED
        </div>
      </div>

      <motion.div
        className="grid gap-4 grid-cols-2 lg:grid-cols-4"
        initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {VEHICLE_TYPES.map((type, idx) => (
          <motion.div
            key={type}
            whileHover={!reduceMotion ? { y: -5, borderColor: "rgba(21,178,91,0.5)" } : {}}
            className="group relative flex h-40 flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/40 p-6 transition-all"
          >
            {/* Background Watermark Number */}
            <span className="absolute -right-2 -top-4 select-none text-6xl font-black text-white/[0.02]">
              0{idx + 1}
            </span>

            {/* Icon Node */}
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.03] text-primary transition-colors group-hover:bg-primary group-hover:text-black">
              {getIcon(type)}
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500">Category</p>
                <span className="text-lg font-bold text-white uppercase italic">{type}</span>
              </div>
              <ChevronRight size={16} className="text-neutral-700 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>

            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_15px_#15b25b]" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}