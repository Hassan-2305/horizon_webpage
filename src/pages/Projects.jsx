// src/pages/Projects.jsx
import { useReveal } from '../hooks/useReveal'
import { PROJECTS } from '../data/siteData'
import './Projects.css'

export default function Projects() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      <section className="page-section page-hero">
        <div className="ph-eyebrow">Projects & Rovers</div>
        <h1 className="ph-title">WHAT WE<br/><span>BUILD.</span></h1>
        <p className="ph-sub">Complex systems integrating mechanical engineering, autonomous software, power electronics, and science instrumentation — built entirely by students.</p>
      </section>

      {/* ── FEATURED ROVER ── */}
      <section className="page-section featured-rover">
        <div className="fr-grid reveal">
          <div className="fr-visual">
            <div className="fr-glow" />
            <span className="fr-emoji">🛸</span>
            <div className="fr-badge">ERC 2024 · #11 Worldwide · #1 India</div>
          </div>
          <div className="fr-info">
            <div className="s-tag">Featured Rover</div>
            <h2>TIRANGA</h2>
            <div className="section-line" />
            <p className="fr-desc">
              Our 2024 flagship rover and India's highest-ranked entry at the European Rover Challenge.
              TIRANGA is a fully integrated Mars-analog rover capable of terrain traversal,
              scientific sample collection, maintenance operations, and fully autonomous navigation.
            </p>
            <p className="fr-desc" style={{ marginTop: '1rem' }}>
              Designed, built, and programmed entirely by undergraduate students at CUSAT —
              TIRANGA represents five years of accumulated knowledge and iteration.
            </p>
            <div className="tech-row" style={{ marginTop: '2rem' }}>
              {PROJECTS[0].tech.map(t => <span className="tech" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL PROJECTS GRID ── */}
      <section className="page-section projects-grid-section">
        <div className="reveal">
          <div className="s-tag">All Systems</div>
          <h2>SUBSYSTEMS</h2>
          <div className="section-line" />
          <p className="s-intro">Each subsystem is owned and maintained by a dedicated student sub-team.</p>
        </div>

        <div className="proj-grid" style={{ marginTop: '3.5rem' }}>
          {PROJECTS.slice(1).map((p, i) => (
            <div className="proj-card reveal" key={p.id} data-delay={String(i + 1)}>
              <div
                className="proj-visual"
                style={{ background: p.bgGradient || '#0c0d14' }}
              >
                <div
                  className="proj-glow"
                  style={{ background: `radial-gradient(circle at 50% 80%, ${p.glowColor}, transparent 70%)` }}
                />
                <span className="proj-emoji">{p.emoji}</span>
              </div>
              <div className="proj-body">
                <div
                  className="proj-tag"
                  style={{ color: p.tagVariant === 'teal' ? 'var(--accent2)' : 'var(--accent)' }}
                >
                  {p.tag}
                </div>
                <div className="proj-title">{p.title}</div>
                <p className="proj-desc">{p.desc}</p>
                <div className="tech-row">
                  {p.tech.map(t => <span className="tech" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="page-section tech-stack-section">
        <div className="reveal">
          <div className="s-tag">Technology</div>
          <h2>OUR TECH STACK</h2>
          <div className="section-line" />
        </div>
        <div className="ts-grid reveal" style={{ marginTop: '3rem' }}>
          {[
            { cat: 'Software', items: ['ROS2', 'Python', 'C++', 'OpenCV', 'SLAM', 'Nav2'] },
            { cat: 'Hardware', items: ['Raspberry Pi 4', 'STM32', 'Arduino', 'ESP32', 'LiDAR', 'IMU'] },
            { cat: 'Mechanical', items: ['SolidWorks', 'FDM 3D Printing', '6061 Aluminium', 'Carbon Fibre', 'Rocker-Bogie'] },
            { cat: 'Electronics', items: ['PCB Design', 'KiCad', 'Motor Drivers', 'Li-Po Battery', 'PWM Control'] },
          ].map(({ cat, items }) => (
            <div className="ts-card" key={cat}>
              <div className="ts-cat">{cat}</div>
              <div className="ts-items">
                {items.map(item => <span className="tech" key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
