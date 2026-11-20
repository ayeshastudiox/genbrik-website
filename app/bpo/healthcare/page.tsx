import { redirect } from 'next/navigation'

/**
 * Legacy URL. Redirects to the AI & automation technology page.
 */
export default function LegacyServicesRedirect() {
  redirect('/future-tech/ai-automation')
}
