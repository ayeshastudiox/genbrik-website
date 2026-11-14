import type { Metadata } from 'next'

/**
 * Per-page metadata helper (spec §5.4).
 *
 * The root layout defines the defaults; every page calls this so title,
 * description, canonical and Open Graph/Twitter cards are page-specific rather
 * than inherited from the home page.
 */
export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string
  description: string
  path: string
  absoluteTitle?: boolean
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: 'GENBRIK',
      locale: 'en_US',
      url: path,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
