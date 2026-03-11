// src/pages/Home.jsx
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'
import { STATS } from '../data/siteData'
import './Home.css'

export default function Home() {
  const heroRef = useRef(null)

  // Parallax fade on scroll
  useEffect(() => {
    const hero = heroRef.current
    const onScroll = () => {
      const y = window.scrollY
      const vh = window.innerHeight
      if (y < vh && hero) {
        hero.style.transform = `translateY(${y * 0.3}px)`
        hero.style.opacity   = String(1 - (y / vh) * 0.75)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section id="hero" ref={heroRef}>
        <div className="hero-eyebrow">CUSAT · Kochi, India · Est. 2019</div>

        <h1 className="hero-title">
          <span className="line"><span>TEAM</span></span>
          <span className="line"><span style={{ color: 'var(--accent)' }}>HORIZON</span></span>
          <span className="line"><span>CUSAT</span></span>
        </h1>

        <p className="hero-sub">
          A student-led rover team at Cochin University of Science and Technology —
          building Mars rovers, competing globally, inspiring a generation.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="btn-primary">Explore Our Work</Link>
          <Link to="/about"    className="btn-ghost">Our Story →</Link>
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>

        <div className="hero-stats-bar">
          {STATS.map(({ num, label }) => (
            <div key={label} className="stat-cell">
              <div className="stat-n">{num}</div>
              <div className="stat-l">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── TEASER CARDS ── */}
      <section className="page-section home-teaser">
        <div className="teaser-grid">
          <Link to="/about" className="teaser-card reveal" data-delay="1">
            <div className="tc-num">01</div>
            <div className="tc-title">ABOUT US</div>
            <p className="tc-desc">From CUSAT dorm rooms to global podiums — our story.</p>
            <span className="tc-arrow">→</span>
          </Link>
          <Link to="/achievements" className="teaser-card reveal" data-delay="2">
            <div className="tc-num">02</div>
            <div className="tc-title">ACHIEVEMENTS</div>
            <p className="tc-desc">5 years · 3 competitions · world rankings.</p>
            <span className="tc-arrow">→</span>
          </Link>
          <Link to="/projects" className="teaser-card reveal" data-delay="3">
            <div className="tc-num">03</div>
            <div className="tc-title">PROJECTS</div>
            <p className="tc-desc">TIRANGA and the systems that power it.</p>
            <span className="tc-arrow">→</span>
          </Link>
          <Link to="/team" className="teaser-card reveal" data-delay="4">
            <div className="tc-num">04</div>
            <div className="tc-title">THE TEAM</div>
            <p className="tc-desc">55+ engineers. One mission. All students.</p>
            <span className="tc-arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
