import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** 12-column, 1280px max content width, 20px mobile / 24px from 640px gutters. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn('mx-auto w-full max-w-content px-5 sm:px-6', className)}>{children}</div>
  )
}
