# GENBRIK — official website

Next.js (App Router) + TypeScript + Tailwind CSS implementation of the GENBRIK
website: an AI-first technology company with two divisions, one brand, one
codebase.

- **AI & Future Tech** — generative AI, AI agents, intelligent automation,
  software, web, robotics, AGI and emerging technology.
- **BPO & Professional Services** — medical billing, DME, Medicare/insurance
  support, healthcare staffing, auto insurance, real estate, finance,
  e-commerce, general outsourcing, final expense admin support.

### Supplied assets

Both supplied images are committed in the project and served as-is:

| File | Used by |
|---|---|
| `public/brand/genbrik-logo.png` | `components/logo.tsx` — nav, mobile overlay, footer |
| `public/images/ceo-akash-gill.jpg` | `components/leadership.tsx` — home + about |

They were copied byte-for-byte from the supplied files (transparent logo
588×600, portrait 1254×1254), not re-encoded or redrawn.

The logo is rendered directly with no plate or background. On dark surfaces it
is inverted to platinum so the black artwork stays visible; the footer (paper)
shows the original colours.

`lib/setup-assets.ts` is a one-time bootstrap that copies the two originals in
from the desktop attachment cache on first render. It is a no-op once the files
exist and can be deleted (together with its call in `app/layout.tsx`).

---

## 1. Requirements

| Requirement | Version |
|---|---|
| Node.js | 20 LTS or newer (Next 15 needs 18.18+) |
| npm | 10+ |
| Network access on first build | Required — `next/font` downloads Archivo once |

---

## 2. Install

```bash
npm install
```

No additional packages beyond the stack in the specification are required.

---

## 3. Environment variables

Copy the example file and fill it in:

```bash
# macOS / Linux
cp .env.example .env.local

# Windows (PowerShell)
Copy-Item .env.example .env.local
```

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Yes for production | Resend API key used by `POST /api/contact` |
| `CONTACT_TO_EMAIL` | Yes | Destination inbox. Default `info@genbrik.com` |
| `CONTACT_FROM_EMAIL` | Yes for production | Verified sender. Defaults to Resend's test sender |
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical origin for metadata, sitemap, robots |
| `CONTACT_RATE_LIMIT_MAX` | No | Requests per IP per 10 minutes (default `5`) |

Never commit `.env.local`. On Vercel, add the same keys under
**Project → Settings → Environment Variables**.

### Resend setup

1. Create a Resend account and verify the `genbrik.com` domain (DNS records).
2. Set `CONTACT_FROM_EMAIL="GENBRIK Website <website@genbrik.com>"`.
3. Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL=info@genbrik.com`.
4. Until the domain is verified, use `onboarding@resend.dev` as the sender — it
   only delivers to the Resend account owner's address, which is enough for
   staging tests.

In development, if `RESEND_API_KEY` is empty the API validates the submission,
logs it to the server console and returns success, so the full form flow
(success state included) can be tested before email is connected. In production
the route returns `not_configured` instead of pretending to send.

---

## 4. Run locally

```bash
npm run dev
```

Open **http://localhost:3000**. The dev server uses port 3000 unless it is
already taken, in which case Next prints the port it chose.

```bash
npm run build   # production build (also type-checks)
npm start       # serve the production build on http://localhost:3000
npm run typecheck
```

---

## 5. Manual test checklist

### Navigation
- [ ] Sticky nav stays glassy over both dark and light pages.
- [ ] `Future Tech` and `BPO & Professional Services` open the mega-menu on
      hover **and** on click; `Esc` closes; clicking outside closes.
- [ ] Tab through the mega-menu: every link is reachable and focus is visible.
- [ ] Active route shows an underline (no colour change).
- [ ] At < 1024px the hamburger opens the full-screen overlay, the divisions
      expand as accordions, body scroll is locked, `Esc` and the close button
      both dismiss it, and focus returns to the hamburger.

### Pages
- [ ] `/` hero: move the mouse — the metallic sweep follows the cursor on
      desktop; on touch the sweep drifts slowly.
- [ ] `/future-tech` — four capability cards + the dimmer
      **Research & Exploration** block with no primary CTAs.
- [ ] `/future-tech/ai-automation` — the node graph animates, nodes highlight on
      hover, caption says it is illustrative.
- [ ] `/future-tech/web-software` — light, conventional service menu with
      “What’s included” lists.
- [ ] `/bpo` — sticky in-page index on desktop, all ten categories, Final
      Expense scope callout.
- [ ] `/bpo/healthcare` — accordion by category, compliance panel shows
      `[CONFIRM: ...]` placeholders (no certification claims).
- [ ] `/industries` — rows + division badges.
- [ ] `/privacy`, `/terms` — draft banner, `noindex`.

### Contact form (`/contact`)
- [ ] Submit empty → inline errors on name, email, message, division.
- [ ] Bad email → “Enter a valid email address.”
- [ ] Message under 20 characters → inline error.
- [ ] Valid submit → success panel, heading focused, “what happens next”.
- [ ] With no `RESEND_API_KEY` in dev → success + submission printed in the
      dev-server console.
- [ ] Fill the hidden `website` field via devtools → API returns `{ ok: true }`
      and sends nothing (bot trap).
- [ ] Submit six times quickly → `429` and the rate-limit message.
- [ ] `curl` the API directly with an invalid body → `422` `validation`.

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test\",\"email\":\"test@example.com\",\"message\":\"short\",\"division\":\"future-tech\",\"company\":\"\",\"phone\":\"\",\"website\":\"\"}"
```

