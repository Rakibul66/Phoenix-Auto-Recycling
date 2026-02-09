"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ShieldCheck, Zap, MapPin, PhoneCall } from "lucide-react"
import { CTAButton } from "@/components/common/CTAButton"
import { SITE } from "@/lib/constants"

export const Hero = () => {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[85vh] overflow-hidden px-4 py-12 lg:px-6">
      {/* Background Graphical Elements */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Top-left quick action */}
      <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/10 bg-black/70 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-md">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-black shadow-lg">
          <PhoneCall size={16} />
        </div>
        Dispatch Line
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT CONTENT - 7 Columns */}
          <div className="lg:col-span-7">
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  Operating Across the Valley 24/7
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl font-black uppercase italic tracking-tighter text-white sm:text-7xl lg:text-8xl">
                Clean Cash <br />
                <span className="text-primary not-italic">For Cars.</span>
              </h1>

              {/* Description */}
              <p className="max-w-xl text-lg leading-relaxed text-neutral-400">
                The Valley's highest-rated automotive recycling crew. We buy junk cars, 
                catalytic converters, and industrial scrap with **same-day cash payouts.**
              </p>

              {/* Primary Actions */}
              <div className="flex flex-wrap gap-4">
                <CTAButton href="/quote" label="Get Instant Valuation" />
                <CTAButton href={SITE.phoneLink} label="Talk to Dispatch" accent="ghost" />
              </div>

              {/* Live Trust Metrics */}
              <div className="grid gap-4 pt-8 sm:grid-cols-2">
                <div className="flex items-center gap-4 rounded-3xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.05]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Fastest Turnaround</p>
                    <p className="text-sm font-bold text-white uppercase italic">Same-Day Pickup</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-3xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.05]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Service Coverage</p>
                    <p className="text-sm font-bold text-white uppercase italic">Full Valley Access</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL - 5 Columns */}
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-square overflow-hidden rounded-[3rem] border border-white/10 bg-neutral-900/50 p-2 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-black/40">
                <Image
                  src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
                  alt="Scrap car lot with junk vehicles"
                  fill
                  className="object-cover opacity-70 transition-transform duration-700 hover:scale-110"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
                <div className="absolute top-6 right-6 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-md">
                  Trash Cars // Fast Cash
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Recent Pickup</p>
                      <p className="text-sm font-bold text-white uppercase italic">Tempe // $850 Paid</p>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
