import { Suspense, lazy } from 'react'
import { AnimatedDivider } from '../ornaments/AnimatedDivider'
import { CarpetBorder } from '../ornaments/CarpetBorder'
import { DecorativeStars } from '../ornaments/DecorativeStars'
import { FloralBranch } from '../ornaments/FloralBranch'
import { InvitationSurface } from '../ornaments/InvitationSurface'
import { JaliPattern } from '../ornaments/JaliPattern'
import { OrnateTimeline, type TimelineEvent } from '../ornaments/OrnateTimeline'
import { PalaceSkyline } from '../ornaments/PalaceSkyline'
import { Reveal } from '../ui/Reveal'

const KahwaSamovarScroll = lazy(() =>
  import('./KahwaSamovarScroll').then((module) => ({
    default: module.KahwaSamovarScroll,
  })),
)

const TashnaerScroll = lazy(() =>
  import('./TashnaerScroll').then((module) => ({
    default: module.TashnaerScroll,
  })),
)

const TumbaknariScroll = lazy(() =>
  import('./TumbaknariScroll').then((module) => ({
    default: module.TumbaknariScroll,
  })),
)

function ModelFallback() {
  return <div className="event-model-scroll event-model-scroll--placeholder" aria-hidden />
}

type Props = {
  schedule: readonly TimelineEvent[]
  dateLabel: string
}

export function EventsSection({ schedule, dateLabel }: Props) {
  return (
    <>
      <InvitationSurface id="events" tone="parchment" className="ceremonial-events">
        <DecorativeStars count={8} />
        <FloralBranch position="top-left" size="large" className="botanical-reveal botanical-reveal--left" />
        <FloralBranch position="bottom-right" size="medium" className="botanical-reveal botanical-reveal--right" />

        <Reveal as="header" variant="up" className="ceremonial-events__header">
          <p className="inv-label inv-label--dark">The Day&apos;s Order</p>
          <h2 className="inv-title">Ceremony &amp; Celebration</h2>
          <AnimatedDivider />
          <p className="inv-prose">A day held in ritual, family, and joyful gathering</p>
        </Reveal>

        <OrnateTimeline events={schedule} dateLabel={dateLabel} />

        <Reveal variant="up" className="ceremonial-events__coda">
          <CarpetBorder className="ceremonial-events__carpet" />
          <p className="ceremonial-events__coda-text">
            Guests are welcome from the afternoon onward
          </p>
        </Reveal>
      </InvitationSurface>

      <section className="wazwan-experience" aria-labelledby="wazwan-title">
        <JaliPattern className="wazwan-experience__screen" />
        <div className="wazwan-experience__pattern" aria-hidden />
        <PalaceSkyline className="wazwan-experience__skyline" arcade={false} />
        <DecorativeStars count={10} />
        <FloralBranch position="top-left" size="medium" className="botanical-reveal botanical-reveal--left" />
        <FloralBranch position="bottom-right" size="large" className="botanical-reveal botanical-reveal--right" />
        <Reveal as="header" variant="clip" className="wazwan-experience__header">
          <p className="inv-label">The Kashmiri Table</p>
          <h2 id="wazwan-title" className="wazwan-experience__title">
            Welcome, feast <em>&amp; music</em>
          </h2>
          <AnimatedDivider light />
        </Reveal>

        <div className="wazwan-experience__chapters">
        <Suspense fallback={<ModelFallback />}>
          <KahwaSamovarScroll />
        </Suspense>

        <Suspense fallback={<ModelFallback />}>
          <TashnaerScroll />
        </Suspense>

        <Suspense fallback={<ModelFallback />}>
          <TumbaknariScroll />
        </Suspense>
        </div>
      </section>
    </>
  )
}
