'use client'

import { useState } from 'react'

const LEADERS = [
  { num: '01', name: 'Mr. Bhupendra Kumar', role: 'Director', bio: 'A senior business professional with extensive experience in sourcing, trade and business relationships.' },
  { num: '02', name: 'Mr. Sandeep Sharma', role: 'Director', bio: 'A senior professional involved in the day-to-day coordination of business and supply relationships.' },
  { num: '03', name: 'Mr. Dharmendra Singh', role: 'Director', bio: 'A business professional focused on development, relationships and long-term commercial partnerships.' },
]

export default function LeadershipSection() {
  const [expanded, setExpanded] = useState<string | null>(null)
  return (
    <div>
      {LEADERS.map((leader) => {
        const open = expanded === leader.num
        return (
          <div key={leader.num} style={{ borderTop: '1px solid var(--line)' }}>
            <button onClick={() => setExpanded(open ? null : leader.num)} style={{ width: '100%', border: 'none', background: 'transparent', cursor: 'pointer', display: 'grid', gridTemplateColumns: '50px 1fr auto auto', gap: 20, alignItems: 'center', padding: '24px 0', textAlign: 'left', color: 'var(--ink)' }}>
              <span className="exora-serif" style={{ fontSize: 22 }}>{leader.num}</span>
              <span style={{ fontSize: 'clamp(18px,2.7vw,27px)', fontWeight: 500 }}>{leader.name}</span>
              <span style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>{leader.role}</span>
              <span style={{ fontSize: 22, lineHeight: 1, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .2s' }}>+</span>
            </button>
            {open && (
              <div style={{ padding: '0 0 28px 70px', maxWidth: 720 }}>
                <p style={{ margin: 0, color: 'var(--ink-muted)', fontSize: 15, lineHeight: 1.8 }}>{leader.bio}</p>
              </div>
            )}
          </div>
        )
      })}
      <div style={{ borderTop: '1px solid var(--line)' }} />
    </div>
  )
}
