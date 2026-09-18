type Props = {
  count?: number
  className?: string
}

export function SparkleField({ count = 14, className = '' }: Props) {
  return (
    <div className={`cinema-sparkles ${className}`.trim()} aria-hidden>
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          className="cinema-sparkles__pip"
          style={{
            left: `${(index * 37 + 9) % 94}%`,
            top: `${(index * 53 + 11) % 90}%`,
            animationDelay: `${index * 0.35}s`,
          }}
        />
      ))}
    </div>
  )
}
