import {
  Bot,
  Building2,
  Cctv,
  CircuitBoard,
  Cpu,
  Factory,
  FileSearch,
  HeartPulse,
  LayoutDashboard,
  Microscope,
  Monitor,
  Rocket,
  Store,
  Truck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { IconName } from '@/lib/content'
import { cn } from '@/lib/utils'

/** Single-weight outline icon set, monochrome (spec §2.6). */
const iconMap: Record<IconName, LucideIcon> = {
  bot: Bot,
  'file-search': FileSearch,
  monitor: Monitor,
  'layout-dashboard': LayoutDashboard,
  'heart-pulse': HeartPulse,
  cpu: Cpu,
  'circuit-board': CircuitBoard,
  cctv: Cctv,
  factory: Factory,
  truck: Truck,
  microscope: Microscope,
  rocket: Rocket,
  store: Store,
  building: Building2,
}

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component = iconMap[name] ?? Bot
  return <Component aria-hidden className={cn('h-5 w-5', className)} strokeWidth={1.5} />
}
