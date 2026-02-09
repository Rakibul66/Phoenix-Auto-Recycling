"use client"

import { KEYWORDS } from "@/lib/constants"
import { motion } from "framer-motion"
import { Search, Activity } from "lucide-react"

const MarqueeRow = ({ keywords, reverse = false, duration = 40 }: { keywords: string[], reverse?: boolean, duration?: number }) => {
  return (
    <div className="flex overflow-hidden">
      <motion.div
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex gap-4 whitespace-nowrap pr-4"
      >
        {/* Double the array to ensure seamless looping */}
        {[...keywords, ...keywords].map((keyword, idx) => (
          <span
            key={`${keyword}-${idx}`}
            className="inline-flex h-9 items-center gap-2 rounded-xl border border-white/5 bg-neutral-900/40 px-5 text-[10px] font-bold uppercase tracking-widest text-neutral-400 transition-colors hover:border-primary/50 hover:text-white"
          >
            <Search size={10} className="text-primary/40" />
            {keyword}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export const KeywordScroller = () => {
  return (
    <section className="relative overflow-hidden py-10">
      {/* Technical Header */}
      <div className="mb-6 flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <Activity size={14} className="text-primary animate-pulse" />
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-500">
            Search Index // Phoenix Metro
          </p>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-6" />
        <span className="hidden font-mono text-[9px] text-neutral-700 md:block">
          STATUS_OK // DATA_SYNC_ENABLED
        </span>
      </div>

      {/* Scroller Container */}
      <div className="relative space-y-4">
        {/* Gradient Fades for a "Vignette" look */}
        <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent" />

        <MarqueeRow keywords={KEYWORDS.slice(0, Math.ceil(KEYWORDS.length / 2))} duration={50} />
        <MarqueeRow keywords={KEYWORDS.slice(Math.ceil(KEYWORDS.length / 2))} reverse duration={45} />
      </div>

      {/* Decorative Bottom Line */}
      <div className="mt-8 flex justify-center gap-1">
        {[...Array(3)].map((_, i) => (
          <div key={i} className={`h-1 w-8 rounded-full ${i === 1 ? 'bg-primary/20' : 'bg-white/5'}`} />
        ))}
      </div>
    </section>
  )
}