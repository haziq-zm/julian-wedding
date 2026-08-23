type Props = {
  className?: string
}

/** Carpet-inspired geometric border strip */
export function CarpetBorder({ className = '' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="400" height="24" fill="currentColor" opacity="0.12" />
      <path
        d="M0 4 H400 M0 20 H400"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.5"
      />
      {Array.from({ length: 16 }, (_, i) => {
        const x = 12 + i * 25
        return (
          <path
            key={i}
            d={`M${x} 8 L${x + 6} 12 L${x} 16 L${x - 6} 12 Z`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.55"
          />
        )
      })}
    </svg>
  )
}
