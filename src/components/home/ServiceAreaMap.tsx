"use client"

import { useState } from "react"
import { SERVICE_AREAS } from "@/lib/constants"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Navigation, Crosshair, Cpu } from "lucide-react"

export const ServiceAreaMap = () => {
  const [selectedArea, setSelectedArea] = useState(SERVICE_AREAS[0])

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-neutral-900/40 p-1 backdrop-blur-md">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="p-6 md:p-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Live Dispatch Grid</p>
            </div>
            <h3 className="text-4xl font-black uppercase italic tracking-tighter text-white">
              The Valley <span className="text-neutral-500 not-italic">Network</span>
            </h3>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-2 border border-white/5 font-mono text-[10px] text-neutral-400">
            <Crosshair size={14} className="text-primary" />
            LOC_ID: {selectedArea.name.toUpperCase()} // ACTIVE_ZONE
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* MAP CANVAS */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-2xl">
             {/* Map UI Overlays */}
             <div className="absolute left-4 top-4 z-20 space-y-1 font-mono text-[8px] text-neutral-600">
                <p>LAT_COORD: {selectedArea.coords[0]}° N</p>
                <p>LNG_COORD: {selectedArea.coords[1]}° W</p>
             </div>

            <svg viewBox="0 0 320 260" className="h-full w-full opacity-80 transition-all duration-700">
              {/* Abstract Metro Shape */}
              <motion.path
                d="M40 50 L280 50 L260 210 L50 220 Z"
                fill="none"
                stroke="rgba(21,178,91,0.1)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              
              {/* Dynamic Territory Glows */}
              {SERVICE_AREAS.map((area) => (
                <motion.circle
                  key={area.name}
                  cx={area.coords[0]}
                  cy={area.coords[1]}
                  r={selectedArea.name === area.name ? 35 : 0}
                  fill="url(#areaGradient)"
                  initial={false}
                  animate={{ r: selectedArea.name === area.name ? 35 : 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="pointer-events-none opacity-20"
                />
              ))}

              <defs>
                <radialGradient id="areaGradient">
                  <stop offset="0%" stopColor="#15b25b" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>

              {/* Interactive Nodes */}
              {SERVICE_AREAS.map((area) => (
                <g 
                  key={area.name} 
                  className="cursor-pointer group"
                  onClick={() => setSelectedArea(area)}
                >
                  <circle
                    cx={area.coords[0]}
                    cy={area.coords[1]}
                    r={20}
                    fill="transparent"
                  />
                  <motion.circle
                    cx={area.coords[0]}
                    cy={area.coords[1]}
                    r={selectedArea.name === area.name ? 6 : 4}
                    fill={selectedArea.name === area.name ? "#15b25b" : "#333"}
                    stroke={selectedArea.name === area.name ? "rgba(21,178,91,0.5)" : "transparent"}
                    strokeWidth={10}
                    animate={{ 
                        scale: selectedArea.name === area.name ? [1, 1.2, 1] : 1,
                        fill: selectedArea.name === area.name ? "#15b25b" : "#444"
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* DATA READOUT */}
          <div className="flex flex-col gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedArea.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4 rounded-3xl border border-primary/20 bg-primary/5 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                    <Navigation className="text-primary" size={20} />
                    <h4 className="text-xl font-bold uppercase tracking-tight text-white">{selectedArea.name}</h4>
                </div>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {selectedArea.description}
                </p>
                <div className="flex items-center gap-2 font-mono text-[10px] text-primary">
                    <Cpu size={12} />
                    <span>PRIORITY_STATUS: OPTIMAL_RESPONSE</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="grid grid-cols-2 gap-2">
              {SERVICE_AREAS.map((area) => (
                <button
                  key={area.name}
                  onClick={() => setSelectedArea(area)}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${
                    selectedArea.name === area.name
                      ? "border-primary bg-primary text-black"
                      : "border-white/5 bg-white/5 text-neutral-500 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {area.name}
                  {selectedArea.name === area.name && <MapPin size={12} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}