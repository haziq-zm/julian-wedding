import { useEffect, useState } from 'react'
import { FloralDecor } from './FloralDecor'

type Phase = 'sealed' | 'unrolling' | 'open'

type Props = {
  partnerOne: string
  partnerTwo: string
  dateLabel: string
  tagline: string
  onOpened: () => void
}

const UNROLL_MS = 2200

export function InvitationScroll({
  partnerOne,
  partnerTwo,
  dateLabel,
  tagline,
  onOpened,
}: Props) {
  const [phase, setPhase] = useState<Phase>('sealed')

  useEffect(() => {
    if (phase !== 'unrolling') return
    const id = window.setTimeout(() => {
      setPhase('open')
      onOpened()
    }, UNROLL_MS)
    return () => window.clearTimeout(id)
  }, [phase, onOpened])

  const open = () => {
    if (phase !== 'sealed') return
    setPhase('unrolling')
  }

  const interactive = phase === 'sealed'

  return (
    <section
      className={`scroll-gate scroll-gate--${phase}`}
      aria-label="Wedding invitation scroll"
    >
      <div className="scroll-gate-bg" aria-hidden />

      <button
        type="button"
        className={`parchment parchment--${phase}`}
        onClick={open}
        disabled={!interactive}
        aria-expanded={phase !== 'sealed'}
        aria-label={
          phase === 'sealed'
            ? 'Open the invitation scroll'
            : 'Invitation scroll'
        }
      >
        <div className="parchment-rod parchment-rod--top" aria-hidden>
          <span className="parchment-knob parchment-knob--left" />
          <span className="parchment-bar" />
          <span className="parchment-knob parchment-knob--right" />
        </div>

        <div className="parchment-roll" aria-hidden>
          <div className="parchment-roll-shine" />
          <div className="parchment-seal">
            <span className="parchment-seal-mark">A&J</span>
          </div>
        </div>

        <div className="parchment-sheet">
          <div className="parchment-texture" aria-hidden />
          <FloralDecor className="parchment-floral parchment-floral--l" />
          <FloralDecor className="parchment-floral parchment-floral--r" />

          <div className="parchment-inner">
            <p className="parchment-eyebrow">You are invited</p>
            <h1 className="parchment-names">
              <span>{partnerOne}</span>
              <span className="parchment-amp">&</span>
              <span>{partnerTwo}</span>
            </h1>
            <FloralDecor className="parchment-divider" variant="divider" />
            <p className="parchment-tagline">{tagline}</p>
            <p className="parchment-date">{dateLabel}</p>
            {phase === 'open' && (
              <p className="parchment-continue">Scroll to continue</p>
            )}
          </div>
        </div>

        <div className="parchment-rod parchment-rod--bottom" aria-hidden>
          <span className="parchment-knob parchment-knob--left" />
          <span className="parchment-bar" />
          <span className="parchment-knob parchment-knob--right" />
        </div>
      </button>

      {phase === 'sealed' && (
        <p className="scroll-hint">
          <span className="scroll-hint-pulse" />
          Tap the scroll to open
        </p>
      )}
    </section>
  )
}
