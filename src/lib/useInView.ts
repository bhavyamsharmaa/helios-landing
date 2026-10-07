import { useEffect, useRef, useState, type RefObject } from 'react'

/**
 * Reveal phases. Content is only ever hidden after the observer has reported
 * once ('waiting'), so if IntersectionObserver is missing or throws, the phase
 * stays 'unknown' and everything remains visible.
 */
export type Phase = 'unknown' | 'waiting' | 'done'

function observe(el: Element, cb: IntersectionObserverCallback, init: IntersectionObserverInit) {
  if (typeof IntersectionObserver === 'undefined') return null
  try {
    const io = new IntersectionObserver(cb, init)
    io.observe(el)
    return io
  } catch {
    return null
  }
}

/** One-shot: 'unknown' until the observer reports, 'waiting' while off screen, 'done' forever once seen. */
export function useRevealPhase<T extends Element>(init: IntersectionObserverInit = {}): [RefObject<T | null>, Phase] {
  const ref = useRef<T>(null)
  const [phase, setPhase] = useState<Phase>('unknown')
  const { threshold, rootMargin, root } = init

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = observe(
      el,
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setPhase('done')
            io?.disconnect()
          } else {
            setPhase((p) => (p === 'done' ? p : 'waiting'))
          }
        }
      },
      { threshold, rootMargin, root },
    )
    return () => io?.disconnect()
  }, [threshold, rootMargin, root])

  return [ref, phase]
}

/** Live: null until the observer reports, then true/false as the element enters and leaves the viewport. */
export function useInViewLive<T extends Element>(init: IntersectionObserverInit = {}): [RefObject<T | null>, boolean | null] {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState<boolean | null>(null)
  const { threshold, rootMargin, root } = init

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = observe(el, (entries) => setInView(entries[entries.length - 1].isIntersecting), { threshold, rootMargin, root })
    return () => io?.disconnect()
  }, [threshold, rootMargin, root])

  return [ref, inView]
}
