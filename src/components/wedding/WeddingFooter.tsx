import { CarpetBorder } from '../ornaments/CarpetBorder'
import { EightPointStar } from '../ornaments/EightPointStar'
import { FloralCorner } from '../ornaments/FloralCorner'
import { FloralSpray } from '../ornaments/FloralSpray'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { GoldDivider } from '../ornaments/GoldDivider'
import { JaliPattern } from '../ornaments/JaliPattern'

type Props = {
  partnerOne: string
  partnerTwo: string
  year: number
}

export function WeddingFooter({
  partnerOne,
  partnerTwo,
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
      <GoldDivider className="wfooter-divider" />
      <p className="wfooter-names">
        {partnerOne} & {partnerTwo}
      </p>
      <p className="wfooter-note">With love — {year}</p>
    </footer>
  )
}
