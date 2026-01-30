import React from "react";
import me from "../../../assets/img/valery.jpg";

export const Home = () => {
  const whatsappUrl =
    "https://wa.me/573113078792?text=Hola,%20quiero%20agendar%20una%20consulta%20médica";

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          {/* SOCIAL */}
          <div className="home__social">
            <a
              href="https://www.instagram.com/valeryrivera_/"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp fa-lg"></i>
            </a>

            <a
              href="mailto:valeryju1020@gmail.com"
              className="home__social-icon"
              aria-label="Correo"
            >
              <i className="far fa-envelope fa-lg"></i>
            </a>
          </div>

          {/* IMAGEN */}
          <div className="home__img">
            <img
              src={me}
              alt="Dra. Valery Juliana Rivera López"
              className="egg_image"
              style={{
                objectFit: "cover",
                width: "240px",
                height: "320px",
              }}
            />
          </div>

          {/* TEXTO */}
          <div className="home__data">
            <h1 className="home__title">Dra. Valery Juliana Rivera López</h1>

            <h3 className="home__subtitle">
              Médico General · APS · Urgencias · Atención rural
            </h3>

            <p className="home__description">
              Atención médica clara, resolutiva y basada en la confianza.
              Experiencia en consulta externa, urgencias y Atención Primaria en
              Salud (APS), incluyendo trabajo en zonas rurales y de difícil
              acceso.
            </p>

            <div className="home__clinicBadges">
              <span className="home__badge">APS (Atención Primaria)</span>
              <span className="home__badge">Consulta externa</span>
              <span className="home__badge">Urgencias</span>
              <span className="home__badge">Rural y difícil acceso</span>
            </div>

            <div className="home__cta">
              <a
                href={whatsappUrl}
                className="button button--flex"
                target="_blank"
                rel="noreferrer"
              >
                Agendar cita <i className="fab fa-whatsapp button__icon"></i>
              </a>

              <a href="#services" className="button button--flex button--white">
                Ver servicios{" "}
                <i className="fas fa-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* SCROLL */}
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="fas fa-mouse fa-xs home__scroll-mouse"></i>
            <span className="home__scroll-name" style={{ marginLeft: 5 }}>
              Desliza hacia abajo
            </span>
            <i className="fas fa-arrow-down fa-xs home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
