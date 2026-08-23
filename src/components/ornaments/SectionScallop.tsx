type Props = {
  className?: string
  flip?: boolean
}

/** Scalloped arch transition strip between section colour bands */
export function SectionScallop({ className = '', flip = false }: Props) {
  return (
    <svg
      className={`section-scallop ${flip ? 'section-scallop--flip' : ''} ${className}`.trim()}
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="currentColor"
        shapeRendering="geometricPrecision"
        d="
          M0,0 H1440 V36
          C1410,36 1410,56 1350,56 C1290,56 1290,36 1260,36
          C1230,36 1230,56 1170,56 C1110,56 1110,36 1080,36
          C1050,36 1050,56 990,56 C930,56 930,36 900,36
          C870,36 870,56 810,56 C750,56 750,36 720,36
          C690,36 690,56 630,56 C570,56 570,36 540,36
          C510,36 510,56 450,56 C390,56 390,36 360,36
          C330,36 330,56 270,56 C210,56 210,36 180,36
          C150,36 150,56 90,56 C30,56 30,36 0,36
          Z
        "
      />
    </svg>
  )
}
