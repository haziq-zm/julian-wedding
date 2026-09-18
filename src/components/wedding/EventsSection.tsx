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
          <Reveal as="header" variant="up" className="ceremonial-events__header glass-card glass-card--arch glass-card--cream">
            <p className="inv-label inv-label--dark">The Day&apos;s Order</p>
            <h2 className="inv-title">Ceremony &amp; Celebration</h2>
            <AnimatedDivider />
            <p className="inv-prose">A day held in ritual, family, and joyful gathering</p>
          </Reveal>

          <OrnateTimeline events={schedule} dateLabel={dateLabel} />
        </div>
      </InvitationSurface>

      <InvitationSurface id="food" tone="olive" scene="dusk" className="wazwan-experience">
        <FloralBranch position="top-left" size="medium" className="botanical-reveal botanical-reveal--left" />
        <FloralBranch position="bottom-right" size="large" className="botanical-reveal botanical-reveal--right" />

        <Reveal as="header" variant="clip" className="wazwan-experience__header glass-card glass-card--arch">
          <p className="inv-label">The Kashmiri Table</p>
          <h2 id="wazwan-title" className="wazwan-experience__title">
            Welcome, feast <em>&amp; music</em>
          </h2>
          <AnimatedDivider light />
          <p className="wazwan-experience__lead">
            Three gestures of hospitality gathered as one welcome.
          </p>
        </Reveal>

        <div className="wazwan-experience__trio">
          <FeastChapter
            motif="kahwa"
            title="Kahwa"
            caption="Saffron steam, cardamom warmth, poured with welcome"
            index="I"
            eyebrow="The Welcome"
            note="Poured from the copper samovar"
          />
          <FeastChapter
            motif="feast"
            title="Food"
            caption="Copper gleam and ritual welcome, ready for the feast"
            index="II"
            eyebrow="The Feast"
            note="Served on the shared trami"
          />
          <FeastChapter
            motif="music"
            title="Music"
            caption="The heartbeat of celebration, calling guests to joy"
            index="III"
            eyebrow="The Celebration"
            note="Wanvun sung late into the night"
          />
        </div>
      </InvitationSurface>
    </>
  )
}
