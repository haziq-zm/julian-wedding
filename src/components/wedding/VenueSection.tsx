import { CarpetBorder } from '../ornaments/CarpetBorder'
import { FloralCorner } from '../ornaments/FloralCorner'
import { FloralSpray } from '../ornaments/FloralSpray'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { GoldDivider } from '../ornaments/GoldDivider'
import { IslamicArch } from '../ornaments/IslamicArch'
import { JaliPattern } from '../ornaments/JaliPattern'
import { Lantern } from '../ornaments/Lantern'
import { OrnamentalFrame } from '../ornaments/OrnamentalFrame'
import { SectionHeader } from '../ornaments/SectionHeader'
import { ScratchCard } from '../ScratchCard'

type LocationInfo = {
  venue: string
  address: string
  mapUrl: string
  note: string
}

type Props = {
  location: LocationInfo
}

export function VenueSection({ location }: Props) {
  return (
    <section id="venue" className="venue section-band section-band--olive">
      <JaliPattern className="venue-jali" />
      <div className="venue-vignette" aria-hidden />
      <FloralSpray className="venue-spray venue-spray--l" side="left" />
      <FloralSpray className="venue-spray venue-spray--r" side="right" />
      <Lantern className="venue-lantern venue-lantern--l" size="md" />
      <Lantern className="venue-lantern venue-lantern--r" size="md" />

      <SectionHeader eyebrow="The Place" title="The Venue" light />

      <p className="venue-intro">
        A little surprise awaits — scratch the golden foil to reveal where we gather.
      </p>

      <OrnamentalFrame variant="olive" className="venue-frame">
        <IslamicArch className="venue-arch" variant="silhouette" />
        <GeometricRosette className="venue-rosette" />
        <FloralCorner className="venue-floral venue-floral--tl" corner="tl" />
        <FloralCorner className="venue-floral venue-floral--tr" corner="tr" />
        <FloralCorner className="venue-floral venue-floral--bl" corner="bl" />
        <FloralCorner className="venue-floral venue-floral--br" corner="br" />
        <ScratchCard location={location} />
      </OrnamentalFrame>

      <div className="venue-note-panel">
        <GoldDivider className="ornament-divider ornament-divider--light" />
        <p>{location.note}</p>
      </div>

      <CarpetBorder className="venue-carpet" />
    </section>
  )
}
