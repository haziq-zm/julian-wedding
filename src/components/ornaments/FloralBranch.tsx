type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
type Size = 'large' | 'medium' | 'small'

type Props = {
  position: Position
  size?: Size
  className?: string
  /** Two sprays so facing corners are never a plain mirror of each other. */
  variant?: 'chinar' | 'lotus'
}

const transforms: Record<Position, string | undefined> = {
  'top-left': undefined,
  'top-right': 'scale(-1,1) translate(-280,0)',
  'bottom-left': 'scale(1,-1) translate(0,-360)',
  'bottom-right': 'scale(-1,-1) translate(-280,-360)',
}

/** Five-lobed chinar leaf, the signature tree of a Kashmiri garden. */
function ChinarLeaf({
  x,
  y,
  scale,
  rotate,
  opacity,
}: {
  x: number
  y: number
  scale: number
  rotate: number
  opacity: number
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} opacity={opacity}>
      <path
        d="M0 0 C-3 -6 -12 -8 -16 -14 C-11 -14 -8 -12 -6 -10 C-9 -17 -14 -22 -15 -30 C-10 -26 -7 -21 -5 -17 C-6 -25 -5 -33 0 -40 C5 -33 6 -25 5 -17 C7 -21 10 -26 15 -30 C14 -22 9 -17 6 -10 C8 -12 11 -14 16 -14 C12 -8 3 -6 0 0 Z"
        fill="currentColor"
      />
      <path
        d="M0 -1 V-33 M0 -18 L-9 -26 M0 -18 L9 -26 M0 -9 L-7 -13 M0 -9 L7 -13"
        stroke="var(--inv-parchment, #f4efe4)"
        strokeWidth="0.9"
        opacity="0.5"
      />
    </g>
  )
}

/** Open blossom built from two rings of petals around a gilded boss. */
function Blossom({
  x,
  y,
  scale,
  opacity,
}: {
  x: number
  y: number
  scale: number
  opacity: number
}) {
  const outer = Array.from({ length: 8 }, (_, i) => i * 45)
  const inner = Array.from({ length: 6 }, (_, i) => i * 60 + 30)

  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} opacity={opacity}>
      {outer.map((angle) => (
        <ellipse
          key={`o${angle}`}
          cx="0"
          cy="-12"
          rx="5.5"
          ry="11"
          transform={`rotate(${angle})`}
          fill="currentColor"
          opacity="0.45"
        />
      ))}
      {inner.map((angle) => (
        <ellipse
          key={`i${angle}`}
          cx="0"
          cy="-6"
          rx="3.4"
          ry="6.5"
          transform={`rotate(${angle})`}
          fill="currentColor"
          opacity="0.7"
        />
      ))}
      <circle r="3.4" fill="currentColor" />
      <circle r="1.6" fill="var(--inv-parchment, #f4efe4)" opacity="0.65" />
    </g>
  )
}

/** Closed bud on a short stalk. */
function Bud({
  x,
  y,
  rotate,
  scale,
  opacity,
}: {
  x: number
  y: number
  rotate: number
  scale: number
  opacity: number
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} opacity={opacity}>
      <path d="M0 0 C-5 -4 -6 -12 0 -18 C6 -12 5 -4 0 0 Z" fill="currentColor" />
      <path d="M0 -2 V-15" stroke="var(--inv-parchment, #f4efe4)" strokeWidth="0.8" opacity="0.5" />
      <path d="M-4 1 C-7 -2 -8 -6 -7 -9" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4 1 C7 -2 8 -6 7 -9" stroke="currentColor" strokeWidth="1.1" />
    </g>
  )
}

/**
 * Botanical spray in the manner of a Mughal album border: one governing stem,
 * a subordinate stem, foliage stepping down in scale, and hair-fine tendrils.
 */
export function FloralBranch({
  position,
  size = 'large',
  className = '',
  variant = position === 'top-right' || position === 'bottom-left' ? 'lotus' : 'chinar',
}: Props) {
  const lotus = variant === 'lotus'

  return (
    <svg
      className={`inv-branch inv-branch--${position} inv-branch--${size} inv-branch--${variant} ${className}`.trim()}
      viewBox="0 0 280 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g transform={transforms[position]}>
        <path
          d="M18 352 C40 300 54 252 76 202 C96 156 116 108 140 66 C158 34 176 16 200 6"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.6"
        />
        <path
          d="M22 350 C44 298 58 250 80 200 C100 154 120 106 144 64"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.28"
        />
        <path
          d="M104 140 C124 116 148 100 176 92 C196 86 212 76 224 60"
          stroke="currentColor"
          strokeWidth="1.3"
          opacity="0.45"
        />
        <path
          d="M76 202 C58 214 42 232 28 254 C16 272 8 292 4 314"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.32"
        />

        <ChinarLeaf x={196} y={34} scale={1.5} rotate={-38} opacity={0.5} />
        <ChinarLeaf x={150} y={62} scale={1.25} rotate={14} opacity={0.42} />
        <ChinarLeaf x={214} y={72} scale={1} rotate={-72} opacity={0.34} />
        <ChinarLeaf x={116} y={120} scale={1.15} rotate={-16} opacity={0.36} />
        <ChinarLeaf x={92} y={168} scale={0.95} rotate={26} opacity={0.3} />
        <ChinarLeaf x={58} y={232} scale={0.8} rotate={-30} opacity={0.24} />
        <ChinarLeaf x={30} y={288} scale={0.62} rotate={12} opacity={0.2} />

        {lotus ? (
          <>
            <Blossom x={168} y={44} scale={1.25} opacity={0.62} />
            <Blossom x={122} y={96} scale={0.85} opacity={0.46} />
            <Blossom x={80} y={186} scale={0.6} opacity={0.34} />
          </>
        ) : (
          <>
            <Blossom x={176} y={40} scale={1} opacity={0.55} />
            <Bud x={140} y={82} rotate={-22} scale={1.2} opacity={0.5} />
            <Bud x={104} y={146} rotate={16} scale={0.95} opacity={0.4} />
            <Bud x={64} y={224} rotate={-14} scale={0.75} opacity={0.3} />
          </>
        )}

        <path
          d="M140 66 C128 54 114 48 98 46 M98 46 C104 40 112 38 120 40"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.32"
        />
        <path
          d="M176 92 C186 82 198 76 212 74 M212 74 C208 82 202 88 194 92"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.28"
        />
        <path
          d="M56 244 C46 252 38 264 34 278 M34 278 C42 274 48 268 52 260"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.24"
        />

        <circle cx="132" cy="70" r="2.2" fill="currentColor" opacity="0.45" />
        <circle cx="188" cy="86" r="1.8" fill="currentColor" opacity="0.38" />
        <circle cx="70" cy="212" r="2" fill="currentColor" opacity="0.32" />
        <circle cx="40" cy="272" r="1.6" fill="currentColor" opacity="0.26" />
      </g>
    </svg>
  )
}
