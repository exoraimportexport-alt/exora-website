'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function NotFound() {
  const [count, setCount] = useState(10)

  useEffect(() => {
    const t = setInterval(() => setCount((c) => c - 1), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (count <= 0) window.location.href = '/'
  }, [count])

  return (
    <div style={{ minHeight: 'calc(100vh - var(--nav-h))', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ top: '20%', left: '30%', width: 400, height: 400, background: 'rgba(59,108,255,0.12)' }} />

      <div className="glass" style={{ maxWidth: 560, width: '100%', padding: 'clamp(28px, 5vw, 52px)', textAlign: 'center', position: 'relative' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(90px, 16vw, 150px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.9, background: 'linear-gradient(100deg, #3b6cff, #8fa8ff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', display: 'block' }}>
          404
        </span>
        <h1 style={{ fontSize: 'clamp(20px, 2.6vw, 30px)', margin: '18px 0 12px' }}>Signal lost on this route</h1>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-2)', marginBottom: 28 }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Returning home in{' '}
          <span style={{ color: 'var(--volt-2)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{count}s</span>.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/" className="btn-volt">Home <span className="arr">→</span></Link>
          <Link href="/pages/about-us" className="btn-ghost">About Us</Link>
          <Link href="/pages/contact-us" className="btn-ghost">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
