import { SITE } from "@/lib/constants"

export default function sitemap() {
  const routes = ["", "services", "how-it-works", "about", "contact", "quote", "es"]
  const now = new Date().toISOString()

  return routes.map((route) => ({
    url: `${SITE.url}/${route}`.replace(/\/+$/, ""),
    lastModified: now,
  }))
}
