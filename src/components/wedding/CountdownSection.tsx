import { Countdown } from '../Countdown'
import { AnimatedDivider } from '../ornaments/AnimatedDivider'
import { FloralBranch } from '../ornaments/FloralBranch'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { InvitationSurface } from '../ornaments/InvitationSurface'
import { Reveal } from '../ui/Reveal'

type Props = {
  target: Date
  dateLabel: string
}

export function CountdownSection({ target, dateLabel }: Props) {
  return (
    <InvitationSurface id="countdown" tone="olive" scene="dusk" className="ceremony-countdown">
      <FloralBranch position="top-right" size="large" className="botanical-reveal botanical-reveal--right" />
      <FloralBranch position="bottom-left" size="large" className="botanical-reveal botanical-reveal--left" />
      <FloralBranch position="top-left" size="medium" className="botanical-reveal botanical-reveal--left" />
      <FloralBranch position="bottom-right" size="medium" className="botanical-reveal botanical-reveal--right" />

      <Reveal as="header" variant="up" className="ceremony-countdown__header glass-card glass-card--arch">
        <p className="inv-label">Counting the Days</p>
        <h2 className="inv-title inv-title--light">Until We Wed</h2>
        <AnimatedDivider light />
      </Reveal>

      <div className="ceremony-countdown__layout">
        <Reveal variant="scale" className="ceremony-countdown__dial">
          <span className="ceremony-countdown__ring ceremony-countdown__ring--outer" aria-hidden />
          <span className="ceremony-countdown__ring ceremony-countdown__ring--glow" aria-hidden />
          <span className="ceremony-countdown__ring ceremony-countdown__ring--inner" aria-hidden />
          <GeometricRosette className="ceremony-countdown__mandala" />
          <div className="ceremony-countdown__content">
            <Countdown target={target} />
          </div>
        </Reveal>

        <Reveal as="figure" variant="right" className="ceremony-countdown__quote glass-card">
          <blockquote>
            “Two hearts, one promise.”
          </blockquote>
          <span className="ceremony-countdown__quote-rule" aria-hidden />
          <figcaption>Jauhar &amp; Jennifer</figcaption>
        </Reveal>
      </div>

      <Reveal as="footer" variant="up" className="ceremony-countdown__footer">
        <p className="ceremony-countdown__date">{dateLabel}</p>
      </Reveal>
    </InvitationSurface>
  )
}
