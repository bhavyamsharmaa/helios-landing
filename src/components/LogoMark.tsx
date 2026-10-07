import { useId } from 'react'

interface Props {
  /** Width and height of the square mark, in px. */
  size?: number
  /** `color` is the violet gradient; `mono` is all white, for coloured backgrounds. */
  variant?: 'color' | 'mono'
  /** Accessible name when the mark stands alone. Leave out when the wordmark sits beside it. */
  label?: string
}

/**
 * The Helios mark: a toggle track with the sun at its "on" end. Identical to the one in
 * the console (public/logo-mark.svg, public/logo-mark-mono.svg). Inline, so it costs no request.
 */
export function LogoMark({ size = 24, variant = 'color', label }: Props) {
  const uid = useId() // ids must be unique when several marks are on one page
  const gradient = `${uid}-g`
  const mask = `${uid}-m`
  const a11y = label ? { role: 'img' as const, 'aria-label': label } : { 'aria-hidden': true as const }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className="shrink-0"
      style={variant === 'color' ? { filter: 'drop-shadow(0 0 6px rgba(124, 92, 255, 0.55))' } : undefined}
      {...a11y}
    >
      {variant === 'color' ? (
        <>
          <defs>
            <linearGradient id={gradient} x1="1" y1="0" x2="63" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#7c5cff" />
              <stop offset="1" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <rect x="1" y="16" width="62" height="32" rx="16" fill={`url(#${gradient})`} />
          <circle cx="45.5" cy="32" r="16" fill="#fff" stroke={`url(#${gradient})`} strokeWidth="3.5" />
        </>
      ) : (
        <>
          <defs>
            <mask id={mask}>
              <rect width="64" height="64" fill="#000" />
              <rect x="1" y="16" width="62" height="32" rx="16" fill="#fff" />
              <circle cx="45.5" cy="32" r="19.5" fill="#000" />
            </mask>
          </defs>
          <rect width="64" height="64" fill="#fff" mask={`url(#${mask})`} />
          <circle cx="45.5" cy="32" r="16" fill="#fff" />
        </>
      )}
    </svg>
  )
}
