import { AnimatedDivider } from '../ornaments/AnimatedDivider'
import { EightPointStar } from '../ornaments/EightPointStar'
import { FloralBranch } from '../ornaments/FloralBranch'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { InvitationSurface } from '../ornaments/InvitationSurface'
import { MughalArchFrame } from '../ornaments/MughalArchFrame'
import { PalaceSkyline } from '../ornaments/PalaceSkyline'
import { Reveal } from '../ui/Reveal'

type Props = {
  title: string
  lead: string
  body: string
  dateLabel: string
}

export function CoupleSection({ title, lead, body, dateLabel }: Props) {
  return (
    <InvitationSurface id="story" tone="parchment-soft" className="editorial-story">
      <FloralBranch position="top-left" size="large" className="botanical-reveal botanical-reveal--left" />
      <FloralBranch position="bottom-right" size="large" className="botanical-reveal botanical-reveal--right" />

      <Reveal as="header" variant="up" className="editorial-story__header">
        <p className="inv-label inv-label--dark">{title}</p>
        <h2 className="editorial-story__title">
          Two hearts,
          <em> one promise</em>
        </h2>
        <AnimatedDivider />
      </Reveal>

      <div className="editorial-story__composition">
        <Reveal variant="clip" className="editorial-story__portrait">
          <MughalArchFrame
            size="fluid"
            tone="parchment"
            variant="onion"
            crest={<GeometricRosette className="editorial-story__crest-rosette" />}
          >
            <div className="editorial-story__miniature" aria-hidden>
              <span className="editorial-story__sky" />
              <span className="editorial-story__sun" />
              <span className="editorial-story__birds" />
              <span className="editorial-story__range editorial-story__range--far" />
              <span className="editorial-story__range editorial-story__range--mid" />
              <PalaceSkyline className="editorial-story__far-palace" arcade={false} />
              <span className="editorial-story__lake" />
              <span className="editorial-story__shikara" />
              <span className="editorial-story__chinar editorial-story__chinar--left" />
              <span className="editorial-story__chinar editorial-story__chinar--right" />
              <span className="editorial-story__couple">
                J <i>&amp;</i> J
              </span>
            </div>
          </MughalArchFrame>

          <p className="editorial-story__caption">
            <span className="editorial-story__caption-rule" aria-hidden />
            A love written beneath Kashmir skies
            <span className="editorial-story__caption-rule" aria-hidden />
          </p>
        </Reveal>

        <div className="editorial-story__margin" aria-hidden>
          <span className="editorial-story__margin-rule" />
          <GeometricRosette className="editorial-story__margin-rosette" />
          <span className="editorial-story__margin-rule" />
        </div>

        <Reveal variant="right" className="editorial-story__manuscript">
          <span className="editorial-story__folio" aria-hidden>
            i
          </span>
          <p className="editorial-story__quote">“{lead}”</p>
          <p className="editorial-story__body">{body}</p>
          <AnimatedDivider />
          <p className="editorial-story__date-label">The next chapter begins</p>
          <p className="editorial-story__date">{dateLabel}</p>
          <span className="editorial-story__seal" aria-hidden>
            <EightPointStar />
          </span>
        </Reveal>
      </div>
    </InvitationSurface>
  )
}
