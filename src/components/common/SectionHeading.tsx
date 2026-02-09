"use client"

import { motion, useReducedMotion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  description?: string
  align?: "left" | "center"
  level?: "h1" | "h2" | "h3" | "h4"
}

export const SectionHeading = ({
  title,
  description,
  align = "left",
  level,
}: SectionHeadingProps) => {
  const reduceMotion = useReducedMotion()
  const HeadingTag = level ?? "h2"

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-2 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <p className="text-xs uppercase tracking-[0.3em] text-neutral-gray">Phoenix Auto Recycling</p>
      <HeadingTag className="text-3xl font-bold uppercase text-white sm:text-4xl">{title}</HeadingTag>
      {description && <p className="max-w-xl text-base text-neutral-gray">{description}</p>}
    </motion.div>
  )
}
