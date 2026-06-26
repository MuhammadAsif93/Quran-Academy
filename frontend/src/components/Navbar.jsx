import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/quran.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Schedule", to: "/schedule" },
  { label: "Fees", to: "/fees" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
        <img
               src={logo}
               alt="Logo"
               className="navbar__brand-logo"
                          />

          <span className="navbar__brand-text">
          <span className="navbar__brand-title">Binte Hakeem</span>
          <span className="navbar__brand-sub">Online Quran Academy</span>
          </span>
             </Link>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                "navbar__link" + (isActive ? " navbar__link--active" : "")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/enrollment" className="navbar__cta" onClick={closeMenu}>
          Enroll Now
        </Link>

        <button
          className={`navbar__toggle ${isOpen ? "navbar__toggle--open" : ""}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav
        className={`navbar__links navbar__links--mobile ${
          isOpen ? "navbar__links--mobile-open" : ""
        }`}
        aria-label="Mobile"
      >
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              "navbar__link" + (isActive ? " navbar__link--active" : "")
            }
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}
        <Link to="/enrollment" className="navbar__cta navbar__cta--mobile" onClick={closeMenu}>
          Enroll Now
        </Link>
      </nav>
    </header>
  );
}