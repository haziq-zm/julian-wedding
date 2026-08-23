import { type FormEvent } from 'react'
import { CarpetBorder } from '../ornaments/CarpetBorder'
import { FloralCorner } from '../ornaments/FloralCorner'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { IslamicArch } from '../ornaments/IslamicArch'
import { JaliPattern } from '../ornaments/JaliPattern'
import { OrnamentalFrame } from '../ornaments/OrnamentalFrame'
import { SectionHeader } from '../ornaments/SectionHeader'

type Props = {
  deadline: string
  rsvpName: string
  rsvpGuests: string
  rsvpAttend: 'yes' | 'no'
  rsvpSent: boolean
  onNameChange: (value: string) => void
  onGuestsChange: (value: string) => void
  onAttendChange: (value: 'yes' | 'no') => void
  onSubmit: (e: FormEvent) => void
}

export function RSVPSection({
  deadline,
  rsvpName,
  rsvpGuests,
  rsvpAttend,
  rsvpSent,
  onNameChange,
  onGuestsChange,
  onAttendChange,
  onSubmit,
}: Props) {
  return (
    <section id="rsvp" className="rsvp-sec section-band section-band--parchment">
      <JaliPattern className="rsvp-jali" />

      <SectionHeader eyebrow="Kindly Reply" title="RSVP" />
      <p className="rsvp-deadline">Please respond by {deadline}</p>

      <OrnamentalFrame variant="parchment" className="rsvp-panel">
        <IslamicArch className="rsvp-arch rsvp-arch--sil" variant="silhouette" />
        <IslamicArch className="rsvp-arch rsvp-arch--line" />
        <GeometricRosette className="rsvp-rosette" />
        <FloralCorner className="rsvp-floral rsvp-floral--tl" corner="tl" />
        <FloralCorner className="rsvp-floral rsvp-floral--tr" corner="tr" />
        <FloralCorner className="rsvp-floral rsvp-floral--bl" corner="bl" />
        <FloralCorner className="rsvp-floral rsvp-floral--br" corner="br" />

        <div className="rsvp-panel-inner">
          {rsvpSent ? (
            <p className="rsvp-thanks" role="status">
              Thank you, {rsvpName || 'friend'} — we have received your reply with
              gratitude.
            </p>
          ) : (
            <form className="rsvp-form" onSubmit={onSubmit}>
              <label className="field">
                <span>Your Name</span>
                <input
                  required
                  value={rsvpName}
                  onChange={(e) => onNameChange(e.target.value)}
                  placeholder="Full name"
                  autoComplete="name"
                />
              </label>
              <label className="field">
                <span>Number of Guests</span>
                <select
                  value={rsvpGuests}
                  onChange={(e) => onGuestsChange(e.target.value)}
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
                    onChange={() => onAttendChange('yes')}
                  />
                  Joyfully accept
                </label>
                <label>
                  <input
                    type="radio"
                    name="attend"
                    checked={rsvpAttend === 'no'}
                    onChange={() => onAttendChange('no')}
                  />
                  Regretfully decline
                </label>
              </fieldset>
              <button type="submit" className="btn-invite btn-invite--solid">
                Send RSVP
              </button>
            </form>
          )}
        </div>
      </OrnamentalFrame>

      <CarpetBorder className="rsvp-carpet" />
    </section>
  )
}
