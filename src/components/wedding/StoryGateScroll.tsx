import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLenis } from 'lenis/react'
import type Lenis from 'lenis'
import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
  type RefObject,
} from 'react'
import {
  Box3,
  Vector3,
  type Group,
  type Object3D,
} from 'three'
import { usePrefersReducedMotion } from '../lenis/usePrefersReducedMotion'

const GATE_URL = '/models/golden-palace-gate.glb'
const MAX_OPEN_RAD = Math.PI * 0.78

useGLTF.preload(GATE_URL)

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

function computeGateOpen(wrap: HTMLElement, scroll: number) {
  const rect = wrap.getBoundingClientRect()
  const vh = window.innerHeight || 1
  const docTop = rect.top + scroll
  const start = docTop - vh * 0.72
  const end = docTop + rect.height * 0.35
  const raw = Math.min(1, Math.max(0, (scroll - start) / Math.max(1, end - start)))
  return easeOutCubic(raw)
}

function applyGateOpen(
  wrap: HTMLElement,
  openRef: RefObject<number>,
  scroll: number,
  reducedMotion: boolean,
) {
  const open = reducedMotion ? 1 : computeGateOpen(wrap, scroll)
  openRef.current = open
  wrap.style.setProperty('--gate-open', open.toFixed(4))
}

function GateLeaf({
  side,
  source,
  width,
  openRef,
}: {
  side: 'left' | 'right'
  source: Object3D
  width: number
  openRef: RefObject<number>
}) {
  const hingeRef = useRef<Group>(null)
  const leaf = useMemo(() => source.clone(true), [source])

  useFrame(() => {
    const hinge = hingeRef.current
    if (!hinge) return
    const angle = openRef.current * MAX_OPEN_RAD
    hinge.rotation.y = side === 'left' ? angle : -angle
  })

  return (
    <group
      ref={hingeRef}
      position={[side === 'left' ? -width : width, 0, 0]}
    >
      <group scale={side === 'right' ? [-1, 1, 1] : [1, 1, 1]}>
        <primitive object={leaf} position={[width / 2, 0, 0]} />
      </group>
    </group>
  )
}

function GatePair({ openRef }: { openRef: RefObject<number> }) {
  const { scene } = useGLTF(GATE_URL)

  const { source, width } = useMemo(() => {
    const root = scene.clone(true)
    root.traverse((obj) => {
      const mesh = obj as Object3D & {
        isMesh?: boolean
        castShadow?: boolean
        receiveShadow?: boolean
      }
      if (mesh.isMesh) {
        mesh.castShadow = true
        mesh.receiveShadow = true
      }
    })

    const box = new Box3().setFromObject(root)
    const size = new Vector3()
    const center = new Vector3()
    box.getSize(size)
    box.getCenter(center)
    root.position.sub(center)

    return { source: root, width: Math.max(size.x, 0.01) }
  }, [scene])

  return (
    <group position={[0, 0.05, 0]}>
      <GateLeaf side="left" source={source} width={width} openRef={openRef} />
      <GateLeaf side="right" source={source} width={width} openRef={openRef} />
    </group>
  )
}

function GateScene({ openRef }: { openRef: RefObject<number> }) {
  return (
    <>
      <color attach="background" args={['#00000000']} />
      <ambientLight intensity={0.55} color="#f4efe4" />
      <directionalLight
        position={[2.4, 3.2, 4]}
        intensity={1.35}
        color="#f0e2b8"
        castShadow
      />
      <directionalLight
        position={[-2.8, 1.6, 2.2]}
        intensity={0.45}
        color="#c9ab6a"
      />
      <spotLight
        position={[0, 3.5, 2.5]}
        angle={0.55}
        penumbra={0.7}
        intensity={0.85}
        color="#ffe6a8"
      />
      <Suspense fallback={null}>
        <GatePair openRef={openRef} />
      </Suspense>
    </>
  )
}

type Props = {
  children: ReactNode
}

export function StoryGateScroll({ children }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const openRef = useRef(0)
  const reducedMotion = usePrefersReducedMotion()

  useLenis((lenis: Lenis) => {
    const wrap = wrapRef.current
    if (!wrap) return
    applyGateOpen(wrap, openRef, lenis.scroll, reducedMotion)
  })

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    applyGateOpen(wrap, openRef, window.scrollY, reducedMotion)
  }, [reducedMotion])

  return (
    <div
      ref={wrapRef}
      className="story-gate-scene"
      style={{ ['--gate-open' as string]: reducedMotion ? '1' : '0' }}
    >
      <div className="story-gate-canvas" aria-hidden>
        <Canvas
          className="story-gate-r3f"
          dpr={[1, 1.5]}
          camera={{ position: [0, 0.2, 4.1], fov: 32, near: 0.1, far: 40 }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
          }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0)
          }}
        >
          <GateScene openRef={openRef} />
        </Canvas>
      </div>

      <div className="story-gate-content">{children}</div>
    </div>
  )
}
