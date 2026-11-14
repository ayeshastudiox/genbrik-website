'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * GENBRIK logo (spec §2.4).
 *
 * Renders the supplied transparent artwork at `/public/brand/genbrik-logo.png`
 * directly — no plate, no box, no background, no blend. The image is cropped to
 * the artwork's band by the wrapper, so the transparent margin never affects
 * layout, while proportions, lettering, icon and spacing stay exactly as
 * supplied.
 *
 * On dark surfaces the black artwork is inverted to platinum so it stays
 * visible; the footer (paper) uses the original colours.
 *
 * A vector fallback renders only if the file is unavailable.
 */

type Tone = 'light' | 'dark'

const COLORS: Record<Tone, { mark: string; dot: string }> = {
  light: { mark: '#E8E9ED', dot: '#A8ABB2' },
  dark: { mark: '#141416', dot: '#6F7074' },
}

/** Vector fallback — same geometry, used only when the file is unavailable. */
function LogoFallback({ tone, className }: { tone: Tone; className?: string }) {
  const { mark, dot } = COLORS[tone]

  return (
    <svg
      viewBox="0 0 920 220"
      role="presentation"
      aria-hidden
      className={cn('h-[32px] w-auto md:h-[36px]', className)}
    >
      <circle cx="44" cy="110" r="26" fill={dot} />
      <path d="M60 172 L128 58" stroke={mark} strokeWidth="40" strokeLinecap="round" fill="none" />
      <g
        transform="translate(230,0)"
        fill="none"
        stroke={mark}
        strokeWidth="26"
        strokeLinecap="butt"
        strokeLinejoin="round"
      >
        <g>
          <circle cx="50" cy="110" r="37" />
          <path d="M87 110 V172 Q87 194 62 194 Q42 194 33 181" />
        </g>
        <g transform="translate(114,0)">
          <path d="M87 110 A37 37 0 1 0 78.4 133.8" />
          <path d="M13 110 H87" />
        </g>
        <g transform="translate(228,0)">
          <path d="M13 160 V110 A37 37 0 0 1 87 110 V160" />
        </g>
        <g transform="translate(342,0)">
          <path d="M13 40 V160" />
          <circle cx="63" cy="110" r="37" />
        </g>
        <g transform="translate(456,0)">
          <path d="M13 60 V160" />
          <path d="M13 100 Q13 73 45 73 Q54 73 60 77" />
        </g>
        <g transform="translate(536,0)">
          <path d="M13 60 V160" />
          <circle cx="13" cy="44" r="12" fill={mark} stroke="none" />
        </g>
        <g transform="translate(574,0)">
          <path d="M13 40 V160" />
          <path d="M13 112 L70 60" />
          <path d="M40 87 L78 160" />
        </g>
      </g>
    </svg>
  )
}

export function Logo({
  className,
  tone = 'light',
}: {
  className?: string
  tone?: Tone
}) {
  const [failed, setFailed] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)

  // Catch a 404 that resolves before React attaches onError.
  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [])

  return (
    <Link
      href="/"
      aria-label="GENBRIK — home"
      className={cn(
        'inline-flex shrink-0 items-center rounded-sm transition-opacity duration-300 hover:opacity-85',
        className,
      )}
    >
      {failed ? (
        <LogoFallback tone={tone} />
      ) : (
        <span className="relative block h-[44px] w-[150px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src="/brand/genbrik-logo.png?v=1"
            alt=""
            width={588}
            height={600}
            onError={() => setFailed(true)}
            className={cn('h-full w-full object-cover', tone === 'light' && 'invert')}
            style={{ objectPosition: '50% 48%', transform: 'translateX(-14px)' }}
          />
        </span>
      )}
    </Link>
  )
}
