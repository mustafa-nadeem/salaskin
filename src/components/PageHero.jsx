export default function PageHero({ label, title, description }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <span className="section-label">{label}</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  )
}
