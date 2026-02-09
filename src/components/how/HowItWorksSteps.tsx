"use client"

"use client"

import { motion, useReducedMotion } from "framer-motion"
import { PhoneCall, MessageCircle, Truck, DollarSign } from "lucide-react"
import { WORK_STEPS } from "@/lib/constants"

const icons = [PhoneCall, MessageCircle, Truck, DollarSign]

export const HowItWorksSteps = () => {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className="grid gap-6"
      initial={reduceMotion ? undefined : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.2,
          },
        },
      }}
    >
      {WORK_STEPS.map((step, index) => {
        const Icon = icons[index % icons.length]
        return (
          <motion.article
            key={step.title}
            variants={
              reduceMotion
                ? undefined
                : {
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }
            }
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-black/60 p-6 shadow-[0_15px_60px_rgba(0,0,0,0.55)]"
          >
            <div className="absolute -left-8 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#0b1112] text-2xl font-bold text-primary">
              {index + 1}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-xl font-semibold text-white">{step.title}</p>
            </div>
            <p className="mt-3 text-sm text-neutral-gray">{step.description}</p>
          </motion.article>
        )
      })}
    </motion.div>
  )
}
