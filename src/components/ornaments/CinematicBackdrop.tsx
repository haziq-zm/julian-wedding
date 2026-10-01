import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../ui/usePrefersReducedMotion'

export function CinematicBackdrop() {
  const layerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const layer = layerRef.current
    if (!layer) return

    const phoneQuery = window.matchMedia('(hover: none) and (pointer: coarse), (max-width: 820px)')
    let frame = 0
    let lastY = Number.NaN
    let viewport = window.innerHeight
    let maxScroll = 1
    let desktopSkip = 0
    let desktopTravel = 0
    let measuredAt = 0

    const measure = () => {
      viewport = window.innerHeight || 1
      maxScroll = Math.max(1, document.documentElement.scrollHeight - viewport)
      measuredAt = performance.now()
      if (phoneQuery.matches) return
      desktopSkip = layer.offsetHeight * 0.18
      desktopTravel = Math.max(0, layer.offsetHeight - desktopSkip - viewport)
    }

    const update = () => {
      frame = 0
      if (reducedMotion) {
        if (lastY !== 0) {
          lastY = 0
          layer.style.transform = 'none'
        }
        return
      }

      const now = performance.now()
      if (now - measuredAt > 900) measure()

      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll))
      const y = phoneQuery.matches
        ? -Math.round(viewport * 0.22 * progress)
        : -Math.round(desktopSkip + desktopTravel * progress)

      if (y === lastY) return
      lastY = y
      layer.style.transform = `translate3d(0,${y}px,0)`
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    measure()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [reducedMotion])

  return (
    <div className="cinema-sky" aria-hidden>
      <div className="cinema-sky__layer" ref={layerRef} />
    </div>
  )
}
