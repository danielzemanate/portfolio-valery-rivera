import React from "react";
import "../../assets/styles/styles.css";

export const Header = () => {
  return (
    <div>
      {/* HEADER */}
      <header className="header" id="header">
        <nav className="nav container">
          <i className="fas fa-code home__social-icon"/>
          <a
            href="https://danielzemanate.netlify.app/"
            className="nav__logo"
            style={{ fontSize: 17 }}
          >
            Daniel Zemanate
          </a>

          <article className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="uil uil-estate nav__icon"></i> Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i> About
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="uil uil-briefcase-alt nav__icon"></i> Services
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i> Portfolio
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-telegram-alt nav__icon"></i> Contact
                </a>
              </li>
            </ul>
            <i className="uil uil-times  nav__close" id="nav-close"></i>
          </article>

          <article className="nav__btns">
            {/* Theme change button */}
            <i className="uil uil-moon change-theme" id="theme-button"></i>

            <article className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps"></i>
            </article>
          </article>
        </nav>
      </header>
      {/* Your other components/content can go here */}
    </div>
  );
};
