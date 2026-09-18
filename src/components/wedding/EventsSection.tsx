import { AnimatedDivider } from '../ornaments/AnimatedDivider'
import { FloralBranch } from '../ornaments/FloralBranch'
import { InvitationSurface } from '../ornaments/InvitationSurface'
import { OrnateTimeline, type TimelineEvent } from '../ornaments/OrnateTimeline'
import { Reveal } from '../ui/Reveal'
import { FeastChapter } from './FeastChapter'

type Props = {
  schedule: readonly TimelineEvent[]
  dateLabel: string
}

export function EventsSection({ schedule, dateLabel }: Props) {
  return (
    <>
      <InvitationSurface id="events" tone="parchment" scene="lantern" className="ceremonial-events">
        <FloralBranch position="top-left" size="large" className="botanical-reveal botanical-reveal--left" />
        <FloralBranch position="bottom-right" size="medium" className="botanical-reveal botanical-reveal--right" />

        <div className="ceremonial-events__stage">
          <Reveal as="header" variant="up" className="ceremonial-events__header ceremony-order-card glass-card glass-card--arch glass-card--cream">
            <p className="inv-label inv-label--dark">The Day&apos;s Order</p>
            <h2 className="inv-title">
              Ceremony <em>&amp;</em>
              <br />
              Celebration
            </h2>
            <AnimatedDivider />
            <p className="inv-prose">
              A day held in ritual, family, and joyful
              <br />
              gathering
            </p>
          </Reveal>

          <OrnateTimeline events={schedule} dateLabel={dateLabel} />
        </div>
      </InvitationSurface>

      <InvitationSurface id="food" tone="olive" scene="dusk" className="wazwan-experience">
        <FloralBranch position="top-left" size="medium" className="botanical-reveal botanical-reveal--left" />
        <FloralBranch position="bottom-right" size="large" className="botanical-reveal botanical-reveal--right" />

        <FeastChapter />
      </InvitationSurface>
    </>
  )
}
