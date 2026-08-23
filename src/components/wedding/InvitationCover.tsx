import { useEffect, useId, useRef, useState } from 'react'
import { CarpetBorder } from '../ornaments/CarpetBorder'
import { FloralCorner } from '../ornaments/FloralCorner'
import { FloralSpray } from '../ornaments/FloralSpray'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { GoldDivider } from '../ornaments/GoldDivider'
import { JaliPattern } from '../ornaments/JaliPattern'
import { Lantern } from '../ornaments/Lantern'
import { WeddingMonogram } from '../ornaments/WeddingMonogram'

type Phase = 'sealed' | 'unrolling' | 'open'

type Props = {
  partnerOne: string
  partnerTwo: string
  monogram: string
  dateLabel: string
  blessing: string
  onOpened: () => void
}

const SETTLE_MS = 500
const UNROLL_FALLBACK_MS = 3400

export function InvitationCover({
  partnerOne,
  partnerTwo,
  monogram,
  dateLabel,
  blessing,
  onOpened,
}: Props) {
  const [phase, setPhase] = useState<Phase>('sealed')
  const unrollRef = useRef<HTMLDivElement>(null)
  const unrollDoneRef = useRef(false)
  const titleId = useId()

  /* Detect when the unroll animation finishes */
  useEffect(() => {
    if (phase !== 'unrolling') return

    const el = unrollRef.current
    if (!el) return

    const finishUnroll = () => {
      if (unrollDoneRef.current) return
      unrollDoneRef.current = true
      setPhase('open')
    }

    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.target !== el || e.propertyName !== 'grid-template-rows') return
      finishUnroll()
    }

    el.addEventListener('transitionend', onTransitionEnd)
    const fallback = window.setTimeout(finishUnroll, UNROLL_FALLBACK_MS)

    return () => {
      el.removeEventListener('transitionend', onTransitionEnd)
      window.clearTimeout(fallback)
    }
  }, [phase])

  /* Unlock page scroll after the scroll settles — separate effect so
     cleanup from the unrolling effect doesn't cancel this timer */
  useEffect(() => {
    if (phase !== 'open') return
    const id = window.setTimeout(onOpened, SETTLE_MS)
    return () => window.clearTimeout(id)
  }, [phase, onOpened])

  const open = () => {
    if (phase !== 'sealed') return
    if (navigator.vibrate) navigator.vibrate(12)
    setPhase('unrolling')
  }

  const animating = phase !== 'sealed'

  return (
    <section className={`cover cover--${phase}`} aria-labelledby={titleId}>
      <div className="cover-bg" aria-hidden>
        <JaliPattern className="cover-jali" />
        <div className="cover-vignette" />
        <div className="cover-dust" />
      </div>

      <FloralSpray className="cover-spray cover-spray--l" side="left" />
      <FloralSpray className="cover-spray cover-spray--r" side="right" />
      <Lantern className="cover-lantern cover-lantern--l" size="lg" />
      <Lantern className="cover-lantern cover-lantern--r" size="lg" />

      {phase === 'sealed' && (
        <div className="cover-preview">
          <GeometricRosette className="cover-preview-rosette" />
          <p className="cover-preview-eyebrow">The Wedding Of</p>
          <p className="cover-preview-names">
            {partnerOne} <span>&</span> {partnerTwo}
          </p>
          <GoldDivider className="cover-preview-divider" />
        </div>
      )}

      <div className={`scroll-scene ${animating ? 'scroll-scene--animating' : ''}`}>
        <div
          className={`scroll-3d scroll-3d--${phase}`}
          aria-hidden={phase === 'sealed'}
        >
          <div className="scroll-rod scroll-rod--top" aria-hidden>
            <span className="scroll-knob scroll-knob--left" />
            <span className="scroll-bar" />
            <span className="scroll-knob scroll-knob--right" />
          </div>

          <div className="scroll-stage">
            <div className="scroll-cylinder" aria-hidden>
              <div className="scroll-cylinder-body">
                <div className="scroll-cylinder-shine" />
                <div className="scroll-cylinder-texture" />
                <div className="scroll-seal">
                  <WeddingMonogram initials={monogram} className="scroll-seal-mono" />
                </div>
              </div>
              <div className="scroll-cylinder-edge" />
            </div>

            <div ref={unrollRef} className="scroll-unroll">
              <div className="scroll-parchment">
                <div className="scroll-parchment-texture" aria-hidden />
                <span className="scroll-parchment-border" aria-hidden />
                <FloralCorner className="scroll-floral scroll-floral--tl" corner="tl" />
                <FloralCorner className="scroll-floral scroll-floral--tr" corner="tr" />
                <FloralCorner className="scroll-floral scroll-floral--bl" corner="bl" />
                <FloralCorner className="scroll-floral scroll-floral--br" corner="br" />

                <div className="scroll-content">
                  <GeometricRosette className="scroll-content-rosette" />
                  <WeddingMonogram initials={monogram} className="scroll-mono" />
                  <p className="scroll-eyebrow">The Wedding Of</p>
                  <h1 id={titleId} className="scroll-names">
                    <span>{partnerOne}</span>
                    <span className="scroll-amp">&</span>
                    <span>{partnerTwo}</span>
                  </h1>
                  <GoldDivider className="scroll-divider" />
                  <p className="scroll-date">{dateLabel}</p>
                  <p className="scroll-blessing">{blessing}</p>
                  <p
                    className={`scroll-continue ${phase === 'open' ? 'scroll-continue--visible' : ''}`}
                    aria-hidden={phase !== 'open'}
                  >
                    Swipe up to continue
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-rod scroll-rod--bottom" aria-hidden>
            <span className="scroll-knob scroll-knob--left" />
            <span className="scroll-bar" />
            <span className="scroll-knob scroll-knob--right" />
          </div>

          <div className="scroll-shadow" aria-hidden />
        </div>
      </div>

      {phase === 'sealed' && (
        <button
          type="button"
          className="cover-open-btn"
          onClick={open}
          aria-label="Tap to open the invitation scroll"
        >
          <span className="cover-open-btn-glow" aria-hidden />
          <GeometricRosette className="cover-open-btn-star" />
          Tap to Open
        </button>
      )}

      <CarpetBorder className="cover-carpet" />
    </section>
  )
}
