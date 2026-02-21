"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const oldCarScenes = [
  {
    title: "Desert Yard #01",
    subtitle: "Fast inspection with same-day quote windows.",
    image: "/a.webp",
    badge: "Rust & Roll",
    stats: ["Same-day offer", "Quick tow"],
    preview: "📸 Uploaded 3m ago"
  },
  {
    title: "Desert Yard #02",
    subtitle: "Dispatch-ready previews for instant routing.",
    image: "/b.webp",
    badge: "Desert Heavy",
    stats: ["Midnight pickup", "Certified payout"],
    preview: "📸 Uploaded 12m ago"
  },
  {
    title: "Desert Yard #03",
    subtitle: "Photo-first valuation with clear payout terms.",
    image: "/c.webp",
    badge: "Legacy Lot",
    stats: ["Full inspection", "Title handled"],
    preview: "📸 Uploaded 25m ago"
  },
  {
    title: "Desert Yard #04",
    subtitle: "Rapid response pickup coordination from preview.",
    image: "/d.webp",
    badge: "Recovery Lane",
    stats: ["Live review", "Fast payout"],
    preview: "📸 Uploaded 31m ago"
  },
]

export const ServicesPreview = () => {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative space-y-10 py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between px-2">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 bg-primary rounded-full shadow-[0_0_10px_#15b25b]" />
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Rapid Recovery Units</p>
          </div>
          <h3 className="text-4xl font-black uppercase italic tracking-tighter text-white md:text-6xl">
            Old Cars <span className="text-neutral-500 not-italic">Previewed</span>
          </h3>
          <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-500">
            Preview only—every upload stays focused on the vehicle.
          </p>
        </div>

        <Link
          href="/quote"
          className="group flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 transition-all hover:border-primary/50 hover:text-white"
        >
          Upload Vehicle <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </div>

      <motion.div
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        initial={reduceMotion ? {} : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } }
        }}
      >
        {oldCarScenes.map((scene, idx) => (
          <motion.article
            key={scene.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-neutral-900/40 shadow-xl transition-all hover:border-primary/30 hover:bg-neutral-900/60"
          >
            <div className="relative h-64 w-full">
              <Image
                src={scene.image}
                alt={scene.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={idx === 0}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
              <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-end justify-between">
                <div className="space-y-1 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">{scene.badge}</p>
                  <p className="text-xl font-black uppercase tracking-tight">{scene.title}</p>
                </div>
                <span className="rounded-full border border-white/20 bg-black/50 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                  {scene.preview}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 px-6 pb-6 pt-5">
              <p className="text-sm leading-relaxed text-neutral-400">{scene.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {scene.stats.map((stat) => (
                  <span
                    key={stat}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-300"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
