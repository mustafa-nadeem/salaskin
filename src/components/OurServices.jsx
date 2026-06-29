import { Link } from 'react-router-dom'

const services = [
  { name: 'Skin Analysis', desc: 'In-depth assessment of your skin.' },
  { name: 'Facials & Peels', desc: 'Treatments tailored to your concerns.' },
  { name: 'Treatment Plans', desc: 'Long-term routines for lasting results.' },
]

export default function OurServices() {
  return (
    <section className="section section-alt our-services">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-label">Services Preview</span>
          <h2>What we offer</h2>
          <p>A glimpse of our core services. Full details on the Our Services page.</p>
        </div>

        <div className="service-preview-grid">
          {services.map((s) => (
            <article key={s.name} className="service-preview-card">
              <div className="service-preview-image placeholder">Image</div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="section-cta">
          <Link to="/our-services" className="btn">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
