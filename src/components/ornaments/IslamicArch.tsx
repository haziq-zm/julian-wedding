type Props = {
  className?: string
  variant?: 'frame' | 'silhouette'
}

/** Pointed Mughal-style arch outline */
export function IslamicArch({ className = '', variant = 'frame' }: Props) {
  if (variant === 'silhouette') {
    return (
      <svg
        className={className}
        viewBox="0 0 200 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M20 270 V120 Q20 40 100 12 Q180 40 180 120 V270"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M24 268 V122 Q24 48 100 18 Q176 48 176 122 V268"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M32 268 V124 Q32 56 100 28 Q168 56 168 124 V268"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.55"
      />
      <path
        d="M100 18 V8 M92 14 H108"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.7"
      />
    </svg>
  )
}
