const testimonials = [
  {
    quote:
      'The consultation was thorough and unhurried. I left with a clear plan and felt genuinely looked after.',
    name: 'Jessica M.',
    meta: 'Skin rejuvenation patient',
    tone: 'sage',
  },
  {
    quote:
      'Subtle results that built my confidence over time — exactly the natural outcome I was hoping for.',
    name: 'Michael R.',
    meta: 'Acne treatment patient',
    tone: 'sand',
  },
  {
    quote:
      'From booking to aftercare, everything felt calm and well organised. A refreshingly simple experience.',
    name: 'Sophia K.',
    meta: 'Consultation patient',
    tone: 'mist',
  },
  {
    quote:
      'Professional, evidence-led care without the clinical coldness. The team explained every step clearly.',
    name: 'Amira H.',
    meta: 'Psoriasis treatment patient',
    tone: 'clay',
  },
  {
    quote:
      'I appreciated how personalised the treatment plan was. No pressure, just thoughtful recommendations.',
    name: 'Daniel T.',
    meta: 'Hair loss consultation',
    tone: 'stone',
  },
  {
    quote:
      'Outstanding hygiene standards and a warm environment. I would recommend Salaskin without hesitation.',
    name: 'Elena V.',
    meta: 'Minor procedure patient',
    tone: 'fern',
  },
]

function StoryCard({ item, hidden = false }) {
  return (
    <article className="story-card" aria-hidden={hidden || undefined}>
      <div className="story-rating" aria-hidden="true">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <p className="story-quote">{item.quote}</p>
      <div className="story-author">
        <span
          className={`story-avatar story-avatar--${item.tone}`}
          aria-hidden="true"
        />
        <div>
          <p className="story-name">{item.name}</p>
          <p className="story-meta">{item.meta}</p>
        </div>
      </div>
    </article>
  )
}

function SuccessStories() {
  return (
    <section className="stories-section" id="stories" aria-labelledby="stories-heading">
      <div className="stories-header">
        <h2 id="stories-heading">Success stories</h2>
        <p className="stories-subtitle">
          More than 250 five-star reviews on Google
        </p>
      </div>

      <div className="stories-marquee" aria-label="Patient testimonials">
        <div className="stories-marquee-track">
          <div className="stories-marquee-group" role="list">
            {testimonials.map((item) => (
              <StoryCard key={item.name} item={item} />
            ))}
          </div>
          <div className="stories-marquee-group" aria-hidden="true">
            {testimonials.map((item) => (
              <StoryCard key={`${item.name}-duplicate`} item={item} hidden />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
