import { useInViewLive } from '../lib/useInView'

/**
 * Decorative product demo: a ~9s loop of "flag on -> banner appears -> Kill ->
 * banner gone -> live in 1.8s". Plain markup driven by CSS keyframes (see
 * index.css). Pauses while off screen. aria-hidden and inert, so it is never
 * announced or focusable.
 */
export function MockConsole() {
  const [ref, inView] = useInViewLive<HTMLDivElement>({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      aria-hidden="true"
      inert
      data-paused={inView === false}
      className="mock pointer-events-none mx-auto w-full max-w-3xl text-left select-none"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_80px_-30px_rgb(124_92_255/0.45)]">
        <div className="flex items-center gap-1.5 border-b border-border bg-surface-2/70 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 text-xs text-muted">Helios console</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1.05fr_1fr]">
          {/* Console side */}
          <div className="space-y-4 p-5 sm:border-r sm:border-border">
            <p className="text-xs font-medium tracking-wider text-muted uppercase">Flags</p>

            <div className="flex items-center justify-between rounded-xl border border-border bg-ink/60 px-4 py-3">
              <div>
                <p className="font-mono text-sm text-fg">new-checkout</p>
                <p className="text-xs text-muted">Checkout redesign</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid w-7 text-right text-xs font-semibold">
                  <span className="mock-label-off col-start-1 row-start-1 text-muted">OFF</span>
                  <span className="mock-label-on col-start-1 row-start-1 text-emerald-300">ON</span>
                </span>
                <span className="relative block h-6 w-11 rounded-full bg-zinc-700">
                  <span className="mock-track absolute inset-0 rounded-full bg-accent-btn" />
                  <span className="mock-thumb absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow" />
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <span className="mock-kill relative inline-flex items-center overflow-hidden rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white">
                <span className="mock-ripple absolute top-1/2 left-1/2 -mt-8 -ml-8 h-16 w-16 rounded-full bg-white/40" />
                <span className="relative">Kill</span>
              </span>
              <div className="h-7">
                <span className="mock-chip inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Live in 1.8s - no redeploy
                </span>
              </div>
            </div>
          </div>

          {/* Website side */}
          <div className="p-5">
            <div className="overflow-hidden rounded-xl border border-border bg-ink">
              <div className="flex items-center gap-1.5 border-b border-border px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                <span className="ml-2 h-2 w-24 rounded bg-white/10" />
              </div>
              <div className="relative h-8 overflow-hidden">
                <div className="mock-banner absolute inset-0 flex items-center justify-center bg-green-700 text-xs font-semibold text-white">
                  New checkout
                </div>
              </div>
              <div className="space-y-3 p-3">
                <div className="flex items-center justify-between">
                  <span className="h-2.5 w-14 rounded bg-white/15" />
                  <span className="flex gap-2">
                    <span className="h-2 w-8 rounded bg-white/10" />
                    <span className="h-2 w-8 rounded bg-white/10" />
                  </span>
                </div>
                <span className="block h-3 w-3/4 rounded bg-white/15" />
                <span className="block h-2 w-1/2 rounded bg-white/10" />
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <span className="h-12 rounded-lg bg-white/[0.06]" />
                  <span className="h-12 rounded-lg bg-white/[0.06]" />
                  <span className="h-12 rounded-lg bg-white/[0.06]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
