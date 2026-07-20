'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const DraggableGlobe = dynamic(() => import('@/components/ui/DraggableGlobe'), { ssr: false })

const EASE = [0.16, 1, 0.3, 1] as const

function useGlobeSize() {
  const [size, setSize] = useState(640)
  useEffect(() => {
    const check = () => setSize(Math.min(680, Math.max(300, Math.floor(window.innerWidth * 0.82))))
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return size
}

export default function Hero() {
  const size = useGlobeSize()
  const horizonH = Math.floor(size * 0.58)

  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--void)' }}>
      {/* ambient orbs — decorative, non-interactive, behind everything */}
      <div className="glow-orb" style={{ top: -140, left: '12%', width: 420, height: 420, background: 'rgba(59,108,255,0.13)', zIndex: 0 }} />
      <div className="glow-orb" style={{ top: 60, right: '8%', width: 300, height: 300, background: 'rgba(59,108,255,0.09)', zIndex: 0 }} />

      <div className="shell" style={{ position: 'relative', zIndex: 2, paddingTop: 84, textAlign: 'center' }}>
        {/* status chip — factual */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <span className="chip"><span className="dot" />Garment Accessories — Noida, India</span>
        </motion.div>

        {/* headline */}
        <h1 style={{ fontSize: 'clamp(44px, 7.6vw, 108px)', margin: '34px auto 0', maxWidth: 1000, textTransform: 'uppercase', letterSpacing: '-0.035em' }}>
          {['Threading', 'The World', 'Together'].map((line, i) => (
            <span key={line} style={{ display: 'block', overflow: 'hidden' }}>
              <motion.span
                initial={{ y: '112%' }} animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease: EASE }}
                style={{
                  display: 'inline-block',
                  background: i === 2 ? 'linear-gradient(100deg, #3b6cff 0%, #8fa8ff 100%)' : 'linear-gradient(180deg, #f4f6fb 60%, #b9c1d4 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  paddingBottom: '0.08em',
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* sub — improved copy, factual */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
          style={{ margin: '26px auto 0', maxWidth: 560, fontSize: 17, lineHeight: 1.7, color: 'var(--text-2)' }}
        >
          Quality garment accessories for the global fashion market — zippers, buttons, threads and
          trims, sourced in India and delivered anywhere fashion is made.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.72, ease: EASE }}
          style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 34, flexWrap: 'wrap' }}
        >
          <Link href="/pages/contact-us" className="btn-volt">Wholesale Enquiry <span className="arr">→</span></Link>
          <Link href="/pages/about-us" className="btn-ghost">About Us</Link>
        </motion.div>
      </div>

      {/* ── The horizon globe ── */}
      <motion.div
        initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
        style={{ position: 'relative', zIndex: 1, height: horizonH, marginTop: 48, overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, width: size, height: size }}>
          <DraggableGlobe size={size} />
        </div>

        {/* route arcs across the horizon */}
        <svg viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2 }} aria-hidden>
          <path d="M 80 250 Q 380 40 680 200" fill="none" stroke="rgba(110,145,255,0.4)" strokeWidth="1.5" className="arc-path" />
          <path d="M 300 280 Q 640 90 1120 230" fill="none" stroke="rgba(110,145,255,0.25)" strokeWidth="1.2" className="arc-path" style={{ animationDelay: '1.4s' }} />
          <circle cx="80" cy="250" r="4" fill="#3b6cff" />
          <circle cx="680" cy="200" r="3" fill="#6e91ff" />
          <circle cx="1120" cy="230" r="3" fill="#6e91ff" />
        </svg>

        {/* fade the sphere into the void at the section edge */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 110, background: 'linear-gradient(to top, var(--void), transparent)', zIndex: 3, pointerEvents: 'none' }} />
      </motion.div>

      {/* drag hint — in flow, below the globe, cannot overlap */}
      <div className="shell" style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingBottom: 26 }}>
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }}
          className="data-label"
        >
          drag the sphere · scroll to explore ↓
        </motion.span>
      </div>
    </section>
  )
}
