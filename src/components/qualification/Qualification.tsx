import React, { useState } from "react";

export const Qualification = () => {
  const [qualificationEducation, setQualificationEducation] = useState(true);
  const [qualificationWork, setQualificationWork] = useState(false);

  const showQualificationEducation = () => {
    if (!qualificationEducation) {
      setQualificationEducation(!qualificationEducation);
      setQualificationWork(!qualificationWork);
    }
  };
  const showQualificationWork = () => {
    if (!qualificationWork) {
      setQualificationWork(!qualificationWork);
      setQualificationEducation(!qualificationEducation);
    }
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${
              qualificationEducation && "qualification__active"
            }`}
            data-target="#education"
            onClick={showQualificationEducation}
          >
            <i className="fas fa-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={`qualification__button button--flex ${
              qualificationWork && "qualification__active"
            }`}
            data-target="#work"
            onClick={showQualificationWork}
          >
            <i className="fas fa-briefcase qualification__icon"></i>
            Work
          </div>
        </div>
        <div className="qualification__sections">
          {/* QUALIFICATION CONTENT */}
          <div
            // className="qualification__content qualification__active"
            className={`qualification__content ${
              qualificationEducation && "qualification__active"
            }`}
            data-content
            id="education"
          >
            {/* QUALIFICATION 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  College Degree in Electronic Engineering
                </h3>
                <span className="qualification__subtitle">
                  Popayán, Cauca - Colombia
                </span>

                <div className="qualification__calendar">
                  <i className="far fa-calendar-alt"></i>
                  {" 2012 - 2018"}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* QUALIFICATION 2 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Bootcamp full stack react web y native apps
                </h3>
                <span className="qualification__subtitle">
                  Cluster Creatic - Popayán
                </span>

                <div className="qualification__calendar">
                  <i className="far fa-calendar-alt"></i>
                  {" 2019"}
                </div>
              </div>
            </div>

            {/* QUALIFICATION 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Web application development (stack mern) mission tic
                </h3>
                <span className="qualification__subtitle">
                  University of Antioquia
                </span>

                <div className="qualification__calendar">
                  <i className="far fa-calendar-alt"></i>
                  {" 2021 - 2022"}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* QUALIFICATION 4 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Professional JavaScript course, React JS hands-on course,
                  PostgreSQL course, ECMAScript 6 course
                </h3>
                <span className="qualification__subtitle">Platzi</span>

                <div className="qualification__calendar">
                  <i className="far fa-calendar-alt"></i>
                  {" 2023"}
                </div>
              </div>
            </div>
          </div>

          {/* QUALIFICATION CONTENT 2 */}
          <div
            className={`qualification__content ${
              qualificationWork && "qualification__active"
            }`}
            data-content
            id="work"
          >
            {/* QUALIFICATION 2-1 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Konex Innovation</h3>
                <span className="qualification__subtitle">
                  Full Stack Developer
                </span>

                <div className="qualification__calendar">
                  <i className="fas fa-calendar-alt"></i>
                  {" 2022 - Currently"}
                </div>
              </div>
            </div>

            {/* QUALIFICATION 2-2 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Appsus</h3>
                <span className="qualification__subtitle">
                  Full Stack Developer
                </span>

                <div className="qualification__calendar">
                  <i className="fas fa-calendar-alt"></i>
                  {" 2019 - 2022"}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* QUALIFICATION 3-2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>

              <div>
                <h3 className="qualification__title">TrArtist</h3>
                <span className="qualification__subtitle">
                  Frontend Developer
                </span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
