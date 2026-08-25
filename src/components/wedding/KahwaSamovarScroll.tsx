import { EventModelScroll } from './EventModelScroll'

export function KahwaSamovarScroll() {
  return (
    <EventModelScroll
      modelUrl="/models/samovar.glb"
      title="Kahwa"
      caption="Saffron steam, cardamom warmth, poured with welcome"
      initialYaw={-Math.PI / 2}
      scale={0.78}
    />
  )
}
