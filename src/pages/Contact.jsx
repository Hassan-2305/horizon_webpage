// src/pages/Contact.jsx
import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { CONTACT_LINKS, INTEREST_OPTIONS, META } from '../data/siteData'
import './Contact.css'

export default function Contact() {
  const ref = useReveal()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    // Replace with real API call (Formspree / EmailJS / custom backend)
    setTimeout(() => setStatus('sent'), 1400)
    setTimeout(() => { setStatus('idle'); e.target.reset() }, 5400)
  }

  return (
    <div ref={ref}>
      <section className="page-section page-hero">
        <div className="ph-eyebrow">Get In Touch</div>
        <h1 className="ph-title">JOIN US OR<br/>PARTNER WITH<br/><span>HORIZON.</span></h1>
        <p className="ph-sub">Students, sponsors, collaborators — we'd love to hear from you.</p>
      </section>

      <section className="page-section contact-section">
        <div className="contact-layout">

          {/* ── LEFT ── */}
          <div className="contact-left reveal-l">
            <div className="s-tag">Connect</div>
            <h2>FIND US</h2>
            <div className="section-line" />
            <p>Whether you're a CUSAT student who wants to build rovers, a company interested in sponsoring India's #1 rover team, or a collaborator with a bold idea — we'd love to hear from you.</p>

            <div className="c-links">
              {CONTACT_LINKS.map((link) => (
                <a
                  className="c-link"
                  href={link.url}
                  target="_blank"
                  rel="noopener"
                  key={link.name}
                >
                  <div className="c-link-left">
                    <div className="c-icon">{link.icon}</div>
                    <div>
                      <div className="c-name">{link.name}</div>
                      <div className="c-url">{link.display}</div>
                    </div>
                  </div>
                  <span className="c-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT (FORM) ── */}
          <div className="reveal-r">
            <div className="s-tag">Message Us</div>
            <h2>DROP A LINE</h2>
            <div className="section-line" />

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="fg-row">
                <div className="fg">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="fg">
                  <label>Email</label>
                  <input type="email" placeholder="you@cusat.ac.in" required />
                </div>
              </div>

              <div className="fg">
                <label>I'm interested in</label>
                <select defaultValue="">
                  <option value="" disabled>Select a reason</option>
                  {INTEREST_OPTIONS.map(o => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="fg">
                <label>Message</label>
                <textarea placeholder="Tell us about yourself or your query..." />
              </div>

              <button
                type="submit"
                className={`submit-btn ${status}`}
                disabled={status === 'sending'}
              >
                {status === 'idle'    && 'SEND MESSAGE →'}
                {status === 'sending' && 'SENDING...'}
                {status === 'sent'    && "✓ SENT — WE'LL REACH OUT SOON"}
                {status === 'error'   && '✗ ERROR — TRY AGAIN'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── INFO CARDS ── */}
      <section className="page-section info-section">
        <div className="info-grid reveal">
          <div className="info-card">
            <div className="ic-icon">📍</div>
            <h4>Location</h4>
            <p>School of Engineering<br/>Cochin University of Science and Technology<br/>Kochi, Kerala 682 022, India</p>
          </div>
          <div className="info-card">
            <div className="ic-icon">🎓</div>
            <h4>For CUSAT Students</h4>
            <p>Recruitment happens at the start of each academic year. Follow our Instagram for announcements and open house event dates.</p>
          </div>
          <div className="info-card">
            <div className="ic-icon">🤝</div>
            <h4>For Sponsors</h4>
            <p>Interested in supporting India's top-ranked rover team? We offer logo placement, media mentions, and collaboration opportunities. Reach out via email or LinkedIn.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
