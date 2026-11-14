'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

type GraphNode = {
  id: string
  label: string
  sub: string
  x: number
  y: number
}

type GraphEdge = { from: string; to: string; path: string }

const WIDTH = 132
const HEIGHT = 56

const graphNodes: GraphNode[] = [
  { id: 'intake', label: 'Intake', sub: 'email · form · fax', x: 16, y: 162 },
  { id: 'retrieve', label: 'Retrieve', sub: 'policy library', x: 196, y: 70 },
  { id: 'reason', label: 'Reason', sub: 'model + rules', x: 196, y: 254 },
  { id: 'act', label: 'Act', sub: 'update system', x: 376, y: 162 },
  { id: 'review', label: 'Human review', sub: 'approve or edit', x: 556, y: 70 },
  { id: 'log', label: 'Log', sub: 'audit record', x: 556, y: 254 },
]

const graphEdges: GraphEdge[] = [
  { from: 'intake', to: 'retrieve', path: 'M148 190 C172 190 172 98 196 98' },
  { from: 'intake', to: 'reason', path: 'M148 190 C172 190 172 282 196 282' },
  { from: 'retrieve', to: 'act', path: 'M328 98 C352 98 352 190 376 190' },
  { from: 'reason', to: 'act', path: 'M328 282 C352 282 352 190 376 190' },
  { from: 'act', to: 'review', path: 'M508 190 C532 190 532 98 556 98' },
  { from: 'act', to: 'log', path: 'M508 190 C532 190 532 282 556 282' },
]

/**
 * Illustrative animated node graph for the AI & Automation page (spec §4.3).
 * Decorative only — labelled as an example, not a live demo. Hovering a step
 * traces the edges it touches.
 */
export function AgentGraph({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <figure className={cn('relative', className)}>
      <div className="panel-glass overflow-hidden rounded-panel">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex items-center gap-2 text-[10.5px] text-silver/45">
            <span aria-hidden className="dot bg-platinum/60" />
            Illustrative system map
          </div>
          <span className="text-[10px] text-silver/30">
            <span className="sm:hidden">Six steps</span>
            <span className="hidden sm:inline">Hover a step</span>
          </span>
        </div>

        <div className="p-2 sm:p-4">
          {/* Small screens get the same flow as a readable list; the wide
              diagram's text would scale below legibility. */}
          <ol
            aria-label="Illustrative six-step document-review flow, top to bottom"
            className="space-y-2 p-1 sm:hidden"
          >
            {graphNodes.map((node, index) => (
              <li
                key={node.id}
                className="flex items-center gap-3 rounded-card border border-white/10 bg-white/[0.035] px-3 py-2.5"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-[9px] tabular-nums text-silver/45">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[12.5px] leading-snug text-platinum/90">
                    {node.label}
                  </span>
                  <span className="mt-0.5 block text-[10.5px] leading-snug text-silver/40">
                    {node.sub}
                  </span>
                </span>
                <span aria-hidden className="dot shrink-0 bg-platinum/35" />
              </li>
            ))}
          </ol>

          <svg
            viewBox="0 0 704 380"
            fill="none"
            role="img"
            aria-label="Diagram of an illustrative document-review agent workflow: intake, retrieval, reasoning, action, human review and an audit log."
            className="hidden h-auto w-full sm:block"
          >
            <defs>
              <pattern id="agent-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" stroke="rgba(255,255,255,0.04)" strokeWidth="0.6" fill="none" />
              </pattern>
              <linearGradient id="agent-node" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.07)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.015)" />
              </linearGradient>
              <linearGradient id="agent-edge" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(232,233,237,0.05)" />
                <stop offset="50%" stopColor="rgba(232,233,237,0.45)" />
                <stop offset="100%" stopColor="rgba(232,233,237,0.05)" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="704" height="380" fill="url(#agent-grid)" opacity="0.7" />

            <g>
              {graphEdges.map((edge) => {
                const highlighted = active === edge.from || active === edge.to
                return (
                  <path
                    key={`${edge.from}-${edge.to}`}
                    d={edge.path}
                    stroke={highlighted ? 'url(#agent-edge)' : 'rgba(205,208,214,0.16)'}
                    strokeWidth={highlighted ? 1.2 : 1}
                    className="agent-edge transition-all duration-300"
                  />
                )
              })}
            </g>

            {graphNodes.map((node) => {
              const highlighted = active === node.id
              return (
                <g
                  key={node.id}
                  onMouseEnter={() => setActive(node.id)}
                  onMouseLeave={() => setActive(null)}
                  className="cursor-default"
                >
                  <rect
                    x={node.x}
                    y={node.y}
                    width={WIDTH}
                    height={HEIGHT}
                    rx="12"
                    fill="url(#agent-node)"
                    stroke={highlighted ? 'rgba(232,233,237,0.5)' : 'rgba(255,255,255,0.12)'}
                    className="transition-all duration-300"
                  />
                  <circle
                    cx={node.x + 16}
                    cy={node.y + 18}
                    r="2.2"
                    fill={highlighted ? 'rgba(232,233,237,0.95)' : 'rgba(232,233,237,0.45)'}
                  />
                  <text
                    x={node.x + 26}
                    y={node.y + 22}
                    fill="rgba(232,233,237,0.92)"
                    fontSize="12"
                    className="font-sans"
                  >
                    {node.label}
                  </text>
                  <text
                    x={node.x + 16}
                    y={node.y + 40}
                    fill="rgba(205,208,214,0.45)"
                    fontSize="10"
                    className="font-sans"
                  >
                    {node.sub}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-5 py-3 text-[10.5px] text-silver/30">
          <span>Document-review agent — example only.</span>
          <span>Not a live GENBRIK system.</span>
        </figcaption>
      </div>
    </figure>
  )
}
