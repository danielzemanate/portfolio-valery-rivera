import React, { useEffect, useState } from "react";
import "../../assets/styles/styles.css";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const headerClass = `header ${scrolled ? "scroll-header" : ""}`;

  const handleClickShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      {/* HEADER */}
      <header className={headerClass} id="header">
        <nav className="nav container">
          <i className="fas fa-code home__social-icon" />
          <a
            href="https://danielzemanate.netlify.app/"
            className="nav__logo"
            style={{ fontSize: 17 }}
          >
            Daniel Zemanate
          </a>

          <article
            className={`nav__menu ${showMenu && "show-menu"}`}
            id="nav-menu"
          >
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="fas fa-home nav__icon"></i> Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="far fa-user nav__icon"></i> About
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="far fa-file-code nav__icon"></i> Skills
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="fas fa-briefcase nav__icon"></i> Services
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="fas fa-suitcase nav__icon"></i> Portfolio
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="fab fa-telegram-plane nav__icon"></i> Contact
                </a>
              </li>
            </ul>
            <i
              className="fas fa-times nav__close"
              id="nav-close"
              onClick={handleClickShowMenu}
            ></i>
          </article>

          {/* <article className="nav__btns"> */}
          {/* Theme change button */}
          {/* <i className="far fa-moon fa-xs change-theme" id="theme-button"></i> */}
          {/* </article> */}
          <article
            className="nav__toggle"
            id="nav-toggle"
            onClick={handleClickShowMenu}
          >
            <i className="fas fa-bars"></i>
          </article>
        </nav>
      </header>
    </div>
  );
};
