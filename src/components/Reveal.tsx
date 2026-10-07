import type { CSSProperties, ReactNode } from 'react'
import { useRevealPhase } from '../lib/useInView'

interface Props {
  children: ReactNode
  /** Stagger offset in ms. */
  delay?: number
  className?: string
}

/**
 * Fades and rises its children once, the first time they scroll into view.
 * Content is hidden only after the IntersectionObserver has reported, so if the
 * observer is unavailable or fails, nothing is ever left invisible.
 */
export function Reveal({ children, delay = 0, className = '' }: Props) {
  const [ref, phase] = useRevealPhase<HTMLDivElement>({ threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
  return (
    <div
      ref={ref}
      data-phase={phase}
      className={`reveal ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
