import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="site-shell" style={{ minHeight: '70vh', paddingTop: 150 }}>
      <div className="section-wrap" style={{ paddingTop: 80, paddingBottom: 120 }}>
        <div className="exora-eyebrow" style={{ marginBottom: 18 }}>404</div>
        <h1 className="exora-serif" style={{ fontSize: 'clamp(56px,8vw,104px)', lineHeight: .9, fontWeight: 400, letterSpacing: '-.05em', margin: 0 }}>Page not found.</h1>
        <p style={{ margin: '28px 0 0', color: 'var(--ink-muted)', maxWidth: 500, lineHeight: 1.8 }}>The page you are looking for does not exist or may have moved.</p>
        <Link href="/" style={{ display: 'inline-block', marginTop: 28, padding: '13px 18px', background: 'var(--ink)', color: '#fff', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>Back to home →</Link>
      </div>
    </div>
  )
}
