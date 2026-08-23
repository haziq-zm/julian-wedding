import { LenisScrollElement } from '../lenis/LenisScrollElement'
import { CarpetBorder } from '../ornaments/CarpetBorder'
import { EightPointStar } from '../ornaments/EightPointStar'
import { FloralCorner } from '../ornaments/FloralCorner'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { GoldDivider } from '../ornaments/GoldDivider'
import { IslamicArch } from '../ornaments/IslamicArch'
import { JaliPattern } from '../ornaments/JaliPattern'
import { SectionHeader } from '../ornaments/SectionHeader'
import { WeddingMonogram } from '../ornaments/WeddingMonogram'

type Props = {
  monogram: string
  dateLabel: string
  venue: string
  address: string
  partnerOne: string
  partnerTwo: string
}

export function GallerySection({
  monogram,
  dateLabel,
  venue,
  address,
  partnerOne,
  partnerTwo,
}: Props) {
  return (
    <section id="gallery" className="gallery section-band section-band--ivory">
      <JaliPattern className="gallery-jali" />

      <SectionHeader eyebrow="Stationery" title="Invitation Suite" />

      <div className="gallery-grid">
        <LenisScrollElement
          as="article"
          effect="scale-in"
          speed={0.14}
          className="gallery-piece gallery-piece--hero"
        >
          <IslamicArch className="gallery-arch gallery-arch--sil" variant="silhouette" />
          <IslamicArch className="gallery-arch gallery-arch--line" />
          <FloralCorner className="gallery-floral gallery-floral--tl" corner="tl" />
          <FloralCorner className="gallery-floral gallery-floral--br" corner="br" />
          <GeometricRosette className="gallery-rosette" />
          <div className="gallery-piece-inner">
            <WeddingMonogram initials={monogram} />
            <p className="gallery-label">The Cover</p>
            <p className="gallery-names">
              {partnerOne} & {partnerTwo}
            </p>
          </div>
        </LenisScrollElement>

        <LenisScrollElement
          as="article"
          effect="fade-up"
          className="gallery-piece gallery-piece--detail"
        >
          <EightPointStar className="gallery-star" />
          <GeometricRosette className="gallery-mini-rosette" />
          <p className="gallery-label">The Date</p>
          <p className="gallery-text">{dateLabel}</p>
        </LenisScrollElement>

        <LenisScrollElement
          as="article"
          effect="fade-up"
          speed={0.22}
          className="gallery-piece gallery-piece--detail gallery-piece--wine"
        >
          <EightPointStar className="gallery-star" />
          <GeometricRosette className="gallery-mini-rosette" />
          <p className="gallery-label">The Venue</p>
          <p className="gallery-text">{venue}</p>
          <p className="gallery-sub">{address}</p>
        </LenisScrollElement>

        <LenisScrollElement
          as="article"
          effect="parallax"
          speed={0.1}
          className="gallery-piece gallery-piece--tall"
        >
          <FloralCorner className="gallery-floral gallery-floral--tl" corner="tl" />
          <FloralCorner className="gallery-floral gallery-floral--br" corner="br" />
          <WeddingMonogram initials={monogram} />
          <p className="gallery-label">Monogram</p>
          <p className="gallery-quote">{monogram}</p>
        </LenisScrollElement>

        <LenisScrollElement
          as="article"
          effect="fade-up"
          className="gallery-piece gallery-piece--wide"
        >
          <CarpetBorder className="gallery-carpet" />
          <GoldDivider className="ornament-divider" />
          <p className="gallery-label">With Gratitude</p>
          <p className="gallery-quote">
            Your presence is the greatest gift as we begin our life together.
          </p>
        </LenisScrollElement>
      </div>
    </section>
  )
}
