const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand" onClick={() => scrollToId("hero")}>
          <div className="brand-mark">
            <span>DS</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Deepak Prasad Shah</span>
            <span className="brand-role">Student • Developer • Innovator</span>
          </div>
        </div>
        <nav className="nav-links">
          <button className="nav-link" onClick={() => scrollToId("about")}>
            About
          </button>
          <button className="nav-link" onClick={() => scrollToId("patents")}>
            Patents
          </button>
          <button className="nav-link" onClick={() => scrollToId("projects")}>
            Projects
          </button>
          <button className="nav-link" onClick={() => scrollToId("skills")}>
            Skills
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
