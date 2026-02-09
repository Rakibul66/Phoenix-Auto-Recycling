"use client"

import Link from "next/link"
import { SITE } from "@/lib/constants"

export const Footer = () => (
  <footer className="bg-rich-black border-t border-white/10">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-neutral-gray sm:flex-row sm:justify-between">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-gray">Licensed | Phoenix</p>
        <p className="text-base font-semibold text-white">{SITE.name}</p>
        <p>{SITE.address}</p>
        <a href={SITE.phoneLink} className="text-white">
          {SITE.phone}
        </a>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-white">Quick Links</p>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/quote">Get Quote</Link>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-white">Contact</p>
        <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
          WhatsApp sales
        </a>
        <a href={SITE.phoneLink}>{SITE.phone}</a>
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-white">Hours</p>
        {SITE.hours.map((item) => (
          <p key={item.label}>
            {item.label}: <span className="text-white">{item.value}</span>
          </p>
        ))}
      </div>
    </div>
    <div className="border-t border-white/5 px-4 py-4 text-center text-xs text-neutral-gray">
      © {new Date().getFullYear()} {SITE.name}. All rights reserved.
    </div>
  </footer>
)
