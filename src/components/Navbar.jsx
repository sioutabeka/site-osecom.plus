import { useState } from "react";
import logo from "../assets/logo-osecom.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? "navbar--open" : ""}`}>

      <div className="navbar__top">
        <a href="#" className="navbar__logo">
          <img src={logo} alt="Logo OseCom Freelance Siouta" />
        </a>

        <button
          className="navbar__burger"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={toggleMenu}
        >
          {isOpen ? "×" : "☰"}
        </button>

        {/* MENU DESKTOP */}
        <div className="navbar__menu-container">
          <a href="#" className="navbar__menu-link">
            <span>Shop</span>
            <span className="navbar__arrow">⌄</span>
          </a>

          <a href="#" className="navbar__menu-link">
            <span>Portfolio</span>
            <span className="navbar__arrow">⌄</span>
          </a>

          <a href="#" className="navbar__menu-link">
            <span>About</span>
          </a>

          <a href="#" className="navbar__menu-link">
            <span>Work With Me</span>
          </a>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`navbar__mobile-menu ${
          isOpen ? "navbar__mobile-menu--open" : ""
        }`}
      >
        <a href="#" className="navbar__mobile-link" onClick={closeMenu}>
          <span>Shop</span>
          <span className="navbar__arrow">⌄</span>
        </a>

        <a href="#" className="navbar__mobile-link" onClick={closeMenu}>
          <span>Portfolio</span>
          <span className="navbar__arrow">⌄</span>
        </a>

        <a href="#" className="navbar__mobile-link" onClick={closeMenu}>
          <span>About</span>
        </a>

        <a href="#" className="navbar__mobile-link" onClick={closeMenu}>
          <span>Work With Me</span>
        </a>
      </div>

    </nav>
  );
}

export default Navbar;