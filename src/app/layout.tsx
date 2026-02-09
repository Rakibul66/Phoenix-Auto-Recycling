import { Metadata } from "next"
import { Navbar } from "@/components/common/Navbar"
import { Footer } from "@/components/common/Footer"
import { StickyCallButton } from "@/components/common/StickyCallButton"
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema"
import { baseMetadata } from "@/lib/seo"
import "@/styles/globals.css"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-XXXXXXXXXX"

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="placeholder" />
      </head>
      <body className="bg-rich-black text-white font-sans" suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 px-4 py-10">
            {children}
          </main>
          <Footer />
          <StickyCallButton />
          <LocalBusinessSchema />
        </div>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { send_page_view: false });
          `,
          }}
        />
      </body>
    </html>
  )
}
