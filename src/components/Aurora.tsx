import { useInViewLive } from '../lib/useInView'

/**
 * Slow drifting colour blobs behind the hero. Each blob is a radial gradient (no
 * blur filter), so the soft edge is free and the animation is a pure transform.
 * Loops pause while the hero is off screen. Decorative only.
 */
export function Aurora() {
  const [ref, inView] = useInViewLive<HTMLDivElement>()

  return (
    <div
      ref={ref}
      aria-hidden
      data-paused={inView === false}
      className="aurora pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="aurora-blob aurora-1 blob-violet absolute -top-[8%] -left-[18%] h-[30rem] w-[30rem] sm:-left-[10%] sm:h-[46rem] sm:w-[46rem]" />
      <div className="aurora-blob aurora-2 blob-indigo absolute -top-[6%] -right-[22%] h-[28rem] w-[28rem] sm:-right-[12%] sm:h-[42rem] sm:w-[42rem]" />
      <div className="aurora-blob aurora-3 blob-violet-soft absolute top-[22%] left-[22%] h-[26rem] w-[26rem] sm:left-[30%] sm:h-[36rem] sm:w-[36rem]" />
      <div className="aurora-blob aurora-4 blob-magenta absolute right-[6%] bottom-[6%] hidden h-[26rem] w-[26rem] sm:block" />

      <div className="aurora-vignette absolute inset-0" />
      <div className="aurora-fade absolute inset-0" />
    </div>
  )
}
