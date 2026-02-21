"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ShieldCheck, Zap, Truck, CircleDollarSign } from "lucide-react"
import { CTAButton } from "@/components/common/CTAButton"
import { SITE } from "@/lib/constants"

export const Hero = () => {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[85vh] overflow-hidden px-4 py-12 lg:px-6">
      {/* Background Graphical Elements */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12">
          <div className="max-w-4xl">
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
              <h1 className="text-4xl font-black uppercase italic tracking-tighter text-white sm:text-7xl lg:text-8xl">
                Clean Cash <br />
                <span className="text-primary not-italic">For Cars.</span>
              </h1>

              {/* Description */}
              <p className="max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                The Valley's highest-rated automotive recycling crew. We buy junk cars, 
                catalytic converters, and industrial scrap with same-day cash payouts.
              </p>

              {/* Primary Actions */}
              <div className="flex flex-wrap gap-4">
                <CTAButton href="/quote" label="Get Instant Valuation" />
                <CTAButton href={SITE.phoneLink} label="Talk to Dispatch" accent="ghost" />
              </div>

              {/* Live Trust Metrics */}
              <div className="grid gap-4 pt-4 sm:pt-6 sm:grid-cols-2">
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

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-300">
                  <Truck className="h-3.5 w-3.5 text-primary" />
                  Free towing
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-300">
                  <CircleDollarSign className="h-3.5 w-3.5 text-primary" />
                  Instant payout
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-300">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  Licensed recycler
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
