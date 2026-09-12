import { AnimatedDivider } from '../ornaments/AnimatedDivider'
import { EightPointStar } from '../ornaments/EightPointStar'
import { FloralBranch } from '../ornaments/FloralBranch'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { InvitationSurface } from '../ornaments/InvitationSurface'
import { MughalArchFrame } from '../ornaments/MughalArchFrame'
import { Reveal } from '../ui/Reveal'

type Props = {
  partnerOne: string
  partnerTwo: string
  dateLabel: string
  blessing: string
}

export function InvitationCardSection({
  partnerOne,
  partnerTwo,
  dateLabel,
  blessing,
}: Props) {
  return (
    <InvitationSurface id="invitation" tone="olive-deep" className="keepsake-scene">
      <FloralBranch position="top-right" size="large" className="botanical-reveal botanical-reveal--right" />
      <FloralBranch position="bottom-left" size="large" className="botanical-reveal botanical-reveal--left" />

      <Reveal as="header" variant="up" className="keepsake-scene__header">
        <p className="inv-label">A Keepsake</p>
        <h2 className="inv-title inv-title--light">The Invitation</h2>
        <AnimatedDivider light />
      </Reveal>

      <div className="keepsake-scene__table">
        <div className="keepsake-scene__cloth" aria-hidden />

        <Reveal variant="left" className="keepsake-scene__envelope" delay={120}>
          <span className="keepsake-scene__flap" aria-hidden />
          <span className="keepsake-scene__seal" aria-hidden>J &amp; J</span>
          <span className="keepsake-scene__stamp" aria-hidden>
            <EightPointStar />
          </span>
        </Reveal>

        <Reveal as="article" variant="clip" className="keepsake-scene__card">
          <MughalArchFrame
            size="fluid"
            tone="olive"
            variant="onion"
            crest={<GeometricRosette className="keepsake-scene__crest" />}
          >
            <p className="keepsake-scene__kicker">You Are Cordially Invited</p>
            <h3 className="keepsake-scene__names">
              {partnerOne} <i>&amp;</i> {partnerTwo}
            </h3>
            <AnimatedDivider light />
            <p className="keepsake-scene__blessing">{blessing}</p>
            <div className="keepsake-scene__details">
              <p>{dateLabel}</p>
            </div>
          </MughalArchFrame>
        </Reveal>
      </div>
    </InvitationSurface>
  )
}
