import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            Sala<span>Skin</span>
          </Link>
          <p>
            Placeholder tagline for brand footer description and mission
            summary.
          </p>
          <div className="social-links">
            {[1, 2, 3, 4].map((i) => (
              <a
                key={i}
                href="#"
                className="social-icon placeholder"
                aria-label={`Social link ${i}`}
              >
                Icon
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Pages</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/our-services">Our Services</Link>
            </li>
            <li>
              <Link to="/book-a-consultation">Book a Consultation</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:hello@salaskin.com">hello@salaskin.com</a>
            </li>
            <li>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li>123 Placeholder Street</li>
            <li>City, State 00000</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Hours</h4>
          <ul>
            <li>Mon – Fri: 9am – 6pm</li>
            <li>Sat: 10am – 4pm</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; 2026 SalaSkin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
