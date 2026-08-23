type Props = {
  className?: string
  flip?: boolean
}

/** Scalloped arch transition strip between section colour bands */
export function SectionScallop({ className = '', flip = false }: Props) {
  return (
    <svg
      className={`section-scallop ${flip ? 'section-scallop--flip' : ''} ${className}`}
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0,0 H1440 V48 Q1320,8 1200,32 Q1080,56 960,24 Q840,-8 720,32 Q600,72 480,24 Q360,-24 240,32 Q120,88 0,48 Z"
        fill="currentColor"
      />
    </svg>
  )
}
