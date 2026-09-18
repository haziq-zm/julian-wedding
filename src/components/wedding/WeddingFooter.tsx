import { FloralBranch } from '../ornaments/FloralBranch'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { SparkleField } from '../ornaments/SparkleField'

type Props = {
  partnerOne: string
  partnerTwo: string
  year: number
}

export function WeddingFooter({ partnerOne, partnerTwo, year }: Props) {
  return (
    <footer className="manuscript-footer cinema-close">
      <div className="manuscript-footer__photo" aria-hidden />
      <div className="manuscript-footer__veil" aria-hidden />
      <SparkleField count={12} />
      <FloralBranch position="top-left" size="medium" />
      <FloralBranch position="top-right" size="medium" />

      <div className="manuscript-footer__card glass-card glass-card--arch">
        <GeometricRosette className="manuscript-footer__rosette" />
        <blockquote className="manuscript-footer__quote">
          “May our story be a source of kindness, joy and inspiration for all who witness it.”
        </blockquote>
        <p className="manuscript-footer__mono">J &amp; J</p>
        <p className="manuscript-footer__soon">See you soon</p>
        <p className="manuscript-footer__names">
          {partnerOne} <i>&amp;</i> {partnerTwo}
        </p>
        <p className="manuscript-footer__note">With love — {year}</p>
        <p className="manuscript-footer__colophon">
          Hanji Danter · Anantnag · Kashmir
        </p>
      </div>
    </footer>
  )
}
