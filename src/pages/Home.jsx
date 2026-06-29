import { Link } from 'react-router-dom'
import WhyUs from '../components/WhyUs'
import Specialties from '../components/Specialties'
import OurServices from '../components/OurServices'
import Mission from '../components/Mission'
import SuccessStories from '../components/SuccessStories'
import ThreeStepProgram from '../components/ThreeStepProgram'
import Testimonials from '../components/Testimonials'

const trustItems = [
  { title: 'Expert Care', desc: 'Licensed skincare professionals' },
  { title: 'Personalized Plans', desc: 'Tailored to your skin type' },
  { title: 'Premium Products', desc: 'Clinical-grade treatments' },
  { title: 'Proven Results', desc: 'Trusted by our clients' },
]

const servicePreviews = [
  {
    name: 'Skin Analysis',
    desc: 'In-depth assessment of your skin concerns and goals.',
  },
  {
    name: 'Facial Treatments',
    desc: 'Customized facials for hydration, clarity, and glow.',
  },
  {
    name: 'Treatment Plans',
    desc: 'Long-term routines designed for lasting results.',
  },
]

const reviews = [
  {
    quote:
      'Placeholder customer review. The consultation completely changed my skincare routine.',
    author: 'Customer Name',
  },
  {
    quote:
      'Another testimonial placeholder highlighting service quality and results.',
    author: 'Customer Name',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="section-label">Home Page</span>
            <h1>Your journey to healthier skin starts here</h1>
            <p className="hero-subtitle">
              Placeholder headline for primary brand messaging. Expert skincare
              consultations and treatments tailored to you.
            </p>
            <div className="hero-actions">
              <Link to="/book-a-consultation" className="btn btn-filled">
                Book a Consultation
              </Link>
              <Link to="/our-services" className="btn">
                Our Services
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="placeholder hero-image">Hero Image</div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-grid">
          {trustItems.map((item) => (
            <div key={item.title} className="trust-item">
              <div className="trust-icon placeholder">Icon</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="placeholder about-image">About Image</div>
          </div>
          <div className="about-content">
            <span className="section-label">About SalaSkin</span>
            <h2>Personalized skincare, professionally delivered</h2>
            <p>
              Placeholder for brand introduction. Brief overview of who you are,
              what you do, and why clients trust SalaSkin for their skincare
              needs.
            </p>
            <Link to="/our-services" className="btn">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <WhyUs />

      <Specialties />

      <Mission />

      <ThreeStepProgram />

      <SuccessStories />

      <OurServices />

      <Testimonials />

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div>
            <span className="section-label">Call to Action</span>
            <h2>Ready to start your skincare journey?</h2>
            <p>Book a consultation and get a plan built for your skin.</p>
          </div>
          <Link to="/book-a-consultation" className="btn btn-filled">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
