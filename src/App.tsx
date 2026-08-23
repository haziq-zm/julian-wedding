import { useCallback, useEffect, useState, type FormEvent } from 'react'
import { wedding } from './config'
import { Countdown } from './components/Countdown'
import { FloralDecor } from './components/FloralDecor'
import { InvitationScroll } from './components/InvitationScroll'
import { ScratchCard } from './components/ScratchCard'
import './App.css'

function formatDateParts(date: Date) {
  return {
    month: date.toLocaleString('en-US', { month: 'long' }),
    day: date.getDate(),
    year: date.getFullYear(),
  }
}

export default function App() {
  const { month, day, year } = formatDateParts(wedding.date)
  const [opened, setOpened] = useState(false)
  const [rsvpName, setRsvpName] = useState('')
  const [rsvpGuests, setRsvpGuests] = useState('1')
  const [rsvpAttend, setRsvpAttend] = useState<'yes' | 'no'>('yes')
  const [rsvpSent, setRsvpSent] = useState(false)

  const handleOpened = useCallback(() => {
    setOpened(true)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('scroll-locked', !opened)
    return () => document.body.classList.remove('scroll-locked')
  }, [opened])

  const onRsvp = (e: FormEvent) => {
    e.preventDefault()
    setRsvpSent(true)
  }

  return (
    <div className={`page ${opened ? 'page--open' : 'page--sealed'}`}>
      <div className="atmosphere" aria-hidden />

      <InvitationScroll
        partnerOne={wedding.partnerOne}
        partnerTwo={wedding.partnerTwo}
        dateLabel={wedding.dateLabel}
        tagline={wedding.tagline}
        onOpened={handleOpened}
      />

      <div
        className={`details ${opened ? 'details--visible' : ''}`}
        aria-hidden={!opened}
        inert={!opened ? true : undefined}
      >
        <header className="hero hero--compact">
          <FloralDecor className="hero-floral hero-floral--tl" />
          <FloralDecor className="hero-floral hero-floral--br" />
          <p className="hero-invite">The celebration</p>
          <h2 className="hero-compact-title">
            {wedding.partnerOne} & {wedding.partnerTwo}
          </h2>
          <p className="hero-date">
            {month} {day}, {year}
          </p>
          <a className="hero-cta" href="#countdown">
            See the details
          </a>
        </header>

        <section id="countdown" className="section section-countdown">
          <p className="section-eyebrow">Counting down</p>
          <h2 className="section-title">Until we say I do</h2>
          <FloralDecor className="section-divider" variant="divider" />
          <Countdown target={wedding.date} />
          <p className="section-support">{wedding.dateLabel}</p>
          <p className="section-muted">{wedding.timeLabel}</p>
        </section>

        <section className="section section-location">
          <p className="section-eyebrow">The place</p>
          <h2 className="section-title">Scratch to reveal</h2>
          <FloralDecor className="section-divider" variant="divider" />
          <p className="section-support">
            A little surprise before you find us — scratch the foil below.
          </p>
          <ScratchCard location={wedding.location} />
        </section>

        <section className="section section-schedule">
          <p className="section-eyebrow">The day</p>
          <h2 className="section-title">Our timeline</h2>
          <FloralDecor className="section-divider" variant="divider" />
          <ol className="timeline">
            {wedding.schedule.map((item) => (
              <li key={item.title} className="timeline-item">
                <time className="timeline-time">{item.time}</time>
                <div className="timeline-body">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-detail">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section section-rsvp">
          <FloralDecor className="rsvp-spray" variant="spray" />
          <p className="section-eyebrow">Kindly reply</p>
          <h2 className="section-title">Will you join us?</h2>
          <FloralDecor className="section-divider" variant="divider" />
          <p className="section-support">
            Please respond by {wedding.rsvp.deadline}
          </p>

          {rsvpSent ? (
            <p className="rsvp-thanks" role="status">
              Thank you, {rsvpName || 'friend'} — we&apos;ve received your reply.
            </p>
          ) : (
            <form className="rsvp-form" onSubmit={onRsvp}>
              <label className="field">
                <span>Your name</span>
                <input
                  required
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                  placeholder="Full name"
                  autoComplete="name"
                />
              </label>
              <label className="field">
                <span>Number of guests</span>
                <select
                  value={rsvpGuests}
                  onChange={(e) => setRsvpGuests(e.target.value)}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
              <fieldset className="field field-choice">
                <legend>Attendance</legend>
                <label>
                  <input
                    type="radio"
                    name="attend"
                    checked={rsvpAttend === 'yes'}
                    onChange={() => setRsvpAttend('yes')}
                  />
                  Joyfully accept
                </label>
                <label>
                  <input
                    type="radio"
                    name="attend"
                    checked={rsvpAttend === 'no'}
                    onChange={() => setRsvpAttend('no')}
                  />
                  Regretfully decline
                </label>
              </fieldset>
              <button type="submit" className="rsvp-submit">
                Send RSVP
              </button>
            </form>
          )}
        </section>

        <footer className="footer">
          <p className="footer-names">
            {wedding.partnerOne} & {wedding.partnerTwo}
          </p>
          <p className="footer-note">With love — {year}</p>
        </footer>
      </div>
    </div>
  )
}