### Responsive
- [ ] 375px, 768px, 1024px, 1440px widths: no horizontal scroll, hero type
      scales, grids collapse to one column.
- [ ] Long menu labels do not overflow the mega-menu.

### Accessibility & motion
- [ ] Tab from the top: “Skip to content” appears and jumps to `#main`.
- [ ] Every interactive element shows a visible focus ring.
- [ ] OS “reduce motion” enabled: no cursor-follow sweep, no entrance
      choreography, no route bar, no pulsing nodes; content stays visible.
- [ ] One `<h1>` per page; headings descend in order.
- [ ] Lighthouse: Performance ≥ 90 on `/`, `/bpo`, `/contact` (production build,
      mobile preset).

### SEO
- [ ] `/sitemap.xml` lists the nine public routes.
- [ ] `/robots.txt` allows crawling and disallows `/api/`.
- [ ] Each page has a unique `<title>`, description, canonical and OG tags.
- [ ] `/opengraph-image` renders the 1200×630 card.

---

## 6. Project structure

```
app/
  layout.tsx                      global shell, fonts, metadata defaults
  page.tsx                        Home
  about/page.tsx
  future-tech/page.tsx
  future-tech/ai-automation/page.tsx
  future-tech/web-software/page.tsx
  bpo/page.tsx
  bpo/healthcare/page.tsx
  industries/page.tsx
  contact/page.tsx
  privacy/page.tsx                placeholder, flagged for legal review
  terms/page.tsx                  placeholder, flagged for legal review
  api/contact/route.ts            validation, honeypot, rate limit, Resend
  sitemap.ts  robots.ts  not-found.tsx  icon.svg  opengraph-image.tsx
  globals.css                     tokens, glass, metal sweep, reduced motion
components/
  site-nav.tsx                    sticky glass nav + mega menus + mobile overlay
  footer.tsx                      four columns
  logo.tsx                        official mark, light + inverse variants
  icon.tsx
  atmosphere.tsx                  field + perspective grid + vignette + grain + lights
  page-hero.tsx                   shared interior-page hero (dark / light)
  hero-core.tsx                   banded chrome core, tilt, fragments
  interface-fragments.tsx         node / status / division glass fragments
  ops-dashboard.tsx               illustrative BPO interface panels
  cursor-glow.tsx                 pointer bloom on dark heroes only
  metal-sweep.tsx                 cursor-reactive specular metal
  spotlight.tsx                   pointer-following glass highlight
  marquee.tsx                     CSS service marquee
  service-showcase.tsx            interactive service index + live preview
  node-field.tsx                  scroll- and pointer-reactive node mesh
  agent-graph.tsx                 illustrative agent workflow diagram
  process-steps.tsx  industry-grid.tsx  route-progress.tsx  contact-form.tsx
  ui/  accordion, badge, button, container, metal-rule, placeholder, reveal, section
lib/
  content.ts                      all service/industry copy and nav data
  validation.ts                   shared Zod schema (client + server)
  email.ts                        Resend client + plain-text template
  rate-limit.ts                   in-memory limiter
  seo.ts                          per-page metadata helper
  site.ts                         site constants + route list
  utils.ts
public/brand/                     genbrik-logo.svg, genbrik-logo-inverse.svg
```

---

## 7. Content placeholders

Everything unconfirmed uses the exact `[CONFIRM: ...]` format from the
specification. Search the codebase for `[CONFIRM:` to find all of them.

| Placeholder | Where |
|---|---|
| Legal entity, registration, founded, headcount, regions | `lib/content.ts` → `companyFacts`, shown on `/about` |
| Team / leadership bios | `/about` |
| HIPAA status, SOC 2 / ISO, billing-staff licensing, data residency | `/bpo/healthcare` |
| Final Expense exact scope and licensing | `/bpo#final-expense` |
| Data-processing terms and AI compliance | `/future-tech/ai-automation` |
| Research collaboration / press contact | `/future-tech#direction` |
| Client references / case studies | `/industries` |
| Legal review, governing law, effective dates | `/privacy`, `/terms` |

