import { AnimatedDivider } from '../ornaments/AnimatedDivider'
import { FloralBranch } from '../ornaments/FloralBranch'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { InvitationSurface } from '../ornaments/InvitationSurface'
import { Lantern } from '../ornaments/Lantern'
import { MughalArchFrame } from '../ornaments/MughalArchFrame'
import { PalaceSkyline } from '../ornaments/PalaceSkyline'
import { Reveal } from '../ui/Reveal'
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
    <InvitationSurface id="venue" tone="olive" className="palace-venue">
      <PalaceSkyline className="palace-venue__skyline" />
      <FloralBranch position="top-left" size="large" className="botanical-reveal botanical-reveal--left" />
      <FloralBranch position="top-right" size="large" className="botanical-reveal botanical-reveal--right" />

      <div className="palace-venue__colonnade" aria-hidden>
        <span /><span /><span /><span /><span />
      </div>

      <div className="palace-venue__lanterns" aria-hidden>
        <span><Lantern size="lg" /></span>
        <span><Lantern size="lg" /></span>
      </div>

      <Reveal as="header" variant="up" className="palace-venue__header">
        <p className="inv-label">The Place</p>
        <h2 className="inv-title inv-title--light">Where We Gather</h2>
        <AnimatedDivider light />
        <p className="inv-prose inv-prose--light">
          Scratch the gilded veil to reveal the garden that awaits.
        </p>
      </Reveal>

      <Reveal variant="clip" className="palace-venue__reveal">
        <MughalArchFrame
          size="fluid"
          tone="deep"
          variant="cusped"
          crest={<GeometricRosette className="palace-venue__crest" />}
        >
          <div className="palace-venue__scratch">
            <ScratchCard location={location} />
          </div>
        </MughalArchFrame>
      </Reveal>

      <Reveal variant="up" className="palace-venue__note">
        <span aria-hidden>❦</span>
        <p>{location.note}</p>
      </Reveal>
    </InvitationSurface>
  )
}
