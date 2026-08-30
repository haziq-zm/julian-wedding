import { useEffect, useState } from 'react'
import { EightPointStar } from '../ornaments/EightPointStar'

const LINKS = [
  { href: '#story', label: 'Our Story' },
  { href: '#events', label: 'Events' },
  { href: '#food', label: 'Food' },
  { href: '#venue', label: 'Venue' },
  { href: '#rsvp', label: 'RSVP' },
] as const

type Props = {
  visible: boolean
}

export function SiteNavigation({ visible }: Props) {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 120)

      // The section owning the upper third of the viewport reads as "current".
      const marker = window.innerHeight * 0.35
      let current = ''
      for (const link of LINKS) {
        const section = document.querySelector(link.href)
        if (!section) continue
        if (section.getBoundingClientRect().top <= marker) current = link.href
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <header className={`artifact-nav ${compact ? 'artifact-nav--compact' : ''}`} role="banner">
      <div className="artifact-nav__ribbon">
        <a className="artifact-nav__brand" href="#home" aria-label="Back to invitation">
          <EightPointStar className="artifact-nav__star" />
          <span>J &amp; J</span>
        </a>
        <button
          type="button"
          className="artifact-nav__toggle"
          aria-expanded={open}
          aria-controls="artifact-nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden>{open ? '×' : '✦'}</span>
          {open ? 'Close' : 'Menu'}
        </button>

        <nav
          id="artifact-nav-menu"
          className={`artifact-nav__menu ${open ? 'artifact-nav__menu--open' : ''}`}
          aria-label="Page sections"
        >
          <span className="artifact-nav__flourish" aria-hidden>❦</span>
          {LINKS.map((link, index) => (
            <span className="artifact-nav__item" key={link.href}>
              {index > 0 && <span className="artifact-nav__dot" aria-hidden>·</span>}
              <a
                className={`artifact-nav__link ${active === link.href ? 'is-active' : ''}`.trim()}
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </span>
          ))}
          <span className="artifact-nav__flourish" aria-hidden>❦</span>
        </nav>
      </div>
    </header>
  )
}
