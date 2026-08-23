import { Center, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLenis } from 'lenis/react'
import type Lenis from 'lenis'
import { Suspense, useEffect, useRef, type RefObject } from 'react'
import type { Group } from 'three'
import { usePrefersReducedMotion } from '../lenis/usePrefersReducedMotion'

useGLTF.preload('/flower.glb')

const SPIN_TURNS = 2

function applyFlowerMotion(
  wrap: HTMLDivElement,
  scroll: number,
  rotationRef: RefObject<number>,
  reducedMotion: boolean,
) {
  const rect = wrap.getBoundingClientRect()
  const vh = window.innerHeight
  const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.62)))

  if (!reducedMotion) {
    const docTop = rect.top + scroll
    const spinStart = docTop - vh
    const spinEnd = docTop + rect.height
    const spinProgress = Math.min(
      1,
      Math.max(0, (scroll - spinStart) / (spinEnd - spinStart)),
    )
    rotationRef.current = spinProgress * Math.PI * 2 * SPIN_TURNS
  }

  wrap.style.opacity = String(0.25 + progress * 0.75)
}

type FlowerModelProps = {
  rotationRef: RefObject<number>
}

function FlowerModel({ rotationRef }: FlowerModelProps) {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF('/flower.glb')

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = rotationRef.current
  })

  return (
    <group ref={groupRef} rotation={[0.15, 0, 0]}>
      <Center>
        <primitive object={scene} scale={2.1} />
      </Center>
    </group>
  )
}

export function FlowerScroll3D() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const rotationRef = useRef(0)
  const reducedMotion = usePrefersReducedMotion()

  useLenis((lenis: Lenis) => {
    const wrap = wrapRef.current
    if (!wrap) return
    applyFlowerMotion(wrap, lenis.scroll, rotationRef, reducedMotion)
  })

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    const update = () =>
      applyFlowerMotion(wrap, window.scrollY, rotationRef, reducedMotion)
    update()
    const id = requestAnimationFrame(update)
    return () => cancelAnimationFrame(id)
  }, [reducedMotion])

  return (
    <div
      ref={wrapRef}
      className="flower-scroll-3d lenis-scroll-el lenis-scroll-el--parallax"
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0.15, 3.4], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 4, 3]} intensity={1.15} color="#faf7ef" />
        <directionalLight position={[-3, 1, -2]} intensity={0.5} color="#b59655" />
        <Suspense fallback={null}>
          <FlowerModel rotationRef={rotationRef} />
        </Suspense>
      </Canvas>
    </div>
  )
}
