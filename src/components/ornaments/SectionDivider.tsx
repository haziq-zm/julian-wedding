import { EightPointStar } from './EightPointStar'
import { GeometricRosette } from './GeometricRosette'

type Props = {
  variant?: 'star' | 'rosette' | 'diamond'
  light?: boolean
  className?: string
}

export function SectionDivider({
  variant = 'star',
  light = false,
  className = '',
}: Props) {
  const Ornament =
    variant === 'rosette'
      ? GeometricRosette
      : variant === 'diamond'
        ? GeometricRosette
        : EightPointStar

  return (
    <div
      className={`section-divider ${light ? 'section-divider--light' : ''} ${className}`.trim()}
      aria-hidden
    >
      <span className="section-divider__line" />
      <Ornament className="section-divider__ornament" />
      <span className="section-divider__line" />
    </div>
  )
}
