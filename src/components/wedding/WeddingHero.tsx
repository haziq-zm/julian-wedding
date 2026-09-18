import { FloralBranch } from '../ornaments/FloralBranch'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { Lantern } from '../ornaments/Lantern'
import { MughalArchFrame } from '../ornaments/MughalArchFrame'
import { SparkleField } from '../ornaments/SparkleField'
import { Reveal } from '../ui/Reveal'

type Props = {
  partnerOne: string
  partnerTwo: string
  dateLabel: string
  venue: string
  address: string
  tagline: string
}

export function WeddingHero({
  partnerOne,
  partnerTwo,
  dateLabel,
  venue,
  address,
  tagline,
}: Props) {
  return (
    <section id="home" className="lux-hero cinema-hero">
      <div className="lux-hero__photo" aria-hidden />
      <div className="lux-hero__veil" aria-hidden />
      <SparkleField count={16} />

      <p className="lux-hero__side-text" aria-hidden>
        Two souls, a more beautiful tomorrow
      </p>

      <FloralBranch
        position="top-left"
        size="large"
        className="lux-hero__branch lux-hero__branch--tl"
      />
      <FloralBranch
        position="top-right"
        size="large"
        className="lux-hero__branch lux-hero__branch--tr"
      />
      <FloralBranch
        position="bottom-left"
        size="large"
        className="lux-hero__branch lux-hero__branch--bl"
      />
      <FloralBranch
        position="bottom-right"
        size="large"
        className="lux-hero__branch lux-hero__branch--br"
      />

      {/* No Reveal/opacity/transform wrapper — Chrome empties backdrop-filter behind those */}
      <div className="lux-hero__stage">
        <MughalArchFrame
          size="monument"
          tone="deep"
          variant="cusped"
          className="lux-hero__arch"
          crest={
            <>
              <GeometricRosette className="lux-hero__rosette" />
              <span className="lux-hero__bismillah">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span>
            </>
          }
        >
          <div className="lux-hero__content">
            <Reveal variant="up">
              <p className="lux-hero__kicker">The Wedding Celebration Of</p>

              <h1 className="lux-hero__names" aria-label={`${partnerOne} and ${partnerTwo}`}>
                <span className="lux-hero__name">{partnerOne}</span>
                <span className="lux-hero__amp" aria-hidden>
                  <span className="lux-hero__amp-rule" />
                  <i>&amp;</i>
                  <span className="lux-hero__amp-rule" />
                </span>
                <span className="lux-hero__name">{partnerTwo}</span>
              </h1>

              <time className="lux-hero__date" dateTime="2026-10-11">
                {dateLabel}
              </time>
              <p className="lux-hero__place">
                {venue} · {address}
              </p>
            </Reveal>

            <div className="lux-hero__glass">
              <p
                className="lux-hero__tagline"
                dangerouslySetInnerHTML={{ __html: tagline }}
              />
              <p className="lux-hero__destiny">
                A journey of two hearts, one beautiful destiny.
              </p>
            </div>
          </div>
        </MughalArchFrame>
      </div>

      <a className="lux-hero__scroll" href="#countdown">
        <Lantern size="sm" className="lux-hero__scroll-lantern" />
        <span className="lux-hero__scroll-orb" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 10l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span>Scroll to explore</span>
      </a>
    </section>
  )
}
