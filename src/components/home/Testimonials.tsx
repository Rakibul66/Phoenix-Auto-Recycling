"use client"

import { Star, Quote, BadgeCheck } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

const testimonials = [
  {
    quote: "Phoenix Auto Recycling made a same-day pickup from my Chandler lot and paid cash before they left.",
    author: "Maria R.",
    location: "Chandler, AZ",
  },
  {
    quote: "They paid more than the other yards for my old diesel truck and took care of the DMV paperwork.",
    author: "Luis G.",
    location: "South Phoenix",
  },
  {
    quote: "Friendly bilingual dispatch, instant WhatsApp follow-up, and I had cash in minutes.",
    author: "Richard T.",
    location: "Tempe, AZ",
  },
]

export const Testimonials = () => {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-12">
      {/* Background Decorative Glow */}
      <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Top Rated Phoenix
            </span>
          </div>
          <h3 className="text-4xl font-black uppercase tracking-tighter text-white">
            Valley <span className="text-neutral-500">Feedback</span>
          </h3>
        </div>
        <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <div className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            Real-time verified reviews
          </span>
        </div>
      </div>

      <motion.div
        className="grid gap-6 md:grid-cols-3"
        initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, staggerChildren: 0.15 }}
      >
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.author}
            whileHover={!reduceMotion ? { y: -5 } : {}}
            className="group relative flex flex-col justify-between rounded-[2rem] border border-white/5 bg-neutral-900/40 p-8 transition-all hover:border-primary/30"
          >
            {/* Quote Icon Background */}
            <Quote className="absolute right-6 top-6 h-12 w-12 text-white/[0.02] transition-colors group-hover:text-primary/10" />

            <div className="relative z-10 space-y-4">
              <p className="text-lg font-medium leading-relaxed text-neutral-200">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            <div className="relative z-10 mt-8 flex items-center gap-3 border-t border-white/5 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BadgeCheck size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{item.author}</p>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                  {item.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}