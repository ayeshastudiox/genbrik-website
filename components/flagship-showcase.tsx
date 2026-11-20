import Link from 'next/link'
import { Icon } from '@/components/icon'
import { NodeField } from '@/components/node-field'
import type { IconName } from '@/lib/content'

/**
 * Flagship services showcase (home).
 *
 * Deliberately not a uniform card grid: one large AI feature on graphite, a
 * glass AI-agents panel, a paper software panel, and three borderless applied
 * technology columns for robotics, chips and AI surveillance. AI gets the
 * largest surface and the strongest contrast.
 */

const aiServices = [
  'Custom AI software',
  'Generative AI applications',
  'LLM integrations',
  'Retrieval-augmented generation',
  'Intelligent document processing',
  'AI voice agents',
]

const agentServices = ['Custom AI agents', 'Multi-agent architectures', 'AI research assistants', 'Intelligent task execution']

const softwareServices = ['Website & e-commerce builds', 'Custom web applications', 'Business dashboards', 'Internal tools']

const appliedServices: Array<{
  icon: IconName
  title: string
  line: string
  href: string
  label: string
}> = [
  {
    icon: 'bot',
    title: 'Robotics',
    line: 'Robots, robot chips and control layers for physical systems.',
    href: '/future-tech#robots',
    label: 'Applied',
  },
  {
    icon: 'cpu',
    title: 'Chips & computing',
    line: 'Chips, AI chips and robotic processors for intelligent hardware.',
    href: '/future-tech#chips',
    label: 'Hardware',
  },
  {
    icon: 'cctv',
    title: 'AI Surveillance',
    line: 'Intelligent monitoring, computer vision and human review.',
    href: '/future-tech#ai-surveillance',
    label: 'Security',
  },
]

