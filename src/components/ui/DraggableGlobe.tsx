'use client'

import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

interface Props { size?: number }

/* Cobe globe for the Obsidian Atlas:
   electric-blue continents on near-black, glow matched to the void,
   and a blue shadow of its own colour pooled beneath. */
export default function DraggableGlobe({ size = 560 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phiRef = useRef(0)
  const thetaRef = useRef(0.18)
  const isDragging = useRef(false)
  const lastPointer = useRef({ x: 0, y: 0 })
  const velocityRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const px = size * 2
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: px,
      height: px,
      phi: 0,
      theta: 0.18,
      dark: 1,
      diffuse: 1.9,
      mapSamples: 44000,
      mapBrightness: 8.5,
      mapBaseBrightness: 0.06,
      baseColor: [0.24, 0.42, 1],       /* electric blue land */
      markerColor: [0.43, 0.57, 1],
      glowColor: [0.16, 0.28, 0.9],     /* blue rim glow */
      opacity: 0.95,
      markers: [],
      onRender(state) {
        if (!isDragging.current) {
          phiRef.current += 0.0028 + velocityRef.current.x
          thetaRef.current += velocityRef.current.y
          velocityRef.current.x *= 0.88
          velocityRef.current.y *= 0.88
          thetaRef.current = Math.max(-0.45, Math.min(0.45, thetaRef.current))
        }
        state.phi = phiRef.current
        state.theta = thetaRef.current
      },
    })

    const onDown = (e: PointerEvent) => {
      isDragging.current = true
      lastPointer.current = { x: e.clientX, y: e.clientY }
      velocityRef.current = { x: 0, y: 0 }
      canvas.setPointerCapture(e.pointerId)
      canvas.style.cursor = 'grabbing'
    }
    const onMove = (e: PointerEvent) => {
      if (!isDragging.current) return
      const dx = e.clientX - lastPointer.current.x
      const dy = e.clientY - lastPointer.current.y
      phiRef.current += dx * 0.006
      thetaRef.current = Math.max(-0.45, Math.min(0.45, thetaRef.current + dy * 0.004))
      velocityRef.current = { x: dx * 0.006, y: dy * 0.004 }
      lastPointer.current = { x: e.clientX, y: e.clientY }
    }
    const onUp = () => { isDragging.current = false; canvas.style.cursor = 'grab' }

    canvas.addEventListener('pointerdown', onDown)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerup', onUp)
    canvas.addEventListener('pointercancel', onUp)
    canvas.style.cursor = 'grab'

    return () => {
      globe.destroy()
      canvas.removeEventListener('pointerdown', onDown)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerup', onUp)
      canvas.removeEventListener('pointercancel', onUp)
    }
  }, [size])

  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center', userSelect: 'none' }}>
      {/* halo behind the sphere */}
      <div style={{ position: 'absolute', inset: '6%', borderRadius: '50%', background: 'radial-gradient(circle at 46% 38%, rgba(59,108,255,0.32) 0%, rgba(59,108,255,0.08) 55%, transparent 75%)', filter: 'blur(28px)', pointerEvents: 'none' }} />
      {/* the shadow of its own colour, pooled beneath */}
      <div style={{ position: 'absolute', bottom: '-4%', left: '17%', width: '66%', height: '13%', borderRadius: '50%', background: 'rgba(59,108,255,0.5)', filter: 'blur(38px)', pointerEvents: 'none' }} />
      <canvas ref={canvasRef} style={{ width: size, height: size, aspectRatio: '1', touchAction: 'none', display: 'block', position: 'relative', zIndex: 1 }} />
    </div>
  )
}
