/**
 * Site-wide constants used by metadata, sitemap and robots.
 * The origin comes from NEXT_PUBLIC_SITE_URL so previews never claim to be
 * genbrik.com in canonical tags.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://genbrik.com').replace(/\/+$/, '')

export const contactEmail = 'info@genbrik.com'

export const siteConfig = {
  name: 'GENBRIK',
  url: siteUrl,
  email: contactEmail,
  tagline: 'Technology we build. Intelligence we engineer.',
  description:
    'GENBRIK is an AI-first technology company building intelligent systems, AI software, automation, robotics, chips and AI surveillance.',
  routes: [
    { path: '/', priority: 1, changeFrequency: 'monthly' as const },
    { path: '/future-tech', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/future-tech/ai-automation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/future-tech/web-software', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/industries', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' as const },
  ],
}
