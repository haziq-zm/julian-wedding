import { useEffect, useRef, useState } from 'react'

type Watcher = {
  element: Element
  trigger: number
  reveal: () => void
}

const watchers = new Set<Watcher>()
let frame = 0
let listening = false

/**
 * Rect sampling beats IntersectionObserver here: Lenis anchor jumps can move a
 * section fully past the viewport between two frames, and an observer never
 * reports a threshold crossing for elements it skipped.
 */
function sample() {
  frame = 0
  const viewport = window.innerHeight || 1

  for (const watcher of watchers) {
    const rect = watcher.element.getBoundingClientRect()
    if (rect.top < viewport * watcher.trigger) {
      watchers.delete(watcher)
      watcher.reveal()
    }
  }

  if (watchers.size === 0) stopListening()
}

function schedule() {
  if (frame) return
  frame = requestAnimationFrame(sample)
}

function startListening() {
  if (listening) return
  listening = true
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
}

function stopListening() {
  if (!listening) return
  listening = false
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
}

export function useInView(trigger = 0.86) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const element = ref.current
    if (!element || inView) return

    const watcher: Watcher = {
      element,
      trigger,
      reveal: () => setInView(true),
    }

    watchers.add(watcher)
    startListening()
    schedule()

    // Sections revealed by a lazy chunk settle a frame or two after mount.
    const settle = window.setTimeout(schedule, 260)

    return () => {
      window.clearTimeout(settle)
      watchers.delete(watcher)
      if (watchers.size === 0) stopListening()
    }
  }, [inView, trigger])

  return { ref, inView }
}
