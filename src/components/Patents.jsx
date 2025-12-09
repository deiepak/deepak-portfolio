import { patents } from "../data";

function Patents() {
  const primary = patents[0];
  const secondary = patents.slice(1);

  return (
    <section className="section" id="patents">
      <div className="section-header">
        <span className="section-kicker">Patents</span>
        <h2 className="section-title">Published inventions</h2>
        <p className="section-subtitle">
          A snapshot of some of my hardware and automation work that has
          progressed to patent publication.
        </p>
      </div>

      <div className="patent-list">
        <div className="patent-card">
          <div className="patent-pill">
            <span className="patent-pill-icon" />
            Flagship patent
          </div>
          <div className="patent-main-title">{primary.title}</div>
          <div className="patent-main-subtitle">{primary.focus}</div>
          <div className="patent-meta">
            <span>Published patent</span>
            <span>Core: security & RF systems</span>
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
            <div key={p.id}>
              <div className="patent-small-item-title">{p.title}</div>
              <div className="patent-small-item-subtitle">{p.focus}</div>
              <p className="patent-small-item-subtitle">{p.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Patents;
