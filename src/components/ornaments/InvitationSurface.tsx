import { type ReactNode } from 'react'
import { SparkleField } from './SparkleField'

type Tone = 'parchment' | 'parchment-soft' | 'olive' | 'olive-deep' | 'cream'
type Scene = 'dusk' | 'lantern'

type Props = {
  children: ReactNode
  tone?: Tone
  scene?: Scene
  className?: string
  id?: string
  fullBleed?: boolean
}

export function InvitationSurface({
  children,
  tone = 'parchment',
  scene,
  className = '',
  id,
  fullBleed = true,
}: Props) {
  const cinematic = scene ?? (tone === 'parchment' || tone === 'cream' || tone === 'parchment-soft' ? 'lantern' : 'dusk')

  return (
    <section
      id={id}
      className={`inv-surface inv-surface--${tone} inv-surface--cinematic inv-surface--${cinematic} ${fullBleed ? 'inv-surface--bleed' : ''} ${className}`.trim()}
    >
      <div className="inv-surface__photo" aria-hidden />
      <div className="inv-surface__veil" aria-hidden />
      <SparkleField count={10} />
      <div className="inv-surface__inner">{children}</div>
    </section>
  )
}
