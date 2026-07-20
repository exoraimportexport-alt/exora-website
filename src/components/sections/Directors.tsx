'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

/* Core facts — real directors, real bios */
const PROFILES = [
  {
    initial: 'B',
    name: 'Mr. Bhupendra Kumar',
    role: 'Director',
    bio: 'A graduate of NIFT Delhi with over 22 years of expertise in international trade and sourcing. Under his leadership, EXORA has grown into a trusted name across multiple industries, connecting global markets with quality Indian products.',
  },
  {
    initial: 'S',
    name: 'Mr. Sandeep Sharma',
    role: 'Director',
    bio: "With 22 years of expertise in the industry, Mr. Sharma oversees all operational aspects of EXORA's supply chain, ensuring seamless logistics and quality control across international markets.",
  },
  {
    initial: 'D',
    name: 'Mr. Dharmendra Singh',
    role: 'Director',
    bio: "A seasoned professional with 25 years of experience in business development and international partnerships. He drives EXORA's expansion into new markets and strategic alliances worldwide.",
  },
]

export default function Directors() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="shell" style={{ paddingTop: 0, paddingBottom: 104 }}>
      <div className="rail">
        <span className="data-label" style={{ color: 'var(--text)' }}><span className="idx">03</span>The Directors</span>
        <span className="line" />
        <span className="data-label hidden md:inline">tap a card</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginTop: 44 }}>
        {PROFILES.map((p, i) => {
          const isOpen = open === i
          return (
            <motion.button
              key={p.name}
              onClick={() => setOpen(isOpen ? null : i)}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              className="glass glass-hover"
              style={{ padding: '28px 26px', textAlign: 'left', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 14, minHeight: 210, background: isOpen ? 'rgba(59,108,255,0.08)' : undefined, borderColor: isOpen ? 'rgba(59,108,255,0.5)' : undefined }}
            >
              {/* monogram */}
              <span style={{ width: 52, height: 52, borderRadius: 14, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #3b6cff, #2148d8)', boxShadow: '0 10px 26px -10px rgba(59,108,255,0.6)' }}>
                {p.initial}
              </span>

              <div>
                <h3 style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.015em' }}>{p.name}</h3>
                <span className="data-label" style={{ marginTop: 4, display: 'inline-block' }}>{p.role}</span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--text-2)', overflow: 'hidden' }}
                  >
                    {p.bio}
                  </motion.p>
                )}
              </AnimatePresence>

              <span style={{ marginTop: 'auto', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--volt-2)' }}>
                {isOpen ? '— close' : '+ read bio'}
              </span>
            </motion.button>
          )
        })}
      </div>

      {/* Full board — real names */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
        style={{ marginTop: 26, paddingTop: 20, borderTop: '1px solid var(--hairline)', display: 'flex', flexWrap: 'wrap', gap: '10px 26px', alignItems: 'baseline' }}
      >
        <span className="data-label">The board</span>
        {['Mr. Bhupendra Kumar', 'Mr. Sandeep Sharma', 'Mr. Neeraj Tyagi', 'Mr. Dharmendra Singh', 'Mr. Varun Chaudhary'].map((n) => (
          <span key={n} style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-2)' }}>{n}</span>
        ))}
      </motion.div>
    </section>
  )
}
