import { ArrowUpRight } from 'lucide-react'
import { useInViewLive } from '../lib/useInView'
import { Reveal } from './Reveal'

const CONSOLE_URL = 'https://helios-frontend-self.vercel.app'

export function FooterCta() {
  // The breathing glow and the sweep pause while the footer is off screen.
  const [ref, inView] = useInViewLive<HTMLElement>()

  return (
    <footer
      ref={ref}
      data-paused={inView === false}
      className="relative overflow-hidden border-t border-border/60 px-6 py-24 text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[26rem] w-[40rem] max-w-[160%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="glow-footer h-full w-full rounded-full" />
      </div>

      <Reveal className="relative mx-auto max-w-xl">
        <p className="text-xl font-semibold text-balance sm:text-2xl">
          Built for engineering teams who ship fast and sleep well.
        </p>

        <a
          href={CONSOLE_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-primary btn-lift group mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent-btn px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px_var(--color-accent)]"
        >
          <span aria-hidden className="btn-sweep-clip">
            <span className="btn-sweep" />
          </span>
          <span className="relative inline-flex items-center gap-1.5">
            Get Started
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>

        <p className="mt-16 text-xs text-muted">
          © {new Date().getFullYear()} Helios. All rights reserved.
        </p>
      </Reveal>
    </footer>
  )
}
