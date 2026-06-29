import PageHero from '../components/PageHero'

const services = [
  'Initial Skin Consultation',
  'Custom Facial Treatment',
  'Acne & Blemish Care',
  'Anti-Aging & Renewal',
  'Hydration & Barrier Repair',
  'Follow-Up Consultation',
  'Not sure — help me choose',
]

export default function BookConsultation() {
  return (
    <>
      <PageHero
        label="Book a Consultation Page"
        title="Book a Consultation"
        description="Placeholder intro. Fill in the form below and we will confirm your appointment."
      />

      <section className="section">
        <div className="container booking-grid">
          <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
            <span className="section-label">Booking Form</span>
            <h2>Request an appointment</h2>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" placeholder="First name" />
              </div>
              <div className="form-field">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastName" placeholder="Last name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="you@email.com" />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="+1 (000) 000-0000" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="service">Service</label>
                <select id="service" name="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="date">Preferred Date</label>
                <input type="date" id="date" name="date" />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Additional Notes</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your skin concerns or any questions..."
              />
            </div>

            <button type="submit" className="btn btn-filled">
              Submit Booking Request
            </button>
          </form>

          <aside className="booking-info">
            <span className="section-label">Contact Info</span>
            <h2>Visit us</h2>

            <div className="info-block">
              <h3>Location</h3>
              <p>123 Placeholder Street</p>
              <p>City, State 00000</p>
              <div className="placeholder map-placeholder">Map Placeholder</div>
            </div>

            <div className="info-block">
              <h3>Contact</h3>
              <p>
                <a href="mailto:hello@salaskin.com">hello@salaskin.com</a>
              </p>
              <p>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
            </div>

            <div className="info-block">
              <h3>Hours</h3>
              <p>Mon – Fri: 9am – 6pm</p>
              <p>Sat: 10am – 4pm</p>
              <p>Sun: Closed</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
