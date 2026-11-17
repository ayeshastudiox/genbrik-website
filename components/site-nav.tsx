'use client'

import { ChevronDown, Menu as MenuIcon, Plus, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import type { FocusEvent } from 'react'
import { Logo } from '@/components/logo'
import { Container } from '@/components/ui/container'
import { navMenus } from '@/lib/content'
import { cn } from '@/lib/utils'

type MenuKey = keyof typeof navMenus

const primaryLinks = [
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
]

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

/**
 * Navigation (spec §3.2, refined).
 *
 * A floating glass capsule inside a sticky transparent header. Each division
 * opens a centred glass panel with two link columns and a consultation rail.
 * Mobile is a full-screen overlay with expandable divisions, scroll lock, focus
 * trap and focus restore. Active routes use a dot, never a colour swap.
 */
export function SiteNav() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null)
  const [scrolled, setScrolled] = useState(false)

  const headerRef = useRef<HTMLElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 6)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!openMenu) return
    const handlePointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [openMenu])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpenMenu(null)
      setMobileOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null
    closeButtonRef.current?.focus()
    return () => previous?.focus()
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const overlay = overlayRef.current
    if (!overlay) return

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const focusable = overlay.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [mobileOpen])

  // If the viewport grows past the overlay breakpoint mid-session, dismiss the
  // overlay so the body scroll lock is always released.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const handleChange = () => {
      if (query.matches) setMobileOpen(false)
    }
    handleChange()
    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  const navLinkClass = (active: boolean) =>
    cn(
      'relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-300',
      active ? 'text-platinum' : 'text-silver/65 hover:text-platinum',
    )

  const handleHeaderBlur = (event: FocusEvent<HTMLElement>) => {
    const next = event.relatedTarget as Node | null
    if (!next || !event.currentTarget.contains(next)) setOpenMenu(null)
  }

  return (
    <>
      <header
        ref={headerRef}
        onBlur={handleHeaderBlur}
        onMouseLeave={() => {
          if (!headerRef.current?.contains(document.activeElement)) setOpenMenu(null)
        }}
        className="sticky top-0 z-50"
      >
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500',
            scrolled ? 'opacity-100' : 'opacity-0',
          )}
          style={{
            background:
              'linear-gradient(180deg, rgba(8,8,10,0.92) 0%, rgba(8,8,10,0.55) 55%, rgba(8,8,10,0) 100%)',
          }}
        />

        <Container className="relative pt-[calc(0.75rem_+_env(safe-area-inset-top))] md:pt-4">
          <div
            className={cn(
              'nav-glass relative flex items-center justify-between gap-4 rounded-full border border-white/[0.09] px-3 transition-[height,box-shadow] duration-500 ease-out-expo',
              scrolled
                ? 'h-[58px] shadow-[0_26px_60px_-34px_rgba(0,0,0,1)]'
                : 'h-[66px] shadow-[0_20px_50px_-36px_rgba(0,0,0,0.95)]',
            )}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)]"
            />
            <div
              aria-hidden
              className={cn(
                'pointer-events-none absolute inset-x-10 bottom-0 h-px overflow-hidden transition-opacity duration-500',
                scrolled ? 'opacity-100' : 'opacity-0',
              )}
            >
              <div className="metal-line h-px w-full" />
            </div>

            <Logo className="ml-1" />

            <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
              {(Object.keys(navMenus) as MenuKey[]).map((key) => {
                const menu = navMenus[key]
                const active = isActive(pathname, menu.href)
                const expanded = openMenu === key
                return (
                  <button
                    key={key}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`menu-${key}`}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(expanded ? null : key)}
                    onMouseEnter={() => setOpenMenu(key)}
                    className={cn(navLinkClass(active || expanded), 'inline-flex items-center gap-1.5')}
                  >
                    {menu.label}
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        'h-3 w-3 opacity-60 transition-transform duration-300',
                        expanded && 'rotate-180',
                      )}
                    />
                    {active && (
                      <span
                        aria-hidden
                        className="absolute bottom-0.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-platinum"
                      />
                    )}
                  </button>
                )
              })}

              {primaryLinks.map((link) => {
                const active = isActive(pathname, link.href)
                return (
                  <Link key={link.href} href={link.href} className={navLinkClass(active)}>
                    {link.label}
                    {active && (
                      <span
                        aria-hidden
                        className="absolute bottom-0.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-platinum"
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="hidden h-9 items-center rounded-btn bg-platinum px-4 text-[12px] font-medium text-ink shadow-[0_10px_30px_-16px_rgba(232,233,237,0.6)] transition-colors hover:bg-white md:inline-flex"
              >
                Request a Consultation
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileSection(null)
                  setMobileOpen(true)
                }}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                aria-label="Open menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-platinum transition-colors hover:border-white/30 hover:bg-white/[0.05] lg:hidden"
              >
                <MenuIcon aria-hidden className="h-4 w-4" strokeWidth={1.6} />
              </button>
            </div>
          </div>
        </Container>

        {openMenu && (
          <div className="absolute inset-x-0 top-full z-10 hidden px-4 pt-2 lg:block">
            <div
              id={`menu-${openMenu}`}
              role="region"
              aria-label={`${navMenus[openMenu].label} menu`}
              className="relative mx-auto w-full max-w-[1100px] animate-menu-in overflow-hidden rounded-panel border border-white/[0.12] bg-[#0A0A0D] shadow-[0_60px_120px_-40px_rgba(0,0,0,1)]"
            >
              {/* Opaque graphite base + glass highlight: readable over paper and ink alike. */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),transparent_38%)]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)]"
              />

              <div className="relative grid grid-cols-12">
                <div className="col-span-8 grid grid-cols-2 gap-x-10 p-7">
                  {navMenus[openMenu].columns.map((column) => (
                    <div key={column.title}>
                      <p className="text-[10.5px] text-silver/55">{column.title}</p>
                      <ul className="mt-3.5 space-y-1">
                        {column.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setOpenMenu(null)}
                              className="group block rounded-lg px-2 py-2 transition-colors hover:bg-white/[0.07]"
                            >
                              <span className="flex items-center gap-2 text-[13px] leading-snug text-platinum/90 transition-colors group-hover:text-platinum">
                                <span
                                  aria-hidden
                                  className="h-px w-0 bg-platinum/60 transition-all duration-300 group-hover:w-3"
                                />
                                {item.name}
                              </span>
                              <span className="mt-0.5 block text-[11.5px] leading-snug text-silver/60">
                                {item.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="col-span-4 border-l border-white/10 bg-white/[0.03] p-6">
                  <span className="chip">
                    <span aria-hidden className="dot bg-platinum/70" />
                    {openMenu === 'future-tech' ? 'AI-first engineering' : 'Operations partner'}
                  </span>
                  <p className="mt-4 max-w-[26ch] text-[12.5px] leading-relaxed text-silver/70">
                    Not sure which division you need? A short call is usually enough to work it out.
                  </p>
                  <Link
                    href="/contact"
                    onClick={() => setOpenMenu(null)}
                    className="mt-5 inline-flex h-9 items-center rounded-btn bg-platinum px-4 text-[12px] font-medium text-ink transition-colors hover:bg-white"
                  >
                    Request a Consultation
                  </Link>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <Link
                      href={navMenus[openMenu].footer.href}
                      onClick={() => setOpenMenu(null)}
                      className="inline-flex items-center gap-2 text-[12px] text-silver/70 transition-colors hover:text-platinum"
                    >
                      <span aria-hidden className="dot bg-silver/50" />
                      {navMenus[openMenu].footer.label}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between border-t border-white/10 px-7 py-3 text-[10.5px] text-silver/50">
                <span>{navMenus[openMenu].label}</span>
                <span>
                  {openMenu === 'future-tech'
                    ? 'AI · agents · software · chips · robotics · surveillance'
                    : 'Healthcare · insurance · real estate · back office'}
                </span>
              </div>
            </div>
          </div>
        )}
      </header>

      {mobileOpen && (
        <div
          id="mobile-nav"
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex animate-menu-in flex-col overflow-hidden overscroll-contain bg-ink lg:hidden"
        >
          <div className="surface-void pointer-events-none absolute inset-0" aria-hidden />
          <div
            aria-hidden
            className="chrome-arc pointer-events-none absolute -right-32 top-10 h-72 w-72 opacity-20"
          />

          <div className="relative flex h-[calc(78px_+_env(safe-area-inset-top))] shrink-0 items-center justify-between px-5 pt-[env(safe-area-inset-top)]">
            <Logo />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-platinum"
            >
              <X aria-hidden className="h-4 w-4" strokeWidth={1.6} />
            </button>
          </div>

          <div className="dark-scroll relative flex-1 overflow-y-auto px-5 pb-[calc(2.5rem_+_env(safe-area-inset-bottom))]">
            {(Object.keys(navMenus) as MenuKey[]).map((key) => {
              const menu = navMenus[key]
              const expanded = mobileSection === key
              const active = isActive(pathname, menu.href)
              const items = menu.columns.flatMap((column) => column.items)
              return (
                <div key={key} className="border-b border-white/[0.07]">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`mobile-${key}`}
                    onClick={() => setMobileSection(expanded ? null : key)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left"
                  >
                    <span className="flex items-center gap-2.5 font-display text-[18px] font-medium text-platinum">
                      {menu.label}
                      {active && (
                        <span
                          aria-hidden
                          className="h-1 w-1 rounded-full bg-platinum/70"
                        />
                      )}
                    </span>
                    <Plus
                      aria-hidden
                      className={cn(
                        'h-4 w-4 shrink-0 text-silver/55 transition-transform duration-300',
                        expanded && 'rotate-45',
                      )}
                    />
                  </button>
                  {expanded && (
                    <ul id={`mobile-${key}`} className="animate-fade-in pb-5">
                      {items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex min-h-11 items-center py-1.5 text-[14px] leading-snug text-silver/65 transition-colors hover:text-platinum"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li className="pt-2">
                        <Link
                          href={menu.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex min-h-11 items-center text-[12.5px] text-platinum/90 underline decoration-white/20 underline-offset-4"
                        >
                          {menu.footer.label}
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              )
            })}

            <nav aria-label="Company" className="mt-6 space-y-1">
              {primaryLinks.map((link) => {
                const active = isActive(pathname, link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex min-h-11 items-center font-display text-[16px]',
                      active ? 'text-platinum' : 'text-silver/85',
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-btn bg-platinum text-[13.5px] font-medium text-ink"
            >
              Request a Consultation
            </Link>

            <p className="mt-6 text-[12.5px] text-silver/45">
              Or email{' '}
              <a
                href="mailto:info@genbrik.com"
                className="text-silver/75 underline decoration-white/20 underline-offset-4"
              >
                info@genbrik.com
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
