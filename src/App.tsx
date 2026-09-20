import { useCallback, useEffect, useState } from 'react'
import { wedding } from './config'
import { InvitationCover } from './components/wedding/InvitationCover'
import { WeddingHero } from './components/wedding/WeddingHero'

import { CountdownSection } from './components/wedding/CountdownSection'
import { EventsSection } from './components/wedding/EventsSection'
import { VenueSection } from './components/wedding/VenueSection'
import { InvitationCardSection } from './components/wedding/InvitationCardSection'
import { GallerySection } from './components/wedding/GallerySection'
import { ScrollProvider } from './components/ui/ScrollProvider'
import { CinematicBackdrop } from './components/ornaments/CinematicBackdrop'
import './App.css'
import './styles/motion.css'
import './ornate.css'
import './mobile.css'
import './styles/invitation.css'
import './styles/cinema.css'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [mountDetails, setMountDetails] = useState(false)

  const handleOpened = useCallback(() => {
    setOpened(true)
    setMountDetails(true)
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

  return (
    <ScrollProvider enabled={opened}>
      <CinematicBackdrop />
      <div className={`page luxury-page ${opened ? 'page--open' : 'page--sealed'}`}>
        <InvitationCover
          partnerOne={wedding.partnerOne}
          partnerTwo={wedding.partnerTwo}
          dateLabel={wedding.dateLabel}
          datesLabel={wedding.datesLabel}
          blessing={wedding.blessing}
          onOpened={handleOpened}
        />

        <main
          className={`details inv-page ${opened ? 'details--visible' : ''}`}
          aria-hidden={!opened}
          {...(!opened ? { inert: true as const } : {})}
        >
          {mountDetails && (
            <>
              <WeddingHero
                partnerOne={wedding.partnerOne}
                partnerTwo={wedding.partnerTwo}
                dateLabel={wedding.datesLabel}
                tagline={wedding.tagline}
              />



              <CountdownSection
                target={wedding.countdownTarget}
                dateLabel={wedding.countdownLabel}
              />

              <EventsSection
                schedule={wedding.schedule}
                dateLabel={wedding.dateLabel}
              />

              <VenueSection location={wedding.location} />

              <InvitationCardSection
                partnerOne={wedding.partnerOne}
                partnerTwo={wedding.partnerTwo}
                dateLabel={wedding.datesLabel}
                blessing={wedding.blessing}
              />

              <GallerySection
                dateLabel={wedding.dateLabel}
                venue={wedding.location.venue}
                address={wedding.location.address}
                partnerOne={wedding.partnerOne}
                partnerTwo={wedding.partnerTwo}
              />
            </>
          )}
        </main>
      </div>
    </ScrollProvider>
  )
}
