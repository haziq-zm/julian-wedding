import { type CSSProperties, type ReactNode } from 'react'
import { useInView } from './useInView'

type RevealVariant = 'up' | 'left' | 'right' | 'clip' | 'scale' | 'unfurl'

type Props = {
  children: ReactNode
  className?: string
  variant?: RevealVariant
  delay?: number
  trigger?: number
  as?: 'div' | 'article' | 'header' | 'li' | 'figure'
}

export function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  trigger,
  as: Element = 'div',
}: Props) {
  const { ref, inView } = useInView(trigger)

  return (
    <Element
      ref={ref as never}
      className={`reveal reveal--${variant} ${inView ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Element>
  )
}
