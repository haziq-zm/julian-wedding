import { type ReactNode } from 'react'
import { JaliPattern } from './JaliPattern'

type Tone = 'parchment' | 'parchment-soft' | 'olive' | 'olive-deep' | 'cream'

type Props = {
  children: ReactNode
  tone?: Tone
  className?: string
  id?: string
  fullBleed?: boolean
}

/** Section wrapper with layered parchment / olive surfaces */
export function InvitationSurface({
  children,
  tone = 'parchment',
  className = '',
  id,
  fullBleed = true,
}: Props) {
  return (
    <section
      id={id}
      className={`inv-surface inv-surface--${tone} ${fullBleed ? 'inv-surface--bleed' : ''} ${className}`.trim()}
    >
      <div className="inv-surface__grain" aria-hidden />
      <div className="inv-surface__geometry" aria-hidden />
      <JaliPattern className="inv-surface__jali" />
      <div className="inv-surface__botanical" aria-hidden />
      <div className="inv-surface__inner">{children}</div>
    </section>
  )
}
