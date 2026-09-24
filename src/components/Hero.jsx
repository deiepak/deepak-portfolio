import profilePic from "../assets/profile.jpg";

function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    const el = document.getElementById("experience");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAwards = () => {
    const el = document.getElementById("awards");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          <span>DevOps • Frontend Developer • Product Designer</span>
        </div>
        <h1 className="hero-title">
          Hi, I&apos;m <span>Deepak Prasad Shah</span>.
          <br />
          Engineering real-world systems across hardware & software.
        </h1>
        <p className="hero-subtitle">
          BE Computer Science & Engineering student at Chandigarh University (2028).
          <strong> Top 3 at SAP Hackfest 2026</strong> (1,300+ participants) and
          <strong> Top 6 at Hack n Win 2026</strong> (250 teams). Interning at
          <strong> National Innovation Center</strong> and <strong>Adventure Sewa</strong>.
        </p>
        <div className="hero-highlights">
          <div className="badge" onClick={scrollToAwards} style={{ cursor: "pointer" }}>
            <strong>🏆 Top 3</strong> SAP Hackfest &apos;26 (1300+)
          </div>
          <div className="badge" onClick={scrollToAwards} style={{ cursor: "pointer" }}>
            <strong>🏅 Top 6</strong> Hack n Win &apos;26 (250 teams)
          </div>
          <div className="badge" onClick={scrollToExperience} style={{ cursor: "pointer" }}>
            <strong>2</strong> Active Internships
          </div>
          <div className="badge" onClick={scrollToProjects} style={{ cursor: "pointer" }}>
            <strong>10+</strong> Deployed Sites &amp; Portals
          </div>
          <div className="badge">
            <strong>3</strong> Published Patents
          </div>
          <div className="badge">
            <strong>Cloudflare</strong> DNS &amp; VPS
          </div>
        </div>
        <div className="hero-cta-group">
          <button className="cta-primary-btn" onClick={scrollToProjects}>
            View Deployed Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <button className="cta-secondary-btn" onClick={scrollToExperience}>
            Experience & Internships
          </button>
        </div>
        <p className="hero-contact">
          Email:&nbsp;
          <a href="mailto:deepakprdshah@yahoo.com">deepakprdshah@yahoo.com</a>
        </p>
        <div className="hero-social">
          <a
            href="https://www.linkedin.com/in/deiepak/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
            aria-label="LinkedIn Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/deiepak/"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            aria-label="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            aria-label="View Resume"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>View Resume</span>
          </a>
          <a
            href="/resume.pdf"
            download
            className="resume-download-btn"
            aria-label="Download Resume"
            title="Download Resume"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
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
                <span className="profile-tag">🏆 SAP Hackfest Top 3</span>
                <span className="profile-tag">🏅 Hack n Win Top 6</span>
                <span className="profile-tag">NIC Intern</span>
                <span className="profile-tag">Adventure Sewa</span>
                <span className="profile-tag">Cloudflare DNS</span>
                <span className="profile-tag">Ubuntu 24 &amp; VPS</span>
                <span className="profile-tag">3 Published Patents</span>
              </div>
              <div className="profile-stat">
                Focused on reliable software delivery, automated testing, and scalable architecture.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
