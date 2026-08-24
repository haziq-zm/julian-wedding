import { LenisScrollElement } from '../lenis/LenisScrollElement'
import { CarpetBorder } from '../ornaments/CarpetBorder'
import { EightPointStar } from '../ornaments/EightPointStar'
import { FloralSpray } from '../ornaments/FloralSpray'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { GoldDivider } from '../ornaments/GoldDivider'
import { JaliPattern } from '../ornaments/JaliPattern'
import { Lantern } from '../ornaments/Lantern'

type Props = {
  partnerOne: string
  partnerTwo: string
  venue: string
  address: string
}

export function WeddingHero({
  partnerOne,
  partnerTwo,
  venue,
  address,
}: Props) {
  return (
    <section id="home" className="welcome section-band section-band--olive">
      <JaliPattern className="welcome-jali" />
      <div className="welcome-vignette" aria-hidden />
      <FloralSpray className="welcome-spray welcome-spray--l" side="left" />
      <FloralSpray className="welcome-spray welcome-spray--r" side="right" />
      <Lantern className="welcome-lantern welcome-lantern--l" size="md" />
      <Lantern className="welcome-lantern welcome-lantern--r" size="md" />

      <LenisScrollElement className="welcome-inner" effect="fade-up">
        <EightPointStar className="welcome-star" />
        <p className="eyebrow eyebrow--light">Bismillah</p>
        <GeometricRosette className="welcome-rosette" />
        <h2 className="welcome-title">You are most welcome</h2>
        <GoldDivider className="ornament-divider ornament-divider--light" />
        <p className="welcome-lead">
          Into a celebration of faith, family, and the joining of{' '}
          {partnerOne} & {partnerTwo}
        </p>
        <p className="welcome-place">
          <span>{venue}</span>
          <span className="welcome-place-dot" aria-hidden />
          <span>{address}</span>
        </p>
        <a className="welcome-link" href="#story">
          Continue to our story
        </a>
      </LenisScrollElement>

      <CarpetBorder className="welcome-carpet" />
    </section>
  )
}
