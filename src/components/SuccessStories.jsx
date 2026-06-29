export default function SuccessStories() {
  const stories = [
    { title: 'Acne turnaround', summary: 'Significant improvement in 12 weeks.' },
    { title: 'Restored radiance', summary: 'Brightening and texture smoothing.' },
  ]

  return (
    <section className="section success-stories">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Success Stories</span>
          <h2>Real results from real clients</h2>
        </div>

        <div className="stories-grid">
          {stories.map((s) => (
            <article key={s.title} className="story-card">
              <div className="placeholder story-photo">Photo</div>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
