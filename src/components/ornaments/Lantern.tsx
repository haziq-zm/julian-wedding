type Props = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Lantern({ className = '', size = 'md' }: Props) {
  const h = size === 'sm' ? 56 : size === 'lg' ? 96 : 72

  return (
    <svg
      className={`lantern lantern--${size} ${className}`}
      viewBox="0 0 40 100"
      width={h * 0.4}
      height={h}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <line
        x1="20"
        y1="0"
        x2="20"
        y2="14"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.7"
      />
      <path
        d="M12 18 H28 L26 14 H14 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M10 18 H30 V48 Q30 58 20 62 Q10 58 10 48 Z"
        fill="currentColor"
        opacity="0.35"
        className="lantern-body"
      />
      <path
        d="M10 18 H30 V48 Q30 58 20 62 Q10 58 10 48 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="none"
      />
      <path
        d="M14 24 H26 M14 32 H26 M14 40 H26"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.45"
      />
      <ellipse
        cx="20"
        cy="38"
        rx="5"
        ry="7"
        fill="currentColor"
        opacity="0.25"
        className="lantern-glow"
      />
      <path
        d="M16 62 Q20 70 24 62"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
      <circle cx="20" cy="72" r="2" fill="currentColor" opacity="0.7" />
    </svg>
  )
}
