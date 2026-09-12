import { AnimatedDivider } from '../ornaments/AnimatedDivider'
import { EightPointStar } from '../ornaments/EightPointStar'
import { FloralBranch } from '../ornaments/FloralBranch'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { JaliPattern } from '../ornaments/JaliPattern'
import { Lantern } from '../ornaments/Lantern'
import { MughalArchFrame } from '../ornaments/MughalArchFrame'
import { PalaceSkyline } from '../ornaments/PalaceSkyline'
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
    <section id="home" className="lux-hero">
      <div className="lux-hero__paper" aria-hidden />
      <JaliPattern className="lux-hero__jali" />
      <div className="lux-hero__geometry" aria-hidden />
      <div className="lux-hero__horizon" aria-hidden />
      <PalaceSkyline className="lux-hero__skyline lux-hero__skyline--far" />
      <PalaceSkyline className="lux-hero__skyline lux-hero__skyline--near" arcade={false} />

      <div className="lux-hero__lanterns" aria-hidden>
        <span className="lux-hero__lantern lux-hero__lantern--one">
          <Lantern size="lg" />
        </span>
        <span className="lux-hero__lantern lux-hero__lantern--four">
          <Lantern size="lg" />
        </span>
      </div>

      <FloralBranch
        position="top-left"
        size="large"
        className="lux-hero__branch lux-hero__branch--far"
      />
      <FloralBranch
        position="top-right"
        size="large"
        className="lux-hero__branch lux-hero__branch--far"
      />

      <Reveal variant="clip" className="lux-hero__stage">
        <MughalArchFrame
          size="monument"
          tone="deep"
          variant="cusped"
          className="lux-hero__arch"
          crest={
            <>
              <GeometricRosette className="lux-hero__rosette" />
              <span className="lux-hero__bismillah">Bismillāh ir-Raḥmān ir-Raḥīm</span>
            </>
          }
        >
          <div className="lux-hero__content">
            <p className="lux-hero__kicker">
              <EightPointStar className="lux-hero__kicker-star" />
              The Wedding Celebration Of
              <EightPointStar className="lux-hero__kicker-star" />
            </p>

            <h1 className="lux-hero__names" aria-label={`${partnerOne} and ${partnerTwo}`}>
              <span className="lux-hero__name lux-hero__name--one">{partnerOne}</span>
              <span className="lux-hero__amp" aria-hidden>
                <span className="lux-hero__amp-rule" />
                <i>&amp;</i>
                <span className="lux-hero__amp-rule" />
              </span>
              <span className="lux-hero__name lux-hero__name--two">{partnerTwo}</span>
            </h1>

            <AnimatedDivider light className="lux-hero__divider" />

            <time className="lux-hero__date" dateTime="2026-10-11">
              {dateLabel}
            </time>

            <p className="lux-hero__tagline" dangerouslySetInnerHTML={{ __html: tagline }} />
          </div>
        </MughalArchFrame>

        <span className="lux-hero__plinth-shadow" aria-hidden />
      </Reveal>

      <span className="lux-hero__bracket lux-hero__bracket--tl" aria-hidden />
      <span className="lux-hero__bracket lux-hero__bracket--tr" aria-hidden />
      <span className="lux-hero__bracket lux-hero__bracket--bl" aria-hidden />
      <span className="lux-hero__bracket lux-hero__bracket--br" aria-hidden />

      <a className="lux-hero__scroll" href="#story">
        <span className="lux-hero__scroll-star" aria-hidden>
          ✦
        </span>
        <span>Scroll to explore</span>
        <span className="lux-hero__scroll-line" aria-hidden />
      </a>
    </section>
  )
}
