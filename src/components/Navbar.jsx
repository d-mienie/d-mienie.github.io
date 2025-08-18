import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../photos/name.png"; // update path if different

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const close = () => setOpen(false);

  return (
    <header className="navbar" role="banner">
      <div className="nav-inner">
        <Link className="nav-brand" to="/" onClick={close} aria-label="Home">
          <img className="nav-logo" src={logo} alt="Danté Mienie" />
        </Link>

        {/* Desktop links */}
        <nav className="nav-links" aria-label="Primary">
          <Link to="/" onClick={close} className={pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/about" onClick={close} className={pathname === "/about" ? "active" : ""}>About</Link>
          <Link to="/projects" onClick={close} className={pathname === "/projects" ? "active" : ""}>Projects</Link>
          <Link to="/photography" onClick={close} className={pathname === "/photography" ? "active" : ""}>Photography</Link>
          <Link to="/contact" onClick={close} className={pathname === "/contact" ? "active" : ""}>Contact</Link>
        </nav>

        {/* Hamburger (mobile only) */}
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div id="mobile-drawer" className={`nav-drawer ${open ? "open" : ""}`} role="dialog" aria-modal="true">
        <Link to="/" onClick={close} className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/about" onClick={close} className={pathname === "/about" ? "active" : ""}>About</Link>
        <Link to="/projects" onClick={close} className={pathname === "/projects" ? "active" : ""}>Projects</Link>
        <Link to="/photography" onClick={close} className={pathname === "/photography" ? "active" : ""}>Photography</Link>
        <Link to="/contact" onClick={close} className={pathname === "/contact" ? "active" : ""}>Contact</Link>
      </div>
    </header>
  );
}
