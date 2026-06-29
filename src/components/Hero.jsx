import { useEffect, useState } from 'react'

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
const SLIDE_TRANSITION_MS = 750

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(null)
  const review = slides[activeSlide].review

  const changeSlide = (nextIndex) => {
    if (nextIndex === activeSlide) return
    setPrevSlide(activeSlide)
    setActiveSlide(nextIndex)
  }

  useEffect(() => {
    if (prevSlide === null) return
    const timer = window.setTimeout(() => setPrevSlide(null), SLIDE_TRANSITION_MS)
    return () => window.clearTimeout(timer)
  }, [prevSlide, activeSlide])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => {
        const next = (current + 1) % slides.length
        setPrevSlide(current)
        return next
      })
    }, SLIDE_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [])

  const isTransitioning = prevSlide !== null

  return (
    <section className="hero-section">
      <div className="hero-copy">
        <h1>Keeping patients at the core.</h1>
        <p className="hero-text">
          We create a simple, effortless experience designed to remove the
          friction around modern skin consultations and let care stay the focus.
        </p>
        <a className="button button-primary hero-cta" href="#consultation">
          Book a consultation
        </a>
      </div>

      <div className="hero-stage">
        <div className="hero-stage-clip">
          <div className="hero-media">
            <div
              className="hero-slides-viewport"
              aria-roledescription="carousel"
              aria-label="Treatment highlights"
              data-transitioning={isTransitioning}
            >
              <div className="hero-slides-track">
                {isTransitioning && (
                  <div
                    className="hero-slide"
                    data-role="exiting"
                    style={slides[prevSlide].style}
                    aria-hidden="true"
                  />
                )}
                <div
                  className="hero-slide"
                  data-role={isTransitioning ? 'entering' : 'active'}
                  style={slides[activeSlide].style}
                  aria-hidden={false}
                />
              </div>
            </div>
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
                onClick={() => changeSlide(index)}
              />
            ))}
          </div>
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
    </section>
  )
}

export default Hero
