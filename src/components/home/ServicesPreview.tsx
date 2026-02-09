"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const oldCarScenes = [
  {
    title: "Desert Rust Belt",
    subtitle: "High-mileage sedans with instant estimates.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1200&q=60",
    badge: "Rust & Roll",
    stats: ["Same-day offer", "Quick tow"],
    preview: "📸 Uploaded 3m ago"
  },
  {
    title: "Sun-Bleached Trucks",
    subtitle: "Tractors and haulers that still hold value.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=60",
    badge: "Desert Heavy",
    stats: ["Midnight pickup", "Certified payout"],
    preview: "📸 Uploaded 12m ago"
  },
  {
    title: "Classic Cruisers",
    subtitle: "Vintage rides cleaned out for bold cash offers.",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=60",
    badge: "Legacy Lot",
    stats: ["Full inspection", "Title handled"],
    preview: "📸 Uploaded 25m ago"
  }
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
        className="grid gap-6 md:grid-cols-3"
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

      <motion.div
        className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
        initial={reduceMotion ? {} : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
      >
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-neutral-900/50">
          <div className="relative h-60 w-full bg-neutral-900/60">
            <Image
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=60"
              alt="Uploaded junk car preview"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/70" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Uploaded Image</p>
                <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em]">
                  Verified
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-black uppercase tracking-tight">Scrap Car Snapshot</p>
                <p className="text-sm text-neutral-200">
                  Get instant clarity when you drop a photo. Dispatch previews the vehicle, confirms ETA, and adds it to the nightly pickup slate.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-[2.5rem] border border-white/5 bg-neutral-900/50 p-8">
          <h4 className="text-lg font-black uppercase tracking-tight text-white">Upload + Preview</h4>
                <p className="text-sm leading-relaxed text-neutral-400">
                  Snap, upload, and preview—the dispatch feed never loses focus on the car.
                </p>
          <div className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-black/60 p-4 text-[12px] uppercase tracking-[0.3em] text-neutral-200">
            <span className="flex items-center gap-2 text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Live dispatcher review
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white/30" />
              Seamless WhatsApp upload
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white/30" />
              Secure same-day payout
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
