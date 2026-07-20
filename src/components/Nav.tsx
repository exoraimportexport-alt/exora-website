'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/pages/about-us', label: 'About Us' },
  { href: '/pages/contact-us', label: 'Contact Us' },
]

/* The only fixed element on the site — height locked to --nav-h,
   main content is padded below it, so nothing can overlap. */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: 'var(--nav-h)',
        zIndex: 100,
        background: scrolled || open ? 'rgba(10,10,15,0.85)' : 'rgba(10,10,15,0.4)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--hairline)',
        transition: 'background 0.3s',
      }}
    >
      <div className="shell" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo — transparent PNG straight on the dark bg, lightened to read */}
        <Link href="/" aria-label="Exora home" style={{ display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/exora-logo.png" alt="Exora Import and Export" style={{ height: 36, width: 'auto', filter: 'brightness(1.55) saturate(1.15)' }} />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: 6 }}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link" style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 500, color: 'var(--text-2)', padding: '8px 14px', borderRadius: 8, transition: 'color 0.2s, background 0.2s' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/pages/contact-us" className="btn-volt" style={{ marginLeft: 14, padding: '10px 18px', fontSize: 13.5 }}>
            Wholesale Enquiry <span className="arr">→</span>
          </Link>
        </nav>

        {/* Mobile burger */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ width: 22, height: 1.5, background: 'var(--text)', display: 'block', transition: '0.3s', transform: open ? 'rotate(45deg) translateY(6.5px)' : 'none' }} />
            <span style={{ width: 22, height: 1.5, background: 'var(--text)', display: 'block', transition: '0.3s', opacity: open ? 0 : 1 }} />
            <span style={{ width: 22, height: 1.5, background: 'var(--text)', display: 'block', transition: '0.3s', transform: open ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }} />
          </div>
        </button>
      </div>

      {/* Mobile sheet — anchored below the nav, part of the header (no overlap) */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden"
            style={{ background: 'rgba(10,10,15,0.97)', borderBottom: '1px solid var(--hairline)' }}
          >
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '16px 24px', borderTop: '1px solid var(--hairline)', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 500, color: 'var(--text)' }}>
                {l.label}
              </Link>
            ))}
            <div style={{ padding: '14px 24px 18px', borderTop: '1px solid var(--hairline)' }}>
              <Link href="/pages/contact-us" onClick={() => setOpen(false)} className="btn-volt" style={{ width: '100%', justifyContent: 'center' }}>
                Wholesale Enquiry <span className="arr">→</span>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`.nav-link:hover { color: var(--text); background: rgba(255,255,255,0.05); }`}</style>
    </header>
  )
}
