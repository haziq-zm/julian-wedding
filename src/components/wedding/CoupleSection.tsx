import { LenisScrollElement } from '../lenis/LenisScrollElement'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { GoldDivider } from '../ornaments/GoldDivider'
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
