export default function Testimonials() {
  const reviews = [
    {
      quote:
        'The consultation changed my routine — my skin has never looked better.',
      author: 'Happy Client',
    },
    {
      quote: 'Professional team and clear results.',
      author: 'Satisfied Client',
    },
  ]

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-label">Testimonials</span>
          <h2>What our clients say</h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <blockquote key={i} className="review-card">
              <p>&ldquo;{r.quote}&rdquo;</p>
              <footer>
                <div className="review-avatar placeholder">Photo</div>
                <cite>{r.author}</cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
