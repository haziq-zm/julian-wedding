import type { ReactNode } from 'react'
import { AnimatedDivider } from '../ornaments/AnimatedDivider'
import { FloralBranch } from '../ornaments/FloralBranch'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { JaliPattern } from '../ornaments/JaliPattern'
import { MughalArchFrame } from '../ornaments/MughalArchFrame'
import { Reveal } from '../ui/Reveal'

type Variant = 'light' | 'deep'
type Motif = 'kahwa' | 'feast' | 'music'

type Props = {
  title: string
  caption: string
  motif: Motif
  variant?: Variant
  index?: string
  eyebrow?: string
  note?: string
  plaque?: string
  className?: string
}

function KahwaMotif() {
  return (
    <svg className="feast-motif" viewBox="0 0 200 240" fill="none" aria-hidden>
      <ellipse cx="100" cy="214" rx="56" ry="10" fill="currentColor" opacity="0.1" />
      <path
        d="M64 172c0 24 16 36 36 36s36-12 36-36V98H64v74Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M58 98h84c5 0 9-4 9-9s-4-9-9-9H58c-5 0-9 4-9 9s4 9 9 9Z"
        fill="currentColor"
        opacity="0.78"
      />
      <path
        d="M78 80h44c3 0 6-3 6-7V58c0-14-10-22-28-22S72 44 72 58v15c0 4 3 7 6 7Z"
        fill="currentColor"
        opacity="0.62"
      />
      <path
        d="M140 120c18 0 32 12 32 30s-14 30-32 30"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.72"
      />
      <path
        d="M86 46c5-12 12-18 14-26M100 44c3-14 10-20 12-28M114 46c4-10 9-18 10-24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.42"
      />
    </svg>
  )
}

function FeastMotif() {
  return (
    <svg className="feast-motif" viewBox="0 0 200 240" fill="none" aria-hidden>
      <ellipse cx="100" cy="212" rx="60" ry="11" fill="currentColor" opacity="0.1" />
      <ellipse cx="100" cy="156" rx="66" ry="24" fill="currentColor" opacity="0.16" />
      <path
        d="M44 152c10 30 30 48 56 48s46-18 56-48c-16 10-36 14-56 14s-40-4-56-14Z"
        fill="currentColor"
        opacity="0.52"
      />
      <path
        d="M68 134c10-22 20-32 32-32s22 10 32 32"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.72"
      />
      <ellipse cx="100" cy="118" rx="14" ry="10" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

function MusicMotif() {
  return (
    <svg className="feast-motif" viewBox="0 0 200 240" fill="none" aria-hidden>
      <ellipse cx="100" cy="214" rx="52" ry="10" fill="currentColor" opacity="0.1" />
      <ellipse cx="100" cy="152" rx="50" ry="56" fill="currentColor" opacity="0.48" />
      <ellipse cx="100" cy="152" rx="30" ry="34" fill="currentColor" opacity="0.2" />
      <path
        d="M100 96V66c0-8 6-12 14-10l26 7"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        opacity="0.78"
      />
      <circle cx="140" cy="62" r="11" fill="currentColor" opacity="0.72" />
    </svg>
  )
}

const MOTIFS: Record<Motif, () => ReactNode> = {
  kahwa: KahwaMotif,
  feast: FeastMotif,
  music: MusicMotif,
}

export function FeastChapter({
  title,
  caption,
  motif,
  variant = 'light',
  index = 'I',
  eyebrow = 'A Kashmiri Ritual',
  note,
  plaque,
  className = '',
}: Props) {
  const Motif = MOTIFS[motif]
  const archVariant = title === 'Food' ? 'onion' : title === 'Music' ? 'cusped' : 'pointed'

  return (
    <article
      id={title === 'Food' ? 'food' : undefined}
      className={`feast-chapter feast-chapter--${variant} ${className}`.trim()}
    >
      <div className="feast-chapter__backdrop" aria-hidden>
        <JaliPattern className="feast-chapter__screen" />
        <span className="feast-chapter__wash" />
      </div>

      <FloralBranch
        position={variant === 'deep' ? 'top-right' : 'top-left'}
        size="large"
        className={`botanical-reveal botanical-reveal--${variant === 'deep' ? 'right' : 'left'}`}
      />

      <div className="feast-chapter__composition">
        <Reveal
          variant={variant === 'deep' ? 'right' : 'left'}
          className="feast-chapter__copy"
        >
          <span className="feast-chapter__index" aria-hidden>
            {index}
          </span>
          <p className="inv-label">{eyebrow}</p>
          <h3 className="feast-chapter__title">{title}</h3>
          <AnimatedDivider light={variant === 'deep'} />
          <p className="feast-chapter__caption">{caption}</p>
          {note && <p className="feast-chapter__note">{note}</p>}
        </Reveal>

        <Reveal variant="clip" className="feast-chapter__shrine">
          <MughalArchFrame
            size="fluid"
            tone={variant === 'deep' ? 'deep' : 'parchment'}
            variant={archVariant}
            crest={<GeometricRosette className="feast-chapter__crest" />}
          >
            <div className="feast-chapter__niche">
              <div className="feast-chapter__halo" aria-hidden />
              <div className="feast-chapter__canvas feast-chapter__canvas--static" aria-hidden>
                <Motif />
              </div>
              <span className="feast-chapter__pedestal" aria-hidden />
            </div>
          </MughalArchFrame>
          <div className="feast-chapter__plaque">
            <span>✦</span>
            {plaque ?? `The Art of ${title}`}
            <span>✦</span>
          </div>
        </Reveal>
      </div>
    </article>
  )
}
