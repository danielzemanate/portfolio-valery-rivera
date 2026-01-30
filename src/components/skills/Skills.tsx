import React, { useState } from "react";
import "../../assets/styles/styles.css";

export const Skills = () => {
  const [flagAreas, setFlagAreas] = useState(true);
  const [flagServicios, setFlagServicios] = useState(false);

  const toggleAreas = () => setFlagAreas((prev) => !prev);
  const toggleServicios = () => setFlagServicios((prev) => !prev);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Experiencia médica</h2>
      <span className="section__subtitle">
        Atención integral en contextos urbanos y rurales
      </span>

      <div className="skills__container container grid">
        {/* ÁREAS DE ATENCIÓN */}
        <div>
          <div
            className={`skills__content ${
              flagAreas ? "skills__open" : "skills__close"
            }`}
          >
            <div className="skills__header" onClick={toggleAreas}>
              <i className="fas fa-user-md skills__icon"></i>

              <div>
                <h3 className="skills__title">Áreas de atención</h3>
                <span className="skills__subtitle">
                  Atención Primaria en Salud (APS)
                </span>
              </div>

              <i className="fas fa-angle-down skills__arrow"></i>
            </div>

            <ul className="skills__list grid">
              <li className="skills__data">
                <i className="fas fa-notes-medical skills__icon"></i>
                <div>
                  <h3 className="skills__name">Consulta externa</h3>
                  <span className="skills__level">
                    Valoración integral, diagnóstico clínico y plan de manejo.
                  </span>
                </div>
              </li>

              <li className="skills__data">
                <i className="fas fa-ambulance skills__icon"></i>
                <div>
                  <h3 className="skills__name">Atención de urgencias</h3>
                  <span className="skills__level">
                    Manejo inicial de urgencias médicas y estabilización.
                  </span>
                </div>
              </li>

              <li className="skills__data">
                <i className="fas fa-clinic-medical skills__icon"></i>
                <div>
                  <h3 className="skills__name">
                    Atención primaria en salud (APS)
                  </h3>
                  <span className="skills__level">
                    Promoción, prevención y control de enfermedades prevalentes.
                  </span>
                </div>
              </li>

              <li className="skills__data">
                <i className="fas fa-house-user skills__icon"></i>
                <div>
                  <h3 className="skills__name">
                    Atención rural y difícil acceso
                  </h3>
                  <span className="skills__level">
                    Atención médica en comunidades rurales y zonas dispersas.
                  </span>
                </div>
              </li>

              <li className="skills__data">
                <i className="fas fa-users skills__icon"></i>
                <div>
                  <h3 className="skills__name">
                    Atención a población vulnerable
                  </h3>
                  <span className="skills__level">
                    Niños, adultos mayores, gestantes y pacientes crónicos.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* SERVICIOS Y COMPETENCIAS */}
        <div>
          <div
            className={`skills__content ${
              flagServicios ? "skills__open" : "skills__close"
            }`}
          >
            <div className="skills__header" onClick={toggleServicios}>
              <i className="fas fa-stethoscope skills__icon"></i>

              <div>
                <h3 className="skills__title">Servicios y competencias</h3>
                <span className="skills__subtitle">
                  Enfoque humano y resolutivo
                </span>
              </div>

              <i className="fas fa-angle-down skills__arrow"></i>
            </div>

            <ul className="skills__list grid">
              <li className="skills__data">
                <i className="fas fa-heartbeat skills__icon"></i>
                <div>
                  <h3 className="skills__name">
                    Control de enfermedades crónicas
                  </h3>
                  <span className="skills__level">
                    Hipertensión, diabetes y seguimiento continuo.
                  </span>
                </div>
              </li>

              <li className="skills__data">
                <i className="fas fa-syringe skills__icon"></i>
                <div>
                  <h3 className="skills__name">
                    Programas de promoción y prevención
                  </h3>
                  <span className="skills__level">
                    Vacunación, tamizajes y educación en salud.
                  </span>
                </div>
              </li>

              <li className="skills__data">
                <i className="fas fa-file-medical skills__icon"></i>
                <div>
                  <h3 className="skills__name">
                    Certificados y conceptos médicos
                  </h3>
                  <span className="skills__level">
                    Incapacidades, certificados y conceptos clínicos.
                  </span>
                </div>
              </li>

              <li className="skills__data">
                <i className="fas fa-laptop-medical skills__icon"></i>
                <div>
                  <h3 className="skills__name">
                    Teleconsulta y orientación médica
                  </h3>
                  <span className="skills__level">
                    Asesoría médica virtual y seguimiento de pacientes.
                  </span>
                </div>
              </li>

              <li className="skills__data">
                <i className="fas fa-user-check skills__icon"></i>
                <div>
                  <h3 className="skills__name">
                    Remisión y referencia oportuna
                  </h3>
                  <span className="skills__level">
                    Derivación adecuada a especialistas cuando se requiere.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
