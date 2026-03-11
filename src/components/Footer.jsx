// src/components/Footer.jsx
import { META } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="f-logo">HORIZON<span>.</span> CUSAT</div>
      <p>Cochin University of Science and Technology · {META.location} · Est. {META.founded}</p>
      <div className="f-links">
        <a href={META.instagram} target="_blank" rel="noopener">Instagram</a>
        <a href={META.linkedin}  target="_blank" rel="noopener">LinkedIn</a>
        <a href={META.github}    target="_blank" rel="noopener">GitHub</a>
        <a href={META.website}   target="_blank" rel="noopener">Website</a>
      </div>
    </footer>
  )
}
