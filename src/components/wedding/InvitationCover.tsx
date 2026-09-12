import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from 'react'
import { CarpetBorder } from '../ornaments/CarpetBorder'
import { FloralCorner } from '../ornaments/FloralCorner'
import { FloralSpray } from '../ornaments/FloralSpray'
import { EightPointStar } from '../ornaments/EightPointStar'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { GoldDivider } from '../ornaments/GoldDivider'
import { JaliPattern } from '../ornaments/JaliPattern'
import { Lantern } from '../ornaments/Lantern'

type Phase = 'sealed' | 'pulling' | 'unrolling' | 'open'

type Props = {
  partnerOne: string
  partnerTwo: string
  dateLabel: string
  blessing: string
  onOpened: () => void
}

const PULL_THRESHOLD = 0.34
const MAX_PULL_PX = 320
const SETTLE_MS = 900
const SCROLL_CUE_DELAY_MS = 2000

export function InvitationCover({
  partnerOne,
  partnerTwo,
  dateLabel,
  blessing,
  onOpened,
}: Props) {
  const [phase, setPhase] = useState<Phase>('sealed')
  const [pull, setPull] = useState(0)
  const [scrollCue, setScrollCue] = useState(false)
  const openedRef = useRef(false)
  const scrollCueStartedRef = useRef(false)
  const pullRef = useRef(0)
  const animFrameRef = useRef(0)
  const scrollCueTimerRef = useRef(0)
  const dragRef = useRef<{
    active: boolean
    startY: number
    startPull: number
    startTime: number
    moved: boolean
  }>({ active: false, startY: 0, startPull: 0, startTime: 0, moved: false })
  const titleId = useId()

  const pullRafRef = useRef(0)

  const setPullValue = useCallback((value: number) => {
    const next = Math.min(1, Math.max(0, value))
    pullRef.current = next
    if (pullRafRef.current) return
    pullRafRef.current = requestAnimationFrame(() => {
      pullRafRef.current = 0
      setPull(pullRef.current)
    })
  }, [])

  const scheduleScrollCue = useCallback(() => {
    if (scrollCueStartedRef.current) return
    scrollCueStartedRef.current = true
    window.clearTimeout(scrollCueTimerRef.current)
    scrollCueTimerRef.current = window.setTimeout(() => {
      setScrollCue(true)
    }, SCROLL_CUE_DELAY_MS)
  }, [])

  const commitOpen = useCallback(() => {
    if (phase === 'unrolling' || phase === 'open') return
    if (navigator.vibrate) navigator.vibrate(12)

    cancelAnimationFrame(animFrameRef.current)
    setPhase('unrolling')
    scheduleScrollCue()

    const from = pullRef.current
    const start = performance.now()
    const duration = Math.max(280, (1 - from) * 700)

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      setPullValue(from + (1 - from) * eased)

      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(tick)
        return
      }

      setPullValue(1)
      window.setTimeout(() => setPhase('open'), SETTLE_MS)
    }

    animFrameRef.current = requestAnimationFrame(tick)
  }, [phase, setPullValue, scheduleScrollCue])

  useEffect(() => {
    return () => {
      cancelAnimationFrame(animFrameRef.current)
      cancelAnimationFrame(pullRafRef.current)
      window.clearTimeout(scrollCueTimerRef.current)
    }
  }, [])

  /* Hide the cue once the guest scrolls on their own. */
  useEffect(() => {
    if (!scrollCue) return

    const dismiss = () => {
      if (window.scrollY > 40) setScrollCue(false)
    }

    window.addEventListener('scroll', dismiss, { passive: true })
    return () => window.removeEventListener('scroll', dismiss)
  }, [scrollCue])

  useEffect(() => {
    if (phase !== 'unrolling' && phase !== 'open') return
    if (openedRef.current) return
    openedRef.current = true
    onOpened()
  }, [phase, onOpened])

  const onPointerDown = (e: PointerEvent<HTMLButtonElement>) => {
    if (phase !== 'sealed' && phase !== 'pulling') return
    e.preventDefault()
    cancelAnimationFrame(animFrameRef.current)
    e.currentTarget.setPointerCapture(e.pointerId)
    dragRef.current = {
      active: true,
      startY: e.clientY,
      startPull: pullRef.current,
      startTime: performance.now(),
      moved: false,
    }
    setPhase('pulling')
  }

  const onPointerMove = (e: PointerEvent<HTMLButtonElement>) => {
    if (!dragRef.current.active) return
    const delta = e.clientY - dragRef.current.startY
    if (Math.abs(delta) > 6) dragRef.current.moved = true
    setPullValue(dragRef.current.startPull + delta / MAX_PULL_PX)
  }

  const endDrag = (e: PointerEvent<HTMLButtonElement>) => {
    if (!dragRef.current.active) return
    dragRef.current.active = false
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {
      /* already released */
    }

    const elapsed = performance.now() - dragRef.current.startTime
    const isTap = !dragRef.current.moved && elapsed < 400

    if (isTap || pullRef.current >= PULL_THRESHOLD) {
      commitOpen()
      return
    }

    /* Spring closed */
    const from = pullRef.current
    const start = performance.now()
    const duration = 380

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = (1 - t) ** 3
      setPullValue(from * eased)
      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(tick)
        return
      }
      setPullValue(0)
      setPhase('sealed')
    }

    animFrameRef.current = requestAnimationFrame(tick)
  }

  const onKeyActivate = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== 'Enter' && e.key !== ' ') return
    e.preventDefault()
    commitOpen()
  }

  const opened = phase === 'open'
  const interacting = phase !== 'open'
  const showTab = phase !== 'open'
  const p = opened ? 1 : pull

  /* One continuous visual model — no style handoff snap */
  const scrollStyle = {
    '--scroll-unroll': String(p),
  } as CSSProperties

  const unrollStyle: CSSProperties = {
    gridTemplateRows: opened || p > 0 ? `${Math.max(p, 0.0001)}fr` : '0fr',
    transition: 'none',
  }

  const parchmentStyle: CSSProperties = {
    transform: `rotateX(${72 * (1 - p)}deg) translateZ(${-10 * (1 - p)}px)`,
    opacity: 0.45 + p * 0.55,
    transition: 'none',
  }

  const cylinderStyle: CSSProperties = {
    height: `${96 * (1 - p)}px`,
    opacity: String(Math.max(0, 1 - p * 1.15)),
    transform: 'none',
    transition: 'none',
    animation: p > 0.02 || phase === 'pulling' ? 'none' : undefined,
    pointerEvents: p > 0.85 ? 'none' : undefined,
  }

  const sealStyle: CSSProperties = {
    opacity: String(Math.max(0, 1 - p * 2.4)),
    transform: `scale(${1 + p * 0.3})`,
    transition: 'none',
  }

  const contentStyle: CSSProperties = {
    opacity: String(Math.min(1, Math.max(0, (p - 0.12) / 0.55))),
    transform: `translateY(${(1 - p) * 14}px)`,
    transition: 'none',
  }

  const bottomRodStyle: CSSProperties = {
    opacity: String(Math.min(1, Math.max(0, (p - 0.08) / 0.35))),
    transform: 'none',
    transition: 'none',
  }

  return (
    <section
      className={`cover ${opened ? 'cover--open' : 'cover--sealed'}`}
      aria-labelledby={titleId}
      data-lenis-prevent
    >
      <div className="cover-bg" aria-hidden>
        <JaliPattern className="cover-jali" />
        <div className="cover-vignette" />
        <div className="cover-dust" />
      </div>

      <FloralSpray className="cover-spray cover-spray--l" side="left" />
      <FloralSpray className="cover-spray cover-spray--r" side="right" />
      <Lantern className="cover-lantern cover-lantern--l" size="lg" />
      <Lantern className="cover-lantern cover-lantern--r" size="lg" />

      <div
        className={`scroll-scene ${interacting || p > 0 ? 'scroll-scene--animating' : ''}`}
      >
        <div
          className={`scroll-3d ${opened ? 'scroll-3d--open' : 'scroll-3d--live'}`}
          style={scrollStyle}
        >
          <div className="scroll-rod scroll-rod--top" aria-hidden>
            <span className="scroll-knob scroll-knob--left" />
            <span className="scroll-bar" />
            <span className="scroll-knob scroll-knob--right" />
          </div>

          <div className="scroll-stage">
            <div className="scroll-cylinder" aria-hidden style={cylinderStyle}>
              <div className="scroll-cylinder-body">
                <div className="scroll-cylinder-shine" />
                <div className="scroll-cylinder-texture" />
                <div className="scroll-seal" style={sealStyle}>
                  <EightPointStar className="scroll-seal-star" />
                </div>
              </div>
              <div className="scroll-cylinder-edge" />
            </div>

            <div className="scroll-unroll" style={unrollStyle}>
              <div className="scroll-unroll-body">
                <div className="scroll-sheet" style={parchmentStyle}>
                  <div className="scroll-parchment">
                    <div className="scroll-parchment-texture" aria-hidden />
                    <span className="scroll-parchment-border" aria-hidden />
                    <FloralCorner className="scroll-floral scroll-floral--tl" corner="tl" />
                    <FloralCorner className="scroll-floral scroll-floral--tr" corner="tr" />
                    <FloralCorner className="scroll-floral scroll-floral--bl" corner="bl" />
                    <FloralCorner className="scroll-floral scroll-floral--br" corner="br" />

                    <div className="scroll-content" style={contentStyle}>
                      <GeometricRosette className="scroll-content-rosette" />
                      <p className="scroll-eyebrow">The Wedding Of</p>
                      <h1 id={titleId} className="scroll-names">
                        <span>{partnerOne}</span>
                        <span className="scroll-amp">&</span>
                        <span>{partnerTwo}</span>
                      </h1>
                      <GoldDivider className="scroll-divider" />
                      <p className="scroll-date">{dateLabel}</p>
                      <p className="scroll-blessing">{blessing}</p>
                    </div>
                  </div>

                  <div
                    className="scroll-rod scroll-rod--bottom"
                    aria-hidden
                    style={bottomRodStyle}
                  >
                    <span className="scroll-knob scroll-knob--left" />
                    <span className="scroll-bar" />
                    <span className="scroll-knob scroll-knob--right" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="scroll-shadow"
            aria-hidden
            style={{
              opacity: 0.45 + p * 0.3,
              transform: `translateZ(-40px) scaleX(${0.6 + p * 0.55})`,
              transition: 'none',
            }}
          />
        </div>

        {showTab && (
          <button
            type="button"
            className={`scroll-pull-tab ${phase === 'pulling' ? 'scroll-pull-tab--dragging' : ''} ${phase === 'unrolling' ? 'scroll-pull-tab--leaving' : ''}`}
            style={{
              animation: p > 0.02 || phase === 'pulling' ? 'none' : undefined,
            }}
            aria-label="Pull the golden tab to open the invitation scroll"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onKeyDown={onKeyActivate}
          >
            <span className="scroll-pull-ring scroll-pull-ring--top" aria-hidden />
            <span className="scroll-pull-cord" aria-hidden />
            <span className="scroll-pull-ring scroll-pull-ring--bottom" aria-hidden />
            <span className="scroll-pull-handle">
              <span className="scroll-pull-handle-shine" aria-hidden />
              <EightPointStar className="scroll-pull-star" />
              <span className="scroll-pull-label">Pull</span>
            </span>
          </button>
        )}
      </div>

      <p
        className={`scroll-pull-hint ${phase === 'sealed' || phase === 'pulling' ? 'scroll-pull-hint--visible' : ''}`}
        aria-hidden
      >
        Pull the golden tab
      </p>

      <div
        className={`scroll-continue ${scrollCue ? 'scroll-continue--visible' : ''}`}
        aria-hidden={!scrollCue}
      >
        <span className="scroll-continue-chevrons" aria-hidden>
          <span className="scroll-continue-chevron" />
          <span className="scroll-continue-chevron" />
        </span>
        <span className="scroll-continue-label">Scroll to explore</span>
      </div>

      <CarpetBorder className="cover-carpet" />
    </section>
  )
}
