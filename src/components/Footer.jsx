function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {year} Deepak Prasad Shah. All rights reserved.</span>
        <span>
          Contact:{" "}
          <a href="mailto:deepakprdshah@yahoo.com">
            deepakprdshah@yahoo.com
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
