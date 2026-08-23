type Props = {
  className?: string
  variant?: 'corner' | 'spray' | 'divider'
}

export function FloralDecor({ className = '', variant = 'corner' }: Props) {
  if (variant === 'divider') {
    return (
      <svg
        className={className}
        viewBox="0 0 200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M10 12h70M120 12h70"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.45"
        />
        <path
          d="M100 4c-4 4-6 7-6 8s2 4 6 8c4-4 6-7 6-8s-2-4-6-8z"
          fill="currentColor"
          opacity="0.55"
        />
        <circle cx="88" cy="12" r="1.6" fill="currentColor" opacity="0.4" />
        <circle cx="112" cy="12" r="1.6" fill="currentColor" opacity="0.4" />
      </svg>
    )
  }

  if (variant === 'spray') {
    return (
      <svg
        className={className}
        viewBox="0 0 280 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M40 130c30-40 55-70 80-90"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.35"
        />
        <path
          d="M140 40c20 25 40 55 55 90"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.35"
        />
        <ellipse cx="128" cy="48" rx="14" ry="9" transform="rotate(-35 128 48)" fill="currentColor" opacity="0.28" />
        <ellipse cx="148" cy="62" rx="11" ry="7" transform="rotate(20 148 62)" fill="currentColor" opacity="0.22" />
        <ellipse cx="98" cy="72" rx="16" ry="10" transform="rotate(-50 98 72)" fill="currentColor" opacity="0.25" />
        <ellipse cx="175" cy="95" rx="13" ry="8" transform="rotate(40 175 95)" fill="currentColor" opacity="0.2" />
        <circle cx="118" cy="55" r="3.5" fill="currentColor" opacity="0.45" />
        <circle cx="160" cy="78" r="2.8" fill="currentColor" opacity="0.4" />
      </svg>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 160C45 120 70 85 110 50"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.4"
      />
      <path
        d="M50 165C70 130 95 100 140 70"
        stroke="currentColor"
        strokeWidth="1.1"
        opacity="0.28"
      />
      <ellipse
        cx="118"
        cy="48"
        rx="18"
        ry="11"
        transform="rotate(-40 118 48)"
        fill="currentColor"
        opacity="0.32"
      />
      <ellipse
        cx="95"
        cy="68"
        rx="14"
        ry="9"
        transform="rotate(15 95 68)"
        fill="currentColor"
        opacity="0.26"
      />
      <ellipse
        cx="138"
        cy="72"
        rx="12"
        ry="8"
        transform="rotate(-55 138 72)"
        fill="currentColor"
        opacity="0.22"
      />
      <ellipse
        cx="72"
        cy="98"
        rx="16"
        ry="10"
        transform="rotate(-25 72 98)"
        fill="currentColor"
        opacity="0.2"
      />
      <circle cx="108" cy="58" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="85" cy="82" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  )
}
