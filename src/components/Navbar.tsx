'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '/pages/about-us', label: 'About' },
  { href: '/#business', label: 'Our Business' },
  { href: '/pages/contact-us', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'rgba(245,242,235,.96)' : 'rgba(245,242,235,.9)',
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
        transition: 'background .25s ease, border-color .25s ease',
      }}
    >
      <div className="section-wrap" style={{ height: 78, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" aria-label="Exora home" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image src="/exora-logo.png" alt="Exora Import and Export" width={190} height={110} style={{ width: 150, height: 'auto' }} priority />
        </Link>

        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: 30 }}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="exora-link" style={{ fontSize: 13, color: '#2b2a28' }}>
              {link.label}
            </Link>
          ))}
          <Link href="/pages/contact-us" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            minHeight: 40, padding: '0 17px', border: '1px solid var(--ink)',
            textDecoration: 'none', fontSize: 12, fontWeight: 600,
            letterSpacing: '.03em',
          }}>
            Contact Us
          </Link>
        </nav>

        <button
          className="md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          style={{ border: 'none', background: 'transparent', padding: 10, color: 'var(--ink)', cursor: 'pointer' }}
        >
          <span style={{ display: 'block', width: 22, height: 1.5, background: 'currentColor', marginBottom: 5 }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: 'currentColor', marginBottom: 5 }} />
          <span style={{ display: 'block', width: 15, height: 1.5, background: 'currentColor', marginLeft: 'auto' }} />
        </button>
      </div>

      {open && (
        <div className="md:hidden" style={{ borderTop: '1px solid var(--line)', background: 'var(--paper)' }}>
          <div className="section-wrap" style={{ paddingTop: 16, paddingBottom: 18, display: 'grid', gap: 12 }}>
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} style={{ textDecoration: 'none', fontSize: 16, padding: '8px 0' }}>
                {link.label}
              </Link>
            ))}
            <Link href="/pages/contact-us" onClick={() => setOpen(false)} style={{ textDecoration: 'none', fontSize: 16, padding: '8px 0', fontWeight: 600 }}>
              Contact Us →
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
