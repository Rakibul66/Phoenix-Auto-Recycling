import { SectionHeading } from "@/components/common/SectionHeading"
import { QuoteForm } from "@/components/forms/QuoteForm"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Quote Request | Phoenix Auto Recycling",
  description:
    "Send vehicle year/make/model, location, and condition. Upload photos and receive instant cash offers from Phoenix Auto Recycling across Phoenix, Mesa, Tempe, Chandler, Glendale, Scottsdale, Gilbert, Peoria, and Avondale.",
  pathname: "quote",
})

export default function QuotePage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8">
      <SectionHeading
        title="Get a cash quote"
        description="Share the details once and we coordinate pickup, towing, and payment."
        align="center"
        level="h1"
      />
      <QuoteForm />
      <div className="rounded-3xl border border-white/10 bg-black/60 p-6 text-sm text-neutral-gray">
        <p>
          Prefer to talk to a human? Call (602) 555-0199. Provide your vehicle details and we’ll confirm same-day pickup
          windows. Spanish-speaking staff available on every shift.
        </p>
      </div>
    </div>
  )
}
