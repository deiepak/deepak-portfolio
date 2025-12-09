import { projects } from "../data";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <span className="section-kicker">Projects</span>
        <h2 className="section-title">Selected work</h2>
        <p className="section-subtitle">
          A mix of academic, research and personal projects that reflect how I
          think about systems, users and impact.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-badge">{project.context}</div>
            <h3 className="project-title">{project.title}</h3>
            <div className="project-meta">Role: {project.role}</div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tech.map((t) => (
                <span className="project-tag" key={t}>
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

export default Projects;
