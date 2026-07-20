'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE = 'service_rnwgl64'
const EMAILJS_NOTIFY_TEMPLATE = 'template_1u4lxts'
const EMAILJS_REPLY_TEMPLATE = 'template_toiaxof'
const EMAILJS_PUBLIC_KEY = 'rHQcirX2QrFr2s5Ws'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Enquiry() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.email) return
    setSent(true)
    const templateParams = { from_name: form.name, from_email: form.email, phone: form.phone, message: form.message }
    try {
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_NOTIFY_TEMPLATE, templateParams, EMAILJS_PUBLIC_KEY)
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_REPLY_TEMPLATE, templateParams, EMAILJS_PUBLIC_KEY)
    } catch (err) {
      console.error('EmailJS error:', err)
    }
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section className="shell" style={{ paddingTop: 0, paddingBottom: 110 }}>
      <div className="rail">
        <span className="data-label" style={{ color: 'var(--text)' }}><span className="idx">05</span>Get In Touch</span>
        <span className="line" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" style={{ marginTop: 44 }}>
        {/* Left: pitch + contact data cells */}
        <div className="lg:col-span-5" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{ fontSize: 'clamp(32px, 3.8vw, 56px)' }}
          >
            Start the<br />
            <span style={{ background: 'linear-gradient(100deg, #3b6cff, #8fa8ff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>conversation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            style={{ fontSize: 15.5, lineHeight: 1.75, color: 'var(--text-2)', maxWidth: 380 }}
          >
            Wholesale enquiries, partnerships, or general questions — include your company name,
            product category, and estimated order volume for the fastest reply.
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 6 }}>
            {[
              { label: 'Email', value: 'exoraimportexport@gmail.com', href: 'mailto:exoraimportexport@gmail.com' },
              { label: 'Phone', value: '+91 98109 03571', href: 'tel:+919810903571' },
              { label: 'Address', value: 'B-38 Sector-69, Transport Nagar, Noida 201301', href: null },
              { label: 'Hours', value: 'Mon – Fri, 8:00 AM – 8:00 PM IST', href: null },
            ].map((row, i) => {
              const Tag = row.href ? 'a' : 'div'
              return (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.08, ease: EASE }}
                >
                  <Tag
                    {...(row.href ? { href: row.href } : {})}
                    className={row.href ? 'glass contact-cell' : 'glass'}
                    style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '14px 18px', borderRadius: 12, cursor: row.href ? 'pointer' : 'default' }}
                  >
                    <span className="data-label" style={{ width: 66, flexShrink: 0 }}>{row.label}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text)', wordBreak: 'break-word', lineHeight: 1.6 }}>{row.value}</span>
                  </Tag>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Right: the form panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="glass lg:col-span-7"
          style={{ padding: 'clamp(24px, 3.5vw, 44px)', position: 'relative', overflow: 'hidden' }}
        >
          <div className="glow-orb" style={{ bottom: -140, left: -100, width: 340, height: 340, background: 'rgba(59,108,255,0.1)' }} />

          <div style={{ position: 'relative', display: 'grid', gap: 18 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="data-label" htmlFor="eq-name" style={{ display: 'block', marginBottom: 8 }}>Full Name</label>
                <input id="eq-name" className="field" type="text" name="name" value={form.name} onChange={handleChange} />
              </div>
              <div>
                <label className="data-label" htmlFor="eq-email" style={{ display: 'block', marginBottom: 8 }}>Email Address *</label>
                <input id="eq-email" className="field" type="email" name="email" value={form.email} onChange={handleChange} />
              </div>
            </div>
            <div>
              <label className="data-label" htmlFor="eq-phone" style={{ display: 'block', marginBottom: 8 }}>Phone Number</label>
              <input id="eq-phone" className="field" type="tel" name="phone" value={form.phone} onChange={handleChange} />
            </div>
            <div>
              <label className="data-label" htmlFor="eq-msg" style={{ display: 'block', marginBottom: 8 }}>Message</label>
              <textarea id="eq-msg" className="field" name="message" rows={5} value={form.message} onChange={handleChange} style={{ resize: 'none' }} />
            </div>

            <button onClick={handleSubmit} className={sent ? 'btn-ghost' : 'btn-volt'} style={{ width: '100%', justifyContent: 'center', marginTop: 6 }}>
              {sent ? '✓ Message Sent' : <>Send Message <span className="arr">→</span></>}
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`.contact-cell:hover { border-color: rgba(59,108,255,0.5); }`}</style>
    </section>
  )
}
