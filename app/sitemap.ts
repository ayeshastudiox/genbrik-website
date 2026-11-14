import type { MetadataRoute } from 'next'
import { siteConfig, siteUrl } from '@/lib/site'

/** Generated from the route list in spec §3.1. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return siteConfig.routes.map((route) => ({
    url: `${siteUrl}${route.path === '/' ? '' : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
