import { useState, type FormEvent } from 'react'
import { AnimatedDivider } from '../ornaments/AnimatedDivider'
import { DecorativeStars } from '../ornaments/DecorativeStars'
import { EightPointStar } from '../ornaments/EightPointStar'
import { FloralBranch } from '../ornaments/FloralBranch'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { JaliPattern } from '../ornaments/JaliPattern'
import { Lantern } from '../ornaments/Lantern'
import { MughalArchFrame } from '../ornaments/MughalArchFrame'
import { PalaceSkyline } from '../ornaments/PalaceSkyline'
import { Reveal } from '../ui/Reveal'

type Props = {
  deadlineLabel: string
}

export function RsvpSection({ deadlineLabel }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [attending, setAttending] = useState<'yes' | 'no'>('yes')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="rsvp" className="grand-rsvp">
      <div className="grand-rsvp__geometry" aria-hidden />
      <JaliPattern className="grand-rsvp__screen" />
      <PalaceSkyline className="grand-rsvp__skyline" arcade={false} />
      <DecorativeStars count={12} />
      <FloralBranch position="top-left" size="large" className="botanical-reveal botanical-reveal--left" />
      <FloralBranch position="top-right" size="large" className="botanical-reveal botanical-reveal--right" />
      <FloralBranch position="bottom-left" size="medium" />
      <FloralBranch position="bottom-right" size="medium" />

      <div className="grand-rsvp__lanterns" aria-hidden>
        <span><Lantern size="md" /></span>
        <span><Lantern size="md" /></span>
      </div>

      <Reveal as="header" variant="clip" className="grand-rsvp__header">
        <p className="grand-rsvp__honour">
          Your presence
          <em>is our honour</em>
        </p>
        <p className="inv-label">
          <EightPointStar className="grand-rsvp__label-star" />
          Répondez s&apos;il vous plaît
          <EightPointStar className="grand-rsvp__label-star" />
        </p>
        <AnimatedDivider light />
        <p className="grand-rsvp__deadline">{deadlineLabel}</p>
      </Reveal>

      <Reveal variant="scale" className="grand-rsvp__arch">
        <MughalArchFrame
          size="fluid"
          tone="olive"
          variant="onion"
          crest={<GeometricRosette className="grand-rsvp__crest" />}
        >
          {submitted ? (
            <div className="grand-rsvp__thanks" role="status">
              <span aria-hidden>❦</span>
              <h2>With gratitude</h2>
              <p>We look forward to celebrating with you.</p>
            </div>
          ) : (
            <form className="grand-rsvp__form" onSubmit={onSubmit}>
              <label>
                <span>Full name</span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                />
              </label>

              <fieldset className="grand-rsvp__choice">
                <legend>Will you join us?</legend>
                <label className={attending === 'yes' ? 'is-chosen' : undefined}>
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={attending === 'yes'}
                    onChange={() => setAttending('yes')}
                  />
                  <span className="grand-rsvp__chip-star" aria-hidden>✦</span>
                  Joyfully accepts
                </label>
                <label className={attending === 'no' ? 'is-chosen' : undefined}>
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={attending === 'no'}
                    onChange={() => setAttending('no')}
                  />
                  <span className="grand-rsvp__chip-star" aria-hidden>✦</span>
                  Regretfully declines
                </label>
              </fieldset>

              {attending === 'yes' && (
                <label>
                  <span>Number of guests</span>
                  <select name="guests" defaultValue="1">
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                  </select>
                </label>
              )}

              <label>
                <span>A note for the couple</span>
                <input
                  type="text"
                  name="message"
                  placeholder="Your warm wishes"
                />
              </label>

              <button type="submit" className="grand-rsvp__submit">
                <span aria-hidden>✦</span>
                Send RSVP
                <span aria-hidden>✦</span>
              </button>
            </form>
          )}
        </MughalArchFrame>
      </Reveal>
    </section>
  )
}
