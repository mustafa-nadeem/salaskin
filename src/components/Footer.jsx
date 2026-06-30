const sitemapLinks = [
  { label: 'Why Salaskin', href: '#why-salaskin' },
  { label: 'Our Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Book a consultation', href: '#consultation' },
]

const locations = [
  'Danes Camp Medical Practice, Rowtree Road, Northampton NN4 0NY',
  "St. Luke's Primary Care, Timken Way South, Northampton NN5 6FR",
  'Day and Night Clinic, Daventry NN11 4FG',
]

const legalLinks = [
  { label: 'Home', href: '/' },
  { label: 'Terms and Conditions', href: '#terms' },
  { label: 'Privacy Policy', href: '#privacy' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand footer-brand-link" href="/">
            <span className="brand-mark" aria-hidden="true"></span>
            salaskin.
          </a>
          <p className="footer-tagline">
            Evidence-led dermatology across Northamptonshire — calm care, clear
            results, and a team that puts your skin health first.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h3 className="footer-col-title">Sitemap</h3>
            <ul className="footer-list">
              {sitemapLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-col-title">Locations</h3>
            <ul className="footer-list footer-list--locations">
              {locations.map((location) => (
                <li key={location}>{location}</li>
              ))}
            </ul>
            <p className="footer-hours">
              Mon–Fri: 9am – 5pm
              <br />
              Sat: By appointment only
            </p>
          </div>

          <div className="footer-col">
            <h3 className="footer-col-title">Contact</h3>
            <ul className="footer-list">
              <li>
                <a href="tel:+441604913027">+44 1604 913027</a>
              </li>
              <li>
                <a href="mailto:info@salaskin.co.uk">info@salaskin.co.uk</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 Salaskin. All rights reserved.
        </p>

        <div className="footer-bottom-end">
          <nav className="footer-legal" aria-label="Legal">
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-social" aria-label="Social media">
            <span className="footer-social-label">Follow us</span>
            <a
              className="footer-social-link"
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M14 8.5V7.2c0-.7.5-1.2 1.2-1.2H17V3h-2.4C12.1 3 11 4.5 11 6.8V8.5H9v3.1h2V21h3v-9.4h2.6l.4-3.1H14z"
                />
              </svg>
            </a>
            <a
              className="footer-social-link"
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="4.5" />
                <circle cx="12" cy="12" r="3.6" />
                <circle cx="17" cy="7" r="1" />
              </svg>
            </a>
            <a
              className="footer-social-link"
              href="https://x.com"
              aria-label="X"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
