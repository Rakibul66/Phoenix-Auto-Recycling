"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, Zap, Shield, Users } from "lucide-react"
import { CTAButton } from "@/components/common/CTAButton"
import { SectionHeading } from "@/components/common/SectionHeading"
import { buildMetadata } from "@/lib/seo"

// Note: Move metadata to a separate file if using "use client" in Next.js App Router
// or keep it in a parent Server Component.

const highlights = [
  { text: "Bilingual Dispatch (EN/ES)", icon: Users },
  { text: "Real-time Scrap Pricing", icon: Zap },
  { text: "EPA Compliant Partners", icon: Shield },
  { text: "Licensed Legal Processing", icon: CheckCircle2 },
]

const stats = [
  { label: "Years Experience", value: "20+" },
  { label: "Pickups", value: "98%" },
  { label: "Local Clients", value: "1.2k+" },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <motion.div {...fadeInUp}>
        <SectionHeading 
          title="About our Phoenix crew" 
          description="Locally owned, licensed, and cleaning the Valley one car at a time." 
          level="h1" 
        />
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
        
        {/* Main Image Block - 7 cols */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative min-h-[400px] overflow-hidden rounded-3xl border border-white/10 lg:col-span-7"
        >
          <Image
            src="https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&w=1200&q=80"
            alt="Professional auto dismantling"
            fill
            className="object-cover brightness-75 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Est. 2004</p>
            <h2 className="text-3xl font-bold text-white">Local People. <br/>Clean Practices.</h2>
          </div>
        </motion.div>

        {/* Content Block - 5 cols */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-between rounded-3xl bg-neutral-900/40 p-8 border border-white/5 lg:col-span-5"
        >
          <p className="text-lg leading-relaxed text-neutral-300">
            Phoenix Auto Recycling is a locally run team that buys junk cars, converters, and scrap metal with **zero hidden fees**. We handle the paperwork, even if the title is missing.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-neutral-400">
                <item.icon size={16} className="text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/quote" label="Get a Quote" />
            <CTAButton href="/contact" label="Meet the Team" accent="ghost" />
          </div>
        </motion.div>

        {/* Stats Row - Full width bento */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-8 transition-colors hover:bg-white/10"
            >
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-neutral-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}