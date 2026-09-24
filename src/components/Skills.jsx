function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header">
        <span className="section-kicker">Skills & Competencies</span>
        <h2 className="section-title">What I work with</h2>
        <p className="section-subtitle">
          A snapshot of technologies, engineering toolchains, and methodologies
          I leverage across internships, projects, and patent research.
        </p>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <div className="skill-card-icon">⚡</div>
          <div className="skill-title">DevOps &amp; Infrastructure</div>
          <div className="skill-tags">
            <span className="skill-tag">Ubuntu Server 24</span>
            <span className="skill-tag">Cloudflare DNS Management</span>
            <span className="skill-tag">VPS Creation &amp; Management</span>
            <span className="skill-tag">Linux / SSH Administration</span>
            <span className="skill-tag">Docker Containerization</span>
            <span className="skill-tag">CI / CD Pipelines</span>
            <span className="skill-tag">Nginx &amp; Reverse Proxy</span>
            <span className="skill-tag">Cloud Deployment</span>
            <span className="skill-tag">Server Hardening &amp; Monitoring</span>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-card-icon">💻</div>
          <div className="skill-title">Frontend &amp; Full-Stack</div>
          <div className="skill-tags">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript / ES6+</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express.js</span>
            <span className="skill-tag">Python &amp; Flask</span>
            <span className="skill-tag">MongoDB / MySQL</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">Next.js / Tailwind</span>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-card-icon">🎨</div>
          <div className="skill-title">Product Design &amp; QA Testing</div>
          <div className="skill-tags">
            <span className="skill-tag">Product Design</span>
            <span className="skill-tag">Figma &amp; Prototyping</span>
            <span className="skill-tag">User Journey Flows</span>
            <span className="skill-tag">Software QA / Testing</span>
            <span className="skill-tag">Test Case Design</span>
            <span className="skill-tag">Bug Tracking &amp; Reliability</span>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-card-icon">📡</div>
          <div className="skill-title">Embedded Systems &amp; IoT</div>
          <div className="skill-tags">
            <span className="skill-tag">ESP32 &amp; Arduino</span>
            <span className="skill-tag">C / C++</span>
            <span className="skill-tag">Sensors &amp; Actuators</span>
            <span className="skill-tag">RF / Jamming Concepts</span>
            <span className="skill-tag">IoT Protocols</span>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-card-icon">🧠</div>
          <div className="skill-title">Systems &amp; Algorithms</div>
          <div className="skill-tags">
            <span className="skill-tag">Data Structures</span>
            <span className="skill-tag">Algorithms</span>
            <span className="skill-tag">System Architecture</span>
            <span className="skill-tag">GIS / Telemetry</span>
            <span className="skill-tag">WebRTC &amp; Sockets</span>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-card-icon">🏆</div>
          <div className="skill-title">Leadership &amp; Innovation</div>
          <div className="skill-tags">
            <span className="skill-tag">3 Published Patents</span>
            <span className="skill-tag">Patent Drafting</span>
            <span className="skill-tag">Community Leadership</span>
            <span className="skill-tag">Technical Writing</span>
            <span className="skill-tag">Cross-functional Team Lead</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
