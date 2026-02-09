import type { Metadata } from "next"
import { SITE } from "./constants"

const defaultDescription =
  "Phoenix Auto Recycling turns junk cars, catalytic converters, and scrap metal into fast cash, serving Phoenix, Mesa, Tempe, Chandler, Glendale, Scottsdale, and the surrounding East Valley with same-day pickup."

const defaultTitle = "Cash for Junk Cars in Phoenix & the East Valley | Phoenix Auto Recycling"

const sharedOpenGraph = {
  siteName: SITE.name,
  locale: "en_US",
  type: "website",
  url: SITE.url,
  images: [
    {
      url: `${SITE.url}/hero-pattern.svg`,
      width: 1200,
      height: 630,
      alt: "Phoenix Auto Recycling hero surface",
    },
  ],
}

const sharedTwitter = {
  card: "summary_large_image",
  creator: "@phoenixautorecycling",
}

const robotsConfig = {
  index: true,
  follow: true,
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    ...sharedOpenGraph,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    ...sharedTwitter,
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: robotsConfig,
}

export const buildMetadata = (options: {
  title: string
  description?: string
  pathname?: string
}): Metadata => {
  const description = options.description ?? defaultDescription
  const cleanPath = options.pathname
    ? options.pathname.replace(/^\/+|\/+$/g, "")
    : ""
  const url = cleanPath ? `${SITE.url}/${cleanPath}` : SITE.url

  return {
    metadataBase: baseMetadata.metadataBase,
    title: options.title,
    description,
    openGraph: {
      ...sharedOpenGraph,
      title: options.title,
      description,
      url,
      images: sharedOpenGraph.images ?? [],
    },
    twitter: {
      ...sharedTwitter,
      title: options.title,
      description,
    },
    robots: robotsConfig,
  }
}
