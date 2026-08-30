import { Center, Environment, Lightformer, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLenis } from 'lenis/react'
import type Lenis from 'lenis'
import { Suspense, useEffect, useMemo, useRef, type RefObject } from 'react'
import {
  ACESFilmicToneMapping,
  SRGBColorSpace,
  type Group,
  type Mesh,
  type MeshStandardMaterial,
  type Object3D,
} from 'three'
import { AnimatedDivider } from '../ornaments/AnimatedDivider'
import { FloralBranch } from '../ornaments/FloralBranch'
import { GeometricRosette } from '../ornaments/GeometricRosette'
import { JaliPattern } from '../ornaments/JaliPattern'
import { MughalArchFrame } from '../ornaments/MughalArchFrame'
import { Reveal } from '../ui/Reveal'
import { usePrefersReducedMotion } from '../lenis/usePrefersReducedMotion'

/** Gentle turn while scrolling — not a full spin. */
const SPIN_TURNS = 0.42

type Variant = 'light' | 'deep'

type Props = {
  modelUrl: string
  title: string
  caption: string
  variant?: Variant
  initialYaw?: number
  scale?: number
  exposure?: number
  className?: string
  index?: string
  eyebrow?: string
  note?: string
  plaque?: string
}

function applyModelMotion(
  wrap: HTMLElement,
  scroll: number,
  rotationRef: RefObject<number>,
  initialYaw: number,
  reducedMotion: boolean,
) {
  const rect = wrap.getBoundingClientRect()
  const vh = window.innerHeight || 1
  const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.62)))

  if (!reducedMotion) {
    const docTop = rect.top + scroll
    const spinStart = docTop - vh
    const spinEnd = docTop + rect.height
    const spinProgress = Math.min(
      1,
      Math.max(0, (scroll - spinStart) / Math.max(1, spinEnd - spinStart)),
    )
    rotationRef.current =
      initialYaw + spinProgress * Math.PI * 2 * SPIN_TURNS
  } else {
    rotationRef.current = initialYaw
  }

  wrap.style.opacity = String(0.88 + progress * 0.12)
}

function prepareStudioMaterials(root: Object3D) {
  root.traverse((obj) => {
    const mesh = obj as Mesh
    if (!mesh.isMesh) return

    const materials = Array.isArray(mesh.material)
      ? mesh.material
      : [mesh.material]

    for (const material of materials) {
      const mat = material as MeshStandardMaterial
      if (!mat || !('isMeshStandardMaterial' in mat || 'metalness' in mat)) {
        continue
      }

      if (typeof mat.metalness === 'number') {
        mat.metalness = Math.min(mat.metalness, 0.7)
      }
      if (typeof mat.roughness === 'number') {
        mat.roughness = Math.min(0.65, Math.max(mat.roughness, 0.32))
      }
      if ('envMapIntensity' in mat) {
        mat.envMapIntensity = 0.85
      }
      mat.needsUpdate = true
    }
  })
}

function ModelMesh({
  modelUrl,
  scale,
  rotationRef,
}: {
  modelUrl: string
  scale: number
  rotationRef: RefObject<number>
}) {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF(modelUrl)

  const prepared = useMemo(() => {
    const clone = scene.clone(true)
    prepareStudioMaterials(clone)
    return clone
  }, [scene])

  useFrame(() => {
    const group = groupRef.current
    if (!group) return
    group.rotation.y = rotationRef.current
  })

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={prepared} scale={scale} />
      </Center>
    </group>
  )
}

function StudioLights() {
  return (
    <>
      <hemisphereLight intensity={0.85} color="#ffffff" groundColor="#e8e8e8" />
      <ambientLight intensity={0.7} color="#f7f7f7" />
      <directionalLight position={[2.5, 5, 4]} intensity={1.35} color="#ffffff" />
      <directionalLight position={[-3.5, 3, 2.5]} intensity={0.85} color="#ffffff" />
      <directionalLight position={[0, 1.5, 6]} intensity={1.05} color="#ffffff" />
      <directionalLight position={[0, -3, 2]} intensity={0.45} color="#f0f0f0" />
      <directionalLight position={[0, 2, -4]} intensity={0.55} color="#ffffff" />
      <Environment resolution={256} environmentIntensity={0.55}>
        <Lightformer form="rect" intensity={2.2} color="#ffffff" scale={[10, 4, 1]} position={[0, 5, 0]} rotation-x={-Math.PI / 2} />
        <Lightformer form="rect" intensity={1.2} color="#ffffff" scale={[6, 6, 1]} position={[-5, 1, 2]} />
        <Lightformer form="rect" intensity={1.2} color="#ffffff" scale={[6, 6, 1]} position={[5, 1, 2]} />
        <Lightformer form="rect" intensity={0.8} color="#f5f5f5" scale={[8, 4, 1]} position={[0, -3, 1]} rotation-x={Math.PI / 2} />
        <Lightformer form="rect" intensity={1.4} color="#ffffff" scale={[10, 8, 1]} position={[0, 1, -5]} />
      </Environment>
    </>
  )
}