Contact phone, physical address, business hours and social handles are
intentionally absent: they remain unpublished pending confirmation. The only
published contact channel is `info@genbrik.com`.

Deliberately **not** on the site: invented clients, logos, testimonials, case
studies, certifications, office locations, founding dates, headcount, or any
claim that robotics/AGI/emerging-tech work is commercially available.

---

## 8. Before go-live

1. Replace every `[CONFIRM: ...]` with confirmed content.
2. Have `/privacy` and `/terms` reviewed, then remove their `noindex`.
3. Add Cloudflare Turnstile (or hCaptcha) to the contact form alongside the
   honeypot — the API route is the server-side place to verify the token.
4. Replace the in-memory rate limiter if traffic grows (it is per-instance on
   serverless).
5. Drop the real logo into `public/brand/` and swap it inside
   `components/logo.tsx`.
6. Move General Sans to `next/font/local` once licensed `.woff2` files are in
   the repo (it currently loads from Fontshare).
7. Deploy to Vercel, add `genbrik.com` in project settings, point DNS at Vercel
   — SSL is issued automatically.

---

## 9. Design direction

**Dark chrome, engineered light.** The palette is unchanged from the master
spec; the material language is new. Three rules drive every page:

1. **One metal, two tempers.** Future Tech is a dark instrument field — chrome
   core, node mesh, glass readouts, asymmetric splits. BPO is a platinum ledger
   — structured rows, tabular rhythm, paper surfaces on ink. Same type, same
   palette, different temperature.
2. **Depth over decoration.** Every section is built from layers: gradient
   field → engineering grid → light pool → grain → content. Large surfaces use
   18–32px radii and a 1px top light so panels read as physical glass rather
   than coloured boxes. No drop shadows under every card.
3. **Motion shows material, not activity.** A slow orbital rotation over the
   chrome core, a specular band that follows the cursor, a pointer-tracked
   glass highlight on panels, one choreographed entrance per page, and a single
   scroll fade. Everything is transform/opacity; the grid, grain and glows are
   static CSS.

### Surfaces in `app/globals.css`

| Class | Use |
|---|---|
| `surface-void` / `surface-ink` / `surface-paper` | section fields |
| `perspective-grid` | grid plane receding to a vanishing point (heroes) |
| `vignette` | corner falloff on dark scenes |
| `grid-field` / `grid-field-light` | engineering grid, masked at the edges |
| `grain` | 2% film grain over dark and light fields |
| `panel` / `panel-light` / `panel-glass` / `panel-glass-light` | glass and metal surfaces |
| `fragment` | floating hero interface panel |
| `chrome-text` / `chrome-sphere` / `sphere-bands` / `chrome-rim` / `chrome-ring` / `chrome-arc` | chrome material |
| `metal-line` | animated line under the nav on scroll |
| `chip`, `link-underline`, `marquee` | small UI details |

Tokens live in `tailwind.config.ts` and are mirrored as CSS variables. Components
consume theme values, never raw hex codes.

- `--ink`, `--void`, `--graphite`, `--steel`, `--silver`, `--platinum` for dark.
- `--paper`, `--slate`, `--slate-muted` for light.
- General Sans for display, Archivo for body/UI.
- The metal sweep appears only in the home hero, the Future Tech hero, the
  primary button hover state and major section dividers.
- Glass is used for the nav, the floating hero fragments, the contact form and
  hovered panels.
- Every animation is disabled or reduced under `prefers-reduced-motion`, in CSS
  globally and in JS via `useReducedMotion()`.

### v1.2 fidelity pass

The addendum in the master specification (§2.11) is implemented as:

- **Logo** — the real mark (dot, bar, lowercase wordmark) replaces the text
  placeholder, in light and inverse variants, with the component API unchanged.
- **Atmosphere** — every dark hero carries a perspective grid, vignette, 2%
  grain and two asymmetric volumetric lights.
- **Hero object** — banded brushed-metal shading, a rim light, cursor tilt plus
  parallax, continuous idle band rotation and varied glowing orbit particles.
- **Fragments** — three floating interface panels on Home (agent flow, billing
  queue, division index) and one on Future Tech; each shows real category
  content and is labelled as an example.
- **Future Tech** — scroll- and pointer-reactive node field behind the section
  headers on the overview and AI pages.
- **BPO** — an illustrative glass dashboard beside the four healthcare
  categories on `/bpo`, and inside each healthcare accordion panel.
- **Contact** — the form is a single elevated glass panel with a metal edge and
  animated success/error states.
- **Global** — a thin animated metal line under the nav on scroll, and a cursor
  glow that only appears over dark heroes.

Deliberately absent, per §2.11.E: fabricated counters, ALL-CAPS eyebrows, arrow
glyphs in buttons, "trusted by" logo rows, and repeated identical
card-plus-shadow treatments.
