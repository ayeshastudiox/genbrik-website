import { cn } from '@/lib/utils'

/**
 * Layered atmosphere for dark scenes (spec §2.11.A): gradient field, perspective
 * grid receding to a vanishing point, engineering grid, two asymmetric
 * volumetric light sources, corner vignette and fine film grain.
 *
 * Purely decorative — no JS, no layout impact, all static paint.
 */
export function Atmosphere({
  tone = 'dark',
  grid = true,
  glow = true,
  perspective = false,
  className,
}: {
  tone?: 'dark' | 'light'
  grid?: boolean
  glow?: boolean
  perspective?: boolean
  className?: string
}) {
  const dark = tone === 'dark'

  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <div className={cn('absolute inset-0', dark ? 'surface-void' : 'surface-paper')} />

      {dark && perspective && <div className="perspective-grid" />}

      {grid && (
        <div className={cn('absolute inset-0', dark ? 'grid-field' : 'grid-field-light')} />
      )}

      {glow && dark && (
        <>
          {/* key light, behind the focal object but deliberately off-centre */}
          <div className="absolute left-[-14%] top-[-6%] h-[600px] w-[780px] rounded-full bg-[radial-gradient(closest-side,rgba(232,233,237,0.13),transparent_72%)] blur-[80px]" />
          {/* fill light, lower right, cooler and weaker */}
          <div className="absolute right-[-10%] top-[26%] h-[460px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(205,208,214,0.09),transparent_72%)] blur-[70px]" />
        </>
      )}

      {glow && !dark && (
        <div className="absolute left-1/2 top-[-30%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.9),transparent)] blur-2xl" />
      )}

      <div
        className={cn(
          'absolute inset-0',
          dark
            ? 'vignette'
            : 'bg-[radial-gradient(120%_100%_at_50%_35%,transparent_52%,rgba(0,0,0,0.05)_100%)]',
        )}
      />

      <div className="grain absolute inset-0" />
    </div>
  )
}
