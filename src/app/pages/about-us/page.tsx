'use client'

import Image from 'next/image'
import Link from 'next/link'
import LeadershipSection from '@/components/sections/LeadershipSection'

export default function AboutPage() {
  return (
    <div className="site-shell" style={{ paddingTop: 78 }}>
      <section className="section-wrap" style={{ paddingTop: 46 }}>
        <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: 58 }}>
          <div className="exora-eyebrow" style={{ marginBottom: 22 }}>About Exora</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr .8fr', gap: 80, alignItems: 'end' }} className="two-col">
            <h1 className="exora-serif" style={{ margin: 0, fontSize: 'clamp(52px, 8vw, 108px)', lineHeight: .9, fontWeight: 400, letterSpacing: '-.05em' }}>
              A focused<br />trade business.
            </h1>
            <p style={{ margin: 0, color: 'var(--ink-muted)', fontSize: 17, lineHeight: 1.8, maxWidth: 480 }}>
              Exora is an import and export company currently focused on garment accessories, built around clear communication and dependable business relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="section-wrap" style={{ paddingTop: 95, paddingBottom: 110 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 70, alignItems: 'start' }} className="two-col">
          <div style={{ position: 'relative', minHeight: 520, overflow: 'hidden', background: '#ddd8cf' }}>
            <Image src="/garment-accessories.jpg" alt="Garment accessories" fill sizes="(max-width: 900px) 100vw, 55vw" style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <div className="exora-eyebrow" style={{ marginBottom: 20 }}>01 · Our approach</div>
            <h2 className="exora-serif" style={{ margin: '0 0 24px', fontSize: 'clamp(38px, 5vw, 64px)', lineHeight: 1, fontWeight: 400, letterSpacing: '-.04em' }}>
              Straightforward by design.
            </h2>
            <p style={{ margin: '0 0 20px', fontSize: 16, lineHeight: 1.9, color: 'var(--ink-muted)' }}>
              We keep the business focused. Today, that means garment accessories and the sourcing, communication and supply conversations that support them.
            </p>
            <p style={{ margin: '0 0 28px', fontSize: 16, lineHeight: 1.9, color: 'var(--ink-muted)' }}>
              We believe dependable trade comes from doing the basics well: understand the requirement, communicate clearly, pay attention to detail and build relationships over time.
            </p>
            <Link href="/pages/contact-us" className="exora-link" style={{ fontSize: 14, fontWeight: 600 }}>Talk to Exora →</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#e9e4db', padding: '95px 0' }}>
        <div className="section-wrap">
          <div className="exora-eyebrow" style={{ marginBottom: 18 }}>02 · What matters to us</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }} className="values-grid">
            {[
              ['01', 'Reliability', 'Clear communication and dependable follow-through.'],
              ['02', 'Quality', 'Careful attention to the work and the relationships around it.'],
              ['03', 'Long-term relationships', 'A preference for steady business built on trust.'],
            ].map(([n, title, copy], i) => (
              <div key={n} style={{ padding: '30px 28px 34px 0', borderRight: i < 2 ? '1px solid var(--line)' : 'none' }} className="value-item">
                <div className="exora-serif" style={{ fontSize: 28, marginBottom: 20 }}>{n}</div>
                <h3 style={{ fontSize: 22, margin: '0 0 12px', fontWeight: 500 }}>{title}</h3>
                <p style={{ margin: 0, color: 'var(--ink-muted)', fontSize: 14, lineHeight: 1.8, maxWidth: 300 }}>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap" style={{ paddingTop: 105, paddingBottom: 110 }}>
        <div className="exora-eyebrow" style={{ marginBottom: 18 }}>03 · Leadership</div>
        <h2 className="exora-serif" style={{ fontSize: 'clamp(42px, 6vw, 72px)', lineHeight: .98, fontWeight: 400, letterSpacing: '-.04em', margin: '0 0 42px' }}>The people behind Exora.</h2>
        <LeadershipSection />
      </section>

      <style jsx>{`
        @media (max-width: 900px){.two-col{grid-template-columns:1fr!important}.values-grid{grid-template-columns:1fr!important}.value-item{border-right:none!important;border-bottom:1px solid var(--line)}.value-item:last-child{border-bottom:none}}
      `}</style>
    </div>
  )
}
