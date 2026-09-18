import { useEffect, useState } from 'react'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
  done: boolean
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds, done: false }
}

type Props = {
  target: Date
}

export function Countdown({ target }: Props) {
  const [time, setTime] = useState<TimeLeft>(() => getTimeLeft(target))

  useEffect(() => {
    const id = window.setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => window.clearInterval(id)
  }, [target])

  if (time.done) {
    return (
      <p className="countdown-done">The day is here — we celebrate today.</p>
    )
  }

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ] as const

  return (
    <div className="countdown" role="timer" aria-live="polite">
      {units.map(({ label, value }) => (
        <div key={label} className="countdown-unit">
          <span className="countdown-value">
            {String(value).padStart(2, '0')}
          </span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  )
}
