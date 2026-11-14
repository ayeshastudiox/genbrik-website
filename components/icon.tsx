import {
  Bot,
  Building2,
  Car,
  Cpu,
  FileSearch,
  Headphones,
  HeartPulse,
  Home,
  Landmark,
  LayoutDashboard,
  Monitor,
  Package,
  Receipt,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Store,
  Users,
  Wallet,
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
  receipt: Receipt,
  users: Users,
  'shield-check': ShieldCheck,
  headphones: Headphones,
  'heart-pulse': HeartPulse,
  package: Package,
  landmark: Landmark,
  car: Car,
  home: Home,
  wallet: Wallet,
  'shopping-bag': ShoppingBag,
  cpu: Cpu,
  rocket: Rocket,
  store: Store,
  building: Building2,
}

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component = iconMap[name] ?? Package
  return <Component aria-hidden className={cn('h-5 w-5', className)} strokeWidth={1.5} />
}
