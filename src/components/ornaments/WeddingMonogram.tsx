type Props = {
  className?: string
  initials: string
}

export function WeddingMonogram({ className = '', initials }: Props) {
  return (
    <div className={`monogram ${className}`} aria-hidden>
      <svg viewBox="0 0 80 80" className="monogram-ring" aria-hidden>
        <circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <circle
          cx="40"
          cy="40"
          r="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          opacity="0.5"
        />
        <path
          d="M40 6 L42 12 L40 10 L38 12 Z M40 74 L42 68 L40 70 L38 68 Z"
          fill="currentColor"
          opacity="0.7"
        />
      </svg>
      <span className="monogram-text">{initials}</span>
    </div>
  )
}
