import { AnimatedDivider } from '../ornaments/AnimatedDivider'
import { FloralBranch } from '../ornaments/FloralBranch'
import { InvitationSurface } from '../ornaments/InvitationSurface'
import { JaliPattern } from '../ornaments/JaliPattern'
import { Reveal } from '../ui/Reveal'

type Props = {
  dateLabel: string
  venue: string
  address: string
  partnerOne: string
  partnerTwo: string
}

export function GallerySection({
  dateLabel,
  venue,
  address,
  partnerOne,
  partnerTwo,
}: Props) {
  return (
    <InvitationSurface id="gallery" tone="cream" className="editorial-suite">
      <JaliPattern className="editorial-suite__screen" />
      <FloralBranch position="top-left" size="large" className="botanical-reveal botanical-reveal--left" />
      <FloralBranch position="bottom-right" size="medium" className="botanical-reveal botanical-reveal--right" />

      <Reveal as="header" variant="up" className="editorial-suite__header">
        <p className="inv-label inv-label--dark">Pieces of the Celebration</p>
        <h2 className="inv-title">An Invitation Suite</h2>
        <AnimatedDivider />
      </Reveal>

      <div className="editorial-suite__collage">
        <span className="editorial-suite__mat" aria-hidden />

        <Reveal variant="right" className="editorial-suite__piece editorial-suite__piece--date" delay={100}>
          <span className="editorial-suite__corner" aria-hidden />
          <p className="editorial-suite__label">Save the date</p>
          <p className="editorial-suite__text">{dateLabel}</p>
        </Reveal>

        <Reveal variant="left" className="editorial-suite__piece editorial-suite__piece--venue" delay={160}>
          <span className="editorial-suite__corner" aria-hidden />
          <p className="editorial-suite__label">The gathering</p>
          <p className="editorial-suite__text">{venue}</p>
          <p className="editorial-suite__sub">{address}</p>
        </Reveal>

        <Reveal variant="scale" className="editorial-suite__piece editorial-suite__piece--quote" delay={220}>
          <span className="editorial-suite__wax" aria-hidden>❦</span>
          <blockquote>
            Your presence is the greatest gift as {partnerOne} &amp; {partnerTwo} begin
            their life together.
          </blockquote>
          <p className="editorial-suite__signoff">With love, both families</p>
        </Reveal>
      </div>
    </InvitationSurface>
  )
}
