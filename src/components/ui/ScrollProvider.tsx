import { useEffect, type ReactNode } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

type Props = {
  enabled: boolean
  children: ReactNode
}

/**
 * Native scroll with smooth anchor jumps — no Lenis RAF loop.
 */
export function ScrollProvider({ enabled, children }: Props) {
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const root = document.documentElement
    root.style.scrollBehavior = enabled && !reducedMotion ? 'smooth' : 'auto'
    return () => {
      root.style.scrollBehavior = ''
    }
  }, [enabled, reducedMotion])

  useEffect(() => {
    if (!enabled) return

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest('a[href^="#"]')
      if (!(link instanceof HTMLAnchorElement)) return

      const hash = link.getAttribute('href')
      if (!hash || hash === '#') return

      const target = document.querySelector(hash)
      if (!(target instanceof HTMLElement)) return

      event.preventDefault()
      target.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [enabled, reducedMotion])

  return <>{children}</>
}
