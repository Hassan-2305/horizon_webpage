// src/pages/Achievements.jsx
import { useReveal } from '../hooks/useReveal'
import { TIMELINE } from '../data/siteData'
import './Achievements.css'

export default function Achievements() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      <section className="page-section page-hero">
        <div className="ph-eyebrow">Milestones</div>
        <h1 className="ph-title">OUR TRACK<br/><span>RECORD.</span></h1>
        <p className="ph-sub">From our first international competition to India's top-ranked rover team — five years of relentless iteration.</p>
      </section>

      {/* ── HIGHLIGHT CARDS ── */}
      <section className="page-section ach-highlights">
        <div className="hl-grid">
          <div className="hl-card reveal" data-delay="1">
            <div className="hl-n">#1</div>
            <div className="hl-l">India Ranking</div>
            <p className="hl-d">ERC 2024 Qualification Rounds — highest-ever Indian placement at a European Rover Challenge.</p>
          </div>
          <div className="hl-card reveal" data-delay="2">
            <div className="hl-n">#11</div>
            <div className="hl-l">Worldwide</div>
            <p className="hl-d">ERC 2024 Qualifications — 11th globally out of 100+ international university teams.</p>
          </div>
          <div className="hl-card reveal" data-delay="3">
            <div className="hl-n">#19</div>
            <div className="hl-l">ERC 2023 Global</div>
            <p className="hl-d">Our debut ERC finish — ignited a national wave of student rover clubs across India.</p>
          </div>
        </div>
      </section>

      {/* ── FULL TIMELINE ── */}
      <section className="page-section ach-timeline">
        <div className="reveal-l">
          <div className="s-tag">Full Timeline</div>
          <h2>YEAR BY YEAR</h2>
          <div className="section-line" />
        </div>

        <div className="timeline-v" style={{ marginTop: '4rem' }}>
          {TIMELINE.map((item, i) => (
            <div className="tl-item reveal" key={item.year} data-delay={String(i % 4)}>
              <div className="tl-year">{item.year}</div>
              <div className="tl-spine"><div className="tl-dot" /></div>
              <div className="tl-content">
                <div className="tl-title">{item.title}</div>
                <p className="tl-desc">{item.desc}</p>
                {item.badge && (
                  <span className={`tl-badge ${item.badgeVariant === 'teal' ? 'teal' : ''}`}>
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPETITIONS ── */}
      <section className="page-section comp-section">
        <div className="reveal">
          <div className="s-tag">Competitions</div>
          <h2>WHERE WE COMPETE</h2>
          <div className="section-line" />
        </div>
        <div className="comp-grid reveal" style={{ marginTop: '3rem' }}>
          <div className="comp-card">
            <div className="comp-abbr">ERC</div>
            <div className="comp-name">European Rover Challenge</div>
            <p className="comp-desc">Held annually in Poland. Teams build Mars rovers and compete in traversal, science, maintenance, and autonomous navigation tasks. One of the most prestigious student robotics competitions globally.</p>
            <div className="comp-results">
              <span>2022 — #32</span>
              <span>2023 — #19</span>
              <span>2024 Quals — #11 · #1 India</span>
            </div>
          </div>
          <div className="comp-card">
            <div className="comp-abbr">URC</div>
            <div className="comp-name">University Rover Challenge</div>
            <p className="comp-desc">Hosted in the Utah desert, USA — the original Mars rover challenge. Teams face extreme terrain, science tasks, and equipment servicing in an authentic Mars-analog environment.</p>
            <div className="comp-results">
              <span>2021 — Top 100</span>
              <span>2022 — Competed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
