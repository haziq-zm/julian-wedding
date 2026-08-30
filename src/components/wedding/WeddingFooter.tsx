import { CarpetBorder } from '../ornaments/CarpetBorder'
import { EightPointStar } from '../ornaments/EightPointStar'
import { FloralBranch } from '../ornaments/FloralBranch'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { JaliPattern } from '../ornaments/JaliPattern'
import { PalaceSkyline } from '../ornaments/PalaceSkyline'

type Props = {
  partnerOne: string
  partnerTwo: string
  year: number
}

export function WeddingFooter({ partnerOne, partnerTwo, year }: Props) {
  return (
    <footer className="manuscript-footer">
      <JaliPattern className="manuscript-footer__screen" />
      <PalaceSkyline className="manuscript-footer__skyline" arcade={false} />
      <FloralBranch position="top-left" size="medium" />
      <FloralBranch position="top-right" size="medium" />

      <CarpetBorder className="manuscript-footer__carpet" />

      <div className="manuscript-footer__seal">
        <GeometricRosette className="manuscript-footer__rosette" />
        <EightPointStar className="manuscript-footer__star" />
      </div>

      <p className="manuscript-footer__names">
        {partnerOne} <i>&amp;</i> {partnerTwo}
      </p>
      <p className="manuscript-footer__note">With love — {year}</p>

      <p className="manuscript-footer__colophon">
        <span aria-hidden>❦</span>
        Hanji Danter · Anantnag · Kashmir
        <span aria-hidden>❦</span>
      </p>
    </footer>
  )
}
