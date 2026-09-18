type Props = {
  from?: 'parchment' | 'olive' | 'cream' | 'deep'
  to?: 'parchment' | 'olive' | 'cream' | 'deep'
  overlap?: boolean
  className?: string
}

/** Overlapping scalloped transition between section tones */
export function SectionVeil({
  from = 'parchment',
  to = 'olive',
  overlap = true,
  className = '',
}: Props) {
  return (
    <div
      className={`inv-veil inv-veil--${from}-to-${to} ${overlap ? 'inv-veil--overlap' : ''} ${className}`.trim()}
      aria-hidden
    >
      <span className="inv-veil__rule" />
      <svg
        className="inv-veil__curve"
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,72 V0 H1440 V48
             C1380,48 1380,68 1320,68 C1260,68 1260,48 1200,48
             C1140,48 1140,68 1080,68 C1020,68 1020,48 960,48
             C900,48 900,68 840,68 C780,68 780,48 720,48
             C660,48 660,68 600,68 C540,68 540,48 480,48
             C420,48 420,68 360,68 C300,68 300,48 240,48
             C180,48 180,68 120,68 C60,68 60,48 0,48 Z"
        />
      </svg>
    </div>
  )
}
