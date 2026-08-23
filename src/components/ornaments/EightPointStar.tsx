type Props = {
  className?: string
}

export function EightPointStar({ className = '' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 2 L23 14 L35 11 L26 20 L35 29 L23 26 L20 38 L17 26 L5 29 L14 20 L5 11 L17 14 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="none"
      />
      <circle cx="20" cy="20" r="3.5" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  )
}
