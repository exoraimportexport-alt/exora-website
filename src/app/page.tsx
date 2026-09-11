'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Arrow() {
  return <span aria-hidden="true" style={{ display: 'inline-block', marginLeft: 8 }}>→</span>
}

export default function HomePage() {
  return (
    <div className="site-shell">
      <section style={{ paddingTop: 78 }}>
        <div className="section-wrap" style={{ paddingTop: 34 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', minHeight: 'calc(100vh - 112px)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }} className="hero-grid">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '46px 48px 42px 0' }}>
              <div>
                <div className="exora-eyebrow" style={{ marginBottom: 26 }}>Import & Export</div>
                <motion.h1
                  initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease: 'easeOut' }}
                  className="exora-serif"
                  style={{ fontSize: 'clamp(58px, 7.2vw, 112px)', lineHeight: .92, fontWeight: 400, letterSpacing: '-.045em', margin: 0, maxWidth: 650 }}
                >
                  Trade,<br />done properly.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .12 }}
                  style={{ maxWidth: 470, margin: '30px 0 0', fontSize: 17, lineHeight: 1.75, color: 'var(--ink-muted)' }}
                >
                  Exora is an import and export company currently focused on garment accessories.
                </motion.p>
                <Link href="/pages/contact-us" style={{ display: 'inline-flex', alignItems: 'center', marginTop: 30, padding: '13px 18px', background: 'var(--ink)', color: '#fff', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>
                  Contact Us <Arrow />
                </Link>
              </div>

              <div style={{ display: 'flex', gap: 34, flexWrap: 'wrap', paddingTop: 30 }}>
                <div>
                  <div className="exora-eyebrow" style={{ color: 'var(--blue-deep)', marginBottom: 8 }}>Current focus</div>
                  <div style={{ fontSize: 15 }}>Garment accessories</div>
                </div>
                <div>
                  <div className="exora-eyebrow" style={{ marginBottom: 8 }}>Based in</div>
                  <div style={{ fontSize: 15 }}>Noida, India</div>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative', minHeight: 520, overflow: 'hidden', background: '#ddd8cf' }}>
              <Image
                src="/garment-accessories.jpg"
                alt="Garment accessories"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 55vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div style={{ position: 'absolute', left: 22, bottom: 20, padding: '10px 12px', background: 'rgba(245,242,235,.92)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase' }}>
                Garment accessories
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '118px 0 110px' }}>
        <div className="section-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 90, alignItems: 'start' }} className="two-col">
            <div>
              <div className="exora-eyebrow" style={{ marginBottom: 18 }}>01 · About Exora</div>
              <h2 className="exora-serif" style={{ fontSize: 'clamp(38px, 5vw, 66px)', lineHeight: 1.02, fontWeight: 400, letterSpacing: '-.035em', margin: 0 }}>
                A focused business with a straightforward way of working.
              </h2>
            </div>
            <div style={{ maxWidth: 640, paddingTop: 10 }}>
              <p style={{ fontSize: 20, lineHeight: 1.65, margin: '0 0 24px' }}>
                Exora works with a simple principle: understand the requirement, communicate clearly, and build dependable business relationships.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--ink-muted)', margin: '0 0 28px' }}>
                Our current focus is garment accessories. We are building the company around consistent service, practical sourcing and long-term relationships rather than a catalogue-led buying experience.
              </p>
              <Link href="/pages/about-us" className="exora-link" style={{ fontSize: 14, fontWeight: 600 }}>
                About Exora <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="business" style={{ background: '#e9e4db', padding: '110px 0' }}>
        <div className="section-wrap">
          <div className="exora-rule" style={{ marginBottom: 26 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 30, alignItems: 'end', marginBottom: 55 }} className="business-head">
            <div>
              <div className="exora-eyebrow" style={{ marginBottom: 16 }}>02 · Our business</div>
              <h2 className="exora-serif" style={{ fontSize: 'clamp(42px, 6vw, 76px)', lineHeight: .98, fontWeight: 400, letterSpacing: '-.04em', margin: 0 }}>Garment accessories.</h2>
            </div>
            <p style={{ maxWidth: 390, margin: 0, color: 'var(--ink-muted)', fontSize: 15, lineHeight: 1.8 }}>
              This is what Exora is currently focused on. For enquiries, please speak with our team directly.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.45fr .85fr', gap: 22 }} className="business-grid">
            <div style={{ position: 'relative', minHeight: 510, overflow: 'hidden', background: '#d6d0c6' }}>
              <Image src="/garment-accessories.jpg" alt="Garment accessories at close range" fill sizes="(max-width: 850px) 100vw, 65vw" style={{ objectFit: 'cover', objectPosition: 'center 55%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 510, border: '1px solid var(--line)', padding: 30, background: 'rgba(245,242,235,.72)' }}>
              <div>
                <div className="exora-eyebrow" style={{ marginBottom: 16, color: 'var(--blue-deep)' }}>Current focus</div>
                <h3 className="exora-serif" style={{ fontSize: 38, lineHeight: 1.05, fontWeight: 400, margin: '0 0 22px' }}>Garment accessories</h3>
                <p style={{ margin: 0, color: 'var(--ink-muted)', fontSize: 15, lineHeight: 1.8 }}>
                  We are currently focused on garment accessories and the business relationships around sourcing and supply.
                </p>
              </div>
              <Link href="/pages/contact-us" style={{ fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Enquire with Exora <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '112px 0' }}>
        <div className="section-wrap">
          <div className="exora-rule" style={{ marginBottom: 52 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '.7fr 1.3fr', gap: 80 }} className="two-col">
            <div>
              <div className="exora-eyebrow">03 · How we work</div>
            </div>
            <div>
              {[['01', 'Understand', 'We start with the requirement and the context around it.'], ['02', 'Source', 'We work through suitable sourcing and supply conversations.'], ['03', 'Coordinate', 'We keep communication clear as the work moves forward.'], ['04', 'Build the relationship', 'The aim is dependable business, not a one-off exchange.']].map(([n, title, copy]) => (
                <div key={n} style={{ display: 'grid', gridTemplateColumns: '55px 1fr', gap: 18, padding: '25px 0', borderBottom: '1px solid var(--line)' }}>
                  <span className="exora-serif" style={{ fontSize: 25 }}>{n}</span>
                  <div>
                    <h3 style={{ margin: '0 0 7px', fontSize: 20, fontWeight: 500 }}>{title}</h3>
                    <p style={{ margin: 0, color: 'var(--ink-muted)', fontSize: 14, lineHeight: 1.75, maxWidth: 620 }}>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ink)', color: '#fff', padding: '105px 0' }}>
        <div className="section-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr .9fr', gap: 80, alignItems: 'end' }} className="two-col">
            <div>
              <div style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: 18 }}>04 · Start a conversation</div>
              <h2 className="exora-serif" style={{ fontSize: 'clamp(48px, 7vw, 90px)', lineHeight: .98, fontWeight: 400, letterSpacing: '-.04em', margin: 0 }}>
                Have a requirement?<br />Let&apos;s talk.
              </h2>
            </div>
            <div>
              <p style={{ margin: '0 0 28px', color: 'rgba(255,255,255,.64)', fontSize: 16, lineHeight: 1.8, maxWidth: 430 }}>
                Get in touch with Exora regarding garment accessories or a business enquiry.
              </p>
              <Link href="/pages/contact-us" style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 18px', color: 'var(--ink)', background: '#fff', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>
                Contact Us <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px){
          .hero-grid,.two-col,.business-grid{grid-template-columns:1fr!important}
          .hero-grid{min-height:auto!important}
          .hero-grid>div:first-child{padding-right:0!important;min-height:560px}
          .business-grid>div:last-child{min-height:auto!important}
          .business-head{display:block!important}
          .business-head p{margin-top:20px!important}
        }
      `}</style>
    </div>
  )
}
