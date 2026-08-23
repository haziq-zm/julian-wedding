import { ReactLenis, useLenis } from 'lenis/react'
import { type ReactNode, useEffect } from 'react'
import 'lenis/dist/lenis.css'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

type Props = {
  enabled: boolean
  children: ReactNode
}

function LenisController({ enabled }: { enabled: boolean }) {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return
    if (enabled) lenis.start()
    else lenis.stop()
  }, [lenis, enabled])

  return null
}

function AnchorScrollHandler({ enabled }: { enabled: boolean }) {
  const lenis = useLenis()

  useEffect(() => {
    if (!enabled || !lenis) return

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest('a[href^="#"]')
      if (!(link instanceof HTMLAnchorElement)) return

      const hash = link.getAttribute('href')
      if (!hash || hash === '#') return

      const target = document.querySelector(hash)
      if (!(target instanceof HTMLElement)) return

      event.preventDefault()
      lenis.scrollTo(target, { offset: -12, duration: 1.35 })
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [enabled, lenis])

  return null
}

export function LenisScrollProvider({ enabled, children }: Props) {
  const reducedMotion = usePrefersReducedMotion()

  if (reducedMotion) return <>{children}</>

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.15,
        smoothWheel: true,
        touchMultiplier: 1.15,
        syncTouch: true,
        syncTouchLerp: 0.08,
      }}
    >
      <LenisController enabled={enabled} />
      <AnchorScrollHandler enabled={enabled} />
      {children}
    </ReactLenis>
  )
}
