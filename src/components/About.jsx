function About() {
  return (
    <section className="section" id="about">
      <div className="section-header">
        <span className="section-kicker">About</span>
        <h2 className="section-title">Who I am</h2>
        <p className="section-subtitle">
          A learner who likes to connect hardware, code and research to solve
          real-world problems.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I am currently pursuing a BE in Computer Science and Engineering at
            Chandigarh University (batch of 2028). My interests lie at the
            intersection of embedded systems, IoT, automation and software
            engineering.
          </p>
          <p>
            Before university, I completed my schooling at Modern Indian School,
            Kathmandu (up to Class 10) and Kendriya Vidyalaya, Embassy of India,
            Kathmandu (Class 11–12). These environments helped me build a strong
            foundation in mathematics, science and problem-solving.
          </p>
          <p>
            I enjoy taking ideas from concept to prototype — whether that&apos;s
            building a smart irrigation system, architecting a student
            management or restaurant management application, or designing
            mechanisms that become patent-worthy.
          </p>
          <p>
            Beyond technical skills, I value clean design, maintainable code and
            clear communication. I like working in teams, but I&apos;m also
            comfortable taking ownership of projects end-to-end.
          </p>
        </div>
        <div className="about-facts">
          <div className="about-chip">
            🎓 BE CSE • Chandigarh University • 2028
          </div>
          <div className="about-chip">
            🏫 Modern Indian School, Kathmandu (up to Class 10)
          </div>
          <div className="about-chip">
            🏫 Kendriya Vidyalaya, Embassy of India, Kathmandu (Class 11–12)
          </div>
          <div className="about-chip">
            🧪 3 published patents in hardware & automation
          </div>
          <div className="about-chip">
            💻 Comfortable with Python, C/C++, JS & React
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
