import { type CSSProperties } from 'react'

type Props = {
  count?: number
  className?: string
}

export function DecorativeStars({ count = 12, className = '' }: Props) {
  return (
    <div className={`decorative-stars ${className}`.trim()} aria-hidden>
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          className="decorative-stars__particle"
          style={
            {
              '--particle-index': index,
              '--particle-x': `${(index * 37 + 11) % 96}%`,
              '--particle-y': `${(index * 53 + 7) % 92}%`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
