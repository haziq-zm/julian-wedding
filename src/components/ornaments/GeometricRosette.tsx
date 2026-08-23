type Props = {
  className?: string
}

export function GeometricRosette({ className = '' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="0.4" opacity="0.35" />
      <path
        d="M32 6 L35 18 L47 15 L38 26 L50 38 L38 35 L32 47 L26 35 L14 38 L26 26 L17 15 L29 18 Z"
        stroke="currentColor"
        strokeWidth="0.85"
        fill="none"
      />
      <path
        d="M32 14 L34 22 L42 20 L36 28 L44 36 L36 34 L32 42 L28 34 L20 36 L28 28 L22 20 L30 22 Z"
        fill="currentColor"
        opacity="0.2"
      />
      <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.55" />
    </svg>
  )
}
