import type { CSSProperties } from 'react'
import { useRevealPhase } from '../lib/useInView'
import { Reveal } from './Reveal'

type Step = {
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    title: 'Create a flag',
    description: 'Boolean or multivariate, disabled everywhere by default.',
  },
  {
    title: 'Target and roll out',
    description:
      'By user attribute or percentage, with independent, stable assignment per flag.',
  },
  {
    title: 'Measure and decide',
    description:
      'Track exposures and conversions, get a statistically sound verdict, not a guess.',
  },
]

// The line draws over 1.6s after a 0.2s start, so each circle lights as it is reached.
const LIT_DELAYS = ['0.2s', '1s', '1.8s']

export function HowItWorks() {
  // 'unknown' (no observer) and reduced motion both render the finished state.
  const [ref, phase] = useRevealPhase<HTMLOListElement>({ threshold: 0.35 })

  return (
    <section className="border-t border-border/60 bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
        </Reveal>

        <ol
          ref={ref}
          data-phase={phase}
          className="hiw relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8"
        >
          {/* Connecting line, desktop: a dim track with a violet line drawn over it */}
          <div
            aria-hidden
            className="absolute top-6 right-[16.6%] left-[16.6%] hidden h-px overflow-hidden bg-border sm:block"
          >
            <div className="hiw-fill-h h-full w-full bg-gradient-to-r from-accent to-accent-2" />
          </div>

          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative pl-16 text-left sm:pl-0 sm:text-center"
              style={{ '--lit-delay': LIT_DELAYS[i] } as CSSProperties}
            >
              {/* Connecting line, mobile: a vertical segment down to the next circle */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="absolute top-12 -bottom-12 left-6 w-px overflow-hidden bg-border sm:hidden"
                >
                  <div
                    className="hiw-fill-v h-full w-full bg-gradient-to-b from-accent to-accent-2"
                    style={{ '--delay': LIT_DELAYS[i], '--dur': '0.8s' } as CSSProperties}
                  />
                </div>
              )}

              <div className="absolute top-0 left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-ink text-lg font-bold text-accent sm:relative sm:mx-auto">
                {i + 1}
                {/* Lights up in order: an outline and glow fade in, and a ring pulses once */}
                <span
                  aria-hidden
                  className="hiw-lit pointer-events-none absolute -inset-px rounded-full border-2 border-accent shadow-[0_0_26px_-2px_var(--color-accent)]"
                />
                <span
                  aria-hidden
                  className="hiw-pulse pointer-events-none absolute -inset-px rounded-full border border-accent-2"
                />
              </div>
              <h3 className="mt-2.5 text-base font-semibold sm:mt-5">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted sm:mx-auto">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
