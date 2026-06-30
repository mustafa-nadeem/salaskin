import { useState } from 'react'

const faqs = [
  {
    id: 'referral',
    question: 'Do I need a GP referral to book?',
    answer:
      'No referral is required for most consultations. You can book directly online or by phone. If your concern needs specialist input, we will guide you on the best next step during your visit.',
  },
  {
    id: 'prepare',
    question: 'How should I prepare for my first visit?',
    answer:
      'Arrive with clean skin, no heavy makeup on the area of concern, and a list of any current medications or skincare products. Bring previous test results or referral letters if you have them.',
  },
  {
    id: 'duration',
    question: 'How long does a consultation usually take?',
    answer:
      'Initial consultations typically last 30–45 minutes. This gives your dermatologist time for a thorough assessment, discussion of options, and a clear plan without feeling rushed.',
  },
  {
    id: 'bring',
    question: 'What should I bring to my appointment?',
    answer:
      'A form of ID, your insurance details if applicable, and any photos showing how your concern has changed over time. Notes on triggers or symptoms are always helpful.',
  },
  {
    id: 'family',
    question: 'Can I book an appointment for a family member?',
    answer:
      'Yes. A parent or guardian can book on behalf of a child, and you may arrange care for an adult family member with their consent. Let us know when booking so we can prepare accordingly.',
  },
  {
    id: 'cancel',
    question: 'What is your cancellation policy?',
    answer:
      'We ask for at least 24 hours notice if you need to reschedule or cancel. This helps us offer the slot to another patient. Late cancellations may be subject to a fee.',
  },
]

function ConsultationSection() {
  const [openId, setOpenId] = useState(null)
  const [visitType, setVisitType] = useState('in-clinic')

  const toggleFaq = (id) => {
    setOpenId((current) => (current === id ? null : id))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section
      className="consultation-section"
      id="consultation"
      aria-labelledby="consultation-heading"
    >
      <div className="consultation-layout">
        <div className="consultation-faq">
          <h2 className="consultation-heading" id="consultation-heading">
            Book your <em>consultation</em> before <em>spots</em> fill up
          </h2>

          <div className="faq-list">
            {faqs.map((item) => {
              const isOpen = openId === item.id

              return (
                <div
                  key={item.id}
                  className={`faq-item${isOpen ? ' is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    onClick={() => toggleFaq(item.id)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                  <div
                    id={`faq-answer-${item.id}`}
                    className="faq-answer"
                    aria-hidden={!isOpen}
                  >
                    <div className="faq-answer-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="consultation-form-wrap">
          <div className="consultation-form-frame">
            <form className="consultation-form" onSubmit={handleSubmit}>
              <h3 className="consultation-form-title">
                Reserve your consultation in advance
              </h3>

              <div className="consultation-form-row">
                <label className="consultation-field">
                  <span className="consultation-label">First name</span>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    autoComplete="given-name"
                    required
                  />
                </label>
                <label className="consultation-field">
                  <span className="consultation-label">Last name</span>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    autoComplete="family-name"
                    required
                  />
                </label>
              </div>

              <label className="consultation-field">
                <span className="consultation-label">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
                <span className="consultation-hint">
                  Your confirmation and appointment details will be sent here.
                </span>
              </label>

              <label className="consultation-field">
                <span className="consultation-label">
                  What would you like to discuss?
                </span>
                <input
                  type="text"
                  name="concern"
                  placeholder="e.g. mole check, acne, hair loss"
                  required
                />
              </label>

              <fieldset className="consultation-fieldset">
                <legend className="consultation-label">
                  How would you like to visit?
                </legend>
                <div className="consultation-options">
                  <label
                    className={`consultation-option${
                      visitType === 'in-clinic' ? ' is-selected' : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="visitType"
                      value="in-clinic"
                      checked={visitType === 'in-clinic'}
                      onChange={() => setVisitType('in-clinic')}
                    />
                    <span>In-clinic consultation</span>
                  </label>
                  <label
                    className={`consultation-option${
                      visitType === 'virtual' ? ' is-selected' : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="visitType"
                      value="virtual"
                      checked={visitType === 'virtual'}
                      onChange={() => setVisitType('virtual')}
                    />
                    <span>Virtual follow-up</span>
                  </label>
                </div>
              </fieldset>

              <div className="consultation-form-actions">
                <button type="submit" className="button button-primary">
                  Book consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationSection
