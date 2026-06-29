import { useEffect, useState } from 'react'
import './App.css'

const slides = [
  {
    id: 'consultation',
    style: {
      background:
        'linear-gradient(165deg, #d6e5e0 0%, #b7d4c4 38%, #8fb89a 100%)',
    },
    review: {
      quote:
        'My consultation felt calm and thorough — the treatment plan was exactly what I needed.',
      name: 'Sarah Mitchell',
      meta: '5.0 ★ · Patient',
      rating: 5,
    },
  },
  {
    id: 'treatment',
    style: {
      background:
        'linear-gradient(165deg, #f0e6d8 0%, #e2d0bc 42%, #c9b49a 100%)',
    },
    review: {
      quote:
        'The treatment journey was clear from day one — I always knew what came next.',
      name: 'James Okonkwo',
      meta: '5.0 ★ · Patient',
      rating: 5,
    },
  },
  {
    id: 'aftercare',
    style: {
      background:
        'linear-gradient(165deg, #e8f0e4 0%, #c8ddc6 45%, #9fbf9f 100%)',
    },
    review: {
      quote:
        'Aftercare guidance made recovery simple — my skin improved steadily week by week.',
      name: 'Emma Laurent',
      meta: '5.0 ★ · Patient',
      rating: 5,
    },
  },
  {
    id: 'results',
    style: {
      background:
        'linear-gradient(165deg, #efe8df 0%, #d9cfc2 40%, #b8a894 100%)',
    },
    review: {
      quote:
        'Subtle, reliable results — exactly the confidence-building outcome I was hoping for.',
      name: 'Priya Sharma',
      meta: '5.0 ★ · Patient',
      rating: 5,
    },
  },
]

const SLIDE_INTERVAL_MS = 5000
const SLIDE_TRANSITION_MS = 650

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [leavingSlide, setLeavingSlide] = useState(null)
  const review = slides[activeSlide].review

  const goToSlide = (index) => {
    if (index === activeSlide) return
    setLeavingSlide(activeSlide)
    setActiveSlide(index)
  }

  useEffect(() => {
    if (leavingSlide === null) return undefined

    const timer = window.setTimeout(() => {
      setLeavingSlide(null)
    }, SLIDE_TRANSITION_MS)

    return () => window.clearTimeout(timer)
  }, [leavingSlide, activeSlide])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => {
        setLeavingSlide(current)
        return (current + 1) % slides.length
      })
    }, SLIDE_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [activeSlide])

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
          <a className="button button-primary hero-cta" href="#consultation">
            Book a consultation
          </a>
        </div>

        <div className="hero-stage">
          <div className="hero-media">
            <div
              className="hero-slides"
              aria-roledescription="carousel"
              aria-label="Treatment highlights"
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className="hero-slide"
                  data-active={index === activeSlide}
                  data-entering={
                    leavingSlide !== null && index === activeSlide
                  }
                  data-leaving={index === leavingSlide}
                  style={slide.style}
                  aria-hidden={index !== activeSlide && index !== leavingSlide}
                />
              ))}
            </div>

            <aside
              className="hero-review-card"
              aria-label="Patient review"
              key={slides[activeSlide].id}
            >
              <div className="review-stars" aria-hidden="true">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={
                      index < review.rating ? 'star star-filled' : 'star'
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="review-quote">{review.quote}</p>
              <div className="review-author">
                <span className="review-avatar" aria-hidden="true" />
                <div>
                  <p className="review-name">{review.name}</p>
                  <p className="review-meta">{review.meta}</p>
                </div>
              </div>
            </aside>
          </div>

          <div
            className="hero-dots"
            role="tablist"
            aria-label="Choose a slide"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className="hero-dot"
                role="tab"
                aria-label={`Show slide ${index + 1}`}
                aria-selected={index === activeSlide}
                data-active={index === activeSlide}
                onClick={() => goToSlide(index)}
              />
            ))}
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
