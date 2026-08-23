import { EightPointStar } from '../ornaments/EightPointStar'
import { FloralCorner } from '../ornaments/FloralCorner'
import { GoldDivider } from '../ornaments/GoldDivider'
import { JaliPattern } from '../ornaments/JaliPattern'
import { OrnamentalFrame } from '../ornaments/OrnamentalFrame'
import { SectionHeader } from '../ornaments/SectionHeader'

type Item = {
  time: string
  title: string
  detail: string
}

type Props = {
  schedule: readonly Item[]
}

export function WeddingTimeline({ schedule }: Props) {
  return (
    <section id="program" className="program section-band section-band--ivory">
      <JaliPattern className="program-jali" />

      <SectionHeader eyebrow="The Day" title="Wedding Program" />

      <OrnamentalFrame variant="ivory" className="program-frame">
        <ol className="program-list">
          {schedule.map((item, i) => (
            <li key={item.title} className="program-item">
              <span className="program-index">{String(i + 1).padStart(2, '0')}</span>
              <EightPointStar className="program-emblem" />
              <FloralCorner className="program-floral" corner="tl" />
              <time className="program-time">{item.time}</time>
              <GoldDivider className="program-divider" />
              <h3 className="program-title">{item.title}</h3>
              <p className="program-detail">{item.detail}</p>
            </li>
          ))}
        </ol>
      </OrnamentalFrame>
    </section>
  )
}
