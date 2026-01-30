import React, { useState } from "react";

export const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Servicios</h2>
      <span className="section__subtitle">
        Atención médica profesional, humana y resolutiva
      </span>

      <div className="services__container container grid">
        <ConsultaPresencial />
        <Urgencias />
        <APS_Rural />
      </div>
    </section>
  );
};

/* ==================== 1) CONSULTA PRESENCIAL ==================== */
const ConsultaPresencial = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className="services__content">
      <i className="fas fa-clinic-medical services__icon"></i>

      <h3 className="services__title">
        Consulta <br />
        presencial
      </h3>

      <span
        className="button button--flex button--small button--link services__button"
        onClick={toggle}
      >
        Ver más
        <i className="fas fa-arrow-right button__icon"></i>
      </span>

      <div className={`services__modal ${open ? "active-modal" : ""}`}>
        <div className="services__modal-content">
          <h4 className="services__modal-title">
            Consulta <br />
            presencial
          </h4>

          <i
            className="fas fa-times services__modal-close"
            onClick={toggle}
          ></i>

          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Valoración clínica completa: motivo de consulta, antecedentes,
                examen físico y orientación diagnóstica.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Manejo de síntomas frecuentes: fiebre, dolor, infecciones
                respiratorias y gastrointestinales, alergias, entre otros.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Solicitud e interpretación de ayudas diagnósticas y definición
                de conducta clínica según resultados.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Control y seguimiento: evolución clínica, ajustes de manejo y
                plan de cuidado personalizado.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Educación al paciente y familia: señales de alarma, adherencia a
                tratamientos y autocuidado.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Remisión oportuna a especialista cuando el caso lo requiere,
                asegurando continuidad de la atención.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

/* ==================== 2) URGENCIAS ==================== */
const Urgencias = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className="services__content">
      <i className="fas fa-ambulance services__icon"></i>

      <h3 className="services__title">
        Atención <br />
        de urgencias
      </h3>

      <span
        className="button button--flex button--small button--link services__button"
        onClick={toggle}
      >
        Ver más
        <i className="fas fa-arrow-right button__icon"></i>
      </span>

      <div className={`services__modal ${open ? "active-modal" : ""}`}>
        <div className="services__modal-content">
          <h4 className="services__modal-title">
            Atención <br />
            de urgencias
          </h4>

          <i
            className="fas fa-times services__modal-close"
            onClick={toggle}
          ></i>

          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Triage clínico y priorización según gravedad, con enfoque
                resolutivo y seguro.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Estabilización inicial y manejo de síntomas agudos: dolor
                intenso, fiebre persistente, deshidratación, crisis
                respiratoria, entre otros.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Identificación de signos de alarma y decisión de remisión
                inmediata cuando se requiere mayor complejidad.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Valoración integral y conducta médica basada en guías clínicas y
                criterio profesional.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Orientación clara al paciente: indicaciones, cuidados en casa y
                seguimiento recomendado.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

/* ==================== 3) APS / RURAL ==================== */
const APS_Rural = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className="services__content">
      <i className="fas fa-house-user services__icon"></i>

      <h3 className="services__title">
        APS y <br />
        atención rural
      </h3>

      <span
        className="button button--flex button--small button--link services__button"
        onClick={toggle}
      >
        Ver más
        <i className="fas fa-arrow-right button__icon"></i>
      </span>

      <div className={`services__modal ${open ? "active-modal" : ""}`}>
        <div className="services__modal-content">
          <h4 className="services__modal-title">
            APS y <br />
            atención rural
          </h4>

          <i
            className="fas fa-times services__modal-close"
            onClick={toggle}
          ></i>

          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Consulta extramural y atención en territorio según riesgo,
                priorizando población vulnerable.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Visitas domiciliarias: seguimiento clínico, adherencia a
                tratamiento y educación en salud.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Tamizajes poblacionales, detección temprana y control de riesgos
                en salud.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Manejo y seguimiento de enfermedades crónicas: hipertensión,
                diabetes y otras condiciones prevalentes.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Articulación con equipo interdisciplinario y redes de servicios
                para continuidad y remisión oportuna.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="far fa-check-circle services__modal-icon"></i>
              <p>
                Registro clínico e informes en sistemas de información según
                lineamientos institucionales.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
