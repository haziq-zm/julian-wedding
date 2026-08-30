import { EightPointStar } from './EightPointStar'
import { GeometricRosette } from './GeometricRosette'
import { JaliPattern } from './JaliPattern'
import { MughalArchFrame } from './MughalArchFrame'
import { Reveal } from '../ui/Reveal'

export type TimelineEvent = {
  id: string
  label: string
  time: string
  location?: string
  detail: string
}

type Props = {
  events: readonly TimelineEvent[]
  dateLabel: string
}

const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI']
const domes = ['cusped', 'onion', 'pointed'] as const

/**
 * The programme reads as a row of palace gateways rather than a list: with only
 * a couple of ceremonies an alternating timeline leaves the page half empty.
 */
export function OrnateTimeline({ events, dateLabel }: Props) {
  return (
    <div className="inv-program">
      <JaliPattern className="inv-program__screen" />
      <span className="inv-program__ground" aria-hidden />

      <ol className="inv-program__gates">
        {events.map((event, index) => (
          <li className="inv-program__gate" key={event.id}>
            {index > 0 && (
              <span className="inv-program__link" aria-hidden>
                <EightPointStar />
              </span>
            )}

            <Reveal variant="clip" delay={index * 140}>
              <MughalArchFrame
                size="fluid"
                tone="parchment"
                variant={domes[index % domes.length]}
                crest={<GeometricRosette className="inv-program__crest" />}
              >
                <article className="inv-program__body">
                  <span className="inv-program__numeral" aria-hidden>
                    {numerals[index] ?? index + 1}
                  </span>
                  <h3 className="inv-program__label">{event.label}</h3>
                  <span className="inv-program__rule" aria-hidden />
                  <p className="inv-program__time">{event.time}</p>
                  <p className="inv-program__date">{dateLabel}</p>
                  {event.location && (
                    <p className="inv-program__location">{event.location}</p>
                  )}
                  <p className="inv-program__detail">{event.detail}</p>
                </article>
              </MughalArchFrame>
            </Reveal>

            <span className="inv-program__step" aria-hidden />
          </li>
        ))}
      </ol>
    </div>
  )
}
