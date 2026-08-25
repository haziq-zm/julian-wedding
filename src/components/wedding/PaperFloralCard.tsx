import { useId } from 'react'

type Props = {
  partnerOne: string
  partnerTwo: string
  titleId?: string
  weddingDate: Date
}

function ordinalDay(day: number) {
  const j = day % 10
  const k = day % 100
  if (j === 1 && k !== 11) return `${day}st`
  if (j === 2 && k !== 12) return `${day}nd`
  if (j === 3 && k !== 13) return `${day}rd`
  return `${day}th`
}

function formatCardDate(date: Date) {
  const day = ordinalDay(date.getDate()).toUpperCase()
  const month = date
    .toLocaleString('en-US', { month: 'long' })
    .toUpperCase()
  const year = String(date.getFullYear())
  return { dayMonth: `${day} ${month}`, year }
}

function PaperFlower({
  className,
  size = 'lg',
}: {
  className?: string
  size?: 'lg' | 'md'
}) {
  const petalCount = size === 'lg' ? 8 : 7
  return (
    <div className={`paper-flower paper-flower--${size} ${className ?? ''}`}>
      <div className="paper-flower-ring paper-flower-ring--outer">
        {Array.from({ length: petalCount }, (_, i) => (
          <span
            key={`o-${i}`}
            className="paper-flower-petal"
            style={{ ['--i' as string]: i, ['--n' as string]: petalCount }}
          />
        ))}
      </div>
      <div className="paper-flower-ring paper-flower-ring--mid">
        {Array.from({ length: petalCount }, (_, i) => (
          <span
            key={`m-${i}`}
            className="paper-flower-petal paper-flower-petal--mid"
            style={{
              ['--i' as string]: i + 0.5,
              ['--n' as string]: petalCount,
            }}
          />
        ))}
      </div>
      <div className="paper-flower-ring paper-flower-ring--inner">
        {Array.from({ length: Math.max(5, petalCount - 2) }, (_, i) => (
          <span
            key={`i-${i}`}
            className="paper-flower-petal paper-flower-petal--inner"
            style={{
              ['--i' as string]: i,
              ['--n' as string]: Math.max(5, petalCount - 2),
            }}
          />
        ))}
      </div>
      <span className="paper-flower-pearl" />
    </div>
  )
}

