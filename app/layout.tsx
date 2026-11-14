import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import type { ReactNode } from 'react'
import { SiteFooter } from '@/components/footer'
import { CursorGlow } from '@/components/cursor-glow'
import { RouteProgress } from '@/components/route-progress'
import { SiteNav } from '@/components/site-nav'
import { ensureSuppliedAssets } from '@/lib/setup-assets'
import { siteConfig, siteUrl } from '@/lib/site'
import './globals.css'

/**
 * Archivo is self-hosted through next/font (no render-blocking request).
 * General Sans is served by Fontshare; the <link> below is the only external
 * stylesheet, preconnected so the display face does not block first paint.
 * Swap it for next/font/local once the licensed .woff2 files are in the repo.
 */
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-archivo',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'sans-serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'GENBRIK — Technology we build. Operations we run.',
    template: '%s | GENBRIK',
  },
  description: siteConfig.description,
  applicationName: 'GENBRIK',
  authors: [{ name: 'GENBRIK' }],
  creator: 'GENBRIK',
  publisher: 'GENBRIK',
  category: 'technology',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'GENBRIK',
    title: 'GENBRIK — Technology we build. Operations we run.',
    description: siteConfig.description,
    url: '/',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GENBRIK — Technology we build. Operations we run.',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#0A0A0C',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  // Copies the two supplied images into /public on first render (no-op when the
  // sources are unavailable). See lib/setup-assets.ts.
  await ensureSuppliedAssets()

  return (
    <html lang="en" className={archivo.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600&display=swap"
        />
      </head>
      <body className="bg-ink font-sans text-silver antialiased">
        {/* Scroll reveals start at opacity 0; this keeps content visible without JS. */}
        <noscript>
          <style>{'[data-reveal]{opacity:1 !important}'}</style>
        </noscript>

        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <RouteProgress />
        <CursorGlow />
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
