import React, { useState } from "react";

export const Qualification = () => {
  const [activeTab, setActiveTab] = useState<"education" | "work">("education");

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Formación y experiencia</h2>
      <span className="section__subtitle">Recorrido profesional</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${
              activeTab === "education" ? "qualification__active" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            <i className="fas fa-graduation-cap qualification__icon"></i>
            Formación
          </div>

          <div
            className={`qualification__button button--flex ${
              activeTab === "work" ? "qualification__active" : ""
            }`}
            onClick={() => setActiveTab("work")}
          >
            <i className="fas fa-briefcase qualification__icon"></i>
            Experiencia
          </div>
        </div>

        <div className="qualification__sections">
          {/* ==================== FORMACIÓN ==================== */}
          <div
            className={`qualification__content ${
              activeTab === "education" ? "qualification__active" : ""
            }`}
            data-content
            id="education"
          >
            {/* 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Médica y Cirujana</h3>
                <span className="qualification__subtitle">
                  Universidad del Cauca — Popayán, Colombia
                </span>

                <div className="qualification__calendar">
                  <i className="far fa-calendar-alt"></i>
                  {" 2017 - 2024"}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* 2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Soporte vital avanzado</h3>
                <span className="qualification__subtitle">
                  Universidad del Cauca
                </span>

                <div className="qualification__calendar">
                  <i className="far fa-calendar-alt"></i>
                  {" 2024"}
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Diagnóstico y manejo clínico del Dengue
                </h3>
                <span className="qualification__subtitle">
                  OPS (Organización Panamericana de la Salud)
                </span>

                <div className="qualification__calendar">
                  <i className="far fa-calendar-alt"></i>
                  {" 2024"}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* 4 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Taller Capacidades PAI</h3>
                <span className="qualification__subtitle">
                  ESE Suroccidente
                </span>

                <div className="qualification__calendar">
                  <i className="far fa-calendar-alt"></i>
                  {" 2025"}
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Taller de Emergencias Obstétricas
                </h3>
                <span className="qualification__subtitle">
                  ESE Suroccidente
                </span>

                <div className="qualification__calendar">
                  <i className="far fa-calendar-alt"></i>
                  {" 2025"}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* 6 (último: sin line) */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Atención integral a víctimas de violencia y abuso sexual
                  (enfoque diferencial)
                </h3>
                <span className="qualification__subtitle">
                  Ideas Médicas Avanzadas en Salud
                </span>

                <div className="qualification__calendar">
                  <i className="far fa-calendar-alt"></i>
                  {" 2025"}
                </div>
              </div>
            </div>
          </div>

          {/* ==================== EXPERIENCIA ==================== */}
          <div
            className={`qualification__content ${
              activeTab === "work" ? "qualification__active" : ""
            }`}
            data-content
            id="work"
          >
            {/* 1 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Médica General | Espíritu Santo Cirugía Ambulatoria S.A.S
                </h3>
                <span className="qualification__subtitle">
                  Apoyo clínico, seguimiento y manejo de historias clínicas
                </span>

                <div className="qualification__calendar">
                  <i className="far fa-calendar-alt"></i>
                  {" Enero 2025 - Marzo 2025"}
                </div>

                <ul className="qualification__bullets">
                  <li>
                    Apoyo en la atención clínica de pacientes en consulta
                    especializada.
                  </li>
                  <li>Valoración inicial y seguimiento de pacientes.</li>
                  <li>Solicitud y revisión de ayudas diagnósticas.</li>
                  <li>
                    Registro y actualización de historias clínicas, notas de
                    evolución y contrarreferencias.
                  </li>
                </ul>
              </div>
            </div>

            {/* 2 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Médica General | Equipos Básicos de Salud – ESE Suroccidente
                </h3>
                <span className="qualification__subtitle">
                  APS en territorio, consulta extramural y atención rural
                </span>

                <div className="qualification__calendar">
                  <i className="far fa-calendar-alt"></i>
                  {" Abril 2025 - Julio 2025"}
                </div>

                <ul className="qualification__bullets">
                  <li>
                    Consultas médicas extramurales, visitas domiciliarias y
                    atención en territorio según riesgo.
                  </li>
                  <li>
                    Tamizajes poblacionales, detección temprana de eventos en
                    salud y remisión oportuna.
                  </li>
                  <li>
                    Registro clínico, diligenciamiento de historias clínicas y
                    reporte en sistemas de información.
                  </li>
                  <li>
                    Educación individual, familiar y comunitaria en hábitos de
                    vida saludable y adherencia.
                  </li>
                  <li>
                    Articulación con equipo interdisciplinario y redes de
                    servicios para continuidad de la atención.
                  </li>
                </ul>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* 3 (último) */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Médica General | Equipos Básicos de Salud – ESE Suroccidente
                </h3>
                <span className="qualification__subtitle">
                  Atención en territorio y seguimiento clínico
                </span>

                <div className="qualification__calendar">
                  <i className="far fa-calendar-alt"></i>
                  {" Octubre 2025 - Diciembre 2025"}
                </div>

                <ul className="qualification__bullets">
                  <li>
                    Atención médica en territorio, priorización por riesgo y
                    continuidad del cuidado.
                  </li>
                  <li>
                    Seguimiento a pacientes crónicos y población vulnerable.
                  </li>
                  <li>
                    Educación en salud y fortalecimiento de acciones
                    preventivas.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
