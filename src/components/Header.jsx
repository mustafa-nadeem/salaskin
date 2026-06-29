import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Our Services', to: '/our-services' },
  { label: 'Book a Consultation', to: '/book-a-consultation' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          Sala<span>Skin</span>
        </Link>

        <nav
          className={`nav ${menuOpen ? 'nav-open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/book-a-consultation" className="btn btn-filled header-cta">
          Book Now
        </Link>

        <button
          type="button"
          className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
