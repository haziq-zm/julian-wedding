type Props = {
  className?: string
  arcade?: boolean
}

const ARCADE_BAYS = 24

/** Small domed kiosk used to break up the roofline of each block. */
function Chhatri({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-13 0 V-16 M13 0 V-16 M-5 0 V-16 M5 0 V-16" stroke="currentColor" strokeWidth="3" />
      <path d="M-16 -16 H16 V-21 H-16 Z" />
      <path d="M-13 -21 C-19 -30 -14 -40 0 -46 C14 -40 19 -30 13 -21 Z" />
      <path d="M-1.6 -46 H1.6 V-56 H-1.6 Z" />
    </g>
  )
}

/** Distant Mughal palace silhouette used as a depth layer behind content */
export function PalaceSkyline({ className = '', arcade = true }: Props) {
  const bays = Array.from({ length: ARCADE_BAYS }, (_, index) => {
    const width = 1200 / ARCADE_BAYS
    const x = index * width + width / 2
    return `M${x - 15} 300 V262 C${x - 15} 244 ${x - 7} 236 ${x} 232 C${x + 7} 236 ${x + 15} 244 ${x + 15} 262 V300`
  })

  // Stepped parapet along the top of the long curtain wall.
  const merlons = Array.from({ length: 40 }, (_, index) => {
    const x = index * 30 + 4
    return `M${x} 236 V230 C${x} 226 ${x + 5} 224 ${x + 11} 230 V236 Z`
  })

  return (
    <svg
      className={className}
      viewBox="0 0 1200 300"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g fill="currentColor">
        <path d="M0 300 V236 H1200 V300 Z" />
        {merlons.map((d) => (
          <path key={d} d={d} opacity="0.85" />
        ))}

        {/* Flanking wings, each stepped back and capped with kiosks */}
        <path d="M320 300 V206 H480 V300 Z" />
        <path d="M334 206 H466 V198 H334 Z" />
        <path d="M720 300 V206 H880 V300 Z" />
        <path d="M734 206 H866 V198 H734 Z" />
        <Chhatri x={334} y={198} scale={0.7} />
        <Chhatri x={466} y={198} scale={0.7} />
        <Chhatri x={734} y={198} scale={0.7} />
        <Chhatri x={866} y={198} scale={0.7} />

        {/* Central hall */}
        <path d="M480 300 V172 H720 V300 Z" />
        <path d="M492 172 H708 V162 H492 Z" />
        <path d="M556 162 V146 H644 V162 Z" />
        <path d="M556 146 C520 132 518 96 546 70 C566 52 590 48 600 20 C610 48 634 52 654 70 C682 96 680 132 644 146 Z" />
        <path d="M597 20 H603 V4 H597 Z" />
        <Chhatri x={512} y={162} scale={0.85} />
        <Chhatri x={688} y={162} scale={0.85} />

        {/* Secondary domes over the wings */}
        <path d="M366 198 C342 188 341 163 360 146 C373 134 391 131 400 116 C409 131 427 134 440 146 C459 163 458 188 434 198 Z" />
        <path d="M398 116 H402 V102 H398 Z" />
        <path d="M766 198 C742 188 741 163 760 146 C773 134 791 131 800 116 C809 131 827 134 840 146 C859 163 858 188 834 198 Z" />
        <path d="M798 116 H802 V102 H798 Z" />

        {/* Corner minarets */}
        <path d="M243 300 V96 H267 V300 Z" />
        <path d="M239 168 H271 V162 H239 Z" />
        <path d="M236 96 H274 V88 H236 Z" />
        <path d="M244 88 C232 80 232 66 244 58 C250 50 254 46 255 38 C256 46 260 50 266 58 C278 66 278 80 266 88 Z" />
        <path d="M253.5 38 H256.5 V24 H253.5 Z" />
        <path d="M933 300 V96 H957 V300 Z" />
        <path d="M929 168 H961 V162 H929 Z" />
        <path d="M926 96 H964 V88 H926 Z" />
        <path d="M934 88 C922 80 922 66 934 58 C940 50 944 46 945 38 C946 46 950 50 956 58 C968 66 968 80 956 88 Z" />
        <path d="M943.5 38 H946.5 V24 H943.5 Z" />
      </g>

      {/* Window bays punched into the blocks */}
      <g stroke="currentColor" strokeWidth="1.6" opacity="0.28">
        <path d="M500 300 V244 C500 232 506 226 512 222 C518 226 524 232 524 244 V300" />
        <path d="M560 300 V244 C560 232 566 226 572 222 C578 226 584 232 584 244 V300" />
        <path d="M616 300 V244 C616 232 622 226 628 222 C634 226 640 232 640 244 V300" />
        <path d="M676 300 V244 C676 232 682 226 688 222 C694 226 700 232 700 244 V300" />
      </g>

      {arcade && (
        <g stroke="currentColor" strokeWidth="1.6" opacity="0.3">
          {bays.map((bay) => (
            <path key={bay} d={bay} />
          ))}
        </g>
      )}
    </svg>
  )
}
