import { useCallback, useEffect, useState, type FormEvent } from 'react'
import { wedding } from './config'
import { InvitationCover } from './components/wedding/InvitationCover'
import { WeddingHero } from './components/wedding/WeddingHero'
import { CoupleSection } from './components/wedding/CoupleSection'
import { CountdownSection } from './components/wedding/CountdownSection'
import { EventsSection } from './components/wedding/EventsSection'
import { VenueSection } from './components/wedding/VenueSection'
import { WeddingTimeline } from './components/wedding/WeddingTimeline'
import { InvitationCardSection } from './components/wedding/InvitationCardSection'
import { GallerySection } from './components/wedding/GallerySection'
import { RSVPSection } from './components/wedding/RSVPSection'
import { WeddingFooter } from './components/wedding/WeddingFooter'
import { SectionScallop } from './components/ornaments/SectionScallop'
import { LenisScrollProvider } from './components/lenis/LenisScrollProvider'
import './App.css'
import './ornate.css'
import './mobile.css'
import './lenis-scroll.css'

export default function App() {
  const year = wedding.date.getFullYear()
  const [opened, setOpened] = useState(false)
  const [rsvpName, setRsvpName] = useState('')
  const [rsvpGuests, setRsvpGuests] = useState('1')
  const [rsvpAttend, setRsvpAttend] = useState<'yes' | 'no'>('yes')
  const [rsvpSent, setRsvpSent] = useState(false)

  const handleOpened = useCallback(() => {
    setOpened(true)
  }, [])

  useEffect(() => {
    if (!opened) {
      document.body.classList.add('scroll-locked')
      return () => {
        document.body.classList.remove('scroll-locked')
      }
    }

    document.body.classList.remove('scroll-locked')
    return undefined
  }, [opened])

  const onRsvp = (e: FormEvent) => {
    e.preventDefault()
    setRsvpSent(true)
  }

  return (
    <LenisScrollProvider enabled={opened}>
      <div className={`page ${opened ? 'page--open' : 'page--sealed'}`}>
        <div className="paper-grain" aria-hidden />

        <InvitationCover
        partnerOne={wedding.partnerOne}
        partnerTwo={wedding.partnerTwo}
        monogram={wedding.monogram}
        dateLabel={wedding.dateLabel}
        blessing={wedding.blessing}
        onOpened={handleOpened}
        />

        <div
          className={`details ${opened ? 'details--visible' : ''}`}
          aria-hidden={!opened}
          {...(!opened ? { inert: true as const } : {})}
        >
          <WeddingHero
          partnerOne={wedding.partnerOne}
          partnerTwo={wedding.partnerTwo}
          dateLabel={wedding.dateLabel}
          blessing={wedding.blessing}
        />

        <SectionScallop className="scallop--to-ivory" />

        <CoupleSection
          title={wedding.story.title}
          lead={wedding.story.lead}
          body={wedding.story.body}
          monogram={wedding.monogram}
          dateLabel={wedding.dateLabel}
        />

        <SectionScallop className="scallop--to-olive" flip />

        <CountdownSection
          target={wedding.date}
          dateLabel={wedding.dateLabel}
          timeLabel={wedding.timeLabel}
        />

        <SectionScallop className="scallop--to-parchment" flip />

        <EventsSection
          events={wedding.featuredEvents}
          dateLabel={wedding.dateLabel}
          venue={wedding.location.venue}
        />

        <SectionScallop className="scallop--to-olive" flip />

        <VenueSection location={wedding.location} />

        <SectionScallop className="scallop--to-ivory" flip />

        <WeddingTimeline schedule={wedding.schedule} />

        <SectionScallop className="scallop--to-deep" flip />

        <InvitationCardSection
          partnerOne={wedding.partnerOne}
          partnerTwo={wedding.partnerTwo}
          monogram={wedding.monogram}
          dateLabel={wedding.dateLabel}
          timeLabel={wedding.timeLabel}
          venue={wedding.location.venue}
          address={wedding.location.address}
          blessing={wedding.blessing}
        />

        <SectionScallop className="scallop--to-ivory" flip />

        <GallerySection
          monogram={wedding.monogram}
          dateLabel={wedding.dateLabel}
          venue={wedding.location.venue}
          address={wedding.location.address}
          partnerOne={wedding.partnerOne}
          partnerTwo={wedding.partnerTwo}
        />

        <SectionScallop className="scallop--to-parchment" flip />

        <RSVPSection
          deadline={wedding.rsvp.deadline}
          rsvpName={rsvpName}
          rsvpGuests={rsvpGuests}
          rsvpAttend={rsvpAttend}
          rsvpSent={rsvpSent}
          onNameChange={setRsvpName}
          onGuestsChange={setRsvpGuests}
          onAttendChange={setRsvpAttend}
          onSubmit={onRsvp}
        />

        <WeddingFooter
          partnerOne={wedding.partnerOne}
          partnerTwo={wedding.partnerTwo}
          monogram={wedding.monogram}
          year={year}
        />
      </div>
      </div>
    </LenisScrollProvider>
  )
}
