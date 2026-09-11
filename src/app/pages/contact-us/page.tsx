'use client'

import Image from 'next/image'
import { useState } from 'react'

const EMAILJS_SERVICE = 'service_rnwgl64'
const EMAILJS_NOTIFY_TEMPLATE = 'template_1u4lxts'
const EMAILJS_REPLY_TEMPLATE = 'template_toiaxof'
const EMAILJS_PUBLIC_KEY = 'rHQcirX2QrFr2s5Ws'

async function sendEmail(templateId: string, params: Record<string, string>) {
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ service_id: EMAILJS_SERVICE, template_id: templateId, user_id: EMAILJS_PUBLIC_KEY, template_params: params }),
  })
  if (!response.ok) throw new Error(`Email service returned ${response.status}`)
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.email || sending) return
    setSending(true)
    const params = { from_name: form.name, from_email: form.email, phone: form.phone, message: form.message }
    try {
      await sendEmail(EMAILJS_NOTIFY_TEMPLATE, params)
      await sendEmail(EMAILJS_REPLY_TEMPLATE, params)
      setSent(true)
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
    } finally {
      setSending(false)
      window.setTimeout(() => setSent(false), 5000)
    }
  }

  return (
    <div className="site-shell" style={{ paddingTop: 78 }}>
      <section className="section-wrap" style={{ paddingTop: 46 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 62, borderBottom: '1px solid var(--line)', paddingBottom: 72 }} className="contact-hero">
          <div>
            <div className="exora-eyebrow" style={{ marginBottom: 22 }}>Contact Exora</div>
            <h1 className="exora-serif" style={{ fontSize: 'clamp(54px, 8vw, 104px)', lineHeight: .9, fontWeight: 400, letterSpacing: '-.05em', margin: 0 }}>Let&apos;s talk<br />business.</h1>
            <p style={{ margin: '30px 0 0', maxWidth: 500, color: 'var(--ink-muted)', fontSize: 16, lineHeight: 1.8 }}>
              Get in touch with Exora regarding garment accessories or a general business enquiry.
            </p>
          </div>
          <div style={{ position: 'relative', minHeight: 360, overflow: 'hidden', background: '#ddd8cf' }}>
            <Image src="/contact-banner.jpg" alt="Contact Exora" fill sizes="(max-width: 850px) 100vw, 45vw" style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
          </div>
        </div>
      </section>

      <section className="section-wrap" style={{ paddingTop: 86, paddingBottom: 115 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr .75fr', gap: 90, alignItems: 'start' }} className="contact-grid">
          <form onSubmit={handleSubmit}>
            <div className="exora-eyebrow" style={{ marginBottom: 28 }}>Send an enquiry</div>
            {([
              ['name', 'Name', 'text', false],
              ['email', 'Email *', 'email', true],
              ['phone', 'Phone', 'tel', false],
            ] as const).map(([name, label, type, required]) => (
              <label key={name} style={{ display: 'block', marginBottom: 28 }}>
                <span style={{ display: 'block', fontSize: 12, marginBottom: 9, color: '#4e4a44' }}>{label}</span>
                <input required={required} type={type} name={name} value={form[name]} onChange={handleChange} style={{ width: '100%', border: 'none', borderBottom: '1px solid #bbb5aa', background: 'transparent', padding: '9px 0 12px', outline: 'none', color: 'var(--ink)', fontSize: 16 }} />
              </label>
            ))}
            <label style={{ display: 'block', marginBottom: 30 }}>
              <span style={{ display: 'block', fontSize: 12, marginBottom: 9, color: '#4e4a44' }}>Message</span>
              <textarea name="message" rows={6} value={form.message} onChange={handleChange} style={{ width: '100%', resize: 'vertical', border: '1px solid #bbb5aa', background: 'rgba(255,255,255,.22)', padding: 13, outline: 'none', color: 'var(--ink)', fontSize: 16, lineHeight: 1.6 }} />
            </label>
            <button type="submit" disabled={sending} style={{ border: 'none', background: 'var(--ink)', color: '#fff', padding: '14px 20px', fontSize: 13, fontWeight: 600, cursor: sending ? 'wait' : 'pointer' }}>
              {sending ? 'Sending…' : sent ? 'Message sent' : 'Send enquiry →'}
            </button>
          </form>

          <div>
            <div className="exora-eyebrow" style={{ marginBottom: 28 }}>Contact details</div>
            <div style={{ borderTop: '1px solid var(--line)' }}>
              <div style={{ padding: '20px 0', borderBottom: '1px solid var(--line)' }}>
                <div className="exora-eyebrow" style={{ marginBottom: 10 }}>Email</div>
                <a href="mailto:exoraimportexport@gmail.com" className="exora-link" style={{ fontSize: 17 }}>exoraimportexport@gmail.com</a>
              </div>
              <div style={{ padding: '20px 0', borderBottom: '1px solid var(--line)' }}>
                <div className="exora-eyebrow" style={{ marginBottom: 10 }}>Phone</div>
                <a href="tel:+919810903571" className="exora-link" style={{ fontSize: 17 }}>+91 98109 03571</a>
              </div>
              <div style={{ padding: '20px 0', borderBottom: '1px solid var(--line)' }}>
                <div className="exora-eyebrow" style={{ marginBottom: 10 }}>Address</div>
                <div style={{ color: 'var(--ink-muted)', fontSize: 15, lineHeight: 1.7 }}>B-38, Sector-69, Transport Nagar,<br />Noida 201301, Uttar Pradesh</div>
              </div>
              <div style={{ padding: '20px 0' }}>
                <div className="exora-eyebrow" style={{ marginBottom: 10 }}>Business focus</div>
                <div style={{ fontSize: 17 }}>Garment accessories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media(max-width:850px){.contact-hero,.contact-grid{grid-template-columns:1fr!important}.contact-hero>div:last-child{min-height:300px!important}}
      `}</style>
    </div>
  )
}
