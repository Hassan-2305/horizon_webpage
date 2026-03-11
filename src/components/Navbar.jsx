// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../data/siteData'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        HORIZON<span>.</span>
      </NavLink>

      <ul className="nav-links">
        {NAV_LINKS.map(({ label, path }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) => isActive ? 'active' : ''}
              end={path === '/'}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <NavLink to="/contact" className="nav-cta">Join Us</NavLink>
    </nav>
  )
}
