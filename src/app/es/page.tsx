import { SectionHeading } from "@/components/common/SectionHeading"
import { CTAButton } from "@/components/common/CTAButton"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Compra de autos chocados en Phoenix | Phoenix Auto Recycling",
  description:
    "Pagamos en efectivo por autos chatarra, convertidores catalíticos y metales en Phoenix y las ciudades cercanas de Mesa, Tempe, Chandler, Glendale, Scottsdale, Gilbert, Peoria y Avondale. Atención rápida en español.",
  pathname: "es",
})

export default function SpanishHomePage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-white/10 bg-black/60 p-6">
      <SectionHeading
        title="Compra autos, convertidores y metales en Phoenix"
        description="Rápido, honesto y bilingüe. Agenda retiro el mismo día y recibe pago en efectivo."
        align="center"
        level="h1"
      />
      <p className="text-sm text-neutral-gray">
        Atendemos a la comunidad hispana con atención directa, presupuestos instantáneos y logística de retiro en toda el área metropolitana.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <CTAButton href="/contact" label="Contáctanos" accent="ghost" />
        <CTAButton href="/quote" label="Solicitar cotización" />
      </div>
    </div>
  )
}
