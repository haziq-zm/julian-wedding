import { LenisScrollElement } from '../lenis/LenisScrollElement'
import { EightPointStar } from '../ornaments/EightPointStar'
import { FloralCorner } from '../ornaments/FloralCorner'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { GoldDivider } from '../ornaments/GoldDivider'
import { IslamicArch } from '../ornaments/IslamicArch'
import { JaliPattern } from '../ornaments/JaliPattern'
import { OrnamentalFrame } from '../ornaments/OrnamentalFrame'
import { SectionHeader } from '../ornaments/SectionHeader'

type Props = {
  title: string
  lead: string
  body: string
  dateLabel: string
}

export function CoupleSection({
  title,
  lead,
  body,
  dateLabel,
}: Props) {
  return (
    <section id="story" className="story section-band section-band--ivory">
      <JaliPattern className="story-jali" />

      <SectionHeader eyebrow={title} title={lead} />

      <LenisScrollElement className="story-layout" effect="fade-up">
        <div className="story-portrait">
          <IslamicArch className="story-portrait-arch" variant="silhouette" />
          <IslamicArch className="story-portrait-frame" />
          <FloralCorner className="story-portrait-floral story-portrait-floral--tl" corner="tl" />
          <FloralCorner className="story-portrait-floral story-portrait-floral--br" corner="br" />
          <div className="story-portrait-inner">
            <EightPointStar className="story-portrait-star" />
            <p className="story-portrait-caption">Two hearts, one journey</p>
          </div>
        </div>

        <OrnamentalFrame variant="ivory" className="story-panel">
          <GeometricRosette className="story-rosette" />
          <GoldDivider className="ornament-divider" />
          <p className="story-body">{body}</p>
          <div className="story-milestone">
            <span className="story-milestone-label">Save the Date</span>
            <span className="story-milestone-date">{dateLabel}</span>
          </div>
        </OrnamentalFrame>
      </LenisScrollElement>
    </section>
  )
}
