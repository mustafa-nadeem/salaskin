import './App.css'
import BeforeAfterSlider from './components/BeforeAfterSlider'
import Hero from './components/Hero'
import ProgramTimeline from './components/ProgramTimeline'
import Services from './components/Services'
import SuccessStories from './components/SuccessStories'

const treatments = [
  'Lipoma',
  'Cyst removal',
  'Anal skin tags',
  'Xanthelasma removal',
]

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

        <a className="button button-primary" href="#consultation">
          Book a consultation
        </a>
      </header>

      <Hero />

      <section className="system-section" id="why-salaskin">
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

      <section className="treatments-section" id="results">
        <div className="treatments-slider">
          <p className="treatments-slider-label">Patient results</p>
          <BeforeAfterSlider
            label="Skin treatment before and after comparison"
            before={<div className="ba-face ba-face-before" aria-hidden="true"></div>}
            after={<div className="ba-face ba-face-after" aria-hidden="true"></div>}
          />
          <p className="treatments-slider-hint">Drag to compare</p>
        </div>

        <div className="treatments-copy">
          <span className="section-chip treatments-chip">Advanced dermatology solutions</span>
          <h2 className="treatments-heading">Explore our featured treatment options</h2>
          <p className="treatments-text">
            We specialise in medical-grade skin rejuvenation and minor surgical
            procedures, delivering precise, confidence-building results with a
            calm clinical experience.
          </p>

          <ul className="treatments-list">
            {treatments.map((item) => (
              <li key={item}>
                <span className="treatments-check" aria-hidden="true"></span>
                {item}
              </li>
            ))}
          </ul>

          <div className="treatments-actions">
            <a className="button button-primary" href="#consultation">
              Book a consultation
            </a>
            <a className="button button-outline" href="#services">
              View all services
            </a>
          </div>
        </div>
      </section>

      <SuccessStories />

      <Services />

      <ProgramTimeline />
    </main>
  )
}

export default App
