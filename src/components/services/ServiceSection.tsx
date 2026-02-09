"use client"

import { motion, useReducedMotion } from "framer-motion"

interface ServiceSectionProps {
  title: string
  subtitle: string
  what: string[]
  steps: string[]
  why: string[]
}

export const ServiceSection = ({ title, subtitle, what, steps, why }: ServiceSectionProps) => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-white/5 bg-gradient-to-br from-black to-[#111827] p-6"
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-gray">Service</p>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-sm text-neutral-gray">{subtitle}</p>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-gray">What we buy</p>
          <ul className="mt-3 space-y-2 text-sm text-white">
            {what.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-gray">How it works</p>
          <ol className="mt-3 space-y-2 text-sm text-neutral-gray">
            {steps.map((step) => (
              <li key={step} className="flex items-start gap-2 text-white">
                <span className="mt-1 h-3 w-3 rounded-full bg-white/60" />
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-gray">Why choose us</p>
          <ul className="mt-3 space-y-2 text-sm text-white">
            {why.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-3 w-3 rounded-full border border-white/40" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}
