import { patents } from "../data";

function Patents() {
  const primary = patents[0];
  const secondary = patents.slice(1);

  return (
    <section className="section" id="patents">
      <div className="section-header">
        <span className="section-kicker">Patents</span>
        <h2 className="section-title">Published Inventions</h2>
        <p className="section-subtitle">
          Hardware and automation innovations that have progressed to official
          patent publication, addressing counter-UAV defense, renewable energy,
          and mechanized safety.
        </p>
      </div>

      <div className="patent-list">
        <div className="patent-card">
          <div className="patent-pill">
            <span className="patent-pill-icon" />
            Flagship Patent
          </div>
          <h3 className="patent-main-title">{primary.title}</h3>
          <div className="patent-main-subtitle">{primary.focus}</div>
          <div className="patent-meta">
            <span>Official Published Patent</span>
            <span>Core: RF &amp; Counter-UAV</span>
          </div>
          <p className="patent-description">{primary.summary}</p>
          <div className="patent-tags">
            {primary.tags.map((tag) => (
              <span className="patent-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="patent-small-list">
          {secondary.map((p) => (
            <div key={p.id} className="patent-small-card">
              <div className="patent-pill" style={{ borderColor: "rgba(56, 189, 248, 0.3)", color: "#7dd3fc", background: "rgba(56, 189, 248, 0.08)" }}>
                <span className="patent-pill-icon" style={{ background: "#38bdf8", boxShadow: "0 0 6px #38bdf8" }} />
                {p.badge}
              </div>
              <h4 className="patent-small-item-title">{p.title}</h4>
              <div className="patent-small-item-subtitle">{p.focus}</div>
              <p className="patent-small-item-desc">{p.summary}</p>
              <div className="patent-tags" style={{ marginTop: "0.5rem" }}>
                {p.tags.map((tag) => (
                  <span className="patent-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Patents;
