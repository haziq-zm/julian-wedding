import { Suspense, lazy } from 'react'
import { CarpetBorder } from '../ornaments/CarpetBorder'
import { JaliPattern } from '../ornaments/JaliPattern'
import { Lantern } from '../ornaments/Lantern'
import { SectionHeader } from '../ornaments/SectionHeader'

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

export function EventsSection() {
  return (
    <section id="events" className="events section-band section-band--parchment">
      <JaliPattern className="events-jali" />
      <Lantern className="events-lantern events-lantern--l" size="sm" />
      <Lantern className="events-lantern events-lantern--r" size="sm" />

      <SectionHeader eyebrow="The Celebrations" title="Events" />

      <Suspense fallback={<ModelFallback />}>
        <KahwaSamovarScroll />
      </Suspense>

      <Suspense fallback={<ModelFallback />}>
        <TashnaerScroll />
      </Suspense>

      <Suspense fallback={<ModelFallback />}>
        <TumbaknariScroll />
      </Suspense>

      <CarpetBorder className="events-carpet" />
    </section>
  )
}
