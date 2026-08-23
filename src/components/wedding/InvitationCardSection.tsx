import { CarpetBorder } from '../ornaments/CarpetBorder'
import { FloralCorner } from '../ornaments/FloralCorner'
import { FloralSpray } from '../ornaments/FloralSpray'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { GoldDivider } from '../ornaments/GoldDivider'
import { IslamicArch } from '../ornaments/IslamicArch'
import { JaliPattern } from '../ornaments/JaliPattern'
import { SectionHeader } from '../ornaments/SectionHeader'
import { WeddingMonogram } from '../ornaments/WeddingMonogram'

type Props = {
  partnerOne: string
  partnerTwo: string
  monogram: string
  dateLabel: string
  timeLabel: string
  venue: string
  address: string
  blessing: string
}

export function InvitationCardSection({
  partnerOne,
  partnerTwo,
  monogram,
  dateLabel,
  timeLabel,
  venue,
  address,
  blessing,
}: Props) {
  return (
    <section id="invitation" className="card-sec section-band section-band--deep">
      <JaliPattern className="card-sec-jali" />
      <FloralSpray className="card-sec-spray card-sec-spray--l" side="left" />
      <FloralSpray className="card-sec-spray card-sec-spray--r" side="right" />

      <SectionHeader eyebrow="Keepsake" title="The Invitation" light />

      <article className="invite-card">
        <IslamicArch className="invite-arch invite-arch--sil" variant="silhouette" />
        <IslamicArch className="invite-arch invite-arch--line" />
        <FloralCorner className="invite-floral invite-floral--tl" corner="tl" />
        <FloralCorner className="invite-floral invite-floral--tr" corner="tr" />
        <FloralCorner className="invite-floral invite-floral--bl" corner="bl" />
        <FloralCorner className="invite-floral invite-floral--br" corner="br" />
        <span className="invite-card-gilt" aria-hidden />

        <div className="invite-inner">
          <GeometricRosette className="invite-rosette" />
          <WeddingMonogram initials={monogram} className="invite-mono" />
          <p className="invite-kicker">You Are Cordially Invited</p>
          <h3 className="invite-names">
            {partnerOne} <span>&</span> {partnerTwo}
          </h3>
          <GoldDivider className="invite-divider" />
          <p className="invite-blessing">{blessing}</p>
          <div className="invite-details">
            <p className="invite-date">{dateLabel}</p>
            <p className="invite-time">{timeLabel}</p>
            <p className="invite-venue">{venue}</p>
            <p className="invite-address">{address}</p>
          </div>
        </div>
      </article>

      <CarpetBorder className="card-sec-carpet" />
    </section>
  )
}
