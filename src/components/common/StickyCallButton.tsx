"use client"

import { PhoneCall } from "lucide-react"
import { SITE } from "@/lib/constants"

export const StickyCallButton = () => (
  <a
    href={SITE.phoneLink}
    className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
  >
    <PhoneCall className="h-5 w-5" />
    Call Now
  </a>
)
