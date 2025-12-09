function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header">
        <span className="section-kicker">Skills</span>
        <h2 className="section-title">What I work with</h2>
        <p className="section-subtitle">
          A snapshot of technologies and areas I&apos;ve used in projects and
          patents.
        </p>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <div className="skill-title">Programming & Software</div>
          <div className="skill-tags">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">C / C++</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Flask</span>
            <span className="skill-tag">Git & GitHub</span>
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-title">Embedded & IoT</div>
          <div className="skill-tags">
            <span className="skill-tag">ESP32 / Arduino</span>
            <span className="skill-tag">Sensors & Actuators</span>
            <span className="skill-tag">Wireless Communication</span>
            <span className="skill-tag">IoT Protocols</span>
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-title">Systems & Concepts</div>
          <div className="skill-tags">
            <span className="skill-tag">Data Structures</span>
            <span className="skill-tag">Algorithms</span>
            <span className="skill-tag">System Design </span>
            <span className="skill-tag">Product Design </span>
            <span className="skill-tag">APIs</span>
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-title">Other</div>
          <div className="skill-tags">
            <span className="skill-tag">Technical Writing</span>
            <span className="skill-tag">Patent Drafting</span>
            <span className="skill-tag">Team Collaboration</span>
            <span className="skill-tag">Public Speaker</span>
            <span className="skill-tag">Served as President of the Nepalese Student Community in CU</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
