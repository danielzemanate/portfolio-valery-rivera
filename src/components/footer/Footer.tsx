import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Daniel Zemanate</h1>
            <span className="footer__subtitle">Full Stack Developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact Me
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/andersondanielzemanate/"
              target="_blank"
              className="footer__social"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-sm"></i>
            </a>
            <a
              href="https://www.instagram.com/danielzemanate/"
              target="_blank"
              className="footer__social"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-sm"></i>
            </a>
            <a
              href="https://github.com/danielzemanate"
              target="_blank"
              className="footer__social"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-sm"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">DanielZemanate. All rights reserved</p>
      </div>
    </footer>
  );
};
