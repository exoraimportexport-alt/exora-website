import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--hairline)', background: 'var(--void-2)' }}>
      <div className="shell" style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10" style={{ paddingBottom: 48 }}>
          {/* Brand */}
          <div className="md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/exora-logo.png" alt="Exora Import and Export" style={{ height: 44, width: 'auto', filter: 'brightness(1.55) saturate(1.15)' }} />
            <p style={{ marginTop: 18, fontSize: 14.5, lineHeight: 1.7, color: 'var(--text-2)', maxWidth: 340 }}>
              Quality garment accessories for the global fashion market — sourced in India, delivered anywhere fashion is made.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <div className="data-label" style={{ marginBottom: 18 }}>Navigate</div>
            <ul style={{ listStyle: 'none' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/pages/about-us', label: 'About Us' },
                { href: '/pages/contact-us', label: 'Contact Us' },
              ].map((l) => (
                <li key={l.href} style={{ padding: '7px 0' }}>
                  <Link href={l.href} className="f-link" style={{ fontSize: 14.5, color: 'var(--text-2)', transition: 'color 0.2s' }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — real details */}
          <div className="md:col-span-4">
            <div className="data-label" style={{ marginBottom: 18 }}>Contact</div>
            <ul style={{ listStyle: 'none', fontSize: 14.5, color: 'var(--text-2)' }}>
              <li style={{ padding: '7px 0', lineHeight: 1.6 }}>B-38, Sector-69, Transport Nagar, Noida 201301 — UP</li>
              <li style={{ padding: '7px 0' }}>
                <a href="mailto:exoraimportexport@gmail.com" className="f-link" style={{ transition: 'color 0.2s' }}>exoraimportexport@gmail.com</a>
              </li>
              <li style={{ padding: '7px 0' }}>
                <a href="tel:+919810903571" className="f-link" style={{ transition: 'color 0.2s' }}>+91 98109 03571</a>
              </li>
              <li style={{ padding: '7px 0', fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-3)' }}>Mon – Fri, 8:00 AM – 8:00 PM IST</li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-3)', letterSpacing: '0.08em' }}>© 2026, Exora Import and Export</span>
          <span className="chip"><span className="dot" />Noida, India</span>
        </div>
      </div>

      <style>{`.f-link:hover { color: var(--volt-2) !important; }`}</style>
    </footer>
  )
}
