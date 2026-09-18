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
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse
          key={deg}
          cx="32"
          cy="19"
          rx="5.5"
          ry="11"
          transform={`rotate(${deg} 32 32)`}
          stroke="currentColor"
          strokeWidth="0.7"
          fill="currentColor"
          fillOpacity="0.08"
        />
      ))}
      <circle cx="32" cy="32" r="5.5" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="32" cy="32" r="2.2" fill="currentColor" opacity="0.55" />
    </svg>
  )
}
