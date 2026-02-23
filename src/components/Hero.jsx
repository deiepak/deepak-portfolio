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
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span>LinkedIn</span>
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
