import { CarpetBorder } from '../ornaments/CarpetBorder'
import { FloralCorner } from '../ornaments/FloralCorner'
import { FloralSpray } from '../ornaments/FloralSpray'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { GoldDivider } from '../ornaments/GoldDivider'
import { IslamicArch } from '../ornaments/IslamicArch'
import { JaliPattern } from '../ornaments/JaliPattern'
import { Lantern } from '../ornaments/Lantern'
import { OrnamentalFrame } from '../ornaments/OrnamentalFrame'

type Props = {
  partnerOne: string
  partnerTwo: string
  dateLabel: string
  blessing: string
}

export function WeddingHero({
  partnerOne,
  partnerTwo,
  dateLabel,
  blessing,
}: Props) {
  return (
    <section id="home" className="wh hero-section">
      <JaliPattern className="wh-jali" />
      <div className="wh-vignette" aria-hidden />
      <FloralSpray className="wh-spray wh-spray--l" side="left" />
      <FloralSpray className="wh-spray wh-spray--r" side="right" />
      <Lantern className="wh-lantern wh-lantern--l" size="md" />
      <Lantern className="wh-lantern wh-lantern--r" size="md" />
      <Lantern className="wh-lantern wh-lantern--c" size="sm" />

      <div className="wh-arch-wrap">
        <IslamicArch className="wh-arch wh-arch--back" variant="silhouette" />
        <IslamicArch className="wh-arch wh-arch--front" />
        <FloralCorner className="wh-floral wh-floral--tl" corner="tl" />
        <FloralCorner className="wh-floral wh-floral--tr" corner="tr" />
        <FloralCorner className="wh-floral wh-floral--bl" corner="bl" />
        <FloralCorner className="wh-floral wh-floral--br" corner="br" />

        <OrnamentalFrame variant="olive" className="wh-frame">
          <GeometricRosette className="wh-rosette" />
          <p className="eyebrow eyebrow--light">The Wedding Of</p>
          <h2 className="wh-names">
            <span>{partnerOne}</span>
            <span className="wh-amp">&</span>
            <span>{partnerTwo}</span>
          </h2>
          <GoldDivider className="ornament-divider ornament-divider--light" />
          <p className="wh-date">{dateLabel}</p>
          <p className="wh-blessing">{blessing}</p>
          <a className="btn-invite" href="#countdown">
            Enter Celebration
          </a>
        </OrnamentalFrame>
      </div>

      <CarpetBorder className="wh-carpet" />
    </section>
  )
}
