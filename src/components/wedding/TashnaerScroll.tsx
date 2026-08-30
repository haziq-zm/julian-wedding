import { EventModelScroll } from './EventModelScroll'

export function TashnaerScroll() {
  return (
    <EventModelScroll
      modelUrl="/models/tashnaer.glb"
      title="Food"
      caption="Copper gleam and ritual welcome, ready for the feast"
      variant="deep"
      initialYaw={-Math.PI / 2}
      scale={0.78}
      exposure={0.88}
      index="II"
      eyebrow="The Feast"
      note="Served on the shared trami"
      plaque="The Wazwan Table"
    />
  )
}
