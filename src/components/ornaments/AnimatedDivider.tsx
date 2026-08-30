import { EightPointStar } from './EightPointStar'

type Props = {
  light?: boolean
  className?: string
}

export function AnimatedDivider({ light = false, className = '' }: Props) {
  return (
    <div
      className={`animated-divider ${light ? 'animated-divider--light' : ''} ${className}`.trim()}
      aria-hidden
    >
      <span className="animated-divider__line animated-divider__line--left" />
      <EightPointStar className="animated-divider__star" />
      <span className="animated-divider__line animated-divider__line--right" />
    </div>
  )
}
