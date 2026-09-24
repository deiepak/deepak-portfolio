import { awards } from "../data";

function Awards() {
  return (
    <section className="section" id="awards">
      <div className="section-header">
        <span className="section-kicker">Hackathons &amp; Honors</span>
        <h2 className="section-title">Awards &amp; Competitions</h2>
        <p className="section-subtitle">
          Recognized for rapid problem-solving, real-world system architecture, and
          building winning solutions under high-stakes competitive hackathon pressure.
        </p>
      </div>

      <div className="awards-grid">
        {awards.map((award) => (
          <article className="award-card" key={award.id}>
            <div className="award-header">
              <div className="award-icon-box">{award.icon}</div>
              <span className="award-badge">{award.badge}</span>
            </div>

            <h3 className="award-title">{award.title}</h3>
            <div className="award-meta">
              <span className="award-org">{award.organization}</span>
              <span className="award-sep">•</span>
              <span className="award-date">{award.date}</span>
            </div>

            <p className="award-desc">{award.description}</p>

            <div className="award-tags">
              {award.tags.map((t) => (
                <span className="award-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Awards;
