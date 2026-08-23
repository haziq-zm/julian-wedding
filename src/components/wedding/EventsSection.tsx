import { CarpetBorder } from '../ornaments/CarpetBorder'
import { EightPointStar } from '../ornaments/EightPointStar'
import { FloralCorner } from '../ornaments/FloralCorner'
import { GoldDivider } from '../ornaments/GoldDivider'
import { IslamicArch } from '../ornaments/IslamicArch'
import { JaliPattern } from '../ornaments/JaliPattern'
import { Lantern } from '../ornaments/Lantern'
import { SectionHeader } from '../ornaments/SectionHeader'

type EventItem = {
  id: string
  label: string
  time: string
  detail: string
  accent: 'olive' | 'burgundy'
}

type Props = {
  events: readonly EventItem[]
  dateLabel: string
  venue: string
}

export function EventsSection({ events, dateLabel, venue }: Props) {
  return (
    <section id="events" className="events section-band section-band--parchment">
      <JaliPattern className="events-jali" />
      <Lantern className="events-lantern events-lantern--l" size="sm" />
      <Lantern className="events-lantern events-lantern--r" size="sm" />

      <SectionHeader eyebrow="The Celebrations" title="Events" />

      <div className="events-grid">
        {events.map((event) => (
          <article
            key={event.id}
            className={`event-card event-card--${event.accent}`}
          >
            <IslamicArch className="event-arch event-arch--sil" variant="silhouette" />
            <IslamicArch className="event-arch event-arch--line" />
            <EightPointStar className="event-medallion" />
            <FloralCorner className="event-floral event-floral--tl" corner="tl" />
            <FloralCorner className="event-floral event-floral--tr" corner="tr" />
            <FloralCorner className="event-floral event-floral--bl" corner="bl" />
            <FloralCorner className="event-floral event-floral--br" corner="br" />
            <span className="event-card-border" aria-hidden />
            <div className="event-inner">
              <p className="event-label">{event.label}</p>
              <p className="event-time">{event.time}</p>
              <GoldDivider className="event-divider" />
              <p className="event-date">{dateLabel}</p>
              <p className="event-venue">{venue}</p>
              <p className="event-detail">{event.detail}</p>
            </div>
          </article>
        ))}
      </div>

      <CarpetBorder className="events-carpet" />
    </section>
  )
}
