import React, { useState } from "react";
import "../../assets/styles/styles.css";

export const Skills = () => {
  const [flagFrontend, setFlagFrontend] = useState(false);
  const [flagBackend, setFlagBackend] = useState(false);

  const showFrontendSkills = () => {
    setFlagFrontend(!flagFrontend);
  };
  const showBackendSkills = () => {
    setFlagBackend(!flagBackend);
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          {/* SKILLS 1 */}
          <div
            className={`skills__content ${
              flagFrontend ? "skills__open" : "skills__close"
            }`}
          >
            <div className="skills__header" onClick={showFrontendSkills}>
              <i className="fas fa-laptop-code fa-xs skills__icon"></i>

              <div>
                <h1 className="skills__title">Frontend developer</h1>
                <span className="skills__subtitle">4 year experience</span>
              </div>
              <i className="fas fa-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React (Js/Ts)</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">TypeScript</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Tailwind</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__mongoDb"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">AWS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* SKILLS 2 */}
          <div
            className={`skills__content ${
              flagBackend ? "skills__open" : "skills__close"
            }`}
            style={{ marginLeft: 12 }}
          >
            <div className="skills__header" onClick={showBackendSkills}>
              <i className="fas fa-database fa-xs skills__icon"></i>

              <div>
                <h1 className="skills__title">Backend developer</h1>
                <span className="skills__subtitle">4 years experience</span>
              </div>
              <i className="fas fa-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Node JS</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Express</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">PostgreSQL</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">SQL</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">TypeORM</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Mongo DB</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__mongoDb"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
