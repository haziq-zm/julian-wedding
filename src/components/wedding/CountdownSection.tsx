import { Countdown } from '../Countdown'
import { JaliPattern } from '../ornaments/JaliPattern'
import { OrnamentalFrame } from '../ornaments/OrnamentalFrame'
import { SectionHeader } from '../ornaments/SectionHeader'

type Props = {
  target: Date
  dateLabel: string
  timeLabel: string
}

export function CountdownSection({ target, dateLabel, timeLabel }: Props) {
  return (
    <section id="countdown" className="count-sec section-band section-band--olive">
      <JaliPattern className="count-jali" />
      <div className="count-vignette" aria-hidden />

      <SectionHeader eyebrow="Counting the Days" title="Until We Wed" light />

      <OrnamentalFrame variant="olive" className="count-frame">
        <Countdown target={target} />
        <p className="count-date">{dateLabel}</p>
        <p className="count-time">{timeLabel}</p>
      </OrnamentalFrame>
    </section>
  )
}