export function FlagshipShowcase() {
  return (
    <div className="grid gap-4 lg:grid-cols-12">
      {/* AI feature */}
      <article className="relative flex min-h-0 flex-col overflow-hidden rounded-feature border border-white/10 bg-[#0A0A0D] p-6 sm:min-h-[540px] sm:p-7 md:p-9 lg:col-span-7 lg:row-span-2">
        <NodeField className="opacity-30" />
        <div aria-hidden className="chrome-arc absolute -right-24 -top-24 h-72 w-72 opacity-40" />

        <div className="relative flex flex-1 flex-col">
          <div className="flex flex-wrap items-center justify-between gap-4 gap-y-1.5">
            <span className="chip">
              <span aria-hidden className="dot bg-platinum/70" />
              AI &amp; generative AI
            </span>
            <span className="text-[10px] text-silver/45">The core of the practice</span>
          </div>

          <h3 className="mt-8 max-w-[17ch] font-display text-[clamp(1.8rem,2.9vw,2.4rem)] font-medium leading-[1.04] tracking-[-0.03em] text-platinum sm:mt-10">
            Generative AI, agents and automation, engineered around your workflow.
          </h3>
          <p className="mt-4 max-w-[46ch] text-[13.5px] leading-relaxed text-silver/55 sm:text-[13px]">
            We start with the process and the decision it needs to improve, then build the model
            layer, the agent logic and the interfaces around it.
          </p>

          <ul className="mt-7 grid gap-x-8 sm:mt-8 sm:grid-cols-2">
            {aiServices.map((service) => (
              <li
                key={service}
                className="flex items-center gap-3 border-b border-white/[0.07] py-2.5 text-[12.5px] leading-snug text-silver/65 sm:text-[12px]"
              >
                <span aria-hidden className="h-[3px] w-[3px] shrink-0 rotate-45 bg-silver/30" />
                {service}
              </li>
            ))}
          </ul>

          <Link
            href="/future-tech/ai-automation"
            className="mt-auto inline-flex pt-7 text-[12.5px] font-medium text-platinum sm:pt-8"
          >
            <span className="link-underline">Explore AI &amp; automation</span>
          </Link>
        </div>
      </article>

      {/* AI agents — opaque graphite, so the silver type always has contrast */}
      <article className="relative flex flex-col overflow-hidden rounded-feature border border-white/10 bg-[#0B0B0E] p-6 md:p-7 lg:col-span-5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),transparent_42%)]"
        />
        <div aria-hidden className="chrome-ring absolute -right-12 -top-12 h-44 w-44 opacity-40" />
        <div className="relative flex h-full flex-col">
          <div className="flex flex-wrap items-center justify-between gap-4 gap-y-1.5">
            <span className="chip">AI agents</span>
            <span className="text-[10px] text-silver/45">Autonomous systems</span>
          </div>
          <h3 className="mt-5 font-display text-[20px] font-medium text-platinum">
            Agents that carry a task to the end
          </h3>
          <p className="mt-2 max-w-[42ch] text-[13px] leading-relaxed text-silver/60 sm:text-[12px]">
            Multi-step work with permission boundaries, logs and review points where a person needs
            to decide.
          </p>
          <ul className="mt-5 grid gap-x-6 sm:grid-cols-2">
            {agentServices.map((service) => (
              <li key={service} className="border-b border-white/[0.07] py-2 text-[12px] text-silver/65 sm:text-[11px]">
                {service}
              </li>
            ))}
          </ul>
          <Link
            href="/future-tech/ai-automation"
            className="mt-auto inline-flex pt-6 text-[12px] font-medium text-platinum"
          >
            <span className="link-underline">Learn more</span>
          </Link>
        </div>
      </article>

      {/* Software */}
      <article className="panel-light relative overflow-hidden rounded-feature p-6 text-slate md:p-7 lg:col-span-5">
        <div aria-hidden className="grid-field-light absolute inset-0 opacity-70" />
        <div className="relative flex h-full flex-col">
          <div className="flex flex-wrap items-center justify-between gap-4 gap-y-1.5">
            <span className="chip chip-light">Software</span>
            <span className="text-[10px] text-slate-muted/80">Built to hand over</span>
          </div>
          <h3 className="mt-5 font-display text-[20px] font-medium text-slate">
            Web, commerce &amp; custom software
          </h3>
          <p className="mt-2 max-w-[42ch] text-[13px] leading-relaxed text-slate-muted sm:text-[12px]">
            Sites, stores, portals and internal tools that your team can operate and change after
            launch.
          </p>
          <ul className="mt-5 grid gap-x-6 sm:grid-cols-2">
            {softwareServices.map((service) => (
              <li
                key={service}
                className="border-b border-hairline-light py-2 text-[12px] text-slate-muted sm:text-[11px]"
              >
                {service}
              </li>
            ))}
          </ul>
          <Link
            href="/future-tech/web-software"
            className="mt-auto inline-flex pt-6 text-[12px] font-medium text-slate"
          >
            <span className="link-underline">Learn more</span>
          </Link>
        </div>
      </article>

      {/* Applied technology columns — borderless, to break the card rhythm */}
      {appliedServices.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group border-t border-hairline-light pt-5 lg:col-span-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 gap-y-1.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline-light bg-white">
              <Icon name={item.icon} className="h-4 w-4 text-slate/75" />
            </span>
            <span className="text-[10px] text-slate-muted/75">{item.label}</span>
          </div>
          <h3 className="mt-5 font-display text-[16px] font-medium text-slate transition-colors group-hover:text-ink">
            {item.title}
          </h3>
          <p className="mt-2 max-w-[36ch] text-[12.5px] leading-relaxed text-slate-muted sm:text-[11.5px]">
            {item.line}
          </p>
          <span className="mt-4 inline-flex text-[12px] text-slate-muted underline decoration-slate/20 underline-offset-4 transition-colors group-hover:text-slate sm:text-[11px]">
            See the service
          </span>
        </Link>
      ))}

    </div>
  )
}
