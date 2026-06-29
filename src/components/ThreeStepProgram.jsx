export default function ThreeStepProgram() {
  const steps = [
    { title: 'Consultation', desc: 'Personal assessment and goals.' },
    { title: 'Treatment Plan', desc: 'Tailored in-clinic and at-home steps.' },
    { title: 'Maintenance', desc: 'Ongoing care for lasting results.' },
  ]

  return (
    <section className="section three-step">
      <div className="container">
        <div className="section-header">
          <span className="section-label">3-Step Program</span>
          <h2>3-Step Dermatological Program for Healthy, Radiant Skin</h2>
        </div>

        <div className="three-step-grid">
          {steps.map((s) => (
            <div key={s.title} className="step-card">
              <div className="step-number">{steps.indexOf(s) + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
