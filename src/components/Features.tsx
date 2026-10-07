import {
  FlaskConical,
  History,
  Power,
  ShieldCheck,
  SlidersHorizontal,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from './Reveal'
import { SpotlightCard } from './SpotlightCard'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: SlidersHorizontal,
    title: 'Stable Percentage Rollouts',
    description:
      "Deterministic, hash-based bucketing means a user's variant never flickers. Widen exposure gradually and safely, with no accidental flip-flopping.",
  },
  {
    icon: Power,
    title: 'Emergency Kill Switch',
    description:
      'Disable any flag globally in under 2 seconds — across three independent paths — without touching your deploy pipeline.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-Based Access Control',
    description:
      'Granular permissions per environment. Production changes stay restricted to accountable people, enforced server-side.',
  },
  {
    icon: History,
    title: 'Immutable Audit Log',
    description:
      'Every change is recorded with a before/after diff in the same transaction as the change itself — nothing slips through unlogged.',
  },
  {
    icon: FlaskConical,
    title: 'Statistically Rigorous Experiments',
    description:
      'Two-proportion z-tests, confidence intervals, and automatic Sample Ratio Mismatch detection — so you never ship a false winner.',
  },
]

export function Features() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything a release process needs
          </h2>
          <p className="mt-4 text-muted">
            A control plane built for the moment things go wrong — and the
            discipline to know what actually worked.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={(i % 3) * 80 + Math.floor(i / 3) * 80} className="h-full">
              <SpotlightCard className="h-full p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 hoverable:group-hover:-translate-y-1">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
