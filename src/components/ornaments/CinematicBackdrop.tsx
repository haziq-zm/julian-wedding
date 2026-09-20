import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../ui/usePrefersReducedMotion'

export function CinematicBackdrop() {
  const layerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const layer = layerRef.current
    if (!layer) return

    let frame = 0

    const update = () => {
      frame = 0
      if (reducedMotion) {
        const skip = layer.offsetHeight * 0.18
        layer.style.transform = `translate3d(0, ${(-skip).toFixed(1)}px, 0)`
        return
      }

      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const progress = Math.min(1, Math.max(0, window.scrollY / max))
      /* Skip the pavilion ceiling so the invitation arch sits in the gateway, not under it. */
      const skip = layer.offsetHeight * 0.18
      const travel = Math.max(0, layer.offsetHeight - skip - window.innerHeight)
      layer.style.transform = `translate3d(0, ${(-(skip + travel * progress)).toFixed(1)}px, 0)`
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    const observer = new ResizeObserver(onScroll)
    observer.observe(document.body)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [reducedMotion])

  return (
    <div className="cinema-sky" aria-hidden>
      <div className="cinema-sky__layer" ref={layerRef} />
    </div>
  )
}
