type Props = {
  className?: string
  corner?: 'tl' | 'tr' | 'bl' | 'br'
}

export function FloralCorner({ className = '', corner = 'tl' }: Props) {
  const transform =
    corner === 'tr'
      ? 'scale(-1,1) translate(-120,0)'
      : corner === 'bl'
        ? 'scale(1,-1) translate(0,-120)'
        : corner === 'br'
          ? 'scale(-1,-1) translate(-120,-120)'
          : undefined

  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g transform={transform}>
        <path
          d="M12 108 C28 88 42 70 58 52"
          stroke="currentColor"
          strokeWidth="1.1"
          opacity="0.7"
        />
        <path
          d="M22 108 C36 90 52 74 70 58"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.45"
        />
        <ellipse
          cx="64"
          cy="48"
          rx="14"
          ry="8"
          transform="rotate(-40 64 48)"
          fill="currentColor"
          opacity="0.35"
        />
        <ellipse
          cx="48"
          cy="62"
          rx="11"
          ry="6.5"
          transform="rotate(18 48 62)"
          fill="currentColor"
          opacity="0.28"
        />
        <ellipse
          cx="76"
          cy="64"
          rx="10"
          ry="6"
          transform="rotate(-55 76 64)"
          fill="currentColor"
          opacity="0.25"
        />
        <ellipse
          cx="36"
          cy="82"
          rx="12"
          ry="7"
          transform="rotate(-20 36 82)"
          fill="currentColor"
          opacity="0.22"
        />
        <circle cx="58" cy="54" r="3" fill="currentColor" opacity="0.55" />
        <circle cx="42" cy="72" r="2.2" fill="currentColor" opacity="0.4" />
        <path
          d="M70 40 C78 34 88 30 96 28"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.4"
        />
      </g>
    </svg>
  )
}
