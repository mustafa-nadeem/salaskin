import './App.css'

function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="/">
          <span className="brand-mark" aria-hidden="true"></span>
          salaskin.
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#services">Our Services</a>
          <a href="#results">Results</a>
        </nav>

        <a className="header-cta" href="#consultation">
          Book a consultation
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <h1>Keeping patients at the core.</h1>
          <p className="hero-text">
            We create a simple, effortless experience designed to remove the
            friction around modern skin consultations and let care stay the
            focus.
          </p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orbit"></div>
          <div className="visual-photo">
            <div className="photo-scene"></div>
          </div>
        </div>
      </section>

      <section className="system-section" id="services">
        <div className="section-intro">
          <span className="section-chip">Why Salaskin</span>
          <h2>A considered treatment system, working together.</h2>
        </div>

        <div className="system-grid">
          <article className="system-card">
            <div className="system-icon icon-frame" aria-hidden="true">
              <span></span>
              <span></span>
            </div>
            <h3>See everything in one place.</h3>
            <p>
              From consultation notes to aftercare planning, every step stays
              connected in one calm, easy-to-follow experience.
            </p>
          </article>

          <article className="system-card">
            <div className="system-icon icon-list" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3>Get more done, more easily.</h3>
            <p>
              Structured treatment journeys help you move from assessment to
              plan with more clarity, less admin, and better continuity.
            </p>
          </article>

          <article className="system-card">
            <div className="system-icon icon-stack" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3>Deliver care with confidence.</h3>
            <p>
              Evidence-led protocols, premium products, and personalised care
              combine to produce subtle, reliable, confidence-building results.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
