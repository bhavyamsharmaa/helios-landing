import { ArrowUpRight } from 'lucide-react'

const CONSOLE_URL = 'https://helios-frontend-self.vercel.app'

export function FooterCta() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 px-6 py-24 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-16rem] left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[110px]"
      />

      <div className="relative mx-auto max-w-xl">
        <p className="text-xl font-semibold text-balance sm:text-2xl">
          Built for engineering teams who ship fast and sleep well.
        </p>

        <a
          href={CONSOLE_URL}
          target="_blank"
          rel="noreferrer"
          className="group mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px_var(--color-accent)] transition-transform hover:scale-[1.03]"
        >
          Get Started
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <p className="mt-16 text-xs text-muted">
          © {new Date().getFullYear()} Helios. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
