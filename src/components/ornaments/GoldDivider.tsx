type Props = {
  className?: string
}

export function GoldDivider({ className = '' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 14 H92 M148 14 H232"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.7"
      />
      <path
        d="M120 4 L124 10 L130 14 L124 18 L120 24 L116 18 L110 14 L116 10 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="none"
      />
      <circle cx="120" cy="14" r="2" fill="currentColor" />
      <circle cx="98" cy="14" r="1.2" fill="currentColor" opacity="0.6" />
      <circle cx="142" cy="14" r="1.2" fill="currentColor" opacity="0.6" />
    </svg>
  )
}
