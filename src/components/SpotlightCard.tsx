import { useEffect, useRef, useState, type ReactNode } from 'react'

const BLOB = 320 // px; the glow is a gradient circle this big, moved with transforms

/**
 * A card with a soft glow and a gradient border that follow the cursor. Mouse
 * devices only: on touch screens the layers are never rendered. If the browser
 * can't do mask-composite, CSS falls back to a plain 1px border highlight.
 */
export function SpotlightCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const glow = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const frame = useRef(0)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mouse = window.matchMedia('(hover: hover) and (pointer: fine)')
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setEnabled(mouse.matches && !calm.matches)
    update()
    mouse.addEventListener('change', update)
    calm.addEventListener('change', update)
    return () => {
      mouse.removeEventListener('change', update)
      calm.removeEventListener('change', update)
      cancelAnimationFrame(frame.current)
    }
  }, [])

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!enabled || e.pointerType !== 'mouse') return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - BLOB / 2
    const y = e.clientY - rect.top - BLOB / 2
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      const transform = `translate3d(${x}px, ${y}px, 0)`
      if (glow.current) glow.current.style.transform = transform
      if (ring.current) ring.current.style.transform = transform
    })
  }

  return (
    <div
      onPointerMove={onPointerMove}
      className={`spot-card group relative rounded-2xl border border-border bg-surface ${className}`}
    >
      {enabled && (
        <>
          <div aria-hidden className="spot-glow pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div ref={glow} className="spot-glow-blob absolute top-0 left-0 rounded-full" style={{ width: BLOB, height: BLOB }} />
          </div>
          <div aria-hidden className="spot-ring pointer-events-none absolute -inset-px overflow-hidden rounded-[17px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div ref={ring} className="spot-ring-blob absolute top-0 left-0 rounded-full" style={{ width: BLOB, height: BLOB }} />
          </div>
        </>
      )}
      <div className="relative">{children}</div>
    </div>
  )
}
