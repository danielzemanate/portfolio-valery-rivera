import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          {/* IDENTIDAD */}
          <div>
            <h1 className="footer__title">Dra. Valery Juliana Rivera López</h1>
            <span className="footer__subtitle">Médico General</span>

            <p className="footer__description">
              Atención médica integral, humana y confiable en Popayán, Cauca.
            </p>
          </div>

          {/* LINKS */}
          <ul className="footer__links">
            <li>
              <a href="#home" className="footer__link">
                Inicio
              </a>
            </li>
            <li>
              <a href="#services" className="footer__link">
                Servicios
              </a>
            </li>
            <li>
              <a href="#about" className="footer__link">
                Acerca de mí
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Agendar cita
              </a>
            </li>
          </ul>

          {/* REDES / CONTACTO */}
          <div className="footer__socials">
            <a
              href="https://wa.me/573113078792?text=Hola,%20quiero%20agendar%20una%20consulta%20médica"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>

            <a
              href="https://www.instagram.com/valeryrivera_/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="mailto:valeryju1020@gmail.com"
              className="footer__social"
              aria-label="Correo"
            >
              <i className="far fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* LEGAL */}
        <p className="footer__copy">
          © {new Date().getFullYear()} Dra. Valery Juliana Rivera López · Médico
          General · Popayán, Cauca
          <br />
          La información suministrada no reemplaza una consulta médica
          presencial.
        </p>
        <p className="footer__dev">
          Desarrollo y tecnología:{" "}
          <a
            href="https://danielzemanate.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ing. A. Daniel Zemanate T.
          </a>
        </p>
      </div>
    </footer>
  );
};
