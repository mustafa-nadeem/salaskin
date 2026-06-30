import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    id: 'assessment',
    label: 'Step 1',
    title: 'Personalized Skin Assessment',
    description:
      'Our dermatologists analyze your skin type, concerns, and goals using advanced diagnostic tools to create a customized treatment plan tailored to your unique needs.',
    variant: 'assessment',
  },
  {
    id: 'treatment',
    label: 'Step 2',
    title: 'Targeted Treatment & Care',
    description:
      'From medical-grade skincare to innovative procedures, we provide effective solutions for acne, aging, pigmentation, and other skin concerns, ensuring optimal skin health.',
    variant: 'treatment',
  },
  {
    id: 'maintenance',
    label: 'Step 3',
    title: 'Long-Term Skin Maintenance',
    description:
      'Ongoing support with professional skincare routines, follow-up treatments, and expert guidance to keep your skin glowing, youthful, and healthy for the long term.',
    variant: 'maintenance',
  },
]

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

const TIMELINE_PATH =
  'M 8 34 C 140 34, 200 14, 320 24 S 520 44, 640 28 S 820 14, 992 26'

function ProgramTimeline() {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const trackRef = useRef(null)
  const stepRefs = useRef([])
  const rafId = useRef(null)
  const [progress, setProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [isInteractive, setIsInteractive] = useState(true)

  useEffect(() => {
    const section = sectionRef.current
    const pin = pinRef.current
    const track = trackRef.current
    if (!section || !pin || !track) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobileQuery = window.matchMedia('(max-width: 768px)')

    const syncMode = () => {
      const interactive = !motionQuery.matches && !mobileQuery.matches
      setIsInteractive(interactive)
      return interactive
    }

    const getMaxShift = () => {
      const lastStep = stepRefs.current[steps.length - 1]
      if (!lastStep) return 0

      const stepCenter = lastStep.offsetLeft + lastStep.offsetWidth / 2
      const viewportCenter = pin.clientWidth / 2
      return Math.max(0, stepCenter - viewportCenter)
    }

    const updateSectionHeight = () => {
      if (!syncMode()) {
        section.style.height = ''
        track.style.transform = ''
        return
      }

      const maxShift = getMaxShift()
      section.style.height = `${maxShift + pin.clientHeight}px`
    }

    const updateScroll = () => {
      if (!syncMode()) {
        setProgress(0)
        setActiveIndex(-1)
        track.style.transform = ''
        return
      }

      const rect = section.getBoundingClientRect()
      const scrollable = section.offsetHeight - pin.clientHeight
      const scrolled = clamp(-rect.top, 0, scrollable)
      const nextProgress = scrollable > 0 ? scrolled / scrollable : 0
      const maxShift = getMaxShift()

      track.style.transform = `translate3d(${-nextProgress * maxShift}px, 0, 0)`

      setProgress(nextProgress)

      if (nextProgress < 0.25) {
        setActiveIndex(-1)
      } else if (nextProgress < 0.55) {
        setActiveIndex(0)
      } else if (nextProgress < 0.85) {
        setActiveIndex(1)
      } else {
        setActiveIndex(2)
      }
    }

    const scheduleUpdate = () => {
      if (rafId.current !== null) return
      rafId.current = window.requestAnimationFrame(() => {
        rafId.current = null
        updateSectionHeight()
        updateScroll()
      })
    }

    syncMode()
    updateSectionHeight()
    updateScroll()

    const resizeObserver = new ResizeObserver(scheduleUpdate)
    resizeObserver.observe(track)
    resizeObserver.observe(pin)
    stepRefs.current.forEach((step) => {
      if (step) resizeObserver.observe(step)
    })

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    motionQuery.addEventListener('change', scheduleUpdate)
    mobileQuery.addEventListener('change', scheduleUpdate)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      motionQuery.removeEventListener('change', scheduleUpdate)
      mobileQuery.removeEventListener('change', scheduleUpdate)
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  return (
    <section
      className="program-section"
      id="program"
      ref={sectionRef}
      aria-labelledby="program-title"
      data-interactive={isInteractive}
    >
      <div className="program-pin" ref={pinRef}>
        <div className="program-track" ref={trackRef}>
          <div className="program-intro">
            <span className="section-chip">Our approach</span>
            <h2 className="program-title" id="program-title">
              3-Step Dermatological Program for Healthy, Radiant Skin
            </h2>
          </div>

          {steps.map((step, index) => (
            <article
              key={step.id}
              className="program-step"
              data-active={activeIndex === index}
              data-passed={activeIndex > index}
              ref={(element) => {
                stepRefs.current[index] = element
              }}
            >
              <div className="program-step-card">
                <div
                  className={`program-orb program-orb--${step.variant}`}
                  aria-hidden="true"
                />
                <span className="program-step-label">{step.label}</span>
                <h3 className="program-step-title">{step.title}</h3>
                <p className="program-step-text">{step.description}</p>
                {index === steps.length - 1 ? (
                  <a className="button button-primary" href="#consultation">
                    Book a consultation
                  </a>
                ) : null}
              </div>
            </article>
          ))}

        </div>

        <div
          className="program-timeline"
          aria-hidden="true"
          style={{ '--program-progress': progress }}
        >
          <svg
            className="program-timeline-svg"
            viewBox="0 0 1000 56"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="program-line-fill"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="1000"
                y2="0"
              >
                <stop offset="0%" stopColor="#7aa889" />
                <stop offset="45%" stopColor="#1d5a2c" />
                <stop offset="100%" stopColor="#0f3e17" />
              </linearGradient>
            </defs>
            <path
              className="program-timeline-path"
              pathLength="100"
              d={TIMELINE_PATH}
            />
            <path
              className="program-timeline-progress"
              pathLength="100"
              d={TIMELINE_PATH}
            />
          </svg>
        </div>
      </div>

      <ol className="program-mobile">
        <li className="program-mobile-intro">
          <span className="section-chip">Our approach</span>
          <h2 className="program-title">
            3-Step Dermatological Program for Healthy, Radiant Skin
          </h2>
        </li>
        {steps.map((step, index) => (
          <li key={step.id} className="program-mobile-item">
            <article className="program-mobile-card">
              <span className="program-step-label">{step.label}</span>
              <h3 className="program-step-title">{step.title}</h3>
              <p className="program-step-text">{step.description}</p>
              {index === steps.length - 1 ? (
                <a className="button button-primary" href="#consultation">
                  Book a consultation
                </a>
              ) : null}
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ProgramTimeline