function FloralArrangement() {
  const uid = useId().replace(/:/g, '')

  return (
    <div className="paper-florals">
      <svg
        className="paper-florals-vines"
        viewBox="0 0 220 420"
        aria-hidden
        focusable="false"
      >
        <defs>
          <linearGradient id={`${uid}-leaf-a`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9bb56e" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#6f8f4a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4d6a32" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id={`${uid}-leaf-b`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#b7c98a" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#7a9a52" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#3f5a28" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id={`${uid}-stem`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5a6e3a" />
            <stop offset="100%" stopColor="#2f3d1f" />
          </linearGradient>
          <filter id={`${uid}-soft`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
          </filter>
        </defs>

        {/* Main stems */}
        <path
          d="M78 28 C72 110, 58 190, 70 265 C80 320, 96 360, 118 400"
          fill="none"
          stroke={`url(#${uid}-stem)`}
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M118 40 C108 120, 98 200, 112 280 C122 330, 138 365, 155 395"
          fill="none"
          stroke={`url(#${uid}-stem)`}
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M48 95 C42 160, 38 230, 52 300 C60 340, 74 370, 90 392"
          fill="none"
          stroke={`url(#${uid}-stem)`}
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.55"
        />

        {/* Watercolor-style leaves */}
        <g filter={`url(#${uid}-soft)`} opacity="0.92">
          <ellipse
            cx="46"
            cy="120"
            rx="22"
            ry="10"
            fill={`url(#${uid}-leaf-a)`}
            transform="rotate(-38 46 120)"
          />
          <ellipse
            cx="34"
            cy="168"
            rx="18"
            ry="8"
            fill={`url(#${uid}-leaf-b)`}
            transform="rotate(-52 34 168)"
          />
          <ellipse
            cx="58"
            cy="210"
            rx="24"
            ry="9"
            fill={`url(#${uid}-leaf-a)`}
            transform="rotate(-28 58 210)"
          />
          <ellipse
            cx="28"
            cy="248"
            rx="16"
            ry="7"
            fill={`url(#${uid}-leaf-b)`}
            transform="rotate(-62 28 248)"
          />
          <ellipse
            cx="72"
            cy="288"
            rx="20"
            ry="8"
            fill={`url(#${uid}-leaf-a)`}
            transform="rotate(-18 72 288)"
          />
          <ellipse
            cx="48"
            cy="330"
            rx="17"
            ry="7.5"
            fill={`url(#${uid}-leaf-b)`}
            transform="rotate(-44 48 330)"
          />
          <ellipse
            cx="96"
            cy="350"
            rx="19"
            ry="8"
            fill={`url(#${uid}-leaf-a)`}
            transform="rotate(12 96 350)"
          />
          <ellipse
            cx="132"
            cy="120"
            rx="20"
            ry="8.5"
            fill={`url(#${uid}-leaf-b)`}
            transform="rotate(36 132 120)"
          />
          <ellipse
            cx="148"
            cy="175"
            rx="17"
            ry="7"
            fill={`url(#${uid}-leaf-a)`}
            transform="rotate(48 148 175)"
          />
          <ellipse
            cx="138"
            cy="235"
            rx="22"
            ry="9"
            fill={`url(#${uid}-leaf-b)`}
            transform="rotate(28 138 235)"
          />
          <ellipse
            cx="162"
            cy="290"
            rx="15"
            ry="6.5"
            fill={`url(#${uid}-leaf-a)`}
            transform="rotate(40 162 290)"
          />
          <ellipse
            cx="150"
            cy="340"
            rx="18"
            ry="7.5"
            fill={`url(#${uid}-leaf-b)`}
            transform="rotate(22 150 340)"
          />
        </g>

        {/* Small pale bud */}
        <g transform="translate(128 372)">
          <ellipse cx="0" cy="8" rx="1.2" ry="10" fill="#5a6e3a" opacity="0.7" />
          <ellipse
            cx="0"
            cy="-2"
            rx="7"
            ry="9"
            fill="#d8e4a8"
            stroke="#a8b86a"
            strokeWidth="0.5"
          />
          <ellipse cx="-2" cy="-4" rx="2.2" ry="3" fill="#f4f7e8" opacity="0.7" />
        </g>
      </svg>

      <PaperFlower className="paper-florals-bloom paper-florals-bloom--a" size="lg" />
      <PaperFlower className="paper-florals-bloom paper-florals-bloom--b" size="md" />
    </div>
  )
}

function CrystalHeart({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, '')

  return (
    <svg
      className={className}
      viewBox="0 0 24 22"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id={`${uid}-fill`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#e8eef5" />
          <stop offset="70%" stopColor="#b8c4d4" />
          <stop offset="100%" stopColor="#8a97a8" />
        </linearGradient>
        <linearGradient id={`${uid}-shine`} x1="30%" y1="10%" x2="70%" y2="90%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M12 20.2C12 20.2 2.5 14.2 2.5 7.8C2.5 4.9 4.7 2.8 7.5 2.8C9.3 2.8 10.9 3.7 12 5.1C13.1 3.7 14.7 2.8 16.5 2.8C19.3 2.8 21.5 4.9 21.5 7.8C21.5 14.2 12 20.2 12 20.2Z"
        fill={`url(#${uid}-fill)`}
        stroke="#9aa6b5"
        strokeWidth="0.6"
      />
      <path
        d="M12 18.4C12 18.4 4.4 13.4 4.4 8.2C4.4 6.1 5.9 4.6 7.8 4.6C9.2 4.6 10.4 5.3 12 6.8C13.6 5.3 14.8 4.6 16.2 4.6C18.1 4.6 19.6 6.1 19.6 8.2C19.6 13.4 12 18.4 12 18.4Z"
        fill={`url(#${uid}-shine)`}
      />
    </svg>
  )
}

export function PaperFloralCard({
  partnerOne,
  partnerTwo,
  titleId,
  weddingDate,
}: Props) {
  const { dayMonth, year } = formatCardDate(weddingDate)

  return (
    <div className="paper-card">
      <div className="paper-card-texture" aria-hidden />
      <FloralArrangement />

      <div className="paper-card-copy">
        <p className="paper-card-eyebrow">
          <span>With love</span>
          <span>on your</span>
          <span>wedding day</span>
        </p>

        <h1 id={titleId} className="paper-card-names">
          {partnerOne} & {partnerTwo}
        </h1>

        <p className="paper-card-date">
          <span>Married</span>
          <span>{dayMonth}</span>
          <span>{year}</span>
        </p>
      </div>

      <CrystalHeart className="paper-card-heart" />
    </div>
  )
}
