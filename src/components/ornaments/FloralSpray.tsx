type Props = {
  className?: string
  side?: 'left' | 'right'
}

export function FloralSpray({ className = '', side = 'left' }: Props) {
  const flip = side === 'right' ? 'scale(-1,1) translate(-160,0)' : undefined

  return (
    <svg
      className={className}
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g transform={flip}>
        <path
          d="M20 190 C35 150 48 115 62 85 C76 55 88 35 98 18"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.55"
        />
        <path
          d="M35 185 C48 145 58 118 72 92"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.35"
        />
        <ellipse cx="88" cy="42" rx="18" ry="10" transform="rotate(-35 88 42)" fill="currentColor" opacity="0.3" />
        <ellipse cx="72" cy="68" rx="14" ry="8" transform="rotate(15 72 68)" fill="currentColor" opacity="0.25" />
        <ellipse cx="102" cy="72" rx="13" ry="7.5" transform="rotate(-50 102 72)" fill="currentColor" opacity="0.22" />
        <ellipse cx="58" cy="98" rx="16" ry="9" transform="rotate(-22 58 98)" fill="currentColor" opacity="0.2" />
        <ellipse cx="90" cy="110" rx="12" ry="7" transform="rotate(30 90 110)" fill="currentColor" opacity="0.18" />
        <circle cx="82" cy="52" r="3.5" fill="currentColor" opacity="0.5" />
        <circle cx="66" cy="78" r="2.5" fill="currentColor" opacity="0.4" />
        <circle cx="95" cy="88" r="2" fill="currentColor" opacity="0.35" />
        <path d="M98 28 C108 22 118 18 128 14" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
        <path d="M48 130 C38 142 28 158 18 172" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
      </g>
    </svg>
  )
}
