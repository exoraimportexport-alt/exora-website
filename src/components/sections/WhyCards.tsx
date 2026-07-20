'use client'

import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const CARDS = [
  {
    n: '01',
    badge: null,
    title: 'Premium Quality Product',
    body: 'Nothing ships until it passes. Every zipper, button and trim is checked against international benchmarks — because a weak component fails an entire garment.',
  },
  {
    n: '02',
    badge: '30 DAYS',
    title: 'Best Support',
    body: 'A trade desk that answers. Our specialists stay with your order from enquiry to delivery — sourcing, documentation, logistics — end to end.',
  },
  {
    n: '03',
    badge: '100%',
    title: 'Customer Satisfaction',
    body: 'We measure ourselves the way buyers do: repeat orders. We stand behind every consignment with full commitment to your success.',
  },
]

export default function WhyCards() {
  return (
    <section className="shell" style={{ paddingTop: 56, paddingBottom: 104 }}>
      <div className="rail">
        <span className="data-label" style={{ color: 'var(--text)' }}><span className="idx">02</span>Why Choose Us</span>
        <span className="line" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginTop: 44 }}>
        {CARDS.map((c, i) => (
          <motion.article
            key={c.n}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
            className="glass glass-hover"
            style={{ padding: '30px 28px', display: 'flex', flexDirection: 'column', gap: 16, minHeight: 250 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-3)' }}>/{c.n}</span>
              {c.badge && (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--volt-2)', border: '1px solid rgba(59,108,255,0.4)', borderRadius: 999, padding: '5px 11px' }}>
                  {c.badge}
                </span>
              )}
            </div>
            <h3 style={{ fontSize: 21, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{c.title}</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.75, color: 'var(--text-2)' }}>{c.body}</p>
            <div style={{ marginTop: 'auto', height: 2, borderRadius: 2, background: 'linear-gradient(90deg, var(--volt), transparent)', opacity: 0.55 }} />
          </motion.article>
        ))}
      </div>
    </section>
  )
}
