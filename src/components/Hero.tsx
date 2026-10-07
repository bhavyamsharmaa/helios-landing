import { ArrowUpRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Aurora } from './Aurora'
import { MockConsole } from './MockConsole'

const CONSOLE_URL = 'https://helios-frontend-self.vercel.app'
const GITHUB_URL =
  'https://github.com/bhavyamsharmaa/A-B-Testing-Feature-Flag-Management-Console'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* Decorative aurora, purely visual: gradients only, no image assets */}
      <Aurora />

      <div className="relative mx-auto max-w-3xl">
        {/* Soft dark pool behind the copy so muted text stays above 4.5:1 */}
        <div aria-hidden className="hero-scrim pointer-events-none absolute -inset-x-24 -inset-y-12 z-0" />
        <div className="relative z-10 text-center">
          <span className="rise inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            Feature flags &amp; experimentation, for teams that ship daily
          </span>

          <h1 className="rise mt-6 text-4xl font-extrabold tracking-tight text-balance sm:text-6xl" style={{ '--d': '80ms' } as CSSProperties}>
            Ship the code.{' '}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              Control the release.
            </span>
          </h1>

          <p className="rise mx-auto mt-6 max-w-2xl text-lg text-muted text-balance" style={{ '--d': '160ms' } as CSSProperties}>
            Helios separates deploying from releasing — toggle features
            instantly, roll out to a slice of users, and kill a bad release in
            under 2 seconds. No redeploys.
          </p>

          <div className="rise mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ '--d': '240ms' } as CSSProperties}>
            <a
              href={CONSOLE_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary btn-lift group inline-flex items-center gap-1.5 rounded-full bg-accent-btn px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px_var(--color-accent)]"
            >
              Get Started
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-lift inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-fg transition-colors hover:bg-surface"
            >
              <FaGithub className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="rise relative z-10 mt-16" style={{ '--d': '400ms' } as CSSProperties}>
        <MockConsole />
      </div>
    </section>
  )
}
