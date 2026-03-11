// src/pages/Team.jsx
import { useReveal } from '../hooks/useReveal'
import { TEAM_MEMBERS } from '../data/siteData'
import './Team.css'

export default function Team() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      <section className="page-section page-hero">
        <div className="ph-eyebrow">The Team</div>
        <h1 className="ph-title">55+ ENGINEERS,<br/><span>ONE MISSION.</span></h1>
        <p className="ph-sub">A fully student-run team spanning multiple departments at CUSAT. No faculty experts — just driven undergraduates building world-class robots.</p>
      </section>

      {/* ── TEAM GRID ── */}
      <section className="page-section team-section">
        <div className="reveal">
          <div className="s-tag">Sub-Teams</div>
          <h2>OUR DIVISIONS</h2>
          <div className="section-line" />
        </div>

        <div className="team-grid" style={{ marginTop: '3.5rem' }}>
          {TEAM_MEMBERS.map((m, i) => (
            <div className="member reveal" key={m.num} data-delay={String(i % 5)}>
              <div className="m-num">{m.num}</div>
              <span className="m-icon">{m.icon}</span>
              <div className="m-name">{m.name}</div>
              <div className="m-role">{m.role}</div>
              <div className="m-dept">{m.dept}</div>
            </div>
          ))}
          <div className="member member--join reveal" data-delay="4">
            <div className="m-num">??</div>
            <span className="m-icon">🚀</span>
            <div className="m-name m-name--accent">You?</div>
            <div className="m-role">Open for new members</div>
            <div className="m-dept">Any Branch Welcome</div>
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section className="page-section join-section">
        <div className="join-card reveal">
          <div className="jc-left">
            <div className="s-tag">Open Recruitment</div>
            <h2>JOIN TEAM HORIZON</h2>
            <div className="section-line" />
            <p>We welcome CUSAT students from <strong>all branches and years</strong>. No prior robotics experience required — just curiosity, commitment, and a willingness to learn.</p>
            <ul className="join-list">
              <li>🔬 Hands-on engineering experience</li>
              <li>🌍 International competition exposure</li>
              <li>🤝 Industry connections and collaborations</li>
              <li>📜 Certificate of participation</li>
              <li>🚀 A community of like-minded builders</li>
            </ul>
          </div>
          <div className="jc-right">
            <div className="jc-stat"><span>55+</span><p>Active Members</p></div>
            <div className="jc-stat"><span>7</span><p>Sub-Teams</p></div>
            <div className="jc-stat"><span>∞</span><p>Learning Opportunities</p></div>
            <a href="/contact" className="btn-apply">Apply Now →</a>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="page-section values-section">
        <div className="reveal">
          <div className="s-tag">Culture</div>
          <h2>WHAT WE STAND FOR</h2>
          <div className="section-line" />
        </div>
        <div className="values-grid reveal" style={{ marginTop: '3rem' }}>
          {[
            { icon: '🎯', title: 'Mission First',    body: 'Every decision is evaluated against the mission: build the best rover, learn the most, and represent India on the world stage.' },
            { icon: '🤝', title: 'Peer Learning',    body: "There are no teachers here — only teammates. Knowledge flows freely between seniors, juniors, and across sub-teams." },
            { icon: '🔁', title: 'Iterate Fast',     body: 'We prototype, break things, learn, and rebuild. Speed of iteration is how we improve year over year.' },
            { icon: '🌱', title: 'Grow Together',    body: 'Your success is the team\'s success. We celebrate individual growth and collective achievement equally.' },
          ].map(({ icon, title, body }) => (
            <div className="value-card" key={title}>
              <div className="vc-icon">{icon}</div>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
