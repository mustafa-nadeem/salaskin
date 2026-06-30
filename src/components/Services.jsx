import { useLayoutEffect, useRef, useState } from 'react'

const services = [
  {
    id: 'moles',
    name: 'Moles',
    variant: 'moles',
    title: 'Careful assessment for moles and changing lesions',
    description:
      'We review shape, colour, and history with dermoscopy-led assessment, then build a clear plan for monitoring, biopsy, or removal when needed.',
  },
  {
    id: 'vitiligo',
    name: 'Vitiligo',
    variant: 'vitiligo',
    title: 'Supportive care for vitiligo and pigment change',
    description:
      'Personalised treatment pathways focus on stabilising activity, protecting skin, and improving confidence with evidence-led medical options.',
  },
  {
    id: 'urticaria',
    name: 'Urticaria',
    variant: 'urticaria',
    title: 'Relief for urticaria and recurring hives',
    description:
      'We identify triggers where possible and tailor medical management to reduce flare frequency and help you return to everyday comfort.',
  },
  {
    id: 'sweating',
    name: 'Excessive Sweating',
    variant: 'sweating',
    title: 'Targeted treatment for excessive sweating',
    description:
      'From topical therapies to clinic-based options, we help manage hyperhidrosis with practical plans designed around your routine and goals.',
  },
  {
    id: 'psoriasis',
    name: 'Psoriasis',
    variant: 'psoriasis',
    title: 'Long-term psoriasis management that adapts with you',
    description:
      'Structured follow-up, scalp and body care guidance, and treatment escalation when needed keep your plan calm, clear, and effective.',
  },
  {
    id: 'lesion',
    name: 'Benign Skin Lesion',
    variant: 'lesion',
    title: 'Removal and care for benign skin lesions',
    description:
      'Minor procedures are planned with precision and aftercare in mind, so treatment feels straightforward and recovery stays well supported.',
  },
  {
    id: 'acne',
    name: 'Infantile Acne',
    variant: 'acne',
    title: 'Gentle guidance for infantile acne',
    description:
      'Parents receive clear reassurance, safe skincare advice, and medical review when infant skin needs a more tailored dermatology approach.',
  },
  {
    id: 'cancer',
    name: 'Skin Cancer',
    variant: 'cancer',
    title: 'Early detection and skin cancer care',
    description:
      'Thorough skin checks, biopsy when indicated, and coordinated treatment planning help you move forward with clarity and clinical confidence.',
  },
  {
    id: 'itching',
    name: 'Skin Itching',
    variant: 'itching',
    title: 'Investigation and relief for persistent itching',
    description:
      'We look beyond the symptom to find underlying causes, then combine medical treatment with simple routines that reduce irritation over time.',
  },
  {
    id: 'genital',
    name: 'Male Genital Skin Disorders',
    variant: 'genital',
    title: 'Discreet care for male genital skin concerns',
    description:
      'Consultations are handled sensitively with clear explanation, accurate diagnosis, and treatment plans designed for comfort and privacy.',
  },
  {
    id: 'hair',
    name: 'Hair Loss',
    variant: 'hair',
    title: 'Assessment and treatment for hair loss',
    description:
      'We explore pattern, scalp health, and medical factors together, then recommend targeted therapies to support regrowth and long-term scalp care.',
  },
]

function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const stepsRef = useRef(null)
  const active = services[activeIndex]

  useLayoutEffect(() => {
    const container = stepsRef.current
    if (!container) return

    const getSteps = () => [...container.querySelectorAll('.services-step')]

    const pickClosestToCenter = () => {
      const steps = getSteps()
      if (!steps.length) return

      const center = window.innerHeight / 2
      let closestIndex = 0
      let closestDistance = Infinity

      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect()
        const stepCenter = rect.top + rect.height / 2
        const distance = Math.abs(stepCenter - center)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex((current) =>
        current === closestIndex ? current : closestIndex,
      )
    }

    pickClosestToCenter()

    const observer = new IntersectionObserver(() => pickClosestToCenter(), {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    })

    getSteps().forEach((step) => observer.observe(step))

    window.addEventListener('resize', pickClosestToCenter)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', pickClosestToCenter)
    }
  }, [])

  const scrollToStep = (index) => {
    const steps = stepsRef.current
      ? [...stepsRef.current.querySelectorAll('.services-step')]
      : []
    const step = steps[index]
    if (!step) return

    const label = step.querySelector('.services-step-label')
    const target = label ?? step

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'center',
    })
  }

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      <h2 className="services-title">Our Services</h2>

      <div className="services-body">
        <div className="services-steps" ref={stepsRef}>
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`services-step${index === activeIndex ? ' is-active' : ''}`}
              data-index={index}
              aria-current={index === activeIndex ? 'step' : undefined}
            >
              <button
                type="button"
                className="services-step-label"
                onClick={() => scrollToStep(index)}
              >
                {service.name}
              </button>

              <div className="services-step-mobile">
                <div
                  className={`service-image service-image--${service.variant} services-stage-image`}
                  aria-hidden="true"
                />
                <div className="services-detail">
                  <h3 className="services-detail-title">{service.title}</h3>
                  <p className="services-detail-text">{service.description}</p>
                  <a className="button button-primary" href="#consultation">
                    Book consultation
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="services-sticky" aria-live="polite">
          <div className="services-sticky-inner">
            <div className="services-stage" aria-hidden="true">
              <div
                key={active.variant}
                className={`service-image service-image--${active.variant} services-stage-image`}
              />
            </div>

            <div className="services-detail" key={active.id}>
              <h3 className="services-detail-title">{active.title}</h3>
              <p className="services-detail-text">{active.description}</p>
              <a className="button button-primary" href="#consultation">
                Book consultation
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Services
