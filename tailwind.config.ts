import type { Config } from 'tailwindcss'

/**
 * Design tokens (spec §2.2–2.3) + the v2 material layer.
 *
 * The palette is unchanged: black, ink, graphite, steel, silver, platinum,
 * paper. What is new is the surface language — chrome, glass, grid, grain —
 * which lives in app/globals.css and is shared by every page.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0C',
        void: '#050506',
        graphite: '#18181B',
        steel: '#2B2C30',
        silver: '#CDD0D6',
        platinum: '#E8E9ED',
        paper: '#F4F4F5',
        slate: {
          DEFAULT: '#19191C',
          muted: '#5B5C63',
        },
        hairline: 'rgba(255, 255, 255, 0.08)',
        'hairline-light': 'rgba(0, 0, 0, 0.08)',
        // Functional only — form validation, never decoration.
        danger: '#9B2C2C',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-archivo)', 'Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.15rem, 5.6vw, 5rem)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        h1: ['clamp(2rem, 3.9vw, 3rem)', { lineHeight: '1.06', letterSpacing: '-0.028em' }],
        h2: ['clamp(1.65rem, 2.7vw, 2.35rem)', { lineHeight: '1.1', letterSpacing: '-0.024em' }],
        h3: ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.016em' }],
        body: ['1.0625rem', { lineHeight: '1.65' }],
        small: ['0.875rem', { lineHeight: '1.55' }],
        micro: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
      },
      maxWidth: {
        content: '1280px',
        prose: '72ch',
      },
      borderRadius: {
        card: '10px',
        btn: '8px',
        panel: '18px',
        feature: '26px',
        shell: '32px',
      },
      boxShadow: {
        'inset-top': 'inset 0 1px 0 rgba(255, 255, 255, 0.12)',
        'inset-line': 'inset 0 0 0 1px rgba(255, 255, 255, 0.06)',
        panel: '0 40px 90px -50px rgba(0, 0, 0, 0.9)',
        float: '0 30px 60px -30px rgba(0, 0, 0, 0.8)',
        chrome: '0 0 0 1px rgba(255,255,255,0.08), 0 60px 120px -40px rgba(0,0,0,0.9)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-soft': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        'menu-in': {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -18px, 0) rotate(2deg)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.9' },
        },
        'sweep-drift': {
          '0%, 100%': { backgroundPosition: '8% 20%' },
          '50%': { backgroundPosition: '88% 70%' },
        },
      },
      animation: {
        'menu-in': 'menu-in 180ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 600ms ease-out both',
        marquee: 'marquee 48s linear infinite',
        float: 'float 9s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
        'spin-slow': 'spin-slow 46s linear infinite',
        'spin-reverse': 'spin-reverse 70s linear infinite',
        'pulse-soft': 'pulse-soft 5s ease-in-out infinite',
        'sweep-drift': 'sweep-drift 16s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
