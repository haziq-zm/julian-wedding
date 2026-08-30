import { Countdown } from '../Countdown'
import { AnimatedDivider } from '../ornaments/AnimatedDivider'
import { DecorativeStars } from '../ornaments/DecorativeStars'
import { FloralBranch } from '../ornaments/FloralBranch'
import { InvitationSurface } from '../ornaments/InvitationSurface'
import { JaliPattern } from '../ornaments/JaliPattern'
import { Reveal } from '../ui/Reveal'

type Props = {
  target: Date
  dateLabel: string
  timeLabel: string
}

export function CountdownSection({ target, dateLabel, timeLabel }: Props) {
  return (
    <InvitationSurface id="countdown" tone="olive" className="ceremony-countdown">
      <DecorativeStars count={14} />
      <JaliPattern className="ceremony-countdown__screen" />
      <div className="ceremony-countdown__glow" aria-hidden />
      <FloralBranch position="top-right" size="large" className="botanical-reveal botanical-reveal--right" />
      <FloralBranch position="bottom-left" size="large" className="botanical-reveal botanical-reveal--left" />

      <div className="ceremony-countdown__grilles" aria-hidden>
        <span className="ceremony-countdown__grille">
          <JaliPattern />
        </span>
        <span className="ceremony-countdown__grille">
          <JaliPattern />
        </span>
      </div>

      <Reveal as="header" variant="up" className="ceremony-countdown__header">
        <p className="inv-label">Counting the Days</p>
        <h2 className="inv-title inv-title--light">Until We Wed</h2>
        <AnimatedDivider light />
      </Reveal>

      <Reveal variant="scale" className="ceremony-countdown__dial">
        <span className="ceremony-countdown__ring ceremony-countdown__ring--outer" aria-hidden />
        <span className="ceremony-countdown__ring ceremony-countdown__ring--inner" aria-hidden />
        <span className="ceremony-countdown__medallion" aria-hidden />
        <div className="ceremony-countdown__content">
          <Countdown target={target} />
          <p className="ceremony-countdown__date">{dateLabel}</p>
          <p className="ceremony-countdown__time">{timeLabel}</p>
        </div>
      </Reveal>
    </InvitationSurface>
  )
}
