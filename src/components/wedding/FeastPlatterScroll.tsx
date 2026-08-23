import { useLenis } from 'lenis/react'
import type Lenis from 'lenis'
import { useEffect, useRef } from 'react'
import { GoldDivider } from '../ornaments/GoldDivider'

const SPIN_TURNS = 1.35

function applyFeastMotion(
  wrap: HTMLDivElement,
  img: HTMLImageElement,
  scroll: number,
) {
  const rect = wrap.getBoundingClientRect()
  const vh = window.innerHeight
  const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.62)))
  const centerOffset = (rect.top + rect.height * 0.5 - vh * 0.5) / vh

  const docTop = rect.top + scroll
  const spinStart = docTop - vh
  const spinEnd = docTop + rect.height
  const spinProgress = Math.min(
    1,
    Math.max(0, (scroll - spinStart) / (spinEnd - spinStart)),
  )
  const spin = spinProgress * 360 * SPIN_TURNS

  wrap.style.opacity = String(0.2 + progress * 0.8)
  img.style.transform = [
    `translate3d(0, ${centerOffset * -42}px, 0)`,
    `scale(${0.86 + progress * 0.14})`,
    `rotate(${spin}deg)`,
  ].join(' ')
}

export function FeastPlatterScroll() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useLenis((lenis: Lenis) => {
    const wrap = wrapRef.current
    const img = imgRef.current
    if (!wrap || !img) return
    applyFeastMotion(wrap, img, lenis.scroll)
  })

  useEffect(() => {
    const wrap = wrapRef.current
    const img = imgRef.current
    if (!wrap || !img) return

    const update = () => applyFeastMotion(wrap, img, window.scrollY)
    update()
    const id = requestAnimationFrame(update)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div ref={wrapRef} className="feast-scroll lenis-scroll-el lenis-scroll-el--parallax">
      <p className="feast-scroll-eyebrow">The Feast</p>
      <GoldDivider className="feast-scroll-divider" />
      <div className="feast-scroll-stage">
        <div className="feast-scroll-glow" aria-hidden />
        <img
          ref={imgRef}
          src="/images/feast-platter.png"
          alt="Traditional wedding feast platter"
          className="feast-scroll-image"
          width={900}
          height={897}
          loading="lazy"
          decoding="async"
        />
      </div>
      <p className="feast-scroll-caption">
        Shared tables, fragrant rice, and celebration until late
      </p>
    </div>
  )
}
