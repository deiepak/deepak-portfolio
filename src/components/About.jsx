function About() {
  return (
    <section className="section" id="about">
      <div className="section-header">
        <span className="section-kicker">About</span>
        <h2 className="section-title">Who I am</h2>
        <p className="section-subtitle">
          A builder bridging software engineering, DevOps, product design, and embedded systems.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I am currently pursuing a BE in Computer Science and Engineering at
            Chandigarh University (batch of 2028). My work spans software engineering,
            DevOps automation, VPS provisioning on Ubuntu Server 24, product design, and embedded systems.
          </p>
          <p>
            Currently, I contribute to critical wildlife conservation systems as a
            Frontend &amp; DevOps Intern at <strong>National Innovation Center (NIC)</strong> and
            serve as the solo product designer, QA tester, and DevOps engineer for resort
            and adventure operations at <strong>Adventure Sewa</strong>.
          </p>
          <p>
            Beyond internships, I manage cloud VPS environments (Ubuntu Server 24), configure Cloudflare DNS &amp; SSL routing, have architected and deployed over 10+ commercial and
            freelance client websites, built a production-scaled event registration &amp;
            instant verification portal for our college department, and published 3 patents
            in automation and counter-UAV defense.
          </p>
          <p>
            Before university, I completed my schooling at Modern Indian School,
            Kathmandu (up to Class 10) and Kendriya Vidyalaya, Embassy of India,
            Kathmandu (Class 11–12), where I built a deep foundation in analytical
            problem-solving and science.
          </p>
        </div>
        <div className="about-facts">
          <div className="about-chip">
            <span className="chip-icon">🏆</span>
            <div>
              <strong>Top 3 • SAP Hackfest 2026</strong>
              <div className="chip-sub">1,300+ participants nationwide</div>
            </div>
          </div>
          <div className="about-chip">
            <span className="chip-icon">🥉</span>
            <div>
              <strong>Ranked 3 / 300 Teams</strong>
              <div className="chip-sub">Offroad AI Navigation Challenge</div>
            </div>
          </div>
          <div className="about-chip">
            <span className="chip-icon">💼</span>
            <div>
              <strong>2 Active Internships</strong>
              <div className="chip-sub">NIC &amp; Adventure Sewa</div>
            </div>
          </div>
          <div className="about-chip">
            <span className="chip-icon">🧪</span>
            <div>
              <strong>3 Published Patents</strong>
              <div className="chip-sub">Hardware, UAV &amp; Automation</div>
            </div>
          </div>
          <div className="about-chip">
            <span className="chip-icon">🚀</span>
            <div>
              <strong>10+ Live Deployments</strong>
              <div className="chip-sub">Commercial &amp; Department Portals</div>
            </div>
          </div>
          <div className="about-chip">
            <span className="chip-icon">🎓</span>
            <div>
              <strong>BE CSE (2028)</strong>
              <div className="chip-sub">Chandigarh University</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
