"use client"

import Link from "next/link"
import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { SITE } from "@/lib/constants"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-rich-black/90 backdrop-blur sticky top-0 z-30 border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <p className="font-semibold text-white">Phoenix Auto Recycling</p>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-white lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-rich-black/95">
          <div className="flex flex-col gap-4 px-4 py-5 text-sm font-semibold text-white">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl border border-white/10 px-4 py-3 text-center transition hover:border-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
