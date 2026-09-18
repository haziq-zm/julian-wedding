import { GeometricRosette } from './GeometricRosette'

type Props = {
  light?: boolean
  className?: string
}

export function SectionDivider({
  light = false,
  className = '',
}: Props) {
  return (
    <div
      className={`section-divider ${light ? 'section-divider--light' : ''} ${className}`.trim()}
      aria-hidden
    >
      <span className="section-divider__line" />
      <GeometricRosette className="section-divider__ornament" />
      <span className="section-divider__line" />
    </div>
  )
}
