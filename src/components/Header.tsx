import { ArrowUpRight } from 'lucide-react'

const CONSOLE_URL = 'https://helios-frontend-self.vercel.app'
const GITHUB_URL =
  'https://github.com/bhavyamsharmaa/A-B-Testing-Feature-Flag-Management-Console'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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
            className="group inline-flex items-center gap-1 rounded-full bg-fg px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-white"
          >
            Get Started
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>
      </div>
    </header>
  )
}
