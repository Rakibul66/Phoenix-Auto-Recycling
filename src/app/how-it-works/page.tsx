"use client"

import { motion } from "framer-motion"
import { Timer, Truck, Banknote, MapPin, CheckCircle2 } from "lucide-react"
import { CTAButton } from "@/components/common/CTAButton"
import { HowItWorksSteps } from "@/components/how/HowItWorksSteps"

const heroHighlights = [
  { text: "60-Second Response", icon: Timer },
  { text: "Immediate Digital Estimate", icon: CheckCircle2 },
  { text: "On-the-spot Payment", icon: Banknote },
]

const stats = [
  { label: "Avg Response", value: "45s", icon: Timer },
  { label: "Same-Day", value: "98%", icon: Truck },
  { label: "The Valley", value: "Full Coverage", icon: MapPin },
]

const containerVars = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
}

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero Section */}
      <motion.section 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-950 p-8 md:p-12"
      >
        {/* Subtle Background Glow */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
        
        <div className="relative z-10 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
            Streamlined Process
          </span>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
            Contact. Cash. <span className="text-primary">Cleanup.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
            No hidden fees or low-balling. We’ve automated the scrap process across Phoenix so you get paid faster.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTAButton href="/quote" label="Get Instant Quote" />
            <CTAButton href="/contact" label="Talk to Dispatch" accent="ghost" />
          </div>
        </div>

        {/* Highlights Row */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {heroHighlights.map((item, i) => (
            <div key={i} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-left transition-colors hover:bg-white/[0.05]">
              <item.icon className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-200">{item.text}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Stats Bento Grid */}
      <section className="mt-6 grid gap-6 md:grid-cols-3">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-neutral-900/50 py-10 transition-all hover:border-primary/50"
          >
            <stat.icon className="mb-4 h-6 w-6 text-neutral-500 group-hover:text-primary transition-colors" />
            <p className="text-4xl font-black text-white">{stat.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.4em] text-neutral-500">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Steps Section */}
      <div className="mt-20">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-white">The 3-Step Exchange</h2>
          <div className="mx-auto mt-2 h-1 w-12 bg-primary" />
        </div>
        <HowItWorksSteps />
      </div>
    </div>
  )
}