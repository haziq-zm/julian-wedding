import { useId } from 'react'

type Props = {
  className?: string
}

/** Subtle Islamic lattice pattern tile */
export function JaliPattern({ className = '' }: Props) {
  const uid = useId().replace(/:/g, '')
  const patternId = `jali-${uid}`

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern
          id={patternId}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M20 2 L26 14 L38 14 L28 22 L32 34 L20 26 L8 34 L12 22 L2 14 L14 14 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
          />
          <circle
            cx="20"
            cy="20"
            r="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}
