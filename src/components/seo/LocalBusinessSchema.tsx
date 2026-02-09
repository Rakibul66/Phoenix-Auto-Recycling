import { buildLocalBusinessSchema } from "@/lib/utils"

export const LocalBusinessSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalBusinessSchema()) }}
  />
)
