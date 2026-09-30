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

export function HowItWorks() {
  return (
    <section className="border-t border-border/60 bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
        </div>

        <ol className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          {/* Connecting line, desktop only */}
          <div
            aria-hidden
            className="absolute top-6 right-[16.6%] left-[16.6%] hidden h-px bg-border sm:block"
          />

          {STEPS.map((step, i) => (
            <li key={step.title} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-ink text-lg font-bold text-accent">
                {i + 1}
              </div>
              <h3 className="mt-5 text-base font-semibold">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
