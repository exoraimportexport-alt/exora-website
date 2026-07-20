'use client'

import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

export default function About() {
  return (
    <section className="shell" style={{ paddingTop: 104, paddingBottom: 56 }}>
      <div className="rail">
        <span className="data-label" style={{ color: 'var(--text)' }}><span className="idx">01</span>About Us</span>
        <span className="line" />
        <span className="data-label hidden md:inline">Global Reach</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" style={{ marginTop: 44 }}>
        {/* Main glass panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="glass lg:col-span-8"
          style={{ padding: 'clamp(26px, 4vw, 48px)' }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 46px)', marginBottom: 22 }}>
            A globally trusted partner<br />
            <span style={{ color: 'var(--volt-2)' }}>in international trade</span>
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.85, color: 'var(--text-2)', maxWidth: 640 }}>
            At EXORA Import &amp; Export, our vision is to become a globally trusted partner in
            international trade by delivering seamless sourcing and supply solutions across diverse
            industries. By bridging markets and cultures, we empower businesses with high-quality
            products, innovative trade strategies, and ethically driven partnerships built on trust and
            transparency. As the global marketplace evolves, we remain committed to excellence,
            reliability, and a customer-centric approach — setting new benchmarks and creating a lasting
            positive impact in every market we serve.
          </p>
        </motion.div>

        {/* Stat panels — real numbers */}
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6">
          {[
            { n: '17+', l: 'Years Experience' },
            { n: '90%', l: 'Happy Customers' },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.12 + i * 0.12, ease: EASE }}
              className="glass glass-hover"
              style={{ padding: '28px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 140 }}
            >
              <span className="data-label">{s.l}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 4.6vw, 68px)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1, background: 'linear-gradient(100deg, #3b6cff, #8fa8ff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', paddingTop: 18 }}>
                {s.n}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
