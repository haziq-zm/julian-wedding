import { EventModelScroll } from './EventModelScroll'

export function TumbaknariScroll() {
  return (
    <EventModelScroll
      modelUrl="/models/tumbaknari.glb"
      title="Music"
      caption="The heartbeat of celebration, calling guests to joy"
      variant="light"
      initialYaw={-Math.PI / 2}
      scale={0.78}
      exposure={0.88}
      index="III"
      eyebrow="The Celebration"
      note="Wanvun sung late into the night"
      plaque="The Art of Music"
    />
  )
}
