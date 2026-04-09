import { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg"
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* LOGO */}
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Church Logo"/>
          <span>EGMI</span>
        </Link>
      </div>

       {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* LINKS */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
        </li>

        <li className="dropdown">
          <button
            type="button"
            className="dropdown-title"
            onClick={() => setAboutOpen(!aboutOpen)}
          >
            About
          </button>

          <ul className={`dropdown-menu ${aboutOpen ? "show" : ""}`}>
            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/pastor" onClick={closeMenu}>
                Our Pastor
              </NavLink>
            </li>
            <li>
              <NavLink to="/ministry-profile" onClick={closeMenu}>
                Ministry Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/statement-of-faith" onClick={closeMenu}>
                Statement of Faith
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/watch" onClick={closeMenu}>
            Watch Live
          </NavLink>
        </li>

        <li>
          <NavLink to="/sermons" onClick={closeMenu}>
            Sermons
          </NavLink>
        </li>

        <li>
          <NavLink to="/events" onClick={closeMenu}>
            Events
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/give" onClick={closeMenu} className="give-link">
            Give
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;