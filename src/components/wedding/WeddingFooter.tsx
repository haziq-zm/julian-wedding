import { CarpetBorder } from '../ornaments/CarpetBorder'
import { EightPointStar } from '../ornaments/EightPointStar'
import { FloralCorner } from '../ornaments/FloralCorner'
import { FloralSpray } from '../ornaments/FloralSpray'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { GoldDivider } from '../ornaments/GoldDivider'
import { JaliPattern } from '../ornaments/JaliPattern'
import { WeddingMonogram } from '../ornaments/WeddingMonogram'

type Props = {
  partnerOne: string
  partnerTwo: string
  monogram: string
  year: number
}

export function WeddingFooter({
  partnerOne,
  partnerTwo,
  monogram,
  year,
}: Props) {
  return (
    <footer className="wfooter">
      <JaliPattern className="wfooter-jali" />
      <FloralSpray className="wfooter-spray wfooter-spray--l" side="left" />
      <FloralSpray className="wfooter-spray wfooter-spray--r" side="right" />
      <CarpetBorder className="wfooter-carpet" />
      <GeometricRosette className="wfooter-rosette" />
      <EightPointStar className="wfooter-star" />
      <FloralCorner className="wfooter-floral wfooter-floral--tl" corner="tl" />
      <FloralCorner className="wfooter-floral wfooter-floral--br" corner="br" />
      <WeddingMonogram initials={monogram} className="wfooter-mono" />
      <GoldDivider className="wfooter-divider" />
      <p className="wfooter-names">
        {partnerOne} & {partnerTwo}
      </p>
      <p className="wfooter-note">With love — {year}</p>
    </footer>
  )
}
