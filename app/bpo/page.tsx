import { redirect } from 'next/navigation'

/**
 * Legacy URL. GENBRIK now operates exclusively as an AI, technology, robotics
 * and future-technology company, so the former route redirects to the
 * technology overview.
 */
export default function LegacyServicesRedirect() {
  redirect('/future-tech')
}
