"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

interface CTAButtonProps {
  href?: string
  onClick?: () => void
  label: string
  accent?: "primary" | "ghost"
  target?: string
  rel?: string
}

export const CTAButton = ({ href, onClick, label, accent = "primary", target, rel }: CTAButtonProps) => {
  const reduceMotion = useReducedMotion()

  const motionProps = reduceMotion
    ? {}
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
      }

  const classNames =
    accent === "primary"
      ? "inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-semibold uppercase tracking-wider text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      : "inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-2 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"

  return href ? (
    <motion.div {...motionProps}>
      <Link href={href} className={classNames} onClick={onClick} target={target} rel={rel}>
        {label}
      </Link>
    </motion.div>
  ) : (
    <motion.button type="button" {...motionProps} className={classNames} onClick={onClick}>
      {label}
    </motion.button>
  )
}
