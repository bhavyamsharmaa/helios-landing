import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const CONSOLE_URL = 'https://helios-frontend-self.vercel.app'
const GITHUB_URL =
  'https://github.com/bhavyamsharmaa/A-B-Testing-Feature-Flag-Management-Console'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* Decorative glow, purely visual — no image assets required */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-12rem] left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
          Feature flags &amp; experimentation, for teams that ship daily
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-balance sm:text-6xl">
          Ship the code.{' '}
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            Control the release.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted text-balance">
          Helios separates deploying from releasing — toggle features
          instantly, roll out to a slice of users, and kill a bad release in
          under 2 seconds. No redeploys.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={CONSOLE_URL}
            className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px_var(--color-accent)] transition-transform hover:scale-[1.03]"
          >
            Get Started
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-fg transition-colors hover:bg-surface"
          >
            <FaGithub className="h-4 w-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
