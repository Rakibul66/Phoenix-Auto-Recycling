"use client"

import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

const testimonials = [
  {
    quote:
      "Phoenix Auto Recycling promised a same-day pickup and still delivered. They paid cash for my totaled SUV and handled every form.",
    author: "Maria C.",
    location: "South Phoenix",
  },
  {
    quote:
      "I texted photos of my catalytic converter, got an instant offer, and their team picked it up the next morning. Fast, honest, bilingual.",
    author: "Luis G.",
    location: "Mesa",
  },
  {
    quote:
      "Our repair shop has been using Phoenix Auto Recycling for years. They pay fair value for engines and even transport the units for free.",
    author: "East Valley Auto Care",
    location: "Chandler",
  },
]

export const TestimonialCarousel = () => {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const testimonial = useMemo(() => testimonials[index], [index])

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-gray">Client feedback</p>
          <h3 className="text-3xl font-semibold text-white">What Phoenix drivers say</h3>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-full border border-white/20 p-2 text-white hover:border-primary hover:text-primary"
            onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="rounded-full border border-white/20 p-2 text-white hover:border-primary hover:text-primary"
            onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <motion.div
        key={testimonial.quote}
        initial={reduceMotion ? undefined : "initial"}
        animate={reduceMotion ? undefined : "animate"}
        exit={reduceMotion ? undefined : "exit"}
        variants={variants}
        transition={{ duration: 0.6 }}
        className="mt-6 rounded-2xl border border-white/10 bg-black/60 p-6 text-sm text-neutral-gray shadow-xl"
      >
        <p className="text-lg text-white">{testimonial.quote}</p>
        <div className="mt-4 flex items-center gap-2 text-sm text-white">
          <Star className="h-4 w-4 text-primary" />
          <span className="font-semibold">{testimonial.author}</span>
          <span className="text-neutral-gray">— {testimonial.location}</span>
        </div>
      </motion.div>
    </section>
  )
}
