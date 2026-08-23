import { useLenis } from 'lenis/react'
import {
  type ReactNode,
  useEffect,
  useRef,
} from 'react'

type Effect = 'fade-up' | 'scale-in' | 'parallax'

type Props = {
  children: ReactNode
  className?: string
  effect?: Effect
  /** Parallax intensity — higher = more movement */
  speed?: number
  as?: 'div' | 'article'
}

function applyEffect(
  el: HTMLElement,
  effect: Effect,
  speed: number,
) {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight
  const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.55)))
  const centerOffset = (rect.top + rect.height * 0.5 - vh * 0.5) / vh

  switch (effect) {
    case 'parallax':
      el.style.transform = `translate3d(0, ${centerOffset * speed * 100}px, 0)`
      break
    case 'scale-in':
      el.style.opacity = String(0.25 + progress * 0.75)
      el.style.transform = `scale(${0.94 + progress * 0.06})`
      break
    case 'fade-up':
    default:
      el.style.opacity = String(0.2 + progress * 0.8)
      el.style.transform = `translate3d(0, ${(1 - progress) * 32}px, 0)`
      break
  }
}

export function LenisScrollElement({
  children,
  className = '',
  effect = 'fade-up',
  speed = 0.2,
  as = 'div',
}: Props) {
  const divRef = useRef<HTMLDivElement>(null)
  const articleRef = useRef<HTMLElement>(null)
  const ref = as === 'article' ? articleRef : divRef

  useLenis(() => {
    const el = ref.current
    if (!el) return
    applyEffect(el, effect, speed)
  })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => applyEffect(el, effect, speed)
    update()
    const id = requestAnimationFrame(update)
    return () => cancelAnimationFrame(id)
  }, [effect, speed])

  const classNames = `lenis-scroll-el lenis-scroll-el--${effect} ${className}`.trim()

  if (as === 'article') {
    return (
      <article ref={articleRef} className={classNames}>
        {children}
      </article>
    )
  }

  return (
    <div ref={divRef} className={classNames}>
      {children}
    </div>
  )
}
