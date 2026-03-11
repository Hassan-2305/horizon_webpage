// src/pages/NotFound.jsx
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        position: 'relative', zIndex: 2, padding: '0 4vw',
      }}
    >
      <div style={{ fontSize: '.7rem', letterSpacing: '.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}>
        404 — Lost in Space
      </div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(5rem,14vw,12rem)', lineHeight: .9, color: 'var(--ink)', marginBottom: '2rem' }}>
        NOT<br /><span style={{ color: 'var(--accent)' }}>FOUND</span>
      </h1>
      <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 400, lineHeight: 1.75, marginBottom: '2.5rem' }}>
        The page you're looking for has drifted beyond our navigation range.
      </p>
      <Link
        to="/"
        style={{
          fontFamily: 'var(--font-display)', fontSize: '1rem', letterSpacing: '.1em',
          background: 'var(--accent)', color: '#fff', padding: '.85rem 2.5rem',
          borderRadius: '2px', textDecoration: 'none',
        }}
      >
        RETURN HOME →
      </Link>
    </section>
  )
}
