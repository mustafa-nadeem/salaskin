import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const services = [
  {
    name: 'Initial Skin Consultation',
    duration: '45 min',
    price: 'From $75',
    desc: 'Comprehensive skin assessment, discussion of concerns, and personalized recommendations.',
  },
  {
    name: 'Custom Facial Treatment',
    duration: '60 min',
    price: 'From $95',
    desc: 'Tailored facial using products and techniques matched to your skin type and goals.',
  },
  {
    name: 'Acne & Blemish Care',
    duration: '60 min',
    price: 'From $110',
    desc: 'Targeted treatment plan for breakouts, congestion, and post-acne scarring.',
  },
  {
    name: 'Anti-Aging & Renewal',
    duration: '75 min',
    price: 'From $130',
    desc: 'Advanced treatments focused on fine lines, texture, and overall skin rejuvenation.',
  },
  {
    name: 'Hydration & Barrier Repair',
    duration: '60 min',
    price: 'From $95',
    desc: 'Restore moisture balance and strengthen the skin barrier for lasting hydration.',
  },
  {
    name: 'Follow-Up Consultation',
    duration: '30 min',
    price: 'From $50',
    desc: 'Progress check-in to adjust your routine and treatment plan as your skin evolves.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Consult',
    desc: 'We listen to your concerns and assess your skin thoroughly.',
  },
  {
    step: '02',
    title: 'Plan',
    desc: 'A personalized treatment plan is created for your unique needs.',
  },
  {
    step: '03',
    title: 'Treat',
    desc: 'Professional treatments and product recommendations delivered in-clinic.',
  },
  {
    step: '04',
    title: 'Follow Up',
    desc: 'Ongoing support to track progress and refine your routine.',
  },
]

export default function OurServices() {
  return (
    <>
      <PageHero
        label="Our Services Page"
        title="Our Services"
        description="Placeholder intro for services overview. Everything we offer to help you achieve healthier skin."
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Service List</span>
            <h2>Treatments & Consultations</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article key={service.name} className="service-card">
                <div className="service-card-image placeholder">Service Image</div>
                <div className="service-card-body">
                  <div className="service-card-meta">
                    <span>{service.duration}</span>
                    <span>{service.price}</span>
                  </div>
                  <h3>{service.name}</h3>
                  <p>{service.desc}</p>
                  <Link to="/book-a-consultation" className="btn service-card-btn">
                    Book This Service
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header section-header-center">
            <span className="section-label">Process</span>
            <h2>How it works</h2>
            <p>From first visit to follow-up, here is what to expect.</p>
          </div>

          <div className="steps-grid steps-grid-4">
            {steps.map((item) => (
              <article key={item.step} className="step-card">
                <span className="step-number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div>
            <h2>Not sure which service is right for you?</h2>
            <p>Book a consultation and we will guide you to the best option.</p>
          </div>
          <Link to="/book-a-consultation" className="btn btn-filled">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
