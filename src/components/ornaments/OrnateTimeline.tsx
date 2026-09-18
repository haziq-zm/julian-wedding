import { Reveal } from '../ui/Reveal'

export type TimelineEvent = {
  id: string
  label: string
  time: string
  date?: string
  location?: string
  detail: string
}

type Props = {
  events: readonly TimelineEvent[]
  dateLabel: string
}

const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI']

function TimelineIcon({ id }: { id: string }) {
  if (id.includes('mehendi')) {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M16 6c2 4 3 7 3 10 0 4-1.2 7-3 10-1.8-3-3-6-3-10 0-3 1-6 3-10Z" fill="currentColor" />
        <path d="M10 14c3 1.2 5 2 6 2s3-.8 6-2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M11 19c2.5.8 3.8 1.3 5 1.3s2.5-.5 5-1.3" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    )
  }

  if (id.includes('music') || id.includes('celebration')) {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M12 24a3 3 0 1 1-2-2.8V10l12-3v12.2a3 3 0 1 1-2 2.8V12l-8 2v10Z" fill="currentColor" />
      </svg>
    )
  }

  if (id.includes('dinner') || id.includes('feast') || id.includes('food')) {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M8 10c0 4 2 6 4 6v10h2V8c-3 0-6 1-6 2Zm14-2v20h2V16c2 0 4-2 4-6-2 0-5 1-6 2Z" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="12" cy="16" r="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="16" r="5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function OrnateTimeline({ events, dateLabel }: Props) {
  return (
    <ol className="inv-program inv-program--pills">
      {events.map((event, index) => (
        <li className="inv-program__pill-wrap" key={event.id}>
          <Reveal as="article" variant="up" delay={index * 120} className="inv-program__pill">
            <span className="inv-program__badge" aria-hidden>
              <TimelineIcon id={event.id} />
            </span>
            <div className="inv-program__copy">
              <span className="inv-program__numeral">{numerals[index] ?? index + 1}</span>
              <h3 className="inv-program__label">{event.label}</h3>
              <p className="inv-program__detail">
                {event.time} · {event.date ?? dateLabel}
                {event.location ? ` · ${event.location}` : ''}
              </p>
            </div>
            <span className="inv-program__chevron" aria-hidden>
              ›
            </span>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
