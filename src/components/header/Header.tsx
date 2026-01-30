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
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 500; // Adjust for header height

      sections.forEach((section: any, index: any) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveLink(index);
        }
      });
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

  const [activeLink, setActiveLink] = useState(0); // Initialize the active link index

  const handleLinkClick = (index: any) => {
    setActiveLink(index); // Update the active link index when a link is clicked
  };

  const navItems = [
    { text: "Inicio", icon: "fas fa-home", target: "home" },
    { text: "Acerca de Mi", icon: "far fa-user", target: "about" },
    { text: "Habilidades", icon: "far fa-file-code", target: "skills" },
    { text: "Servicios", icon: "fas fa-briefcase", target: "services" },
    // { text: "Portfolio", icon: "fas fa-suitcase", target: "portfolio" },
    { text: "Contacto", icon: "fab fa-telegram-plane", target: "contact" },
  ];

  return (
    <div>
      {/* HEADER */}
      <header className={headerClass} id="header">
        <nav className="nav container">
          <i className="fas fa-user-md home__social-icon" />
          <a
            href="https://dravaleryrivera.netlify.app/"
            className="nav__logo"
            style={{ fontSize: 17 }}
          >
            Dra. Valery J. Rivera L.
          </a>

          <article
            className={`nav__menu ${showMenu && "show-menu"}`}
            id="nav-menu"
          >
            <ul className="nav__list grid">
              {navItems.map((item, index) => (
                <li className="nav__item" key={index}>
                  <a
                    href={`#${item.target}`}
                    className={`nav__link ${
                      activeLink === index ? "active-link" : ""
                    }`}
                    onClick={() => handleLinkClick(index)}
                  >
                    <i className={`${item.icon} nav__icon`}></i> {item.text}
                  </a>
                </li>
              ))}
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
