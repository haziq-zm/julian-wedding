import { type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  size?: 'monument' | 'feature' | 'compact' | 'fluid'
  tone?: 'olive' | 'parchment' | 'deep'
  variant?: 'pointed' | 'onion' | 'cusped'
  finial?: boolean
  /** Ornament set into the tympanum, the way a real arch carries a medallion. */
  crest?: ReactNode
}

/**
 * The arch is split into a fixed-ratio dome and a stretching shaft so the frame
 * grows with its content instead of letting long copy spill past the curve.
 */
const domes: Record<NonNullable<Props['variant']>, string> = {
  pointed: 'M8 210 V118 C8 58 74 20 160 10 C246 20 312 58 312 118 V210',
  onion:
    'M8 210 V126 C8 82 32 50 76 32 C100 22 124 38 140 62 C150 55 156 44 160 14 C164 44 170 55 180 62 C196 38 220 22 244 32 C288 50 312 82 312 126 V210',
  cusped:
    'M8 210 V146 C8 122 22 106 44 102 C42 80 60 68 80 76 C86 56 108 50 124 62 C132 42 148 34 160 12 C172 34 188 42 196 62 C212 50 234 56 240 76 C260 68 278 80 276 102 C298 106 312 122 312 146 V210',
}

const innerDomes: Record<NonNullable<Props['variant']>, string> = {
  pointed: 'M24 210 V124 C24 72 82 38 160 28 C238 38 296 72 296 124 V210',
  onion:
    'M24 210 V130 C24 90 46 62 84 46 C106 37 126 51 141 72 C150 65 155 55 160 30 C165 55 170 65 179 72 C194 51 214 37 236 46 C274 62 296 90 296 130 V210',
  cusped:
    'M24 210 V148 C24 128 37 114 56 110 C54 91 70 80 88 87 C94 69 113 64 127 74 C134 57 149 49 160 30 C171 49 186 57 193 74 C207 64 226 69 232 87 C250 80 266 91 264 110 C283 114 296 128 296 148 V210',
}

export function MughalArchFrame({
  children,
  className = '',
  size = 'feature',
  tone = 'olive',
  variant = 'pointed',
  finial = true,
  crest,
}: Props) {
  return (
    <div
      className={`inv-arch inv-arch--${size} inv-arch--${tone} inv-arch--${variant} ${className}`.trim()}
    >
      <div className="inv-arch__dome" aria-hidden>
        <svg
          className="inv-arch__curve"
          viewBox="0 0 320 210"
          preserveAspectRatio="none"
          fill="none"
        >
          <path className="inv-arch__fill" d={domes[variant]} fill="currentColor" />
          <path
            className="inv-arch__stroke"
            d={domes[variant]}
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
          <path
            className="inv-arch__stroke inv-arch__stroke--inner"
            d={innerDomes[variant]}
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {finial && (
          <span className="inv-arch__finial">
            <span className="inv-arch__finial-bud" />
            <span className="inv-arch__finial-stem" />
          </span>
        )}
        {crest && <div className="inv-arch__crest">{crest}</div>}
      </div>

      <div className="inv-arch__shaft">
        <div className="inv-arch__content">{children}</div>
      </div>

      <div className="inv-arch__plinth" aria-hidden>
        <span />
        <span />
      </div>
    </div>
  )
}
