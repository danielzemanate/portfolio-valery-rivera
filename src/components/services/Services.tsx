import React, { useState } from "react";

export const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">Let's Talk Business</span>
      <div className="services__container container grid">
        <FrontendSection />
        <BackendSection />
        <UiUxSection />
      </div>
    </section>
  );
};

// FRONTEND SECTION
const FrontendSection = () => {
  const [flagFronted, setFlagFronted] = useState(false);
  const openModal = () => {
    setFlagFronted(!flagFronted);
  };
  return (
    <>
      <div className="services__content">
        <i className="fas fa-code services__icon"></i>
        <h3 className="services__title">
          Frontend <br />
          Developer
        </h3>

        <span
          className="button button--flex button--small button--link services__button"
          onClick={openModal}
        >
          View More
          <i className="fas fa-arrow-right button__icon"></i>
        </span>

        <div className={`services__modal ${flagFronted && "active-modal"}`}>
          <div className="services__modal-content">
            <h4 className="services__modal-title">
              Frontend <br />
              Developer
            </h4>
            <i
              className="fas fa-times services__modal-close"
              onClick={openModal}
            ></i>

            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  User-Centric Interfaces: Crafting user interfaces that
                  prioritize user experience, making sure they are intuitive and
                  engaging.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  Design Implementation: Translating design concepts into
                  pixel-perfect HTML, CSS, and JavaScript code, ensuring the
                  visual fidelity matches the original designs.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  Responsive Design: Developing layouts that adapt seamlessly to
                  different devices and screen sizes, guaranteeing a consistent
                  experience across platforms.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  Performance Optimization: Enhancing loading times and overall
                  site performance through code optimization and efficient
                  resource management.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  Interactive Elements: Incorporating dynamic elements and
                  animations to create engaging user interactions and enhance
                  the visual appeal.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  Thorough Testing: Rigorously testing your projects across
                  various browsers and devices to identify and address any
                  compatibility issues.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  Maintenance and Updates: Providing ongoing support, addressing
                  bug fixes, and implementing updates to keep the frontend
                  components current and functional.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  Web Accessibility: Ensuring your projects are accessible to
                  all users, including those with disabilities, by following
                  accessibility guidelines and utilizing semantic HTML.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

// BACKEND SECTION
const BackendSection = () => {
  const [flagBackend, setFlagBackend] = useState(false);
  const openModal = () => {
    setFlagBackend(!flagBackend);
  };
  return (
    <>
      <div className="services__content">
        <i className="fas fa-database services__icon"></i>
        <h3 className="services__title">
          Backend <br />
          Developer
        </h3>

        <span
          className="button button--flex button--small button--link services__button"
          onClick={openModal}
        >
          View More
          <i className="fas fa-arrow-right button__icon"></i>
        </span>

        <div className={`services__modal ${flagBackend && "active-modal"}`}>
          <div className="services__modal-content">
            <h4 className="services__modal-title">
              Backend <br />
              Developer
            </h4>
            <i
              className="fas fa-times services__modal-close"
              onClick={openModal}
            ></i>

            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  API Development: Creating Application Programming Interfaces
                  (APIs) that allow different parts of an application to
                  communicate with each other.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  Database Management: Designing, implementing, and optimizing
                  databases to store and retrieve data efficiently.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  Business Logic: Implementing the logic behind application
                  functionalities, ensuring that actions and operations are
                  carried out properly and consistently.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  Authentication and Security: Implementing authentication and
                  authorization systems to protect data and control access to
                  different parts of the application.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  Performance Optimization: Ensuring that the application runs
                  efficiently by improving response times and reducing server
                  load.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  Scalability Implementation: Designing the backend architecture
                  to handle an increase in user volume and workload seamlessly.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  Testing: Developing unit and integration tests to ensure
                  quality and functionality of the application.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>
                  Documentation: Creating technical documentation to help other
                  team members understand and collaborate effectively on the
                  development.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

// UI/UX SECTION
const UiUxSection = () => {
  const [flagUi, setFlagUi] = useState(false);
  const openModal = () => {
    setFlagUi(!flagUi);
  };
  return (
    <>
      <div className="services__content">
        <i className="far fa-window-restore services__icon"></i>
        <h3 className="services__title">
          Ui/Ux <br />
          Designer
        </h3>

        <span
          className="button button--flex button--small button--link services__button"
          onClick={openModal}
        >
          View More
          <i className="fas fa-arrow-right button__icon"></i>
        </span>

        <div className={`services__modal ${flagUi && "active-modal"}`}>
          <div className="services__modal-content">
            <h4 className="services__modal-title">
              Ui/Ux <br />
              Designer
            </h4>
            <i
              className="fas fa-times services__modal-close"
              onClick={openModal}
            ></i>

            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>I design the user interface.</p>
              </li>

              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>I create your design system.</p>
              </li>
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>I create ux element interactions.</p>
              </li>
              <li className="services__modal-service">
                <i className="far fa-check-circle services__modal-icon"></i>
                <p>With an attractive, peculiar and original view.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
