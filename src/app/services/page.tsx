"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  CheckCircle2, 
  ArrowDown, 
  Car, 
  Zap, 
  Wrench, 
  Recycle, 
  ShieldCheck 
} from "lucide-react"
import { CTAButton } from "@/components/common/CTAButton"
import { SectionHeading } from "@/components/common/SectionHeading"
import { SERVICES } from "@/lib/constants"

/**
 * ANIMATION VARIANTS
 */
const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
}

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20">
      
      {/* 1. HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24 text-center"
      >
        <SectionHeading
          title="Industrial Recycling Solutions"
          description="A centralized approach to automotive scrap and vehicle recycling across the Phoenix Valley."
          align="center"
          level="h1"
        />
      </motion.div>

      {/* 2. CENTERED ZIG-ZAG TIMELINE */}
      <div className="relative">
        
        {/* THE CENTER LINE */}
        <div className="absolute left-[19px] top-0 h-full w-[2px] border-l-2 border-dashed border-primary/20 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-32 md:space-y-48">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            
            // FIXING MAPPING ISSUES:
            // We map 'subtitle' to description and 'what' to features
            const displayDescription = service.subtitle;
            const displayFeatures = service.what;

            return (
              <div key={service.id || index} className="relative flex flex-col md:block">
                
                {/* STEPPER NODE */}
                <div className="absolute left-0 top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full border-4 border-black bg-neutral-900 md:left-1/2 md:-translate-x-1/2">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_15px_#15b25b]" />
                </div>

                <div className={`flex flex-col md:flex-row md:items-start ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* CONTENT CARD */}
                  <motion.div 
                    variants={isEven ? slideInLeft : slideInRight}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className={`relative w-full pl-12 md:w-[45%] md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}
                  >
                    {/* ICON & TITLE */}
                    <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        {service.id.includes('car') && <Car size={24} />}
                        {service.id.includes('converter') && <Zap size={24} />}
                        {service.id.includes('engine') && <Wrench size={24} />}
                        {!['car', 'converter', 'engine'].some(key => service.id.includes(key)) && <Recycle size={24} />}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">
                        {service.title}
                      </h2>
                    </div>

                    {/* DESCRIPTION (Mapped from subtitle) */}
                    <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                      {displayDescription}
                    </p>

                    {/* FEATURES LIST (Mapped from what) */}
                    <div className={`flex flex-wrap gap-x-6 gap-y-3 mb-8 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      {displayFeatures?.map((feature: string, i: number) => (
                        <div key={i} className={`flex items-center gap-2 text-sm text-neutral-300 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <CheckCircle2 size={16} className="text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* BUTTONS */}
                    <div className={`flex flex-wrap gap-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <CTAButton href="/quote" label="Instant Quote" />
                      <CTAButton href="/contact" label="Operations" accent="ghost" />
                    </div>

                    {/* BACKGROUND NUMBER */}
                    <span className={`absolute -top-10 -z-10 hidden text-9xl font-black text-white/[0.03] select-none md:block ${isEven ? 'left-0' : 'right-0'}`}>
                      0{index + 1}
                    </span>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. FINAL CALL TO ACTION */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-56 relative overflow-hidden rounded-[3rem] border border-white/5 bg-neutral-900/20 p-12 text-center"
      >
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-8 flex justify-center -space-x-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-black bg-neutral-800">
                <ShieldCheck className="text-primary" size={24} />
              </div>
            ))}
          </div>

          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
            Bulk Pickup? <span className="text-primary text-not-italic">Custom</span> Rates.
          </h2>
          
          <p className="mt-6 text-xl text-neutral-400 leading-relaxed">
            Professional paperwork and the best scrap rates in Arizona. 
            We make the heavy lifting look easy.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <CTAButton href="/quote" label="Get Pricing Now" />
            <CTAButton href="/contact" label="Talk to a Pro" accent="ghost" />
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-12 flex justify-center"
        >
          <ArrowDown className="text-neutral-700" size={32} />
        </motion.div>
      </motion.section>
    </div>
  )
}