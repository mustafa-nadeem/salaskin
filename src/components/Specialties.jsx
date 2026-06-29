export default function Specialties() {
  const items = [
    'Acne Management',
    'Anti-Aging',
    'Hyperpigmentation',
    'Sensitive Skin',
  ]

  return (
    <section className="section specialties">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Specialties</span>
          <h2>Areas we focus on</h2>
        </div>

        <div className="specialties-grid">
          {items.map((t) => (
            <div key={t} className="specialty-card">
              <div className="placeholder specialty-icon">Icon</div>
              <h4>{t}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
