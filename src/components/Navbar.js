import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavLink({ to, children, className, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`nav-link${isActive ? " active" : ""}${className ? " " + className : ""}`}
    >
      {children}
    </Link>
  );
}

// Shared navbar used across all pages
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo-link">
        <img
          src="/transparent-logo.png"
          alt="Raphael Daveal Eferire"
          className="nav-logo"
        />
      </Link>

      <div className="nav-center-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
      </div>

      <div className="nav-right">
        <NavLink to="/contact" className="nav-contact-btn">
          Contact Me
        </NavLink>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className="mobile-contact-btn">
            Contact Me
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;