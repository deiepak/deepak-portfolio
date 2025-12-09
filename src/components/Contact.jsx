function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-header">
        <span className="section-kicker">Contact</span>
        <h2 className="section-title">Let&apos;s connect</h2>
        <p className="section-subtitle">
          Open to internships, collaborations and interesting projects.
        </p>
      </div>

      <div className="contact-card">
        <div className="contact-text">
          <p>
            If you&apos;d like to discuss an internship, a project, or just
            share ideas around IoT, automation or software engineering,
            I&apos;d be happy to connect.
          </p>
          <div className="contact-details">
            <span>
              Email:{" "}
              <span className="contact-highlight">
                deepakprdshah@yahoo.com
              </span>
            </span>
            <span>
              Phone: <span className="contact-highlight">+91-8288997559</span>
            </span>
            <span>
              Location: <span className="contact-highlight">Nepal / India</span>
            </span>
          </div>
          <div className="contact-chip-row">
            <span className="contact-chip">Internships (Remote / On-site)</span>
            <span className="contact-chip">IoT & Embedded Projects</span>
            <span className="contact-chip">Research & Patents</span>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "Thanks for your message! For now, please email me directly at deepakprdshah@yahoo.com."
            );
          }}
        >
          <div>
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              className="input"
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="message">
              Message
            </label>
            <textarea
              className="textarea"
              id="message"
              name="message"
              placeholder="Tell me a bit about what you have in mind..."
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
          <p className="form-note">
            This form shows a demo alert for now. In production, you can connect
            it to an email service or backend endpoint.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
