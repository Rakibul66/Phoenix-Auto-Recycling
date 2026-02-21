import { SITE } from "./constants"

export const buildPhoneLink = (phone: string) =>
  `tel:${phone.replace(/[^+\d]/g, "")}`

export const buildLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    postalCode: SITE.zip,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.4467,
    longitude: -112.0760,
  },
  openingHoursSpecification: SITE.hours.flatMap((item) => {
    const hasRange = item.value.includes("-")
    if (!hasRange) return []
    const [opens, closes] = item.value.split("-").map((value) => value.trim())
    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: item.label,
        opens,
        closes,
      },
    ]
  }),
  sameAs: [
    "https://www.google.com/maps/place/Phoenix+Auto+Recycling",
    "https://www.facebook.com/phoenixautorecycling",
  ],
})
