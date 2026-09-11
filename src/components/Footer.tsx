import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#ece8df', borderTop: '1px solid var(--line)' }}>
      <div className="section-wrap" style={{ paddingTop: 54, paddingBottom: 28 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr .7fr .9fr', gap: 48, paddingBottom: 50 }} className="footer-grid">
          <div>
            <Image src="/exora-logo.png" alt="Exora Import and Export" width={190} height={110} style={{ width: 160, height: 'auto', marginBottom: 18 }} />
            <p style={{ maxWidth: 420, margin: 0, fontSize: 14, lineHeight: 1.8, color: 'var(--ink-muted)' }}>
              Exora is an import and export company currently focused on garment accessories.
            </p>
          </div>
          <div>
            <div className="exora-eyebrow" style={{ marginBottom: 18 }}>Navigation</div>
            <div style={{ display: 'grid', gap: 12, fontSize: 14 }}>
              <Link href="/" className="exora-link">Home</Link>
              <Link href="/pages/about-us" className="exora-link">About</Link>
              <Link href="/#business" className="exora-link">Our Business</Link>
              <Link href="/pages/contact-us" className="exora-link">Contact</Link>
            </div>
          </div>
          <div>
            <div className="exora-eyebrow" style={{ marginBottom: 18 }}>Contact</div>
            <div style={{ display: 'grid', gap: 12, fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6 }}>
              <a href="mailto:exoraimportexport@gmail.com" className="exora-link">exoraimportexport@gmail.com</a>
              <a href="tel:+919810903571" className="exora-link">+91 98109 03571</a>
              <span>B-38, Sector-69, Transport Nagar,<br />Noida 201301, Uttar Pradesh</span>
            </div>
          </div>
        </div>
        <div className="exora-rule" />
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingTop: 20, fontSize: 12, color: '#817b72' }}>
          <span>© 2026 Exora Import and Export</span>
          <span>Import & Export · Garment Accessories</span>
        </div>
      </div>
    </footer>
  )
}
