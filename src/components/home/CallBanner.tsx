"use client"

import Image from "next/image"
import { Phone, MessageSquare, Clock, ShieldCheck } from "lucide-react"
import { CTAButton } from "@/components/common/CTAButton"
import { SITE } from "@/lib/constants"

export const CallBanner = () => (
  <section className="relative overflow-hidden border-y border-white/5 bg-black py-8">
    {/* Background Decorative Glows */}
    <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
    <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />

    <div className="relative z-10 mx-auto grid max-w-6xl gap-8 bg-black px-4 py-8 md:grid-cols-[0.4fr_1fr] md:px-6 md:py-10">
      
      {/* 1. Visual Image Hub */}
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="relative h-56 w-56">
          <div className="absolute inset-0 rounded-full border border-primary/25 bg-primary/5 shadow-[0_0_40px_rgba(21,178,91,0.14)]" />
          <div className="absolute inset-3 overflow-hidden rounded-full border border-white/10 bg-black">
            <Image
              src="/b.webp"
              alt="Dispatch Hub"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
        
        {/* Status Badge */}
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-white">Live Dispatcher Online</span>
        </div>
      </div>

      {/* 2. Content & Actions */}
      <div className="flex flex-col justify-center gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-primary/50" />
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Rapid Response Unit</p>
          </div>
          <h3 className="text-4xl font-black uppercase italic tracking-tighter text-white md:text-5xl">
            Dispatch in <span className="text-primary not-italic">Seconds.</span>
          </h3>
        </div>

        {/* Big Phone Section */}
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-4">
            <a 
              href={SITE.phoneLink}
              className="group flex items-baseline gap-2 text-4xl font-black tracking-tighter text-white transition-colors hover:text-primary md:text-6xl"
            >
              {SITE.phone}
              <Phone className="h-6 w-6 text-primary group-hover:animate-bounce" />
            </a>
            <p className="max-w-md text-sm leading-relaxed text-neutral-400">
              Serving the entire Valley from <span className="text-white">Glendale to Chandler</span>. 
              One call secures your quote and schedules your same-day pickup window.
            </p>
          </div>

          {/* Feature Micro-Bento */}
          <div className="grid gap-3">
            <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <Clock size={16} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">Average ETA: 45 Mins</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <ShieldCheck size={16} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">Certified Recycling</span>
            </div>
          </div>
        </div>

        {/* Actions Row */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
          <CTAButton href={SITE.phoneLink} label="Call Now" />
          <CTAButton href={SITE.whatsapp} label="WhatsApp Dispatch" accent="ghost" />
          <div className="hidden lg:flex items-center gap-2 ml-auto">
             <MessageSquare size={14} className="text-neutral-500" />
             <span className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest">Text friendly support</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)
