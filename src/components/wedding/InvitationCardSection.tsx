import { useState } from 'react'
import { AnimatedDivider } from '../ornaments/AnimatedDivider'
import { FloralBranch } from '../ornaments/FloralBranch'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { InvitationSurface } from '../ornaments/InvitationSurface'
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
  const [open, setOpen] = useState(false)

  return (
    <InvitationSurface id="invitation" tone="olive-deep" className="keepsake-scene">
      <FloralBranch position="top-right" size="large" className="botanical-reveal botanical-reveal--right" />
      <FloralBranch position="bottom-left" size="large" className="botanical-reveal botanical-reveal--left" />

      <Reveal as="header" variant="up" className="keepsake-scene__header">
        <p className="inv-label">A Keepsake</p>
        <h2 className="inv-title inv-title--light">The Invitation</h2>
        <AnimatedDivider light />
      </Reveal>

      <Reveal variant="up" className="keepsake-scene__table">
        <div className={`keepsake-scene__mail ${open ? 'is-open' : ''}`}>
          <button
            type="button"
            className="keepsake-scene__envelope"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="keepsake-scene__flap" aria-hidden />
            <span className="keepsake-scene__seal" aria-hidden />
            <span className="keepsake-scene__hint">
              {open ? 'Tap to close' : 'Tap to open'}
            </span>
          </button>

          <div className="keepsake-scene__letter-wrap">
            <article className="keepsake-scene__letter" aria-hidden={!open}>
              <GeometricRosette className="keepsake-scene__crest" />
              <p className="keepsake-scene__kicker">You Are Cordially Invited</p>
              <h3 className="keepsake-scene__names">
                {partnerOne} <i>&amp;</i> {partnerTwo}
              </h3>
              <AnimatedDivider />
              <p className="keepsake-scene__blessing">{blessing}</p>
              <p className="keepsake-scene__details">{dateLabel}</p>
            </article>
          </div>
        </div>
      </Reveal>
    </InvitationSurface>
  )
}
