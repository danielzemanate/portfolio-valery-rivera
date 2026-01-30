import React from "react";
import me from "../../../assets/img/valery2.jpg";

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Acerca de mí</h2>
      <span className="section__subtitle">
        Atención médica integral y cercana
      </span>

      <div className="about__container container grid">
        <div className="about__media">
          <img
            src={me}
            alt="Dra. Valery Juliana Rivera López"
            className="about__img"
          />

          <div className="about__quoteCard">
            <i
              className="fas fa-quote-left about__quoteIcon"
              aria-hidden="true"
            ></i>
            <p className="about__quoteText">
              Mi prioridad es ofrecer una atención clara y resolutiva, con
              enfoque humano, prevención y seguimiento oportuno, especialmente
              en contextos rurales y de difícil acceso.
            </p>
          </div>
        </div>

        <div className="about__data">
          <p className="about__description">
            Soy la <strong>Dra. Valery Juliana Rivera López</strong>, médico
            general con experiencia en{" "}
            <strong>Atención Primaria en Salud (APS)</strong> en Colombia,{" "}
            <strong>consulta externa</strong> y{" "}
            <strong>atención de urgencias</strong>. He trabajado en{" "}
            <strong>zonas rurales y de difícil acceso</strong>, brindando
            atención integral a población vulnerable y priorizando la educación
            en salud, la prevención y el manejo clínico oportuno.
          </p>

          <div className="about__highlights">
            <div className="about__highlightItem">
              <i
                className="fas fa-clinic-medical about__highlightIcon"
                aria-hidden="true"
              ></i>
              <div>
                <h3 className="about__highlightTitle">Enfoque en APS</h3>
                <p className="about__highlightText">
                  Promoción, prevención, detección temprana y control de riesgos
                  en salud.
                </p>
              </div>
            </div>

            <div className="about__highlightItem">
              <i
                className="fas fa-house-user about__highlightIcon"
                aria-hidden="true"
              ></i>
              <div>
                <h3 className="about__highlightTitle">Experiencia rural</h3>
                <p className="about__highlightText">
                  Atención médica en comunidades rurales y zonas dispersas con
                  enfoque resolutivo.
                </p>
              </div>
            </div>

            <div className="about__highlightItem">
              <i
                className="fas fa-ambulance about__highlightIcon"
                aria-hidden="true"
              ></i>
              <div>
                <h3 className="about__highlightTitle">
                  Urgencias y consulta externa
                </h3>
                <p className="about__highlightText">
                  Valoración clínica, estabilización inicial y seguimiento según
                  el caso.
                </p>
              </div>
            </div>
          </div>

          <div className="about__info">
            <div>
              <span className="about__info-title">APS</span>
              <span className="about__info-name">
                Atención
                <br />
                Primaria
              </span>
            </div>

            <div>
              <span className="about__info-title">Rural</span>
              <span className="about__info-name">
                Difícil
                <br />
                acceso
              </span>
            </div>

            <div>
              <span className="about__info-title">Popayán</span>
              <span className="about__info-name">Cauca</span>
            </div>
          </div>

          <div className="about__chips">
            <span className="about__chip">Consulta presencial</span>
            <span className="about__chip">Teleconsulta</span>
            <span className="about__chip">Seguimiento clínico</span>
          </div>

          <div className="about__buttons">
            <a
              href="https://wa.me/573113078792?text=Hola,%20quiero%20agendar%20una%20consulta%20médica"
              className="button button--flex"
              target="_blank"
              rel="noreferrer"
            >
              Agendar cita{" "}
              <i
                className="fas fa-calendar-check button__icon"
                aria-hidden="true"
              ></i>
            </a>

            <a
              href="https://drive.google.com/file/d/1XCJRnpEIs61lX8rSf6yoiwReVlkZk8xo/view?usp=sharing"
              className="button button--flex button--white"
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: 10 }}
            >
              Ver hoja de vida
              <i
                className="fas fa-download button__icon"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
