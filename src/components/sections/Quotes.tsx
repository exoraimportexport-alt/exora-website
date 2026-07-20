'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

/* Real client testimonials, verbatim */
const QUOTES = [
  {
    quote: 'Their team is very professional and transparent in communication. They helped us source high-quality raw materials at competitive prices and delivered on time. Truly a reliable import-export company in India.',
    name: 'Rohit',
    role: 'Verified Buyer',
  },
  {
    quote: 'EXORA has become our trusted partner for international trade. They guided us throughout the process with complete clarity and ensured smooth shipping. The quality of products exceeded our expectations.',
    name: 'Neha Verma',
    role: 'Verified Buyer',
  },
  {
    quote: 'What I liked most about EXORA is their customer-centric approach. They always focus on building long-term relationships. Very ethical, reliable, and innovative in their trade practices.',
    name: 'Amit Mehra',
    role: 'Verified Buyer',
  },
]

export default function Quotes() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % QUOTES.length), 6000)
    return () => clearInterval(t)
  }, [])

  const q = QUOTES[active]

  return (
    <section className="shell" style={{ paddingTop: 0, paddingBottom: 104 }}>
      <div className="rail">
        <span className="data-label" style={{ color: 'var(--text)' }}><span className="idx">04</span>What Clients Say</span>
        <span className="line" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="glass"
        style={{ marginTop: 44, padding: 'clamp(28px, 4.5vw, 56px)', position: 'relative', overflow: 'hidden' }}
      >
        {/* faint blue orb inside the panel */}
        <div className="glow-orb" style={{ top: -120, right: -80, width: 320, height: 320, background: 'rgba(59,108,255,0.12)' }} />

        <span style={{ fontFamily: 'var(--font-display)', fontSize: 72, lineHeight: 0.6, color: 'var(--volt)', display: 'block', marginBottom: 28 }} aria-hidden>&ldquo;</span>

        <div style={{ minHeight: 150, position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: EASE }}
              style={{ fontSize: 'clamp(17px, 2vw, 23px)', lineHeight: 1.65, color: 'var(--text)', maxWidth: 820, fontWeight: 400 }}
            >
              {q.quote}
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 30, paddingTop: 22, borderTop: '1px solid var(--hairline)', flexWrap: 'wrap', gap: 16 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`sig-${active}`}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              style={{ display: 'flex', alignItems: 'center', gap: 12 }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--volt)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15.5 }}>{q.name}</span>
              <span className="data-label">{q.role}</span>
            </motion.div>
          </AnimatePresence>

          {/* selector dots */}
          <div style={{ display: 'flex', gap: 8 }}>
            {QUOTES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View testimonial ${i + 1}`}
                style={{ width: i === active ? 26 : 9, height: 9, borderRadius: 999, border: 'none', cursor: 'pointer', background: i === active ? 'var(--volt)' : 'rgba(255,255,255,0.18)', transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)' }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
