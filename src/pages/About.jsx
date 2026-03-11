// src/pages/About.jsx
import { useReveal } from '../hooks/useReveal'
import { PILLARS, SUPPORTERS } from '../data/siteData'
import './About.css'

export default function About() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* ── PAGE HERO ── */}
      <section className="page-section page-hero">
        <div className="ph-eyebrow">About Us</div>
        <h1 className="ph-title">WE BUILD.<br/>WE COMPETE.<br/><span>WE INSPIRE.</span></h1>
        <p className="ph-sub">The story of Team Horizon — from a dorm-room idea to India's top-ranked rover team.</p>
      </section>

      {/* ── STORY ── */}
      <section className="page-section about-story">
        <div className="about-layout">
          <div className="about-left reveal-l">
            <div className="s-tag">Our Story</div>
            <h2>FROM ZERO TO GLOBAL.</h2>
            <div className="section-line" />
            <div className="big-quote">
              "From a dorm-room dream to a <em>world-ranked</em> rover team."
            </div>
            <div className="about-body">
              <p>
                Team Horizon was born in <strong>2019</strong> at Cochin University of Science and
                Technology — a group of students who refused to accept that cutting-edge space
                robotics was beyond their reach.
              </p>
              <p>
                We compete in the world's most demanding rover challenges: the{' '}
                <strong>European Rover Challenge (ERC)</strong> in Poland and the{' '}
                <strong>University Rover Challenge (URC)</strong> in the USA — without any dedicated
                technical faculty, relying entirely on undergraduate grit and peer-to-peer learning.
              </p>
              <p>
                Today, we're ranked <strong>among the top rover teams in Asia</strong>, and we've
                inspired a new generation of student robotics clubs across India.
              </p>
              <p>
                Our story is not just about achievements — it's a testament to the power of
                collaboration and self-reliance. Every rover, every competition, every workshop
                has been built from scratch by students just like you.
              </p>
            </div>
          </div>

          <div className="about-right reveal-r">
            {PILLARS.map((p) => (
              <div className="pillar" key={p.num}>
                <div className="pillar-num">{p.num}</div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION NUMBERS ── */}
      <section className="page-section mission-numbers">
        <div className="mn-grid reveal">
          {[
            { n: '5+',   l: 'Years Active' },
            { n: '3',    l: 'Global Competitions' },
            { n: '55+',  l: 'Student Members' },
            { n: '#1',   l: 'India Ranking 2024' },
            { n: '100+', l: 'Workshops & Events' },
          ].map(({ n, l }) => (
            <div key={l} className="mn-item">
              <div className="mn-n">{n}</div>
              <div className="mn-l">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SUPPORTERS ── */}
      <section className="page-section supporters-section">
        <div className="reveal">
          <div className="s-tag">Supported By</div>
          <h2>OUR BACKERS</h2>
          <div className="section-line" />
        </div>
        <div className="supporters reveal">
          <div className="sup-list">
            {SUPPORTERS.map((s) => (
              <div className="sup-item" key={s}>{s}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
