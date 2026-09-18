import { AnimatedDivider } from '../ornaments/AnimatedDivider'
import { Reveal } from '../ui/Reveal'

type Ritual = {
  id: string
  index: string
  eyebrow: string
  title: string
  caption: string
  note: string
}

const rituals: Ritual[] = [
  {
    id: 'kahwa',
    index: 'I',
    eyebrow: 'The Welcome',
    title: 'Kahwa',
    caption: 'Saffron steam, cardamom warmth, poured with welcome',
    note: 'Poured from the copper samovar',
  },
  {
    id: 'food',
    index: 'II',
    eyebrow: 'The Feast',
    title: 'Food',
    caption: 'Copper gleam and ritual welcome, ready for the feast',
    note: 'Served on the shared trami',
  },
  {
    id: 'music',
    index: 'III',
    eyebrow: 'The Celebration',
    title: 'Music',
    caption: 'The heartbeat of celebration, calling guests to joy',
    note: 'Wanvun sung late into the night',
  },
]

function RitualMark({ id }: { id: string }) {
  if (id === 'kahwa') {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M10 22c0 4 2.5 6 6 6s6-2 6-6v-8H10v8Z" fill="currentColor" />
        <path d="M9 14h14v2H9z" fill="currentColor" opacity="0.75" />
        <path d="M22 16c3 0 5 2 5 4.5S25 25 22 25" stroke="currentColor" strokeWidth="1.4" />
        <path d="M13 8c1-2 2-3 2.5-4M16 8c.6-2.2 1.6-3.2 2-4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    )
  }

  if (id === 'music') {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="12" cy="22" r="3.5" fill="currentColor" />
        <path d="M15.5 22V9l8-2v13" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="23.5" cy="20" r="3.5" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <ellipse cx="16" cy="22" rx="9" ry="4" fill="currentColor" opacity="0.85" />
      <path d="M9 20c2 4 4.5 6 7 6s5-2 7-6" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="16" cy="16" rx="3" ry="2.2" fill="currentColor" />
    </svg>
  )
}

export function FeastChapter() {
  return (
    <Reveal
      as="article"
      variant="up"
      className="feast-suite glass-card glass-card--arch"
      aria-labelledby="wazwan-title"
    >
      <p className="inv-label">The Kashmiri Table</p>
      <h2 id="wazwan-title" className="feast-suite__title">
        Welcome, feast <em>&amp; music</em>
      </h2>
      <AnimatedDivider light />
      <p className="feast-suite__lead">
        Three gestures of hospitality gathered as one welcome.
      </p>

      <ul className="feast-suite__list">
        {rituals.map((ritual) => (
          <li className="feast-suite__item" key={ritual.id}>
            <span className="feast-suite__badge" aria-hidden>
              <RitualMark id={ritual.id} />
            </span>
            <div className="feast-suite__copy">
              <span className="feast-suite__index">{ritual.index}</span>
              <p className="feast-suite__eyebrow">{ritual.eyebrow}</p>
              <h3 className="feast-suite__name">{ritual.title}</h3>
              <p className="feast-suite__caption">{ritual.caption}</p>
              <p className="feast-suite__note">{ritual.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
