import { useEffect, useState } from 'react'
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

function useDialSpinning(sectionId: string) {
  const [spinning, setSpinning] = useState(() => {
    if (typeof window === 'undefined') return false
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const el = document.getElementById(sectionId)
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSpinning(false)
      return
    }

    let visible = false
    const sync = () => setSpinning(visible && document.visibilityState === 'visible')

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        sync()
      },
      { rootMargin: '140px 0px', threshold: 0 },
    )

    observer.observe(el)
    document.addEventListener('visibilitychange', sync)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', sync)
    }
  }, [sectionId])

  return spinning
}

export function CountdownSection({ target, dateLabel }: Props) {
  const spinning = useDialSpinning('countdown')

  return (
    <InvitationSurface
      id="countdown"
      tone="olive"
      scene="dusk"
      className={`ceremony-countdown${spinning ? ' is-spinning' : ''}`}
    >
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
        <Reveal variant="up" className="ceremony-countdown__dial">
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
