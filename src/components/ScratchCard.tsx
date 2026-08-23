import { useCallback, useEffect, useRef, useState } from 'react'
import confetti from 'canvas-confetti'

type LocationInfo = {
  venue: string
  address: string
  mapUrl: string
  note: string
}

type Props = {
  location: LocationInfo
}

const REVEAL_THRESHOLD = 0.38
const BRUSH = 42

export function ScratchCard({ location }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sizeRef = useRef({ w: 0, h: 0 })
  const lastPointRef = useRef<{ x: number; y: number } | null>(null)
  const wrappingRef = useRef(false)
  const revealedRef = useRef(false)
  const [revealed, setRevealed] = useState(false)
  const [hintVisible, setHintVisible] = useState(true)

  const paintCover = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number) => {
    const gradient = ctx.createLinearGradient(0, 0, w, h)
    gradient.addColorStop(0, '#4B5135')
    gradient.addColorStop(0.4, '#B59655')
    gradient.addColorStop(0.7, '#806633')
    gradient.addColorStop(1, '#343A25')
    ctx.globalCompositeOperation = 'source-over'
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, w, h)

    for (let i = 0; i < 90; i++) {
      ctx.fillStyle = `rgba(244,239,228,${0.06 + Math.random() * 0.16})`
      ctx.beginPath()
      ctx.arc(
        Math.random() * w,
        Math.random() * h,
        Math.random() * 1.8 + 0.4,
        0,
        Math.PI * 2,
      )
      ctx.fill()
    }

    ctx.fillStyle = 'rgba(244, 239, 228, 0.88)'
    ctx.font = `500 ${w < 340 ? 12 : 14}px Cinzel, serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('Scratch with your finger', w / 2, h / 2)
  }, [])

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || revealedRef.current) return
    const parent = canvas.parentElement
    if (!parent) return
    const rect = parent.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = Math.max(1, Math.floor(rect.width))
    const h = Math.max(1, Math.floor(rect.height))
    sizeRef.current = { w, h }
    canvas.width = Math.floor(w * dpr)
    canvas.height = Math.floor(h * dpr)
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    paintCover(ctx, w, h)
  }, [paintCover])

  useEffect(() => {
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [resizeCanvas])

  const checkReveal = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || revealedRef.current) return
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return

    const { width, height } = canvas
    const image = ctx.getImageData(0, 0, width, height)
    const data = image.data
    let transparent = 0
    const step = 16
    for (let i = 3; i < data.length; i += 4 * step) {
      if (data[i]! < 40) transparent++
    }
    const samples = Math.ceil(data.length / (4 * step))
    if (transparent / samples >= REVEAL_THRESHOLD) {
      revealedRef.current = true
      setRevealed(true)
      const { w, h } = sizeRef.current
      ctx.clearRect(0, 0, w, h)
      if (navigator.vibrate) navigator.vibrate(18)
      confetti({
        particleCount: 70,
        spread: 65,
        origin: { y: 0.7 },
        colors: ['#4B5135', '#B59655', '#641F24', '#F4EFE4'],
      })
    }
  }, [])

  const scratchAt = useCallback(
    (clientX: number, clientY: number) => {
      const canvas = canvasRef.current
      if (!canvas || revealedRef.current) return
      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      if (!ctx) return
      const rect = canvas.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top
      ctx.globalCompositeOperation = 'destination-out'
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.lineWidth = BRUSH * 2

      const last = lastPointRef.current
      if (last) {
        ctx.beginPath()
        ctx.moveTo(last.x, last.y)
        ctx.lineTo(x, y)
        ctx.stroke()
      }

      ctx.beginPath()
      ctx.arc(x, y, BRUSH, 0, Math.PI * 2)
      ctx.fill()
      lastPointRef.current = { x, y }
      setHintVisible(false)
      checkReveal()
    },
    [checkReveal],
  )

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    wrappingRef.current = true
    lastPointRef.current = null
    e.currentTarget.setPointerCapture(e.pointerId)
    scratchAt(e.clientX, e.clientY)
  }

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!wrappingRef.current) return
    e.preventDefault()
    scratchAt(e.clientX, e.clientY)
  }

  const onPointerUp = () => {
    wrappingRef.current = false
    lastPointRef.current = null
  }

  return (
    <div className={`scratch ${revealed ? 'scratch--revealed' : ''}`}>
      <div className="scratch-surface" aria-label="Scratch card revealing venue">
        <div className="scratch-prize">
          <p className="scratch-eyebrow">You&apos;re invited to</p>
          <h3 className="scratch-venue">{location.venue}</h3>
          <p className="scratch-address">{location.address}</p>
          <p className="scratch-note">{location.note}</p>
          <a
            className="scratch-map"
            href={location.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open in Maps
          </a>
        </div>
        {!revealed && (
          <canvas
            ref={canvasRef}
            className="scratch-canvas"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          />
        )}
      </div>
      {hintVisible && !revealed && (
        <p className="scratch-hint">Swipe your finger across the foil</p>
      )}
      {revealed && (
        <p className="scratch-hint scratch-hint--done">Venue revealed — see you there</p>
      )}
    </div>
  )
}
