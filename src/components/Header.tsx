import { ArrowUpRight } from 'lucide-react'
import { useInViewLive } from '../lib/useInView'

const CONSOLE_URL = 'https://helios-frontend-self.vercel.app'
const GITHUB_URL =
  'https://github.com/bhavyamsharmaa/A-B-Testing-Feature-Flag-Management-Console'

export function Header() {
  // A 16px sentinel at the very top of the page: once it scrolls out, the header firms up.
  const [sentinel, atTop] = useInViewLive<HTMLDivElement>()
  const scrolled = atTop === false

  return (
    <>
      <div ref={sentinel} aria-hidden className="pointer-events-none absolute top-0 left-0 h-4 w-px" />
      <header className="sticky top-0 z-50 border-b border-border/60 bg-ink/70 backdrop-blur-md">
        {/* Stronger border and blur, faded in with opacity (never a property transition). */}
        <span
          aria-hidden
          data-on={scrolled}
          className="pointer-events-none absolute inset-0 border-b border-border bg-ink/80 opacity-0 backdrop-blur-xl transition-opacity duration-300 data-[on=true]:opacity-100"
        />
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
          <span className="text-lg font-semibold tracking-tight">Helios</span>
        </a>

        <nav className="flex items-center gap-6">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-muted transition-colors hover:text-fg sm:inline-block"
          >
            GitHub
          </a>
          <a
            href={CONSOLE_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-lift group inline-flex items-center gap-1 rounded-full bg-fg px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-white"
          >
            Get Started
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>
        </div>
      </header>
    </>
  )
}