function ModelCanvas({
  modelUrl,
  scale,
  exposure,
  rotationRef,
}: {
  modelUrl: string
  scale: number
  exposure: number
  rotationRef: RefObject<number>
}) {
  return (
    <Canvas
      className="event-model-r3f"
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.05, 5.4], fov: 28, near: 0.1, far: 40 }}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
        toneMapping: ACESFilmicToneMapping,
        outputColorSpace: SRGBColorSpace,
      }}
      onCreated={({ gl, camera }) => {
        gl.setClearColor(0xffffff, 0)
        gl.toneMappingExposure = exposure
        camera.lookAt(0, 0, 0)
      }}
    >
      <StudioLights />
      <Suspense fallback={null}>
        <ModelMesh modelUrl={modelUrl} scale={scale} rotationRef={rotationRef} />
      </Suspense>
    </Canvas>
  )
}

export function EventModelScroll({
  modelUrl,
  title,
  caption,
  variant = 'light',
  initialYaw = 0,
  scale = 0.78,
  exposure = 1.05,
  className = '',
  index = 'I',
  eyebrow = 'A Kashmiri Ritual',
  note,
  plaque,
}: Props) {
  const wrapRef = useRef<HTMLElement>(null)
  const rotationRef = useRef(initialYaw)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    useGLTF.preload(modelUrl)
  }, [modelUrl])

  useLenis((lenis: Lenis) => {
    const wrap = wrapRef.current
    if (!wrap) return
    applyModelMotion(wrap, lenis.scroll, rotationRef, initialYaw, reducedMotion)
  })

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    applyModelMotion(wrap, window.scrollY, rotationRef, initialYaw, reducedMotion)
  }, [initialYaw, reducedMotion])

  return (
    <article
      ref={wrapRef}
      id={title === 'Food' ? 'food' : undefined}
      className={`feast-chapter feast-chapter--${variant} lenis-scroll-el lenis-scroll-el--parallax ${className}`.trim()}
    >
      <div className="feast-chapter__backdrop" aria-hidden>
        <JaliPattern className="feast-chapter__screen" />
        <span className="feast-chapter__wash" />
      </div>

      <FloralBranch
        position={variant === 'deep' ? 'top-right' : 'top-left'}
        size="large"
        className={`botanical-reveal botanical-reveal--${variant === 'deep' ? 'right' : 'left'}`}
      />
      <FloralBranch
        position={variant === 'deep' ? 'bottom-left' : 'bottom-right'}
        size="medium"
        className="feast-chapter__sprig"
      />

      <div className="feast-chapter__composition">
        <Reveal
          variant={variant === 'deep' ? 'right' : 'left'}
          className="feast-chapter__copy"
        >
          <span className="feast-chapter__index" aria-hidden>
            {index}
          </span>
          <p className="inv-label">{eyebrow}</p>
          <h3 className="feast-chapter__title">{title}</h3>
          <AnimatedDivider light={variant === 'deep'} />
          <p className="feast-chapter__caption">{caption}</p>
          {note && <p className="feast-chapter__note">{note}</p>}
        </Reveal>

        <Reveal variant="clip" className="feast-chapter__shrine">
          <MughalArchFrame
            size="fluid"
            tone={variant === 'deep' ? 'deep' : 'parchment'}
            variant={title === 'Food' ? 'onion' : title === 'Music' ? 'cusped' : 'pointed'}
            crest={<GeometricRosette className="feast-chapter__crest" />}
          >
            <div className="feast-chapter__niche">
              <div className="feast-chapter__halo" aria-hidden />
              {title === 'Food' && (
                <img
                  className="feast-chapter__platter"
                  src="/images/feast-platter.png"
                  alt="Traditional Kashmiri wedding feast arranged on an ornate platter"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <div className="feast-chapter__canvas" aria-hidden>
                <ModelCanvas
                  modelUrl={modelUrl}
                  scale={scale}
                  exposure={exposure}
                  rotationRef={rotationRef}
                />
              </div>
              <span className="feast-chapter__pedestal" aria-hidden />
            </div>
          </MughalArchFrame>
          <div className="feast-chapter__plaque">
            <span>✦</span>
            {plaque ?? `The Art of ${title}`}
            <span>✦</span>
          </div>
        </Reveal>
      </div>
    </article>
  )
}
