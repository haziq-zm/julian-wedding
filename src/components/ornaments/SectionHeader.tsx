import { FloralSpray } from './FloralSpray'
import { GeometricRosette } from './GeometricRosette'
import { GoldDivider } from './GoldDivider'

type Props = {
  eyebrow: string
  title: string
  light?: boolean
}

export function SectionHeader({ eyebrow, title, light = false }: Props) {
  return (
    <header className="sec-header">
      <FloralSpray className="sec-header-spray sec-header-spray--l" side="left" />
      <FloralSpray className="sec-header-spray sec-header-spray--r" side="right" />
      <GeometricRosette className="sec-header-rosette" />
      <p className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{eyebrow}</p>
      <h2 className={`section-heading ${light ? 'section-heading--light' : ''}`}>
        {title}
      </h2>
      <GoldDivider
        className={`ornament-divider ${light ? 'ornament-divider--light' : ''}`}
      />
    </header>
  )
}
