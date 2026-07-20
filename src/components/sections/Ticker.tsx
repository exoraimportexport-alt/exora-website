'use client'

const ITEMS = ['Global Sourcing', 'Reliable Delivery', 'Verified Quality', 'Built for Wholesale', 'Trade Ready', 'End to End Execution']

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div
      style={{
        overflow: 'hidden',
        borderTop: '1px solid var(--hairline)',
        borderBottom: '1px solid var(--hairline)',
        background: 'var(--void-2)',
        padding: '15px 0',
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 20,
              paddingRight: 52,
              fontFamily: 'var(--font-mono)',
              fontSize: 12.5,
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              color: 'var(--text-2)',
            }}
          >
            {item}
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--volt)', display: 'inline-block', flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </div>
  )
}
