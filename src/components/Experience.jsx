import { experiences } from "../data";

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-header">
        <span className="section-kicker">Experience</span>
        <h2 className="section-title">Internships & Roles</h2>
        <p className="section-subtitle">
          Real-world product design, software engineering, and DevOps across
          wildlife innovation and hospitality management.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp) => (
          <article className="experience-card" key={exp.id}>
            <div className="experience-top">
              <div>
                <div className="experience-role-row">
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-status-badge">
                    <span className="pulse-dot" />
                    {exp.status}
                  </span>
                </div>
                <div className="experience-company-row">
                  <span className="experience-company">{exp.company}</span>
                  <span className="experience-sep">•</span>
                  <span className="experience-type">{exp.type}</span>
                </div>
              </div>
              <div className="experience-period">{exp.period}</div>
            </div>

            <p className="experience-desc">{exp.description}</p>

            <ul className="experience-highlights">
              {exp.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <div className="experience-tags">
              {exp.tech.map((t) => (
                <span className="experience-tag" key={t}>
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

export default Experience;
