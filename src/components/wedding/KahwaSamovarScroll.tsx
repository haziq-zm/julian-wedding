import { EventModelScroll } from './EventModelScroll'

export function KahwaSamovarScroll() {
  return (
    <EventModelScroll
      modelUrl="/models/samovar.glb"
      title="Kahwa"
      caption="Saffron steam, cardamom warmth, poured with welcome"
      variant="light"
      initialYaw={-Math.PI / 2}
      scale={0.78}
      index="I"
      eyebrow="The Welcome"
      note="Poured from the copper samovar"
      plaque="The Art of Kahwa"
    />
  )
}
