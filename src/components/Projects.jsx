import { useState } from "react";
import { projects } from "../data";

const filterTabs = [
  { key: "all", label: "All Projects" },
  { key: "deployed", label: "Production & Deployed" },
  { key: "web", label: "Web & Full-Stack" },
  { key: "ai", label: "AI & Machine Learning" },
  { key: "hardware", label: "IoT & Hardware" },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="section" id="projects">
      <div className="section-header">
        <span className="section-kicker">Projects</span>
        <h2 className="section-title">Selected Work & Deployments</h2>
        <p className="section-subtitle">
          Real-life deployed portals, commercial client websites, AI systems,
          and hardware prototypes engineered for production reliability.
        </p>
      </div>

      <div className="project-filter-tabs">
        {filterTabs.map((tab) => {
          const count =
            tab.key === "all"
              ? projects.length
              : projects.filter((p) => p.category === tab.key).length;
          return (
            <button
              key={tab.key}
              className={`project-tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span>{tab.label}</span>
              <span className="tab-count">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => {
          const isDeployed =
            project.badge?.toLowerCase().includes("deployed") ||
            project.badge?.toLowerCase().includes("live");

          return (
            <article
              className={`project-card ${project.featured ? "project-card-featured" : ""}`}
              key={project.id}
            >
              <div className="project-card-header">
                <span className="project-badge">{project.context}</span>
                {project.badge && (
                  <span
                    className={`project-status-pill ${
                      isDeployed ? "status-deployed" : ""
                    }`}
                  >
                    {isDeployed && <span className="status-dot" />}
                    {project.badge}
                  </span>
                )}
              </div>

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
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
