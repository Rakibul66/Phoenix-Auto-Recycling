import { Hero } from "@/components/home/Hero"
import { TrustGrid } from "@/components/home/TrustGrid"
import { ServicesPreview } from "@/components/home/ServicesPreview"
import { AreasServed } from "@/components/home/AreasServed"
import { SectionHeading } from "@/components/common/SectionHeading"
import { buildMetadata } from "@/lib/seo"
import { CTAButton } from "@/components/common/CTAButton"
import { SITE } from "@/lib/constants"
import { TrustHighlights } from "@/components/home/TrustHighlights"
import { KeywordScroller } from "@/components/home/KeywordScroller"
import { FaqGrid } from "@/components/home/FaqGrid"
import { VehicleTypes } from "@/components/home/VehicleTypes"
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel"
import { CallBanner } from "@/components/home/CallBanner"

export const metadata = buildMetadata({
  title: "Cash for Junk Cars in Phoenix & the East Valley | Phoenix Auto Recycling",
  description:
    "Phoenix Auto Recycling buys junk cars, catalytic converters, engines, transmissions, and scrap metal across Phoenix, Mesa, Tempe, Chandler, Glendale, Scottsdale, Gilbert, Peoria, and Avondale with same-day pickup and fast cash.",
  pathname: "",
})

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10">
      <Hero />
      <h2 className="sr-only" id="trust-highlights-heading">
        Trust highlights for Phoenix and Valley drivers
      </h2>
      <TrustHighlights />
      <h2 className="sr-only" id="keyword-scroller-heading">
        How Phoenix drivers search for junk car buyers
      </h2>
      <KeywordScroller />
      <h2 className="sr-only" id="testimonial-carousel-heading">
        Testimonials from Phoenix-area customers
      </h2>
      <TestimonialCarousel />
      <h2 className="sr-only" id="vehicle-types-heading">
        Vehicles we buy across Phoenix and nearby cities
      </h2>
      <VehicleTypes />
      <h2 className="sr-only" id="call-banner-heading">
        Call dispatch for Phoenix and East Valley pickups
      </h2>
      <CallBanner />
      <h2 className="sr-only" id="faq-heading">
        Frequently asked questions for Phoenix junk car pickups
      </h2>
      <FaqGrid />
      <h2 className="sr-only" id="trust-grid-heading">
        Why locals trust Phoenix Auto Recycling
      </h2>
      <TrustGrid />
      <h2 className="sr-only" id="services-preview-heading">
        Core services for Phoenix and East Valley drivers
      </h2>
      <div className="space-y-6">
        <ServicesPreview />
      </div>
      <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
        <CTAButton href="/quote" label="Schedule my pickup" />
      </div>
      <h2 className="sr-only" id="areas-served-heading">
        Phoenix Valley service area spotlight
      </h2>
      <AreasServed />
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#111827] p-6">
        <SectionHeading
          title="Ready for cash?"
          description="Call us in Phoenix or drop a quick message. We hustle so you don’t have to wait."
          align="center"
        />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <CTAButton href={SITE.phoneLink} label="Call dispatch" />
          <CTAButton href="/contact" label="Send a quick note" accent="ghost" />
        </div>
      </section>
    </div>
  )
}
