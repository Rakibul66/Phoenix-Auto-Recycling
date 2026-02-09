import { Clock4, Globe, MapPin, Phone, Mail, MessageSquare } from "lucide-react"
import { SectionHeading } from "@/components/common/SectionHeading"
import { ContactForm } from "@/components/forms/ContactForm"
import { SITE } from "@/lib/constants"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Contact | Phoenix Auto Recycling",
  description: "Get a quote or schedule a pickup across the Phoenix metro area.",
  pathname: "contact",
})

const contactOptions = [
  { label: "Call", detail: SITE.phone, href: SITE.phoneLink, Icon: Phone },
  { label: "Email", detail: SITE.email, href: `mailto:${SITE.email}`, Icon: Mail },
  { label: "WhatsApp", detail: "Live Chat", href: SITE.whatsapp, Icon: MessageSquare, external: true },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Get in Touch"
        description="Fast quotes and dispatch for junk cars and scrap metal."
        align="left"
        level="h1"
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-5">
        {/* Left Column: Form (3/5 width) */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl bg-neutral-900/50 p-8 border border-white/5">
            <ContactForm />
          </div>
        </div>

        {/* Right Column: Info (2/5 width) */}
        <div className="flex flex-col gap-8 lg:col-span-2">
          {/* Quick Contact Grid */}
          <div className="grid grid-cols-1 gap-4">
            {contactOptions.map((option) => (
              <a
                key={option.label}
                href={option.href}
                target={option.external ? "_blank" : undefined}
                className="group flex items-center justify-between rounded-xl border border-white/10 p-5 transition-all hover:bg-white/5 hover:border-primary/50"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    <option.Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-500">{option.label}</p>
                    <p className="font-medium text-white">{option.detail}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Business Details */}
          <div className="space-y-6 rounded-xl bg-white/5 p-6 text-sm">
            <div className="flex gap-4">
              <MapPin className="text-primary shrink-0" size={18} />
              <div>
                <p className="font-semibold text-white">Address</p>
                <p className="text-neutral-400">{SITE.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock4 className="text-primary shrink-0" size={18} />
              <div>
                <p className="font-semibold text-white">Hours</p>
                <p className="text-neutral-400">
                  {SITE.hours.map((h) => `${h.label}: ${h.value}`).join(" | ")}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Globe className="text-primary shrink-0" size={18} />
              <div>
                <p className="font-semibold text-white">Service Area</p>
                <p className="text-neutral-400 text-xs leading-relaxed uppercase tracking-tight">
                  Phoenix • Mesa • Tempe • Chandler • Glendale • Scottsdale
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=..." // Replace with valid embed URL
          className="h-80 w-full grayscale invert opacity-80 contrast-125"
          loading="lazy"
        />
      </div>
    </div>
  )
}