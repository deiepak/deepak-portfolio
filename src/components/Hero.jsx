import profilePic from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          <span>Available for internships & remote projects</span>
        </div>
        <h1 className="hero-title">
          Hi, I&apos;m <span>Deepak Prasad Shah</span>.
          <br />
          I build systems that connect hardware, software & ideas.
        </h1>
        <p className="hero-subtitle">
          BE Computer Science & Engineering student at Chandigarh University
          (2028). I enjoy turning research, embedded systems and software into
          practical solutions — from IoT-based irrigation to drone
          immobilization and solar automation.
        </p>
        <div className="hero-highlights">
          <div className="badge">
            <strong>3+</strong> published patents
          </div>
          <div className="badge">
            <strong>IoT</strong> &amp; embedded systems
          </div>
          <div className="badge">
            <strong>Full-stack</strong> development
          </div>
        </div>
        <p className="hero-contact">
          Contact via email:&nbsp;
          <a href="mailto:deepakprdshah@yahoo.com">
            deepakprdshah@yahoo.com
          </a>
        </p>
      </div>
      <div className="hero-right">
        <div className="profile-card">
          <div className="profile-inner">
            <div className="profile-pill">CS Engineering • 2028</div>
            <div className="profile-photo-wrapper">
              <img
                src={profilePic}
                alt="Deepak Prasad Shah"
                className="profile-photo"
              />
            </div>
            <div className="profile-meta">
              <div className="profile-name">Deepak Prasad Shah</div>
              <div className="profile-role">
                BE CSE @ Chandigarh University
              </div>
              <div className="profile-tags">
                <span className="profile-tag">Patents & Innovation</span>
                <span className="profile-tag">IoT & Automation</span>
                <span className="profile-tag">Python / React</span>
              </div>
              <div className="profile-stat">
                3 patented inventions • Focusing on practical engineering
                impact.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
